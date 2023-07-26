const mongoose = require("mongoose");

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/fruitsDB');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const fruitSchema = new mongoose.Schema ({ 
    name: String,
    rating: Number,
    review: String
 });

 const Fruit = mongoose.model("Fruit", fruitSchema);

 const fruit = new Fruit ({
    name: "Apple",
    rating: 7,
    review: "Pretty solid as a fruit."
 });

 const kiwi = new Fruit ({
    name: "kiwi",
    rating: 10,
    review: "The best fruit ever"
 });


 const banana = new Fruit ({
    name: "Banana",
    rating:8,
    review: "Very Sweet"
 });

 const orange = new Fruit ({
    name: "orange",
    rating:8,
    review: "Very Sweet but medicinal"
 });

 const guava = new Fruit ({
    name: "Guava",
    rating:8,
    review: "Very hard when unripe"
 });

 const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
 });

 const Person = mongoose.model("Person", personSchema);

 const person = new Person({
    name: "Nonso",
    age: 28
 });

//  Fruit.find({},(err, fruits) => {
//     // if(err){
//     //     console.error(err);
//     //     return;
//     // } 

//     // console.log(fruits);
// });


 Person.find({ age: { $gt: 18 } }, (err, people) => {
    if (err) {
      console.error(err);
      return;
    }
    
    console.log(people);
  });
 

// Fruit.find({}).exec()
//     .then(fruits => console.log(fruits[0].review))
//     .catch(err => console.error(err));
    

// Fruit.find({}).exec()
// .then(fruits => {
//     const fruitNames = fruits.map(fruit => fruit.name);
//     console.log(fruitNames);
// })
// .catch(err => console.error(err));
  
  
  
  
  

// Fruit.insertMany([kiwi, orange, banana, guava]);

//  fruit.save();

// person.save();