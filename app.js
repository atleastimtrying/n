var connect = require("connect");
var app = connect().use(connect.static('public')).listen(process.env.PORT || 8080);