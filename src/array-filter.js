/**
 * Created by Finnishandy on 25/01/2016.
 */

var array = [
    {name: "PROXY", value: {"foo": function() {return 'bar'}}},
    {name: "", value: {"foo": function() {return 'foo'}}},
    {name: "", value: {"foo": function() {return 'steven'}}}
];

/*
var t = array
    .map((obj) => obj)
    .filter((obj) => obj.foo() !== 'bar')
    .sort((prev, current) => prev.foo() > current.foo());
*/

var t = array.filter((obj) => obj.name !== "PROXY").map((obj) => obj.value.foo())

console.log(t);