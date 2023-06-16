// JavaScript Array

// Spread/Copy Operator

var a = ["The", 'academicians'];
var b = [...a, "said", 'that'];
var c = [...b, "unlike", 'the'];
var d = [...c, 'selection', "process"];
var e = [...d, "of", 'authors', "in"];
var f = [...e, 'the', "previous", 'times,'];
var g = [...f, "the", 'selection', "process", 'this'];
var h = [...g, 'time,', "during", 'the', "rationalisaion"];
var i = [...h, "exercise,", 'was', "far"];
var j = [...i, 'more', "transparent", 'and'];
var k = [...j, "ethically", 'justified'];

// Global Variable
var para= '';

// For loop
for(var i=0; i<k.length; i++){
    console.log(k[i]);
    para= para + k[i]+ ' ';
}
console.log(para);