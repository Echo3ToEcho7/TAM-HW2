var testFiles = [];

testFiles.push("1_equality.js");
testFiles.push("2_functions.js");

var express = require("express");
var app = express.createServer();

var port = process.env.PORT || 3000;
var ipaddr = process.env.IP || "localhost";

app.configure(function() {
   app.use(app.router);
   app.use(express["static"](__dirname + "/tests"));
   app.use(express["static"](__dirname + "/node_modules/mocha"));
   app.use(express["static"](__dirname + "/node_modules/expect.js"));
});

app.get("/", function(req, res) {
    var i, ii;
    var html = 
    "<html>" +
    "   <head>" +
    "       <link href='mocha.css' rel='stylesheet'></link>" +
    "       <script src='expect.js'></script>" +
    "       <script src='mocha.js'></script>" +
    "       <script>mocha.setup('bdd')</script>";
    
    for (i = 0, ii = testFiles.length; i < ii; i++) {
        html = html + "<script src='" + testFiles[i] + "'></script>";
    }
    
    html = html +
    "   </head>" +
    "   <body>" +
    "       <div id='mocha'></div>" +
    "       <script type='text/javascript'>mocha.run()</script>" +
    "   </body>" +
    "</html>";
    
    res.end(html);
});

app.listen(port, ipaddr);