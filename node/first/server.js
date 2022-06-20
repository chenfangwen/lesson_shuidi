var http = require("http");
var url = require("url");
const obj = require('./str');
function start(route) {
    http.createServer(function(request, response){
        var pathname = url.parse(request.url).pathname;
        // console.log(pathname)
        // response.writeHead(200,{"Content-Type":"text/plain"});
        if (pathname == "/favicon.ico") {
            return;
        }
        route(pathname);
        if (pathname === '/name') {
            response.end(`<div>
                name: ${obj.name}
            </div>
            `);
        }
        else {
            response.end('index')
        }
    }).listen(8888);
}

exports.start = start;