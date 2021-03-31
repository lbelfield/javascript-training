// Example 1:
// See it all the time with environment variables and props
// In env file: 
// URL=https://www.luke.com
// PORT=8080
const { URL, PORT } = process.env;
// is more terse than:
const url = process.env.URL;
const port = process.env.PORT;

// Example 2:
const foo = [ 'one', 'two', 'three' ];
const [ red, yellow, green ] = foo;
console.log('red', red, 'red=one');
console.log('yellow', yellow, 'yellow=two');
console.log('green', green, 'green=three');
