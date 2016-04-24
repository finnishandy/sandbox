/**
 * Created by Finnishandy on 25/01/2016.
 */
https://msdn.microsoft.com/en-us/library/t7f48wx9(v=vs.94).aspx
//plane = factor ^ 2

/*
    Planning: Learn how to do the binary manipulation. Don't do it if you don't know how. Stop wasting your time.
    Go back with the program and do the possible solution. Not trying to overdo it.
    You can do this champ.


    PRAY!!!!

    And be yourself!

    Remember.. what's confident? Wtf is confident?

    Use cookies instead of url.

 */

var maxnumber = 2147483647;

var mask = 2147483647 - 15;

var t = 255;

var x = 48;

x <<= 1;

x >>=1;

mask &= x;

console.log('original: ' + x );
console.log('orig bin: ' + (x >> 3).toString(2));
console.log('mask bin: ' + (mask).toString(2));

/*
console.log((8 + 32).toString(2));
console.log((32).toString(2));
console.log('res: ' + (mask ^ t).toString(2))
console.log('2nd res: ' + ((mask ^ t) >> 2).toString(2))
var foo = {z : 4, y : 6, x : 7};

var num = 0;
Object.keys(foo).forEach(function(key, ix) {
    num += parseInt((Math.pow(8, ix + 1) + key));
});
console.log(num);
console.log(num - (Math.pow(8, 3) + Math.pow(8, 2)));
//console.log('x: ' + x);
//console.log('y: ' + y);
//console.log('z: ' + z);
//console.log((t >> 16).toString(2));
//console.log((t >> 8).toString(2));
console.log((mask).toString(2));
console.log((t).toString(2));
//console.log(((256 * 256 - 1) & t) / 256);
var fii = parseInt((t ).toString(2).substring(8, t.length ), 2) / 256;
console.log(t);
console.log(parseInt((t ).toString(2).substring(8, t.length ), 2));
console.log(parseInt((t ).toString(2).substring(8, t.length ), 2));

console.log(14 << 2);
    */