var obj = {fooBar: 'barFoo'}

var value = (obj['bar' + 'Boo'] || obj['bar' + 'Foo'])

console.log(value)