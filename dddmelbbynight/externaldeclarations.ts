var foo = $('something');























































import * as http from "http";
var server = http.createServer((req, res) => {
    res.write('hey');
    res.end();
});
server.listen(80);