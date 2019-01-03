var net = require('net');
var fs = require('fs');
require('dotenv').config()
const db = require('./models/connection')
const { template } = require('./modules/template');
// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//     host: process.env.DB_HOST,
//     username: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_DATABASE,
// });
// connection.connect();

var server = net.createServer(function(c) {
    console.log('client connected: ' + c.remoteAddress +":"+ c.remotePort);
    c.on('end', function() {
        console.log('client disconnected');
    });

    c.on('data', function(data) {
        var domain = data.toString().trim().toUpperCase();
        db.find(domain).then(data => {
            console.log(data)
        })
        // connection.query(query, function (error, results, fields) {
        //     if (error) throw error;
        //     /**
        //      * To Do : Create Sample
        //      */
        //     var output = template(results)
        //     c.write(output, function() {
        //         c.end();
        //     });
        // })
    });

});

server.listen(43, function() {
    console.log('whois server active on port 43');
});
