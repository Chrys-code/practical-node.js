var express = require('express')
var http = require('http');
var app = express();

app.set('port', 3000)

const server = http.createServer(app)
const boot = function () {
    server.listen(app.get('port'), function () {
        console.info(`Express server listening on port ${app.get('port')}`)
    })
}
const shutdown = function () {
    server.close(process.exit)
}
if (require.main === module) {
    boot()
} else {
    console.info('Running app as a module')
    exports.boot = boot
    exports.shutdown = shutdown
    exports.port = app.get('port')
}