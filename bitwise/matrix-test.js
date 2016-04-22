/**
 * Created by Finnishandy on 25/01/2016.
 */

//plane = factor ^ 2

var t = 10000  + 3 + 6;

var z = t >> 16, y = t >> 8, x = parseInt(((256 * 256 - 1) & t) / 256);

console.log('x: ' + x);
console.log('y: ' + y);
console.log('z: ' + z);
//console.log((t >> 16).toString(2));
//console.log((t >> 8).toString(2));
console.log((t >>> 3).toString(2));
console.log((t).toString(2));
//console.log(((256 * 256 - 1) & t) / 256);
var fii = parseInt((t ).toString(2).substring(8, t.length ), 2) / 256;
console.log(t);
console.log(parseInt((t ).toString(2).substring(8, t.length ), 2));
console.log(parseInt((t ).toString(2).substring(8, t.length ), 2));