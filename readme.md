Koa2 + Preact + SPF
===================

My barebones setup. This set up is for server-side rendered pages.  
But navigating through pages is not a full render - SPF will only render what you specify.

It also uses preact.js for js components (ie, the navbar)  
and so there's also a pubsub.js that i use for component communication.

###### for dev:  `$ npm start` and go to http://localhost:3001
###### for prod: `$ npm run build`  

public assets will be in the _public_ folder

##### powered by
* Koa2 - the node server
* Preact - small version of React
* SPF - Youtube's SPF for fragmented page sections
 
##### build tools:
* Gulp
  * for livereload (+ nodemon restart) and preprocessing css
* Webpack
  * Everything js (splitting, bundling. note: uglifying done on gulp)
* Nodemon
  * For restarting the server on file changes



