var express = require('express')
var http = require('http');
var app = express();
var path = require('path')

app.set('port', 3000)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

app.all('*', function (req, res) {
    res.render('index',
        {
            title: 'Page Title',
            msg: 'Welcome to the Practical Node.js!'
        }
    )
})

http.createServer(app).listen(
    app.get('port'),
    function () {
        console.log('Express.js server listening on port ' + app.get('port'))
    }
)