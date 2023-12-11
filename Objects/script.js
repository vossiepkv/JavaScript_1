// create and utilise objects.

const product = 
{
name: 'socks',
price: 1090
};

console.log(product);

console.log(product.name);

console.log(product.price);

//change specific properties of objects.
product.name = 'cotton socks';

//creates new property if property dosent exsist
product.newProperty = true;
console.log(product);

//delete properties
delete product.newProperty;
console.log(product);

const product2 =
{
name: 'T-Shirt',
'delivery-time': '1 day',
rating: 
{
  stars: 4.5,
  count: 87
},

fun: function function1()
{
 console.log('function inside an object');
}

};

//bracket notation used for adding values to objects and to parse objects with a - sign in it as JS thinks its doing maths
console.log(product2['name']);
console.log(product2['delivery-time']);


console.log(product2.rating.count);

//methods
product2.fun();
Math.random();
console.log();

//built in objects
//JSON
 /*
 used to send data between computers 
 used to store data
 */

 console.log(JSON.stringify(product2));

 const jsonString = JSON.stringify(product2);
 JSON.parse(jsonString);


 //auto-boxing
 console.log('hello'.length);

 console.log('hello'.toUpperCase());

 //reference + copy by reference
 const object1 = 
 {
  message: 'hello'
 };

 const object2 = object1;

 object1.message = 'good job';
 console.log(object1);