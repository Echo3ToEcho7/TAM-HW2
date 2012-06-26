var Mocha = require("mocha");
Mocha.reporters.Base.useColors = false;

var m = new Mocha();

m.reporter("spec");

m.addFile("1_equality.js");
m.addFile("2_functions.js");

m.run(function onDone() {
    console.log("Done");
});