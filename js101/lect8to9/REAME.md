 # LECTURE 8 very very Important topics

---

## 0) Scope
Scope determines the region in the program where you can access variables. There are  two types of scope:

### a) Global Scope
- **Definition:** Variables declared in the global scope are accessible throughout the entire program.
- **Example:** 
  ```javascript
  var globalVar = "I'm global";
  function display() {
      console.log(globalVar); // Accessible
  }
  display();
  ```

  **Note:** A global variable in one file can be accessed in another file using `import` and `export` (common in modules like React).

### b) Local Scope
Local means something whihc is specific to an area like here Local scope is specific to a function or block and Local scope can be further divided into:
- **b1) Function Scope**
  - **Definition:** Variables declared within a function are accessible only within that function.
  - **Example: 1**
    ```javascript
	 function func() {
	let b = "variables inside"
	console.log(b);
	}
	func();
	console.log(b); // Error: b is not defined
    ```
 - **Example: 2**


- **Local Scope**: Variables declared inside a function are local to that function.
- **Global Scope**: Variables declared outside any function are global.
- **ReferenceError**: Trying to access a variable that hasn't been declared in the current scope results in a `ReferenceError`, not `undefined`.

### Code:
```javascript
function fish(){
  var fishCount = 1;
  console.log(fishCount); // 1
}
fish();
console.log(fishCount); // ReferenceError: fishCount is not defined

/* 
this will return an error cause is not declared in global  scope so javascript will not know (it is not even defined kyunki bahar defined hota aur anda value assign hota toh bahar me undefined show krta  pr yaha toh bahar declare bhi nahi kiya gya hai ise toh js ise pehchanta hi nahi hai)

*/
```


---

- **b2) Block Scope**
  - **Definition:** Variables declared within a block (e.g., inside `{}`) are only accessible within that block.
  - **Example:**
    ```javascript
    var a = 5;
    if (a === 5) {
        let b = 25;
        console.log(b); // Accessible
    }
    console.log(b); // Error: b is not defined
    ```

**Special Note on `var`:** 
- `var` is function-scoped, not block-scoped. (isilea toh let aur const aaya)
- **Example:**
  ```javascript
  var a = 5;
  if (a === 5) {
      var b = 25;
      console.log(b); // 25
  }
  console.log(b); // 25, because var ignores block scope
  ```


- **Example Tricky ---(To see about function scope of var):**
  ```javascript
  var a = 5;
var a =10 ;
fun();
function func(){
if(a ==10)
{
var x =10;
console.log(x); //10
}
console.log(x); //10
}

console.log(x) //Error reference error cause it is not declared in global scope
 // 25, because var ignores block scope
  ```

**Summary:**
- `let` and `const` are block-scoped.
- `var` is function-scoped.


#### Note -- We can access outer scope variable from inner scope but not vice versa .
---


## 1) ----- Lexical Scope-----------

### what it is : 

- Lexical scope is a fundamental concept in programming that determines the accessibility of variables and functions determined at compile time by its position in the source code.  It allows access outer scope variable from inner scope but not vice versa . (also it starts from top till the function where we are). It is static and does not change at runtime.


### How It Works:

- When a function is defined, it captures the scope in which it was created. This means that the function has access to variables defined in its own scope and in any parent scopes.

#### **  Key Point: **

`Lexical scope is determined at the time the code is written, not when it is executed. This makes it predictable and easy to understand where variables are accessible.`



- **Example:**
  ```javascript
  const msg = "I am parent";
  function newMsg() {
      console.log(`${msg} and I am child`);
  }
  newMsg(); // Output: I am parent and I am child
  ```

example 2 --- (here it will throw as msg variable is outside its lexical scope which is from the start till the point of the function being called . 
This entire scope is called Lexical environment .
   
This is different form normal scope as here the scope of this child is not restricted to this area rather it is starting from the start to the point it is being called .


- **Example:**
  ```javascript
function newMsg (){
console.log(`${msg}  and i am child`);
}
newMsg();
 const msg = "I am parent";
  ```


- **Key Points:**
  - Lexical scope is static and determined when the code is written.
  - The inner function can access variables from its outer scope, but the outer function cannot access variables from its inner scope.

-------

### Difference Between Lexical Scope and Lexical Environment:
- **Lexical Scope:** The region in the source code where a variable is accessible.It is determined at compile time based on the structure of the code.

- **Example**: If a variable is declared inside a function, it is only accessible within that function and its nested functions.

### Lexical Environment
- **Definition**: Lexical environment is a data structure that holds the variables and function declarations within a particular scope. It is created at runtime and keeps track of the variables' values and their relationships.
- **Example**: When a function is executed, a new lexical environment is created to store the variables defined within that function.

### Key Differences
- **Scope vs. Environment**: Lexical scope is about where variables are accessible in the source code, while lexical environment is the actual runtime structure that manages these variables.
- **Compile Time vs. Runtime**: Lexical scope is determined at compile time, whereas lexical environment is created and managed at runtime.

Here's a simple illustration:

```javascript
function outer() {
    const outerVar = 'I am outside!';
    
    function inner() {
        console.log(outerVar); // Lexical scope allows access to outerVar
    }
    
    inner();
}
outer();
```

In this example:
- The **lexical scope** of `outerVar` includes the `outer` function and its nested `inner` function.
- The **lexical environment** is created when `outer` is called, storing `outerVar` and making it accessible to `inner`.



## Note - Read from Jonas.
---------------------------------------------------------------------------------------
##------- 2) Hoisting --------------

 Hoisiting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution . 
Note - Only declaration not assignment of the variable isilea toh undefined aaya neeche code me .

### Hoisting with `let` and `const`:

#### Example:
```javascript
console.log(a);
var a = 10;
```
- **Output:** `undefined` because `var a;` is hoisted to the top, but the assignment happens later.


The above code should be visualized like this so that why we get undefined .
```javascript
var a ;
console.log(a);
a=10;
``` 
 
### Hoisting with `let` and `const`:
```javascript
console.log(a);
let a = 10;
```
- **Output:** `ReferenceError`(reference error as we cannot access it before initialization )
 because `let` and `const` declarations are not hoisted.to the top like var


ex 3--  

```javascript
func();
function func(){
console.log("hello"); //  Hello   Because the entire function is hoisted at the top 
}
```

Note - function declaration is hoisted entirely . (other function is hoisted partially (IT MEANS ONLY VARIABLE IS HOISTED AND uska type nahi pata ki wo variable function hai so if we call that function it will throw  TypeError not undefined because we are making undefined call as function so this leads to error as we cannot make funciton call on undefined.) only if the function is declared using var cause of only declaration hoisted at top in var keyword and not assignment and   if the function expression or arrow function is declared using let or const it will not be hoisted .(because let and const are not hoisted )


### Function Hoisting

#### 1. **Function Declarations**:
   - **Entirely Hoisted**: Function declarations are hoisted entirely to the top of their scope. This means you can call the function before its declaration in the code.
   - **Example**:
     ```javascript
     console.log(myFunction()); // Works because myFunction is hoisted
     
     function myFunction() {
         return "Hello, world!";
     }
     ```

 - **Example 2**:
```javascript
console.log(myFunction); // undefined, because only the declaration is hoisted
myFunction(); // TypeError: myFunction is not a function
var myFunction = function() {
    return "Hello, world!";
};
```

### Explanation:
1. **Hoisting**: In JavaScript, variable declarations (but not initializations) are hoisted to the top of their scope. This means that the declaration of `myFunction` is hoisted, but its assignment (`function() { return "Hello, world!"; }`) is not.

2. **First `console.log(myFunction)`**: At this point, `myFunction` is declared but not yet assigned, so it logs `undefined`.

3. **Calling `myFunction()`**: Since `myFunction` is `undefined` at this point, trying to call it results in a `TypeError`, not a `ReferenceError`. The error message will be: `TypeError: myFunction is not a function`.

4. **Assignment**: After the assignment, `myFunction` becomes a function that returns `"Hello, world!"`.

#### 2. **Function Expressions and Arrow Functions**:

   - **Hoisted Partially with `var`**: If a function expression is declared using `var`, only the variable declaration is hoisted, not the assignment.


   - **Not Hoisted with `let` or `const`**: If a function expression or arrow function is declared using `let` or `const`, it is not hoisted.
   - **Example**:
     ```javascript
     console.log(myFunction); // ReferenceError, because let and const are not hoisted
     
     let myFunction = () => {
         return "Hello, world!";
     };
     ```



### Special Case with Function Expressions:
```javascript
funcExp();
var funcExp = function display() {
    console.log('Will this work?');
};
```
- **Output:** `TypeError` because `funcExp` is hoisted as `undefined`, but the function is not assigned yet.

---

#### Explanation:

1. **Variable Hoisting**:
   - When you declare a variable using `var`, the declaration is hoisted to the top of its scope, but the initialization is not.
   - This means that the variable `funcExp` is hoisted and set to `undefined` at the top of its scope.

2. **Function Expression**:
   - The function expression assigned to `funcExp` is not hoisted. Only the variable declaration is hoisted.

### Your Code:

```javascript
funcExp(); // Throws TypeError: funcExp is not a function

var funcExp = function display() {
    console.log('Will this work!');
};
```

### What Happens During Hoisting:

- The variable declaration `var funcExp` is hoisted to the top, but the assignment `funcExp = function display() { ... }` is not.
- At the time `funcExp()` is called, `funcExp` is `undefined`, leading to a `TypeError` because you are trying to call `undefined` as a function.

### Hoisted Version of Your Code:(This is what actually happens )

```javascript
var funcExp; // Declaration is hoisted

funcExp(); // funcExp is undefined here, so this throws a TypeError

funcExp = function display() {
    console.log('Will this work!');
};
```

### Correct Usage:

To avoid this error, you should ensure that the function expression is assigned before calling it:

```javascript
var funcExp = function display() {
    console.log('This will work!');
};

funcExp(); // Now it works correctly
```



Output: Function expressions with var are partially hoisted. The variable declaration is hoisted and initialized to undefined, but the assignment is not and Calling undefined as a function results in a TypeError because undefined is not a function Therefore, calling the function before it is defined will throw a TypeError: funcExp is not a function because undefined is not a function.





-----------------------------------------------------------------------------------------


## 3) Callback Functions
- A callback function is a function that is passed as an argument to another function and is executed after some operation has been completed.

- **Example:**
  ```javascript
  function higherOrderFunction(callback) {
      callback();
  }
  
  function myCallback() {
      console.log("I am a callback function");
  }
  
  higherOrderFunction(myCallback);
  ```
**Why Use Callbacks?**
- Callbacks make functions more flexible and reusable by allowing different functions to be executed at different times without modifying the higher-order function's code.



## 4) Higher-Order Functions
- A higher-order function is a function that takes another function as an argument or returns a function as a result.

- **Example:**
  ```javascript
  function higherOrderFunction(callback) {
      callback();
  }
  
  function myCallback() {
      console.log("I am a callback function");
  }
  
  higherOrderFunction(myCallback);
  ```

In this example:
- `myCallback` is the **callback function** because it is passed as an argument to `higherOrderFunction`.
- `higherOrderFunction` is the **higher-order function** because it takes another function (`myCallback`) as an argument.

### Key Points:
- A callback function is not necessarily called inside another function; it is passed to another function to be called later.
- A higher-order function is defined by its ability to take functions as arguments or return them.


-------------------------
Q) Why are we passing callback function as parameter to the other function and calling it using the parameter name when we can simply call that function inside the other function by its name?

Answer -- By passing a callback function, you're giving the higher-order function (the function that takes another function as an argument) the ability to work with any function you pass to it without knowing about that funcion . This makes the higher-order function flexible and reusable, allowing it to perform different tasks without needing to change its code (alag alag function hoga toh alag alg time call kr denge ek function call me ek callback function pass hoga dusre me dusra is trh se main function ke code me change nahi krna hoga aur ekdm flexible aur reusable ho jayega nahi toh sirf ek hi function ko call kr paane ke wajah se wo reusable aur flexible nahi rhta aur toh aur humko wo function ka naam janna padta jisko call function me krte pr callback pass krne se we don't need to know about that function ). It can adapt to whatever function you provide, making your code more versatile and easier to maintain.

### Example:
```javascript
function bikeRepair(param){
console.log("start")
callOwner("Ashok");
}
function callOwner(a){
console.log("calling the customer "+a);
console.log("take your bike back");
}
bikeRepair();


function bikeRepair(param){
console.log("start")
param("Ashok");
}
function callOwner(a){
console.log("calling the customer "+a);
console.log("take your bike back");
}
bikeRepair(callOwner);
```

 **Full code after understanding why call back is important**

### Example:
```javascript
function bikeRepair(action) {
    console.log("start");
    action("Ashok");
}

function callOwner(name) {
    console.log("calling the customer " + name);
    console.log("take your bike back");
}

function notifyMechanic(name) {
    console.log("notifying the mechanic about " + name);
}

bikeRepair(callOwner);  // This calls the customer
bikeRepair(notifyMechanic);  // This notifies the mechanic

```

Q) How callbacks are better understand it with this code ?

Ans -- 
### Example:
```javascript
function sum (n1,n2){
console.log(n1+n2);
}
function multiply (n1,n2){

console.log(n1*n2)

}
function subtract (n1,n2){

console.log(n1-n2)

}


function calculator (num1,num2, operation ){

console.log(`Calculating on ${num1} and ${num2})
operation (num1, num2);
}

calculator (5,5,sum);
calculator(5,5,multipy); //differenct callback ,different answers.
```
---------------


## 5) Closures


Q) What are closures in javascripts ?

Answer - Function + lexical Environment .
A closure is a `combination of a function and its lexical environment`. It allows a function to access variables from its outer scope, even after the outer function has returned.


### Example:
```javascript
function parent() {
    const msg = "I am from function parent";
    function child() {
        console.log(msg + " called from child function");
    }
    return child;
}
let result = parent();
result(); // Output: I am from function parent called from child function
```
Q) BUT HOW  CAN WE ACCESSING THIS msg variable here ???

Answer -- Cause when we are returning the function we are not only returning the function we are also returning its lexical environment so that's why the variable which were accessible in it .

The `child` function remembers its lexical scope (the `msg` variable) even after the `parent` function has returned.


So In conclusion

If a function is created inside another function , it retains access to the scope of that outer function function even after that outer function returns , because the outer function is in the lexical scope of the inner function .

Q) How closures are formed in javascripts?

Ans --- vvimp 

### Practical Example of Closures:
```javascript
function multiply(storedNum) {
    return function(num) {
        return storedNum * num;
    };
}

const multiplyTwo = multiply(2);
const multiplyThree = multiply(3);
const multiplyFour = multiply(4);

console.log(multiplyTwo(5)); // 10
console.log(multiplyThree(6)); // 18
console.log(multiplyFour(7)); // 24
```


Explanation -- The above is returning a function and the below is calling that function as now the other varaible has the access to the returned function so it can call using its own name(`in this case multiplyTwo()` ab us variable me function return hoke aaya`).and access the parent function due to having the access of its lexical scope due to closure.

Note --The inner function returned by `multiply` retains access to `storedNum` due to closures.




#  ---lecture 9----


NOTE -Read all about this topic (array and es6) in Jonas array section and uske baad ka section  copy notes cause sab waha updated hai .

