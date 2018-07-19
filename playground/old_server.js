const { mongoose } = require('./db/mongoose');

// const newTodo = new Todo({
//   text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//   console.log('Saved todo', doc);
// }, (e) => {
//   console.log('Unable to save todo');
// });

// const myTodo = new Todo({
//   text: 'Validators, Types, and Defaults'
// });

// myTodo.save().then((doc) => {
//   console.log('Saved my todo', doc);
// }, (e) => {
//   console.log(`Didn't save my todo`);
// });

const myAdminProfile = new User({
  name: 'Max Garceau',
  email: 'maxgarceau@comcast.net'
});

myAdminProfile.save().then((doc) => {
  console.log('Saved: ', doc);
}, (e) => {
  console.log(`Didn't save`);
});
