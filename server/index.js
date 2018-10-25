const koa = require('koa');
var app = new koa;
//const cors = require('koa-cors');
const parser = require('koa-bodyparser')();
const router = require('koa-router')();
//router.post('/reg',async(ctx)=>{
//	
//          ctx.body = {
//              code: 200,
//              token: '登录成功了哟'
//          };
//        })
router.post('/reg', (ctx, next) => {
	var name = ctx.request.body;
	ctx.body = {
	  	code: 2000,
	  	msg:'注册成功'
	}
})
app.use(parser);
app.use(router.routes());

app.listen(3000);
//class Server {
//	constructor(){
//		this.app = new koa();
//		this.app.use(cors({
//		    origin: function (ctx) {
//		        return "*"; // 允许来自所有域名请求
//		    },
//		    exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//		    maxAge: 5,
//		    credentials: true,
//		    allowMethods: ['GET', 'POST', 'DELETE'],
//		    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
//		}));
//		this.app.use(parser);
//		this.app.use(router.routes());
//	}
//	strat(){
//		this.app.listen(8081)
//		console.log('Server run in 8081');
//	}
//}

//let app = new Server;

//app.strat();
