/**
 * Created by Finnishandy on 25/01/2016.
 */

var array = [
    {"foo": function() {return 'bar'}},
    {"foo": function() {return 'foo'}},
    {"foo": function() {return 'steven'}}
];


var t = array
    .map((obj) => obj)
    .filter((obj) => obj.foo() !== 'bar');



console.log(t);