const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

const Todo = mongoose.model('Todo', {
  text: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  completed: {
    type: Boolean,
    default: false
  },
  completedAt: {
    type: Number,
    default: null
  }
});

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

const User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  },
  email: {
    type: String,
    trim: true,
    minlength: 1,
    required: true
  }
});

const myAdminProfile = new User({
  name: 'Max Garceau',
  email: 'maxgarceau@comcast.net'
});

myAdminProfile.save().then((doc) => {
  console.log('Saved: ', doc);
}, (e) => {
  console.log(`Didn't save`);
});
