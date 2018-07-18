// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (error, db) => {
  if (error) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
  //   console.log(result);
  // });

  // // deleteOne
  // db.collection('Todos').deleteOne({ text: 'Eat Lunch' }).then((result) => {
  //   console.log(result);
  // });

  // // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({ completed: false }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').deleteMany({ location: 'Nashville, TN' }).then((result) => {
  //   console.log(result);
  // });

  // db.collection('Users').findOneAndDelete({ _id: new ObjectID("5b4df373c474ee07ee4b04b2") }).then((result) => {
  //   console.log(result);
  // });

  // db.close();
});
