var mysql = require('mysql');
var pool = mysql.createPool({
    host: 'qdm107873695.my3w.com',
    port: 3306,
    database: 'qdm107873695_db',
    user: 'qdm107873695',
    password: 'sunshine'
})

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release();
                })
            }
        })
    })
}

// 注册用户
let insertData = (value) => {
    let _sql = "insert into koa_user set name=?;"
    return query(_sql, value)
}

// 查询所有用户
let findAllUser = () => {
    let _sql = "select * from koa_user";
    return query(_sql)
}

// 新建商品
let insertGoods = (value) => {
    let _sql = "insert into koa_goods set gname=?,gstock=?,gprice=?";
    return query(_sql, value)
}

// 获取所有商品
let findAllGoods = () =>{
    let _sql = "select * from koa_goods";
    return query(_sql);
}
module.exports = {
    query,
    insertData,
    findAllUser,
    insertGoods,
    findAllGoods
}