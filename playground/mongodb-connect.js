// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// const obj = new ObjectID();
// console.log('ObjectID: ', obj);

// Destructuring Example
// const user = { name: 'Max', age: 26 };
// const { name } = user;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert todo');
  //   }

  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Max',
  //   age: 26,
  //   location: 'Nashville, TN'
  // }, (error, result) => {
  //   if (error) {
  //     return console.log('Unable to insert challenge exercise');
  //   }

  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  db.close();
});
