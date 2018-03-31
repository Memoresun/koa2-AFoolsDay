const router = require('koa-router')()
const mysql = require('../mysql.js');

router.prefix('/users')

router.get('/', async (ctx, next) => {
  let users;
  await mysql.findAllUser().then(res => {
    console.log(res);
    users = res;
  })

  await ctx.render('users', {
    users: users
  })
})

router.get('/bar', function (ctx, next) {
  ctx.body = 'this is a users/bar response'
})

module.exports = router