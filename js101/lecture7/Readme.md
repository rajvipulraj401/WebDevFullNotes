 session 7:------------
js101



### Lecture 7 Notes

#### Topic: Spreading an Array Using Object Literal

**Explanation:**
- When you use the **spread operator** (`...`) to spread an array inside an object literal, the array elements are converted into object properties.

**Example:**
```javascript
let fruits = ["apple", "banana", "cherry"];
let obj = {...fruits};
console.log(obj);
```

**Output:**
```javascript
{
    0: "apple",
    1: "banana",
    2: "cherry"
}
```

**Explanation:**
- The **indices** of the array elements become the **keys**, and the elements themselves become the **values**.

**Additional Points:**
- **JavaScript Flexibility**: JavaScript can handle both arrays and objects flexibly, so spreading an array into an object does not result in an error.
- **Arrays as Objects**: Arrays in JavaScript are fundamentally objects, which is why spreading them into an object works seamlessly.

---



#### Mathematical Methods

1. **`Math.trunc`**:
   - **Definition**: Returns the integer part of a number, removing any fractional digits.
   - **Example**:
     ```javascript
     console.log(Math.trunc(23.456)); // Output: 23
     ```
   
2. **Rounding Numbers**:
   - **`Math.round()`**: Rounds to the nearest integer. 
     ```javascript
     console.log(Math.round(23.455)); // Output: 23
     console.log(Math.round(23.555)); // Output: 24
     ```

   - **`.toFixed(x)`**: Rounds the number to `x` decimal places.
     ```javascript
     console.log(23.45555.toFixed(2)); // Output: 23.46
     ```

   - **`Math.floor()`**: Rounds down to the nearest integer.
     ```javascript
     console.log(Math.floor(23.456)); // Output: 23
     ```

 
**Comparison between `Math.trunc` and `Math.floor`:**
- **`Math.trunc`**: Removes the fractional part, keeping the integer part. For negative numbers, it truncates towards zero.
  ```javascript
  console.log(Math.trunc(-23.456)); // Output: -23
  ```

- **`Math.ceil()`**: Rounds up to the nearest integer.
     ```javascript
     console.log(Math.ceil(23.456)); // Output: 24
     ```

- **`Math.floor`**: Rounds down towards negative infinity, affecting both positive and negative numbers.
  ```javascript
  console.log(Math.floor(-23.456)); // Output: -24
  ```

**Other Math Methods:**
- **`Math.pow(base, exponent)`**:
  ```javascript
  console.log(Math.pow(2, 3)); // Output: 8
  ```

- **`Math.max()`** and **`Math.min()`**: Return the maximum or minimum value from a list of values.
  ```javascript
  console.log(Math.max(1, 2, 3)); // Output: 3
  console.log(Math.min(1, 2, 3)); // Output: 1
  ```

- **`Math.PI`**: Constant representing the value of π.
  ```javascript
  console.log(Math.PI); // Output: 3.141592653589793
  ```

- **`Math.abs()`**: Returns the absolute value of a number.
  ```javascript
  console.log(Math.abs(-5)); // Output: 5
  ```

- **`Math.sqrt()`**: Returns the square root of a number.
  ```javascript
  console.log(Math.sqrt(9)); // Output: 3

console.log(Math.sqrt(-1));// NaN
console.log(Math.sqrt(-0));// -0
console.log(Math.sqrt(0));// 0
console.log(Math.sqrt(1));// 3
console.log(Math.sqrt(2));// 1.414213562373095
console.log(Math.sqrt(9));// 3
console.log(Math.sqrt(Infinity));// Infinity
  ```


----------------------------------------------------------------------------------------------------------



Q) how this question not doing change in original object?




function copy(data, str) {
  const data_copy = {...data};
  data_copy.name = str;
  if (data === data_copy)
    return true;
  else
    return false;
}
if (copy({name: "Kevin", age: 40 }, "Allen") !== false)
  console.log("Test fails: Expected false for input data = {name: 'Kevin', age: 40 } and str = 'Allen'");
else
  console.log("Sample test case for input data = {name: 'Kevin', age: 40 } and str = 'Allen' passed!");




Arrow function  and about other function  -- 
## Read about it in jonas copy and also remember if we have one parameter in arrow function we can skip the small bracket if we want .




#### Pass-by-Value vs. Pass-by-Reference

**Pass-by-Value**:
- **Definition**: Primitive data types (e.g., numbers, strings) are passed by value. Changes to the value inside the function do not affect the original variable.
- **Example**:
  ```javascript
  function add(num) {
    num = num + 10;
    console.log(num); // Output: 15
  }
  var num = 5;
  add(num);
  console.log(num); // Output: 5

/*This is because a copy of num was passed in the function not the original reference was passed here we passing the value not passing the reference.

But in case of Non-primitive data type it will be passed as passed by reference that means any changes we make to the copied item will also make changes to the original item .
*/
  ```

**Pass-by-Reference**:
- **Definition**: Non-primitive data types (e.g., objects, arrays) are passed by reference. Changes to the reference affect the original object.
- **Example**:
  ```javascript
  function modifyObject(obj) {
    obj.name = "Austin";
  }
  let obj = { name: "Kevin" };
  modifyObject(obj);
  console.log(obj.name); // Output: Austin
  ```


**Handling Pass-by-Reference Issues**:
- **Spread Syntax**: Creates a shallow copy of the original object, allowing you to work with a new object without modifying the original one. But this only work for normal objects and fails for the nested object as spread syntax also do shallow copy .
- **Example**:
  ```javascript
  let obj = { name: "Kevin" };
  let copy_obj = { ...obj };
  copy_obj.name = "Austin";
  console.log(obj.name); // Output: Kevin
  console.log(copy_obj.name); // Output: Austin
  ```

#### Shallow Copy vs. Deep Copy

**Shallow Copy**:
- **Definition**: Creates a new object and copies top-level properties. Nested objects are still referenced.
- **Example**:
  ```javascript
  let obj = { name: "Kevin", address: { city: "New York" } };
  let copy_obj = { ...obj };
  copy_obj.address.city = "Los Angeles";
  console.log(obj.address.city); // Output: Los Angeles
  console.log(copy_obj.address.city); // Output: Los Angeles
  ```

**Deep Copy**:
- **Definition**: Creates a new object and recursively copies all properties, including nested objects.
- **Methods**:
  - **Using `JSON.parse` and `JSON.stringify`**:
    ```javascript
    let obj = { name: "Kevin", address: { city: "New York" } };
    let copy_obj = JSON.parse(JSON.stringify(obj));
    copy_obj.address.city = "Los Angeles";
    console.log(obj.address.city); // Output: New York
    console.log(copy_obj.address.city); // Output: Los Angeles
    ```

  - **Using `lodash`'s `cloneDeep`**:
    ```javascript
    let _ = require('lodash');
    let obj = { name: "Kevin", address: { city: "New York" } };
    let copy_obj = _.cloneDeep(obj);
    copy_obj.address.city = "Los Angeles";
    console.log(obj.address.city); // Output: New York
    console.log(copy_obj.address.city); // Output: Los Angeles
    ```
-------------------------------------------------------------------------------------


## Shallow Copy vs. Deep Copy

### Shallow Copy
- **Definition**: A shallow copy creates a new non-primitive data type (like an object, array, or function) and copies the top-level properties or elements from the original to the new one. For non-primitive data types, it copies the references, not the actual values. For primitive data types like numbers, strings, and booleans, the concept of shallow or deep copy doesn’t really apply because they are always copied by value.
- **Example**:
  ```javascript
  let obj = {
    name: "kevin"
  }
  let copy_obj = {...obj}
  copy_obj.name = "Austin";

  console.log(obj.name); // Output: kevin
  console.log(copy_obj.name); // Output: Austin
  ```
  In this example, `copy_obj` is a shallow copy of `obj`. Changing `copy_obj.name` does not affect `obj.name` because spread syntax works in case of normal object and only fails in case of nested objects.

- **Nested Objects**:
- **Example**:
  ```javascript
  let obj = { name: "Kevin", address: { city: "New York" } };
  let copy_obj = { ...obj };
  copy_obj.address.city = "Los Angeles";
  console.log(obj.address.city); // Output: Los Angeles
  console.log(copy_obj.address.city); // Output: Los Angeles
  ```

  Here, both `obj` and `copy_obj` share the same `address` object, so changes to `copy_obj.address.city` also affect `obj.address.city`.

### Deep Copy
- **Definition**: A deep copy means creating a new object and recursively copying all properties of the original object, including nested objects. For non-primitive data types, it creates new instances and copies the values.

- **Methods**:
  - **Using `JSON.parse` and `JSON.stringify`**:
    ```javascript
    let obj = { name: "Kevin", address: { city: "New York" } };
    let copy_obj = JSON.parse(JSON.stringify(obj));
    copy_obj.address.city = "Los Angeles";
    console.log(obj.address.city); // Output: New York
    console.log(copy_obj.address.city); // Output: Los Angeles
    ```

    This method works well for simple objects but has limitations with functions, `undefined`, and other non-serializable values.

  - **Using `lodash`'s `cloneDeep`**:
    ```javascript
    let _ = require('lodash');
    let obj = { name: "Kevin", address: { city: "New York" } };
    let copy_obj = _.cloneDeep(obj);
    copy_obj.address.city = "Los Angeles";
    console.log(obj.address.city); // Output: New York
    console.log(copy_obj.address.city); // Output: Los Angeles
    ```

--
# Note --*Read more about Es6 in jonas copy and also about all different function in his copy*
--



#### Spread Syntax with Objects and Arrays

**Objects**:
- **Explanation**: When spreading an object, if a property already exists, it updates the property with the new value; otherwise, it adds the new property.
- **Example**:
  ```javascript
  const existingUser = {
    id: 123,
    name: "Alex Johnson",
    email: "Alex.johnson@ex.com",
    age: 28,
    membershipStatus: "active"
  };
  
  const updatedInfo = {
    email: "alexj@example.net",
    age: 29,
    membershipStatus: "premium"
  };
  
  let finalObj = { ...existingUser, ...updatedInfo };
  console.log(finalObj);
  ```

**Output:**
```javascript
{
    id: 123,
    name: "Alex Johnson",
    email: "alexj@example.net",
    age: 29,
    membershipStatus: "premium"
}
```

**In Arrays**:
- When spreading arrays, elements are combined into a new array. Each element is added in the order it appears, without any special handling for existing values.

**Example**:
```javascript
const fruits = ["apple", "banana"];
const additionalFruits = ["cherry", "date"];

// Adding new elements to the beginning and end of the array
const allFruits = ["kiwi", ...fruits, "mango", ...additionalFruits];
console.log(allFruits);
```

**Output**:
```javascript
["kiwi", "apple", "banana", "mango", "cherry", "date"]
```

**Explanation**:
- Arrays are combined by simply appending the elements in order, so there is no concept of overwriting like objects. 



---



Now why this happens in case of objects ?

Ans --- In case of array it merge because there we follow concept of indexing and in case of object we follow the concept of naming so if the property name exists update it else add it.





--------------------------------------------------------------------------------------------

------------------------------------------



# Interview questions  answered in own words :---


### 8. What Are Truthy and Falsy Values?

**Truthy and Falsy Values:**

- **Falsy Values:** Values that are considered false in a Boolean context. There are 6 falsy values:

  - `0` (zero)
  - `false`
  - `""` (empty string)
  - `null`
  - `undefined`
  - `NaN` (Not-a-Number)

- **Truthy Values:** Values that are considered true in a Boolean context. Virtually all values that are not falsy are truthy. Examples include:
  - Non-zero numbers (e.g., `1`, `-1`)
  - Non-empty strings (e.g., `"hello"`, `" "`)
  - Objects (e.g., `{}`, `[]`)
  - Functions (e.g., `function() {}`)

**Examples:**

```javascript
console.log(0 == false); // true (0 is a falsy value, and `false` is also falsy, so they are considered equal in non-strict comparison)
console.log(0 === false); // false (strict comparison, different types: `0` (number) and `false` (boolean))
```

**Explanation:**

- In non-strict comparison (`==`), JavaScript performs type conversion, treating `0` and `false` as equivalent in a Boolean context.
- In strict comparison (`===`), types are compared as well, so `0` (number) and `false` (boolean) are not considered equal.

---

### 9. What Is Implicit Conversion and What Is Explicit Conversion?What is the difference between them?

**Implicit Conversion:**

- JavaScript automatically converts values from one type to another during operations. This is also known as type coercion.
- Example:

  ```javascript
  function getSquare(param) {
    console.log(param ** 3);
  }

  getSquare("check"); // Output: NaN (string "check" cannot be converted to a number, so the result is Not-a-Number)

  getSquare("3"); // Output: 27 (string "3" is implicitly converted to the number 3, and then 3 cubed is 27)
  ```

**Explicit Conversion:**

- Developers manually convert values from one type to another using functions or methods.
- Example:
  ```javascript
  let num = Number("3"); // Explicit conversion from string "3" to number 3
  console.log(num ** 3); // Output: 27
  ```

**Difference:**

- **Implicit Conversion:** Done automatically by JavaScript based on context and operations.
- **Explicit Conversion:** Manually performed by the developer using functions like `Number()`, `String()`, etc.

---


---



**Q) What do you mean by NaN?**
- **Answer:** NaN stands for **Not-a-Number** and is used to represent an invalid mathematical operation. Despite being an error value, the `typeof` NaN is "number" because it results from a numeric operation.

---




Q) How are arrays different from objects in Javascript ?

Ans -- Arrays and objects are both non -primitve data type in javascript and in javascript everything which is non- primitive is basically an object .
But there is a difference between Array  and Object data structure in javascrip
The difference lies in how they store the data and how we access data from them .

In Arrays every data is stored in index based for example 
if there is an array of size 3 then each element will be stored in an index starting from 0 as array store data in indices and we access them using theses indexes

In Object data is stored in form of key value pair here there is no indexing and each value  is stored in a key and the key has to be  a string for it to be able to be accessed using dot notation . 

and the way to access data from object is using dot and a square bracket notation .



Q) Explain array destructuring and object destructuring in JavaScript.

Answer - Destructuing in javascript means to unpack values from a data structure specifically from objects and array . 

in this what happens is that  .we get an array and we want to accesss each element of the array instead of writing manually and storing them to a variable . 

we can just use destructuring syntax and store them in a different different variable names. 

In terms of array we use Square bracket to  do destructuring and in terms of object we use curly bracket to do destructuring . Also we have to use same name variable to store key in object and if we want to have differenet name then we have to use colon  after the original key name and then write the desired name we want .



Q)Can you explain the difference between a shallow copy and a deep copy of an object in JavaScript?

Answer -- A shallow copying means copying just the reference of the variable which is holding  the address of non-primitive data type . While deep copying means creating a new object and then manually copying each element of that object into it so that changing the copied object doesn't change the original object . 

In js we can use spread operator to solve shallow copying problem for the first layer of the objects
but if the object is deeply nested then for this we have to use Object.stringify and Object.Parse and some other libraries like Lodas because spread operator also does shallow copying in the case of nested object as it just copies the reference of them.



Q) what is the difference between null and undefined ?

Ans -- “Null and undefined in JavaScript are used to represent the absence of data
The difference between them is that Null is used to show intentional absence of data which a developer assigns on purpose when they doesn't have the data  . And Undefined is used to show unintentional  absence of data which occurs when a variable has been declared but not assigned a value resulting in the variable being  declared as undefined.
"When comparing null and undefined with the equality operator (==), they are equal to each other. However, using the strict equality operator (===), they are not equal because they are of different types.
This distinction is important as it helps determining whether a variable’s value exists or if it has been explicitly set to no value."




Q)Can you explain the difference between dot notation and square bracket notation when accessing object properties? When would you use one over the other?



Answer -- The difference between dot notation and square bracket notation lies in how we access the object properties for example when we want to quickly access the property name 
The dot bracket notation is concise for example we have an object person with a property name age and using dot notation we can directly access it like person.age 

But what happens if the proeprty name is unknow or it is not a single character but a sentence so for these kind of cases when we have to dynamically create a property name an access it we have to use square bracket notation .

like for example we have a menu object and based on the user click we want to show the property so here we cannot hardcode any property name as it will result in undefined so here we have to use square bracket notation and then based on user choice show them the property that they requested if it exists or return undefined if it doesn't.

Also whenever we want to iterate over an object using for in loop we have to use square bracket notation .


---
Q1)What are the differences between arrow functions and function expressions in JS?

**Answer:**

-  Arrow function  was introduced in ES6 version of JavaScript.
- The difference between arrow function and function expression lies in its syntax and some of its use cases.

**When we talk about Arrow Function:**

- The Arrow function make use of an arrow `=>`like syntax instead of writing function keyword which makes it different from other types of funciton .
- The benefit it has over function expression is that it is concise.
  - For example, when we have a single line of code in a function, we can omit the curly brackets as well as the `return` keyword.
  - Not only that, when we have a single parameter, we can even omit the small bracket around the parameter and keep only the parameter name there. In this way, the function becomes concise.

**In contrast when talking about Function Expression:**
- This type of function is used to store an anonymous function in a variable.
- While arrow functions also do that, the main difference between them is that arrow functions are concise but do not have the `this` keyword.
  - This is crucial whenever dealing with methods inside objects.and also trying to create constructor and trying to use with new keyword as arrow function cannot do this.

**Additional Note:**
- The main reason for the introduction of these two functions was that earlier, function declarations were hoisted to the top of the code, which used to create bugs as they could be called even before they were declared and this two new functions are not hoisted to the top of their scope .
In conclusion use Function expression whenver we want to make use of a function with its own  this keyword  or want to use a function as a constructor and use arrow function whenver we  want to write callback function as well as want our function to be concise.

---


--------------------# AFTER LECTURE 6 --------------------------------------



Q) What are the differences between pass-by-value and pass-by-reference in JS?

Answer -- pass by value and pass by reference occur whenever we are passing a data type to a function to make its copy .

**Pass-by-Value:**

for example - when we pass a primitive data type its value is always passed by value which means a new copy of that value is created and the value is assigned .

  - It's like giving someone your notes, and they create their own notes by copying yours. but Any changes they make to their notes will not affect your original notes.

**While  Pass-by-Reference:**

While pass reference occur whenver dealing with non-primitive datatype likes arrays object cause its value is passed as reference which means its value is not copied its location is copied .

- Its like giving someone keys to your house and when some one go to your location in this case my house and do some changes this will changes will show to my house because they have done changes in my house.

--


**Q) Differentiate between the rest and spread operators in JavaScript?**

**Answer:**

In JavaScript, the rest and spread operators are represented by three dots (...). Despite being represente by similar syntax, they serve different purposes: 

** As in case of Rest Operator:**
- It Gathers multiple arguments into an array or object, depending on its usage.
- Example: When we use the rest parameter in a function parameter, it collects all the various arguments which are comma-separated into an array.
  - like If we pass numbers from 1 to 10 in a function to calculate the sum, the rest parameter will collect all the elements into an array.
  - Also The rest operator has to be at the last in the parameter list (but the spread operator does not have to be).
  - So in this way Rest parameter is very helpful in getting multiple no of arguments into one data structure .

** And In case of Spread Operator:**
- It is Used to spread the elements out of an array or object into another variables .
-  For Example: In the same example above, we get all the elements in an array. Now, we can use the spread operator to destructure them into different variables. like if we have two array and then we want to create another array containing the two elements and with this new array we can use spread syntax and get all of them in one new array by spreading them in one
  - Example with objects:
    ```javascript
    const person = { name: 'John', age: 30 };
    const newPerson = { ...person, city: 'New York' };

    console.log(newPerson);
    // Output: { name: 'John', age: 30, city: 'New York' }
    ```

** So in Conclusion:**
- Use the rest operator when we have multiple arguments passed to a function and we want to collect them in one variable.
- and Use the spread operator when we want to destructure all the elements from an array into variables or merge and create a new array with another array.

---

Q) What is the difference between Var, let and const. ? 


Ans -- “var, let, and const are keywords which are used to declare variables in JavaScript. 
when we use var to declare any variable that variable can be redeclared and reasssigned  and also variable declared with var are  hoisted to the top of the program .
 and in case of let and const 
- let supports reassignment but not redeclaration and
- variable declared with const keyword are very strict as it doesnot allow redeclaration as well as reassignment and also variable declared with let and const are not hoisted .

 And finally in terms of scope variable decalared with var are function scoped and varialbe declared with let and const are block scope .


Q) Explain Hoisting in Js ?

Answer -- Hoisting in javascript is a phenomena where a variable declared with var keyword and function declaration are move to the top of the code and the variable declaration is hoisted to the top not the initialization which basically means that we can access them even before they are declared.

```javascript
console.log(a); // Output: undefined
var a = 5;
 ``` 
It leads to bugs and problems in code .
For example if we try to print a  variable a  which is decalred using var even before its declaration we will get undefined as output as only the declaration part is moved to the Top not the initialization .

 So in order to tackle the issues caused by hoisting, ES6 introduced two new keywords for declaring variables: let and const. what happens is that When variables are declared using let and const, they are also hoisted, but they enter a “temporal dead zone” (TDZ) from the start of the block until the declaration is encountered. This means you cannot access them before their declaration, and attempting to do so will result in a ReferenceError.

```javascript
console.log(b); // Output: ReferenceError: Cannot access 'b' before initialization
let b = 10;
```

Q) What is a callback function in JavaScript?

Ans --The callback function is a type of a function which is passed as an argument to a higher order function (as  In JavaScript, because functions are first-class objects, you can pass functions as parameters to other functions and call them inside the outer function) . It is usually executed after some action has been performed and we want to do something after that action and so in order perform that action we pass a callbackfunction 

for example  

There is a method in javascript called addEvent listener what happens is that when a user perform some action lets say in this case he clicks and as soon as he clicks we want to change the color of  the page so in order to perform that we pass a callback function as a second argument in that method . The main reason of using callback function is that it is very concise and by using a callback function we can pass n no function inside our main function so this makes our function dynamic as oppose to it being hardcoded for one specific function.


---

**Q) What are Closures in JS?**

**Interview Answer:**

- **Definition:** A closure is a combination of a function and its lexical environment.
- **Functionality:** It allows a function to access variables from its outer scope even after the function has returned.
- **Memory:** It is as if the function has a memory and remembers its lexical environment where it was created.
- **Creation:**and  In JavaScript, every function creates a closure, including functions inside other functions.
- **Usage:**  The main usecase of closures is  to create private variables or functions.

**Example:**
so for example  If we have a function called `printAge` that takes a user input called `age` and prints it, and this function is inside another function called `printName` where a variable `name` is declared and set to "Amit is", then after the `printName` function returns, we will still be able to access the `name` variable "Amit" from within the `printAge` function. This is because the inner function retains access to the outer function's scope even after that function has returned it is because the outer function is in the lexical scope of the inner functin .This is what is known as closures.
---


#### ANswer in **detail**------
---

**Need for Closures:**
- Closures are a powerful feature of JavaScript, enabling function encapsulation and private data management.
- They are fundamental to functional programming in JavaScript and are crucial for writing efficient and modular code.

**What is a Closure:**
- A closure is a function that remembers the environment or scope in which it was created.
- This means it retains access to the variables in its lexical scope even after the outer function has returned.
- In JavaScript, every function creates a closure, including functions within functions (nested functions).

**How Closures are Used:**
- Closures are often used to create private variables or functions.
- Since JavaScript doesn’t have built-in support for private variables, closures can encapsulate variables, making them accessible only to certain functions.
- This is useful for data encapsulation and object data privacy.
- Closures are also used in event handling, callbacks, and maintaining state in asynchronous operations.

**Example in JavaScript:**
Here's a simple example in JavaScript:

```javascript
function outerFunction(outerVariable) {
   return function innerFunction(innerVariable) {
       console.log('Outer Variable:', outerVariable);
       console.log('Inner Variable:', innerVariable);
   };
}

const newFunction = outerFunction('outside');
newFunction('inside');
```

**Explanation:**
1. `outerFunction` is defined with one parameter `outerVariable`.
2. Inside `outerFunction`, an `innerFunction` is defined and returned. `innerFunction` takes one parameter `innerVariable`.
3. `innerFunction` has access to both `outerVariable` and `innerVariable` because of the closure.
4. When `outerFunction` is called with `'outside'`, it returns `innerFunction`.
5. `newFunction` now holds the `innerFunction` returned by `outerFunction`, and when `newFunction` is called with `'inside'`, it logs both `outerVariable` and `innerVariable`.

---









Q) Differentiate between map() , filter() and reduce() ?


Ans --   Map , filter and reduce are array methods .which are used to perform array operations

When we  use Map and filter method we form a new array by performing some operaion on the original array and then returning a new array.  Both of this method takes a callback function in its argument and the callback function inside take three things in the argument 
 current element , current Index and entire array .
IN which map method performs some operation on each element of the array and returns a new array 
for example if we have an array with element  [2,3 and 4] and using map method we can just perform some operation on each element and then return that new array.

While in case of filter  method it takes same argument but the difference is that it does not perform some operation on each element rather it checks for a condition and if some element satisfiy that condition those elements are returned in a new array.

for example - if i have an array with elements like [2.3.4] and i put a condition inside it that only even elements should return then we will get a new array with only elements inside it .

And In case of Reduce method -- This method is little differenet as compared to previous two method This method like the previous two method takes a callback function in its argument but this method also reqires one more argument which is the initial value of the accumulator and its callback function also has the same three argument  but its callback function takes one more argument and that argument is called accumulator . 

Because of the this distinction The callback function in the reduce method is called an accumulator function .

And the other main difference of the reduce method is that it does not return an array like the previous two method while it returns a single accumulated value .

for example  - if i have an array [2,3,4] and i want to get the sum of all the elements in the array for this kind of scenarion reduce method is needed. 

Q)Describe the features introduced in ES6 ?

Ans -- ES6, also known as ECMAScript 2015, introduced several new features and improvements to the JavaScript language. 

For Example :--

1) Introduction to two new keywords let and const: ES6 introduced block-scoped variables using the let and const keywords. let allows declaring variables that are limited to the block scope, while const is used for declaring constants that cannot be reassigned.


2) Arrow Functions: Arrow functions provide a more concise syntax for writing function expressions. They have a shorter syntax, lexical this binding, and implicit return for one-liner functions.


3) Introduction to Template Literals: Template literals allow embedding expressions inside string literals using backticks (`). This feature provides an easier way to concatenate strings and variables, making the code more readable.

4) Introduction to Destructuring : Destructuring allows extracting values from arrays or objects into individual variables. It provides a concise way to assign values and access nested properties.

5) Spread Operator: The spread operator (...) allows expanding elements of an iterable (like an array or string) into individual elements. It can be used for array concatenation, function arguments, and object cloning.

6) Promises: Promises provide a cleaner way to handle asynchronous operations. It solved the problem of callback Hell. They represent the eventual completion (or failure) of an asynchronous operation and allow chaining multiple asynchronous operations together.


Classes: ES6 introduced class syntax for creating objects with a constructor and methods. It provides a more familiar syntax for defining classes and inheritance in JavaScript.

Modules: ES6 introduced a standardized module system using the import and export keywords. Modules allow organizing code into separate files and provide better encapsulation and reusability.

Default Parameters: ES6 allows defining default values for function parameters. If a parameter is not provided, the default value will be used instead.
Enhanced Object Literals: ES6 introduced enhancements to object literals, including shorthand property and method definitions, computed property names, and the ability to define setters and getters.

These are just a few of the many features introduced in ES6. These additions have significantly improved the JavaScript language, making it more powerful, expressive, and easier to work with.



Q) What is concat method and how it is used with arrays ?

Ans --The concat method in JavaScript is used to join or merge two or more values. It can be used with different data types, such as strings and arrays, to combine them into a single value.also This method does not change the existing arrays but instead returns a new array that contains the elements of the original arrays.

for example if we have two arrays with element 123 and 456 and we want a new array with these two merge we can use the syntax 

arr.concat and pass arr2 in the argument of the concat method to get the desired merged arrary



Q) What is a do while loop and how it is different from while loop ?

**Ans**: 

### `do...while` Loop:
A `do...while` loop is a control flow statement that executes a block of code at least once, and then repeatedly executes the block as long as a specified condition is true. The condition is evaluated after the execution of the loop's body, ensuring that the loop's body is executed at least once.

### Syntax:
```javascript
do {
    // code block to be executed
} while (condition);
```

### Example:
```javascript
let count = 0;
do {
    console.log(count);
    count++;
} while (count < 5);
```
In this example, the code block inside the `do...while` loop will execute five times, printing numbers 0 to 4.

### `while` Loop:
A `while` loop is a control flow statement that executes a block of code as long as a specified condition is true. The condition is evaluated before the execution of the loop's body, meaning the loop's body may not execute at all if the condition is initially false.

### Syntax:
```javascript
while (condition) {
    // code block to be executed
}
```

### Example:
```javascript
let count = 0;
while (count < 5) {
    console.log(count);
    count++;
}
```
In this example, the code block inside the `while` loop will also execute five times, printing numbers 0 to 4.

### Key Differences:
1. **Execution Guarantee**:
   - **`do...while` Loop**: Executes the code block at least once, regardless of the condition.
   - **`while` Loop**: May not execute the code block at all if the condition is initially false.

2. **Condition Check**:
   - **`do...while` Loop**: Checks the condition after executing the code block.
   - **`while` Loop**: Checks the condition before executing the code block.

3. **Use Cases**:
   - **`do...while` Loop**: Useful when the code block must be executed at least once, regardless of the condition.
   - **`while` Loop**: Suitable when the code block should only be executed if the condition is initially true.




Interview Answer ---
**Ans**: A `do...while` loop executes a block of code at least once before checking the condition, ensuring the code runs at least once. In contrast, a `while` loop checks the condition before executing the code block, so it may not run at all if the condition is false initially. The key difference is when the condition is evaluated: after the code block in `do...while`, and before the code block in `while`.

Bs hogya iske baad seedhe session 8 aur seesion aur session 10 aur session 11 ke notes banana hai .


















Q ) What are different types of error in javascript ? 

Answer -

### Types of Errors in JavaScript

1. **SyntaxError**: Occurs when the code contains invalid syntax.
   ```javascript
   let a = ; // SyntaxError: Unexpected token ;
   ```

2. **ReferenceError**: Happens when a non-existent variable is referenced.
   ```javascript
   console.log(x); // ReferenceError: x is not defined
   ```

3. **TypeError**:A `TypeError` in JavaScript occurs when an operation is performed on a value of an unexpected type. For example, trying to call a non-function value as a function or accessing properties of `null` or `undefined`¹. Here's a simple example:

```javascript
let num = 42;
num(); // TypeError: num is not a function
```
 ```javascript
   let obj = null;
   console.log(obj.property); // TypeError: Cannot read property 'property' of null
   ```

4. **RangeError**: Thrown when a value is not within the set or expected range.
   ```javascript
   let arr = new Array(-1); // RangeError: Invalid array length
   ```

5. **EvalError**: Related to the `eval()` function, though it's rarely used nowadays.
   ```javascript
   // Example of EvalError is rare in modern JavaScript
   ```

6. **URIError**: Occurs when there is an issue with encoding or decoding URIs.
   ```javascript
   decodeURIComponent('%'); // URIError: URI malformed
   ```



































# Extra -----------------------------------------




### **Q) What is the difference between `for...of` and `for...in` loops? Provide an example use case.**

**Answer:**

`for...of` and `for...in` are both looping constructs in JavaScript, but they serve different purposes and operate on different types of iterable structures.

- **`for...of` Loop:** This loop is used to iterate over iterable objects like arrays, strings, maps, etc. It loops through the values of the iterable. For example:

  ```javascript
  const array = ['a', 'b', 'c'];
  for (const value of array) {
    console.log(value); // 'a', then 'b', then 'c'
  }
  ```

  **Use Case:** Use `for...of` when you want to iterate over the values in an iterable structure.

- **`for...in` Loop:** This loop is used to iterate over the enumerable properties of an object. It loops through the keys (property names) of the object. To access the value associated with each key, you can use the key within square brackets `[]` or dot notation if the key is a valid identifier. For example:

  ```javascript
  const person = { name: 'Alice', age: 25 };
  for (const key in person) {
    console.log(key); // 'name', then 'age'
    console.log(person[key]); // 'Alice', then 25
  }
  ```

  **Use Case:** Use `for...in` when you want to iterate over the keys (property names) of an object, and you can access the corresponding values using `object[key]`.

**Key Differences:**
- **`for...of`:** Iterates over values of an iterable.
- **`for...in`:** Iterates over keys of an object, and you can access the values using `object[key]`.

---
# Distinction in Arrays and object while dealing with spread Operator and not iterating in Object

### **1. Why Does `{...obj}` Work if Objects Are Not Iterable?**

In JavaScript, objects are **not** iterable in the same way arrays or strings are. However, there's something special about the `{...obj}` syntax.

- **What is `{...obj}`?** This is called the **spread operator**. The spread operator takes all the key-value pairs from `obj` and spreads them into a new object. So, when you write `{...obj}`, you're telling JavaScript, "Take everything inside `obj` and put it into this new object."

- **Why does it work?** The spread operator doesn’t actually “iterate” over the object like a loop. Instead, it just copies all the key-value pairs from the original object into a new one. This is why it works even though objects are not iterable in the usual sense.

### ** 2. How Can We Use `for...in` with Objects if They Are Not Iterable?**

- **What is `for...in`?** The `for...in` loop is a special type of loop in JavaScript designed to work with objects. It loops over all the keys (or properties) of an object.

- **How does `for...in` work?** Even though objects are not "iterable" like arrays, they have keys, and the `for...in` loop is made to go through each key in the object. Here's how it works:

  ```javascript
  let obj = {a: 1, b: 2, c: 3};
  for (let key in obj) {
    console.log(key); // This prints 'a', then 'b', then 'c'
    console.log(obj[key]); // This prints 1, then 2, then 3
  }
  ```

  The `for...in` loop doesn't iterate over the object in the way an array is iterated. Instead, it just goes through each key in the object, one by one, and lets you access the value for each key using `obj[key]`.

### **Summary:**
- **Spread Operator (`{...obj}`):** It copies all key-value pairs from one object into a new object. It works because it’s not truly iterating; it's just copying the properties.
- **`for...in` Loop:** This loop is specially designed to go through the keys of an object, even though objects are not iterable in the usual sense like arrays. It doesn’t iterate over values but over keys, and you can then access the values using those keys.


-----

### **1. Spread Operator in Arrays to Objects:**

```javascript
let fruits = ["apple", "banana", "cherry"];
let obj = {...fruits};
console.log(obj); // Output: {0: "apple", 1: "banana", 2: "cherry"}
```

- **Why It Works:** 
  - Arrays are inherently iterable, meaning JavaScript can go through each element one by one.
  - When you use the spread operator `{...fruits}`, JavaScript takes each element in the array and pairs it with its index to create key-value pairs in a new object.
  - The keys are the array indices (`0, 1, 2`), and the values are the array elements (`"apple", "banana", "cherry"`).

### **2. Spread Operator in Objects to Arrays:**

```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = [...obj];
console.log(arr); // Error
```

- **Why It Doesn’t Work:**
  - Objects are not inherently iterable like arrays. 
  - The spread operator in the context of arrays (`[...]`) expects something it can loop over, such as an array, a string, or another iterable. 
  - Since an object doesn’t have a natural sequence of elements (like an array does), JavaScript doesn’t know how to break it down into an array using the spread operator, resulting in an error.

### **3. Spread Operator in Objects to Objects:**

```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = {...obj};
console.log(arr); // Output: {a: 1, b: 2, c: 3}
```

- **Why It Works:**
  - Here, you’re not really “iterating” over the object; instead, you’re copying its key-value pairs into a new object.
  - The spread operator `{...obj}` takes each key-value pair from `obj` and puts it into a new object, which you’ve named `arr` (even though it’s still an object, not an array).
  - Since you’re just copying key-value pairs and not trying to iterate over the object like an array, it works perfectly.




Quick Reference interview seeing--




VVi*** what do you think now about using spread operator in array and object ???


Ans - l

```javascript 
let fruits = ["apple", "banana", "cherry"];
let obj = {...fruits};
console.log(obj); // Output: {0: "apple", 1: "banana", 2: "cherry"}
```

1) This works because array can be iterated using spread operator and a object can be created using its indices and elements for  example we can create a key out of its indices and value out of its element .
```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = [...obj];
console.log(arr); // Error
```
 but an object cannot be iterated using spread operator to create an array.

```javascript
let obj = {a: 1, b: 2, c: 3};
let arr = {...obj};
console.log(arr); // Output: {a: 1, b: 2, c: 3}
```
while in case of making an object out of another object using spread operator . Here we are actually not iterating the object here we are just copying one object keys and value and putting it in anothere object.



-------




---

### **Using `for...in` and `for...of` Loops in Arrays**

#### **1. `for...in` Loop**

- **Purpose:** Iterates over enumerable properties (keys) of an object or array, including those added to the array object.
- **Usage:** While `for...in` can be used with arrays, it’s generally not recommended due to potential unexpected results from additional properties.
- **Explanation:** The `for...in` loop iterates over the keys (indices) of the array. However, if you add extra properties to the array, like `arr.customProperty`, those extra properties will also be included in the loop. This can lead to unexpected results, as the loop will also iterate over these additional properties, not just the core elements of the array.

  ```javascript
  const arr = [10, 20, 30];
  arr.customProperty = "custom";

  for (let key in arr) {
    console.log(key); // Outputs: 0, 1, 2, customProperty
    console.log(arr[key]); // Outputs: 10, 20, 30 ,custom
  }
  ```

#### **2. `for...of` Loop**

- **Purpose:** Specifically designed for iterating over iterable objects like arrays. It directly accesses the values, not the keys.
- **Usage:** Ideal for arrays as it simplifies accessing each element's value directly. It does not include additional properties added to the array, focusing only on the elements.
- **Explanation:** The `for...of` loop iterates directly over the values of the array, making it more appropriate for accessing array elements without including any extra properties that might have been added.

  ```javascript
  const arr = [1, 2, 3];

  for (let value of arr) {
    console.log(value); // Outputs: 1, 2, 3
  }
  ```

#### **3. Iterating Over Object and Array Values**

- **Iterating Over Object Values:**

  ```javascript
  const obj = { a: 1, b: 2, c: 3 };
  let output1 = "";
  for (let key in obj) {
      output1 += obj[key] + " ";
  }
  console.log(output1); // Output: "1 2 3 "
  ```

  - **Explanation:** The `for...in` loop is used here to access the values of the object by iterating over its keys.

- **Iterating Over Array Values Using `for...in`:**

  ```javascript
  const arr = [10, 20, 30];
  let output2 = "";
  for (let index in arr) {
      output2 += arr[index] + " ";
  }
  console.log(output2); // Output: "10 20 30 "
  ```

  - **Explanation:** This loop iterates over array indices and accesses each element via its index.

- **Iterating Over Array Values Using `for...of`:**

  ```javascript
  let output2 = "";
  for (let value of arr) {
      output2 += value + " ";
  }
  console.log(output2); // Output: "10 20 30 "
  ```

  - **Explanation:** This loop iterates directly over the values of the array, which is simpler and more intuitive for accessing each element.

#### **Summary:**

- **`for...in` Loop:** Iterates over keys (indices) of arrays and properties of objects. Not recommended for arrays due to potential inclusion of extra properties.
- **`for...of` Loop:** Iterates directly over values of arrays and other iterable objects. More appropriate for arrays as it accesses values directly.

---
------------------------------------------------------------------------------------------------------------------------------------------------------------------












