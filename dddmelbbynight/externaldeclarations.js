var foo = $('something');
var http = require("http");
var server = http.createServer(function (req, res) {
    res.write('hey');
    res.end();
});
server.listen(80);
