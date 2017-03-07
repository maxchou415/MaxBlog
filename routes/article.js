const router = require('koa-router')()

const article = require('../models/articleSchema')

router.get('/', async (ctx, next) => {
  ctx.body = 'this a users response!'
  let test = await article.find({})
})

module.exports = router
