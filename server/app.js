import Koa      from 'koa'                // koa server
import cors     from 'kcors'              // cross origin
import send     from 'koa-send'           // static files
import krouter  from 'koa-router'         // routing
import routes   from './routes'           // my routes handler
import http     from 'http'

const app         = new Koa()
const router      = krouter()
const static_root = __dirname + '/../public/'

router.get(/css|js|img|assets/, ctx => send(ctx, ctx.path, { root: static_root }))

router.get('/', ctx => routes.home(ctx))
router.get('/about', ctx => routes.about(ctx))



app
  .use(router.routes())
  .use(router.allowedMethods())
  .listen(3001)
  //

//var server = http.createServer(app)

//server.listen(3001)


export default app
