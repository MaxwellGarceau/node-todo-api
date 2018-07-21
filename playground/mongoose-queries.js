const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// const id = '6b51ef73b077c7980b8664dc11';

// if (!ObjectID.isValid(id)) {
//   console.log(`ID not valid`);
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   if (todos.length < 1) {
//     return console.log(`No ID's`);
//   }
//   console.log('Todos', todos);
// });

// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//   if (!todo) {
//     return console.log('ID not found');
//   }
//   console.log('Todo', todo);
// }).catch((e) => console.log(e));

const userId = '5b5092fa846d38e5082e715f';

User.findById(userId).then((user) => {
  if (!user) {
    return console.log('Could not find user.');
  }
  console.log('User: ', user);
});
