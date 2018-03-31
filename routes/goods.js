const router = require('koa-router')()
const mysql = require('../mysql.js')

router.prefix('/goods')

// let user = {
//   name: 'wpl'
// }
// await mysql.insertData([user.name])

router.get('/', async (ctx, next) => {
  let goodsList;
  await mysql.findAllGoods().then(res => {
    goodsList = res;
  });

  await ctx.render('goods', {
    title: 'Hello Koa 2!',
    goodsList: goodsList
  })
})

router.get('/new', async (ctx, next) => {
  await ctx.render('goodsnew', {
    title: 'Hello Koa 2!'
  })
})

router.post('/create', async (ctx, next) => {
  let gname = ctx.request.body.gname,
    gstock = ctx.request.body.gstock,
    gprice = ctx.request.body.gprice;
  await mysql.insertGoods([gname, gstock, gprice])
    .then(() => {
      ctx.body = true
    }).catch(() => {
      ctx.body = false
    })
})

module.exports = router