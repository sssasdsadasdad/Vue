const router = require('koa-router')();
//const router = new Router();
router.post('/reg',async(ctx)=>{
	
            ctx.body = {
                code: 200,
                token: '登录成功了哟'
            };
          })
//          router.get('/hello/:name', async (ctx, next) => {
//var name = ctx.params.name;
//ctx.response.body = `<h1>${ctx.path}</h1>`
//})
app.use(router.routes());
        
//  let user = {
//      username: ctx.request.body.account,
//      password: sha1(ctx.request.body.checkPass)  //sha1加密
//  };
//  await api.createUser(user)
//      .then(() => {})
//      .catch(err => {
//          // 服务器发生错误（用户名可能重复）
//          ctx.body = {
//              code: -200,
//              message: '数据库错误'
//          };
//      })
});

module.exports = router