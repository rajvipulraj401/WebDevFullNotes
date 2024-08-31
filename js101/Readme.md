

### JavaScript 101

**Note:** JavaScript is a loosely typed language, meaning it doesn’t enforce strict type rules. To enforce stricter parsing and error handling, you can use `"use strict"`. This directive helps catch common coding mistakes and “unsafe” actions, such as using undeclared variables. However, it does not enforce semicolon usage or catch all types of errors. (So, it's good practice to include semicolons manually.)

---

### 1. Why Are Strings Immutable?

Strings in JavaScript are immutable. This means that once a string is created, its value cannot be changed. Any operation that modifies a string actually creates a new string, leaving the original string unchanged.

**Explanation:**
- **Reference Storage:** Variables hold a reference to the string in memory, not the string itself. When you modify the string, you are not changing the original string but rather creating a new string and updating the reference to point to this new string.
- **Immutable Nature:** You cannot change individual characters in a string directly. To change a string, you must create a new string with the desired changes.

**Example:**
```javascript
let str = "Bob";
str[0] = "J"; // No effect on the original string
console.log(str); // Outputs: Bob (string is immutable)

str = "Job"; // Assigns a new string to the variable
console.log(str); // Outputs: Job
```

**Note:**
- JavaScript does not throw an error for attempting to modify a string's characters directly unless `'use strict'` mode is applied, which would result in an error. The string's immutability means that the original string remains unchanged, and only the reference is updated to point to the new string.

---

### 2. What Are Template Literals?

Template literals are a way to create strings that support embedded expressions and multi-line content. They use backticks (`` ` ``) instead of single or double quotes.

**Features:**
- **Embedded Expressions:** Use `${expression}` to insert expressions into the string.
- **Multi-line Strings:** Strings can span multiple lines without needing escape characters for new lines.

**Example:**
```javascript
const name = "Alice";
const greeting = `Hello, ${name}!`; // Embeds the variable `name`
console.log(greeting); // Outputs: Hello, Alice!

const multiLine = `This is a string
that spans multiple lines.`;
console.log(multiLine);
```

---

### 3. What Is an Escape Character?

An escape character allows special characters to be included in strings. In JavaScript, the escape character is the backslash (`\`).

**Common Escape Sequences:**
- `\'` : Single quote
- `\"` : Double quote
- `\\` : Backslash
- `\n` : New line
- `\t` : Tab space

**Examples:**
```javascript
console.log('This is a single quote (\') and this is a double quote (")');
// Outputs: This is a single quote (') and this is a double quote (")

console.log('This is a backslash (\\)');
// Outputs: This is a backslash (\)

console.log('This is a triple backslash (\\\\\\)');
// Outputs: This is a triple backslash (\\\)
```

**Explanation:**
- To include a single backslash in a string, use `\\`.
- To print three backslashes, use `\\\\\\`. Each pair of backslashes represents a single backslash in the output, so three backslashes require six backslashes in the string.

**Note:**
- Escape characters only affect the immediate next character. For multiple backslashes, use double the number of backslashes in the string as needed.

---

### 4. Accessing String Characters

You can access characters in a string using two methods:

1. **Bracket Notation:** `str[i]`
2. **`charAt` Method:** `str.charAt(i)`

**Why Two Ways?**
- `charAt(i)` returns an empty string if the index is out of range, whereas bracket notation returns `undefined`. Bracket notation is preferred for its consistency in error handling.

**Example:**
```javascript
let str = "Hello";
console.log(str[0]); // Outputs: H
console.log(str.charAt(0)); // Outputs: H
console.log(str.charAt(10)); // Outputs: (empty string, index out of range)
```

**Issue with `charAt()`:** `charAt()` returns an empty string for out-of-range indexes, while bracket notation returns `undefined`. This makes bracket notation more robust for character access.

**Methods for Substring Extraction:**
- **`substring(start, end)`**: Extracts characters from `start` to `end` (excluding `end`).
- **`slice(start, end)`**: Similar to `substring()`, but can accept negative indices.
- **`splice()`**: Not used for string manipulation directly; used with arrays.

**Example:**
```javascript
let str = "Hello, World!";
console.log(str.substring(0, 5)); // Outputs: Hello
console.log(str.slice(-6)); // Outputs: World!
```

---

### 5. Why Use String Methods?

String methods provide efficient and readable ways to manipulate strings. They enable complex operations, like capitalization or concatenation, in a single line of code, adhering to the DRY (Don't Repeat Yourself) principle and avoiding verbose code.

**Example:**
To capitalize the first letter of each of two strings and concatenate them:
```javascript
const str1 = "hello";
const str2 = "world";
const result = str1.charAt(0).toUpperCase() + str1.slice(1) + " " + str2.charAt(0).toUpperCase() + str2.slice(1);
console.log(result); // Outputs: Hello World
```

---

### 6. Additional Note on String Immutability

- **Using `charAt()` vs. Bracket Notation:**
  - **`charAt()`**: When the index is out of range, it returns an empty string.
  - **Bracket Notation**: Returns `undefined` for out-of-range indexes, making it more reliable.

**Example:**
```javascript
let str = "Bob";
str[0] = "J"; // No effect on the original string
console.log(str); // Outputs: Bob (string is immutable)

str = "Job"; // Reassigns the variable to a new string
console.log(str); // Outputs: Job
```

**Note:**
- JavaScript will not throw an error for directly modifying a string unless `'use strict'` is used.
- Reassigning a variable to a new string changes the reference, not the original string.

---

### 7. Difference Between `undefined` and `null`

**`undefined`:**
- **Default Value:** When a variable is declared but not initialized, it is automatically assigned the value `undefined`.
- **Indicates Absence of Value:** It signifies that a variable has been declared but has not yet been assigned a value.

**`null`:**
- **Explicit Assignment:** `null` is a value that you can assign to a variable to explicitly indicate that it has no value.
- **Indicates Intentional Absence:** It is used to represent the intentional absence of any object value.

**Example:**
```javascript
var num;
console.log(num); // Outputs: undefined

var emptyValue = null;
console.log(emptyValue); // Outputs: null
```

**Summary:**
- **`undefined`:** Automatically assigned to uninitialized variables.
- **`null`:** Must be explicitly assigned to indicate an intentional absence of value.

---

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






## **Lecture 4: Array Comparisons and Properties**


### Question 1: What does it mean that the array itself is not mutable?


Answer :-- When we say "arrays are mutable," it means that the contents of an array can be changed—elements can be added, removed, or modified. However, when it's stated that "the array itself is not mutable," this refers to the reference or identity of the array.. 

### Arrays Are Mutable, But Their References Are Immutable

- **Mutable Array Contents**: Arrays in JavaScript are mutable, meaning you can modify the elements within an array. You can add, remove, or change the elements without creating a new array.

- **Immutable Reference (Identity)**: The reference or identity of an array refers to the memory location where the array is stored. This reference is immutable, meaning that once a variable points to an array, that reference doesn’t change as long as you keep modifying the same array.

### Examples:

1. **Array Contents Are Mutable**:
    ```javascript
    let arr = [1, 2, 3];
    arr.push(4);
    console.log(arr); // Output: [1, 2, 3, 4]
    ```
    - Here, the content of the array `arr` was modified by adding `4`. This shows that the array's contents are mutable.

2. **Immutable Reference (Identity)**:
    ```javascript
    let a = [1, 2, 3];
    let b = a;
    b.push(4);

    console.log(a); // Output: [1, 2, 3, 4]
    ```
    - Both `a` and `b` point to the same array. When you modify `b` by adding `4`, `a` reflects the change because they share the same reference. The reference (memory location) hasn’t changed.

3. **Reassigning a Variable to a New Array**:
    ```javascript
    let a = [1, 2, 3];
    let b = a;
    b = [4, 5, 6];

    console.log(a); // Output: [1, 2, 3]
    console.log(b); // Output: [4, 5, 6]
    ```
    - In this case, when `b` is reassigned to a new array `[4, 5, 6]`, it now points to a new memory location. The reference for `a` remains unchanged, still pointing to the original array `[1, 2, 3]`. The immutability of the reference means that the original memory location where `a` is pointing remains the same, even though `b` is now pointing to a different location.

### Summary:
- **Mutable Array Contents**: The elements within an array can be modified.
- **Immutable Reference**: The original reference (memory location) of an array does not change. If you reassign the variable to a new array, the original reference remains unchanged, but the variable now points to a new location.

----------------------------


**Q2: What happens when you compare two arrays using `==` or `===` in JavaScript?** 

 
- **Answer**: When you compare two arrays using `==` or `===`, the result is `false` because variables only store references to arrays. Even if the arrays have the same elements, their references (memory addresses) are different, so the comparison returns `false`.  
  - **Example**:  
    ```javascript
    let a = [1, 2, 3];
    let b = [1, 2, 3];
    let c = a;

    console.log(a == b);  // false
    console.log(a === b); // false
    ```
  - **Note**: The references of `a` and `b` are different, so both `==` and `===` return `false`.


---

### **Q3: Can arrays in JavaScript store different types of data? Does an array expect expressions or values?**  
- **Answer**: Yes, arrays can store any type of data in JavaScript. Arrays expect expressions, so whether it's an object, a number, a string, or any other data type, it can be stored within an array.Arrays can store any type of value, and since expressions evaluate to values, you can store expressions in arrays. When we say an array "expects an expression," it means that an array can store anything that results in a value, which includes expressions, literals, variables, and even functions.

**Example with Different Element Types:**
```javascript
let myArray = [
  42,                       // Number
  "Hello",                  // String
  true,                     // Boolean
  { name: "John" },         // Object
  [1, 2, 3],                // Another array
  function() { return 5; }, // Function
  undefined,                // Undefined
  null,                     // Null
  (5 > 3) ? "Yes" : "No"    // Ternary Operator
];

console.log(myArray);
```

In this array:
- `42` is a number.
- `"Hello"` is a string.
- `true` is a boolean.
- `{ name: "John" }` is an object.
- `[1, 2, 3]` is another array (nested array).
- `function() { return 5; }` is a function.
- `undefined` is the undefined value.
- `null` is the null value.

Each element is a different type of value or expression, showing that arrays can hold a wide variety of data types.

---

### **Q4:  What are "in-place methods"?

In JavaScript, "in-place methods" are methods that modify the original array instead of creating a new array. These methods directly change the content or order of the elements in the array.

**Examples of In-Place Methods:**
- `push()`: Adds one or more elements to the end of the array.
- `pop()`: Removes the last element from the array.
- `splice()`: Adds/removes elements from any position in the array.
- `sort()`: Sorts the elements of the array in place.

**Example:**
```javascript
let numbers = [3, 1, 4, 2];
numbers.sort(); // In-place sort

console.log(numbers); // Output: [1, 2, 3, 4]
```
Here, `sort()` changes the order of the elements in the original `numbers` array.

---


### **Additional Notes**

- **Jonas' Reference**: Refer to the array methods section in Jonas' notes to refresh your memory. He is a highly regarded expert in JavaScript.

---
  			## Lecture 5 (onwards)

### Methods of Array

**1) Searching in Array**
- **Method:** `.includes(value, fromIndex)`
- **Returns:** Boolean (`true` or `false`)
- **Description:** Checks if a specific value is present in the array, starting from the optional index provided.
  
  **Example:**
  ```javascript
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.includes(4));        // Output: true
  console.log(arr.includes(6));        // Output: false
  console.log(arr.includes(4, 3));     // Output: false (starts searching from index 3)
  ```

####  **Note:** The optional parameter `fromIndex` specifies the index from which to start the search.

**2) Convert String to Array**
- **Method:** `.split(separator)`
- **Description:** Splits a string into an array of substrings based on the separator provided.
- **Returns:** Array

  **Examples:**
  ```javascript
  let str = "let us go";
  console.log(str.split(""));          // Output: ["l", "e", "t", " ", "u", "s", " ", "g", "o"]
  console.log(str.split(" "));         // Output: ["let", "us", "go"]
  console.log(str.split());            // Output: ["let us go"]
  ```

####  **Note:** If no separator is provided, the entire string is returned as a single-element array.

**3) Convert Array to String**
- **Method:** `.join(separator)`
- **Description:** Joins the elements of an array into a string, separated by the specified separator.
- **Returns:** String

  **Examples:**
  ```javascript
  let arr = ["coding", "is", "fun"];
  console.log(arr.join());             // Output: "coding,is,fun"
  console.log(arr.join(" "));          // Output: "coding is fun"
  console.log(arr.join("-"));          // Output: "coding-is-fun"
  ```

 #### **Note:** If no separator is provided, elements are separated by commas by default.

**3.1) Method Chaining**
- **Description:** Combining multiple methods in one line of code.
  
  **Example:**
  ```javascript
  let str = "let us go";
  let result = str.split(" ").join("-").toUpperCase();
  console.log(result);                // Output: "LET-US-GO"
  ```

**4) Nested Loops**
- **Description:** Used to iterate over arrays within arrays (e.g., 2D arrays). 

  **Example:**
  ```javascript
  let arr = [[1, 2], [3, 4]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]);        // Output: 1, 2, 3, 4
    }
  }
  ```

**5) Multidimensional Arrays (2D Arrays)**
- **Description:** Arrays that contain other arrays as their elements.

  **Example:**
  ```javascript
  let arr = [1, 2, 3, 4, [5, 6, 7, 8]];
  console.log(arr[4][2]);             // Output: 7
  ```

  - **Accessing Elements:** Use multiple square brackets. The first bracket accesses the outer array, and the second accesses the inner array.
  
  **2D Array Representation:**
  ```javascript
  // Representation:
  // 1 2
  // 3 4
  let arr = [[1, 2], [3, 4]];
  ```

**5.1) Iterating Over 2D Arrays**
- **Description:** Use nested `for` loops to iterate through each element.

  **Example:**
  ```javascript
  let arr = [[0, 1], [2, 3]];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(`arr[${i}][${j}] = ${arr[i][j]}`);
    }
  }
  // Output:
  // arr[0][0] = 0
  // arr[0][1] = 1
  // arr[1][0] = 2
  // arr[1][1] = 3
  ```

**6) Introduction to JS Objects**
- **Description:** Objects are collections of key-value pairs. Refer to your Jonas copy for detailed study.

**7) Creating, Accessing, Updating, and Deleting Objects**
- **Description:** Detailed methods for creating, accessing, updating, and deleting object properties. Refer to your Jonas copy for specific examples and syntax.


