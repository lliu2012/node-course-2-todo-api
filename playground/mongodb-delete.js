const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect(
  'mongodb://localhost:27017/TodoApp',
  (err, db) => {
    if (err) {
      return console.log('Unable to connect mongodb server');
    }

    console.log('Connected to MongoDB server');

    //deleteMany
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result) => {
    //     console.log(result);
    // });

    // deleteOne
    // db.collection('Todos')
    //   .deleteOne({ text: 'Eat lunch' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    // db.collection('Todos')
    //   .findOneAndDelete({ complete: false })
    //   .then(result => {
    //     console.log(result);
    //   });

    // db.collection('Users')
    //   .deleteMany({ name: 'Andrew' })
    //   .then(result => {
    //     console.log(result);
    //   });

    // findOneAndDelete
    db.collection('Users')
      .findOneAndDelete({ _id: new ObjectID('5bacfd4560c236043c1f4735') })
      .then(result => {
        console.log(result);
      });

    // db.close();
  }
);
