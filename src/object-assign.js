var bar = {foo: {bar: 'bar'}}
var foo = {foo: {bar: 'rab'}}
var fiddle = {sticks: '140bpm'}

var result = Object.assign({pimp: 'rules'}, bar, fiddle, foo);

console.log(JSON.stringify(result))
