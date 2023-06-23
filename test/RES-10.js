var a = new Array(4294967295);
var b = new Array(-1);

var num = 2.555555;
document.writeln(num.toExponential(4));
document.writeln(num.toExponential(-2));

num = 2.9999;
document.writeln(num.toFixed(2));
document.writeln(num.toFixed(105));

num = 2.3456;
document.writeln(num.toPrecision(1));
document.writeln(num.toPrecision(0));  
