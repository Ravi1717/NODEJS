const mongoose = require("mongoose");
const Dishes = require("./models/dishes");

const url = "mongodb://localhost:27017/conFusion";

const connect = mongoose.connect(url);

connect.then(db => {
  console.log("Connected correctly to server");

  Dishes.create({
    name: "Paneer",
    description: "Veg"
  })
    .then(dish => {
      console.log(dish);
      return Dishes.find({}).exec();
    })
    .then(dishes => {
      console.log(dishes);
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });

  var newDishes = Dishes({
    name: "Pizza",
    description: "test"
  });
  //console.log(newDishes);

  newDishes
    .save()
    .then(dish => {
      return Dishes.find({});
    })
    .then(dishes => {
      // console.log(dishes);

      return Dishes.remove({});
    })
    .then(() => {
      return mongoose.connection.close();
    })
    .catch(err => {
      console.log(err);
    });
});
