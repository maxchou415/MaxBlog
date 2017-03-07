const router = require('koa-router')()

const article = require('../models/articleSchema')

router.get('/', async (ctx, next) => {
  await ctx.render('dashboard/index',{
  })
})

router.get('/article/new', async (ctx, next) => {
  await ctx.render('dashboard/article/new',{

  })
})

module.exports = router
