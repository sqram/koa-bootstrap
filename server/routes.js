import nunjucks from 'nunjucks'

var routes = {}


routes.home = ctx  => {
  var spfdata = {
    title : 'home page',
    body : {
      content: render(ctx, 'spf', {}, 'home')
    }
  }
  ctx.body = ctx.request.query.spf ? spfdata : render(ctx, 'full')
}


routes.about = ctx  => {
  var spfdata = {
    title : 'about page',
    body : {
      content: render(ctx, 'spf', {}, 'about')
    }
  }
  ctx.body = ctx.request.query.spf ? spfdata : render(ctx, 'full')
}



/**
 * Function to render a template in views/
 *
 * @param {objec} ctx
 *  koa ctx object
 *
 * @param {bool} full
 *  'full page render'. Pass 'false' if its an spf render
 *
 * @param {object} templatedata
 *  data to pass to templating engine
 *
 * @param {string} template
 *  specify a template to render. by default it'll try to grab it from pathbame
 *  So if user is in tabbit.com/about, it'll try to use use about.html
 *  otherwise, load the template passed (should be a filename in views/)
 */

function render (ctx, type = 'full', templatedata = {}, template = null) {
  if (!template)
    template = ctx.request.path == '/' ? 'home' : ctx.request.path.slice(1)
  return nunjucks.render(`${__dirname}/views/${template}.html`, {type: type, ...templatedata })
}


module.exports = routes