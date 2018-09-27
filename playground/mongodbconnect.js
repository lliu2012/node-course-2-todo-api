const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect mongodb server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne(
    //   {
    //     text: 'Something to do',
    //     complete: false
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //   }
    // );

    // db.collection('Users').insertOne(
    //   {
    //     name: 'Lei Liu',
    //     age: 36,
    //     location: 'Houston'
    //   },
    //   (err, result) => {
    //     if (err) {
    //       return console.log('Unable to insert user', err);
    //     }

    //     console.log(JSON.stringify(result.ops[0], undefined, 2));
    //   }
    // );

    db.close();
  }
);
