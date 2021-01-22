const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const defaultController = require('./controllers/defaultPage');
const phishingRoutes  = require('./routes/phishing');


const expressFunction = express();

//this tells the express and the template engine where to find the htmls and pugs and handlebars..
expressFunction.set('views', path.join(__dirname, 'views'));
expressFunction.engine('html', require('ejs').renderFile);
expressFunction.set('view engine', 'html');

//use allows us to add middleware functions

//a request-body-parser(mostly html requests)
//this will parse body-section of the request and call next
//so that control goes to my middleware functions
//extended field says if the body parser should be able to parse non-default features
expressFunction.use(bodyParser.urlencoded({extended: false}));

//this function serves some file statically, meaning
//the file isn't served by the express middleware, rather it is served 
//by the file system itself
//since it is served by the file system(not by url), the full path is required
expressFunction.use(express.static(path.join(__dirname, 'public')));

expressFunction.use(phishingRoutes);
expressFunction.use("/", defaultController.notFound);

const server = http.createServer(expressFunction);
server.listen(port=1234, hostname="0.0.0.0");

