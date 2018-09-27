const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect mongodb server');
    }

    console.log('Connected to MongoDB server');

    // db.collection('Todos')
    //   .find({ _id: new ObjectID('5bac097327b61b2f8432881e') })
    //   .toArray()
    //   .then(
    //     docs => {
    //       console.log('Todos');
    //       console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    // db.collection('Todos')
    //   .find()
    //   .count()
    //   .then(
    //     count => {
    //       console.log(`Todos count: ${count}`);
    //       //   console.log(JSON.stringify(docs, undefined, 2));
    //     },
    //     err => {
    //       console.log('Unable to fetch todos', err);
    //     }
    //   );

    db.collection('Users')
      .find({ name: 'Andrew' })
      .toArray()
      .then(
        docs => {
          console.log(JSON.stringify(docs, undefined, 2));
          //   console.log(JSON.stringify(docs, undefined, 2));
        },
        err => {
          console.log('Unable to fetch todos', err);
        }
      );

    // db.close();
  }
);
