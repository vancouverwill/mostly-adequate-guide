// Given the following User object:
//
//   const user = { id: 2, name: 'Albert', active: true };
//
// Use `safeProp` and `head` to find the first initial of the user.

// initial :: User -> Maybe String

// console.log('head', head)
var trace = curry(function(tag, x) {
  console.log(tag, x);
  return x;
});
const wm = trace('wm')
const splitString = split('')
// const initial = compose(Maybe.of, head, chain(splitString),  safeProp('name'))


const initial = compose(map(head), safeProp('name'))

