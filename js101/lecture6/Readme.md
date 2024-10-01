### Lecture 6 Notes

#### Topics Covered:
- Nested Objects
- Objects
- Destructuring of Objects and Arrays
- Floating Point Numbers
- Special Numbers in JavaScript

---

### 1. Nested Objects

**Explanation:**
- **Nested objects** occur when  an object  itself  has another object as property . This structure allows for more complex data representation.

**Example:**
```javascript
let person = {
  name: "Rahul",
  age: 24,
  address: {
    plotNo: 117,
    streetName: "XYZ STREET",
    pinCode: 123456,
    landMark: "ABC CIRCLE",
    anProp: {
      a: 1,
      b: 2,
      c: {
        d: 4,
        e: 5,
      }
    }
  }
};

// Accessing nested properties
console.log(person.address.anProp.c.e); // Output: 5
console.log(person["address"]["anProp"]["c"]["e"]); // Output: 5
```

---

### 2. Destructuring of Objects and Arrays

**Explanation:**
- **Destructuring** is a syntax that allows you to unpack values from arrays or properties from objects into another  variables.

**Example:**
```javascript
let {name, age} = person;
console.log(name); // Output: "Rahul"
console.log(age);  // Output: 24
```

**Example of Renaming Variables in object Destructuring :**

we can do it using colon(:) and then writing variable name we want to give

```javascript
let {name: a, age: b} = person;
console.log(a); // Output: "Rahul"
console.log(b); // Output: 24
```

**Note:**
- In object destructuring, the **order** of variable names does not matter, whereas in array destructuring, it does Because array are indexed based and object are name based.

---


### 3. Arrays are Like Objects

**Explanation:**
- Arrays are similar to objects because they also store data in key-value pairs. The **indices** of the array are the **keys**, and the elements are the **values**.

#### In order to check if anything is array or not we have a method called `Array.isArray()` 

**Example:**
```javascript
let n1 = [1, 2, 3, 4, 5];
console.log(Array.isArray(n1)); // Output: true
```

**Additional Example Using `Array.isArray()` Method:**
```javascript
function checkObject(par1, par2) {
  return Array.isArray(par1) || Array.isArray(par2);
}

console.log(checkObject({code: 'javascript'}, {language: 'javascript'})); // Output: false
```

---

### 4. Floating Point Numbers

**Explanation:**
- **Floating point numbers** in JavaScript are numbers with decimals. Operations on them can sometimes produce incorrect results due to the way they are represented in memory.

**Example:**
```javascript
console.log(303.3 * 3); // Output: 909.9000000000001
console.log(0.1 + 0.2); // Output: 0.30000000000000004
```
Note -- The mathematical operations of floating numbers (decimal no ) are bound to have error in javascript.whenever dealing with arithmetic operators like (*,+.-./)

**How to  Correct Floating Point Errors: ?**

- In order to deal with floating point number (decimal no in javascript) we have Something called  **Math object**  which helps in producing accurate result.

**Special Numbers in JavaScript:**
- **Infinity**: `typeof` is "number"
- **-Infinity**
- **-0**
- **NaN**: `typeof` is "number"


# Note -This all thing is happening because javascript do type coercion behind the scene.

### 1. Operations with Infinity and zero 
```javascript

console.log(0 / Infinity);        // Outputs: 0
console.log(5 / -Infinity);       // Outputs: -0
console.log(5 / 0);               // Outputs: Infinity
console.log(5 - Infinity);        // Outputs: -Infinity
console.log(-0 / 0);              // Outputs: NaN
console.log(Infinity - Infinity);        // Outputs: NaN
console.log(Infinity / Infinity);        // Outputs: NaN


// Additional examples

// 1. Comparing Infinity with a very large number
console.log(Infinity > 1e308);  // Outputs: true
// Explanation: Infinity is greater than any finite number, including very large numbers like 1e308.

// 2. Result of Math.pow(10, 1000)
console.log(Math.pow(10, 1000));  // Outputs: Infinity
// Explanation: The result of raising 10 to the power of 1000 is a number too large to be represented in JavaScript, resulting in Infinity.

// 3. Handling Infinity in arrays
console.log([Infinity, 1, 2].sort());  // Outputs: [1, 2, Infinity]
// Explanation: When sorting, Infinity is considered larger than any finite number, so it appears at the end of the sorted array.

// 4. Result of Number.MAX_VALUE * 2
console.log(Number.MAX_VALUE * 2);  // Outputs: Infinity
// Explanation: Multiplying the largest representable number in JavaScript by 2 results in a value that exceeds the maximum limit, resulting in Infinity.

// 5. Handling Infinity in JSON
console.log(JSON.stringify(Infinity));  // Outputs: "null"
// Explanation: JSON does not support Infinity, so it is converted to null when stringified.

// 6. Result of Math.log(0)
console.log(Math.log(0));  // Outputs: -Infinity
// Explanation: The natural logarithm of 0 is negative infinity because as the input approaches 0, the logarithm approaches negative infinity.

// 7. Handling Infinity in loops
// This code will run indefinitely, so be cautious when testing it.
for (let i = 0; i < Infinity; i++) {
    if (i > 1000) break;  // Adding a break condition to prevent an infinite loop
    console.log(i);
}
// Explanation: A loop with a condition `i < Infinity` will run indefinitely unless a break condition is added.

// 8. Result of Math.sqrt(-Infinity)
console.log(Math.sqrt(-Infinity));  // Outputs: NaN
// Explanation: The square root of a negative number is not a real number, so JavaScript returns NaN.

// 9. Handling Infinity in conditional statements
if (Infinity) {
    console.log("Infinity is truthy");  // Outputs: Infinity is truthy
}
// Explanation: Infinity is considered a truthy value in JavaScript, so the condition evaluates to true.

// 10. Result of Infinity.toString()
console.log(Infinity.toString());  // Outputs: "Infinity"
// Explanation: The `toString` method converts the Infinity value to the string "Infinity".

```

### 2. Operations with NaN and Undefined

Always return NaN no example needed.

### 3. Operations with Null
```javascript
console.log(5 / null);      // Outputs: Infinity (cause it is 5/0)
console.log(null / 5);      // Outputs: 0 (cause 0/5)
console.log(null - 5);      // Outputs: -5
```

### 4. Operations with Arrays
```javascript
console.log(5 / []);       // Outputs: Infinity (cause it is 5/0)
console.log([5] / 5);      // Outputs: 1
console.log([2, 5] / 5);   // Outputs: NaN (cannot be coerced to a num)
```

### 5. Operations with Empty Strings
```javascript
console.log("" / ""); // Outputs: NaN ( cause it is 0/0) =NaN
console.log("" - 5);  // Outputs: -5
```

### 6. Operations with Objects
```javascript
console.log(5 / {});         // Outputs: NaN (cannot be coerced to a num)
```


---------------# SEE THIS ONLY  (to remember above mathematical operatioons)---------------

### Summary
- **Infinity**: Division by `Infinity` results in `0` except when dividing infinity by infinity which gives NaN . multiplication by `Infinity` with zero results in `NaN` , Subtracting Infinity by Infinity also results in NaN, and division by zero results in `Infinity`   (aur sign -ve ho sakta hai jab kahi negative hone ka lage toh)  Except dividing `0/0`  which results in NaN .AUR BAAKI KOI BHI JAGAH infinity use ho toh Infinity answer hoga . Dividing 0 by any number gives 0 (sign depends ).

- - **NaN and Undefined**: Any operation with `NaN` or `undefined` results in `NaN`.(Always NaN chahe aage ya peeche)

- **Null** and **Empty Strings** , []: `null` ,[] and  `""` are coerced to `0`. (0 rhta toh kaise solve hota bs waise kro)

- **Arrays**: Empty arrays are coerced to `0`, single-element arrays are coerced to that element, and multi-element arrays result in `NaN`. 

- **Objects**: Objects cannot be coerced to numbers, resulting in `NaN`. (Always NaN as cannot be coerced)
-------
 # -------------- Some coding example ---------------------------

---

### Code:
```javascript
function count() {
    var start = 1;
    function plus() {
        return start++;
    }
    return plus();
}

console.log(count()); // First call
console.log(count()); // Second call
```

### Output:
```
1
1
```

### Explanation:
- **First Call**: `start` is initialized to `1`. The `plus()` function returns `1` (due to `start++`) and then increments `start` to `2`.
- **Second Call**: `start` is re-initialized to `1`. The `plus()` function again returns `1` and increments `start` to `2`.

---


