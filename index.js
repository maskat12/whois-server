'use strict';

var net = require('net');
var fs = require('fs');
require('dotenv').config()
const db = require('./models/connection')
const { template } = require('./modules/template');


var server = net.createServer(function(c) {
    console.log('client connected: ' + c.remoteAddress +":"+ c.remotePort);
    c.on('end', function() {
        console.log('client disconnected');
    });

    c.on('data', function(data) {
        var domain = data.toString().trim().toUpperCase();
        console.log(db.Domain);
        db.Domain.findDomain(domain).then(data => {
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

}).on('error', (err) => {
    // handle errors here
    throw err;
});;

server.listen(43, function() {
    console.log('whois server active on port 43');
});
