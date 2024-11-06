var a = 10;
var b = 20;
console.log(a+b);


var fruit = "Apple";
console.log(fruit);

console.log(fruit.toUpperCase());       //all uppercase
console.log(fruit.toLowerCase());      //all lowercase
console.log(fruit.length);              //length of the string

console.log(fruit.slice(0,3));          //Deleting the string from 0 to 3
console.log(fruit.replace("Apple","Banana"));  //replacing the string
console.log(fruit)

console.log(fruit.concat(" is good for health"));  //it is add the string from the existing string     
console.log(fruit)

let food = ["Apple","Banana","Orange"];
console.log(food);

food.push("Mango");                         //adding the string at the end of the array
console.log(food);

food.pop();                                //deleting the string at the end of the array
console.log(food);

let food2 = food.map(item=>item.length)       //map is used to iterate the array and return the new array
console.log(food2);

food3 = [...food,"Tamota"]          //spread operator is used to add the string at the end of the array 
console.log(food3);

food3.push("Chocolate")                 // push is used to add the string at the end of the array     
console.log(food3);



let num = [1,2,3,4,5,6,7,8,9,10];
console.log(typeof(num));


let student = {
    name:"boyez",
    age:20,
    city:"Mumbai"
}
console.log(typeof(student));