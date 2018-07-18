const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String
  },
  completed: {
    type: Boolean
  },
  completedAt: {
    type: Number
  }
});

const newTodo = new Todo({
  text: 'Cook dinner'
});

newTodo.save().then((doc) => {
  console.log('Saved todo', doc);
}, (e) => {
  console.log('Unable to save todo');
});

const myTodo = new Todo({
  text: 'My todo',
  completed: false,
  completedAt: null
});

myTodo.save().then((doc) => {
  console.log('Saved my todo', doc);
}, (e) => {
  console.log(`Didn't save my todo`);
});
