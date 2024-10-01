### JavaScript 101

**Note:** JavaScript is a loosely typed language, meaning it doesn’t enforce strict type rules. To enforce stricter parsing and error handling, you can use `"use strict"`. This directive helps catch common coding mistakes and “unsafe” actions, such as using undeclared variables. However, it does not enforce semicolon usage or catch all types of errors. (So, it's good practice to include semicolons manually.)

---

### 1. Why Are Strings Immutable?Explain the concept of String immutability in Js ?

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

"use strict";

let myStr = "Bob";
myStr[0] = "J";
console.log(myStr);

## //TypeError: Cannot assign to read only property '0' of string 'Bob'

### 2. What Are Template Literals? how do they differ from traditional string concatenation ?

(ALSO UPDATE THE ANSWER WITH THe way you think that ki isme jyada concatenation krna hoga differenet variable me toh traditional way me baar baar plus operator aur quotes use krna hoga jo ki difficult hota hai aur ye is walae me sab easy hai
ex -- var message = "Hello, my name is " + name + " and I am " + age + " years old.";

now using template
ex - let message = `Hello, my name is ${name} and I am ${age} years old.`;
)

Ans -- Template literals are a way to create strings that support embedded expressions and multi-line content. They use backticks (`` ` ``) instead of single or double quotes.

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

### 2.2 What are some common string methods ??

Absolutely, here are more string manipulation methods in JavaScript:

### Common String Manipulation Methods

**concat()**

- Combines two or more strings and returns a new string.
- Example: `"Hello, ".concat("world!")` results in `"Hello, world!"`.

**toUpperCase() and toLowerCase()**

- Converts all characters of a string to uppercase or lowercase, respectively.
- Example: `"JavaScript".toUpperCase()` results in `"JAVASCRIPT"`.

**slice()**

- Extracts a section of a string and returns it as a new string, without modifying the original string.
- Example: `"Hello, world!".slice(0, 5)` results in `"Hello"`.

**split()**

- Divides a string into an ordered list of substrings, puts these substrings into an array, and returns the array.
- Example: `"apple, banana, cherry".split(", ")` results in `["apple", "banana", "cherry"]`.

**replace()**

- Replaces specified value(s) in a string with another value and returns a new string.
- Example: `"I like coffee".replace("coffee", "tea")` results in `"I like tea"`.

**trim()**

- Removes whitespace from both ends of a string.
- Example: `" Hello World ".trim()` results in `"Hello World"`.

### Additional Methods

**at()**

- Returns the character at the specified index.
- Example: `"Hello".at(1)` results in `"e"`.

**substring()**

- Returns the part of the string between the start and end indexes, or to the end of the string.
- Example: `"Hello, world!".substring(0, 5)` results in `"Hello"`.

**substr()**

- Returns a portion of the string, starting at the specified index and extending for a given number of characters.
- Example: `"Hello, world!".substr(0, 5)` results in `"Hello"`.

**includes()**

- Determines whether one string may be found within another string, returning true or false.
- Example: `"Hello, world!".includes("world")` results in `true`.

**startsWith() and endsWith()**

- Determines whether a string begins or ends with the characters of a specified string, returning true or false.
- Example: `"JavaScript".startsWith("Java")` results in `true`.
- Example: `"JavaScript".endsWith("Script")` results in `true`.

**repeat()**

- Constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.
- Example: `"abc".repeat(3)` results in `"abcabcabc"`.

**replaceAll()**

- Replaces all occurrences of a specified value in a string with another value and returns a new string.
- Example: `"I like coffee. Coffee is great!".replaceAll("coffee", "tea")` results in `"I like tea. Tea is great!"`.

**padStart() and padEnd()**

- Pads the current string with another string (repeated, if needed) so that the resulting string reaches a given length.
- Example: `"5".padStart(3, "0")` results in `"005"`.
- Example: `"5".padEnd(3, "0")` results in `"500"`.

**charAt()**

- Returns the character at the specified index.
- Example: `"Hello".charAt(1)` results in `"e"`.

**charCodeAt()**

- Returns the Unicode of the character at the specified index.
- Example: `"Hello".charCodeAt(1)` results in `101`.

**fromCharCode()**

- Converts Unicode values to characters.
- Example: `String.fromCharCode(101)` results in `"e"`.

**match()**

- Retrieves the matches when matching a string against a regular expression.
- Example: `"The rain in Spain".match(/ain/g)` results in `["ain", "ain"]`.

**search()**

- Executes a search for a match between a regular expression and this string object.
- Example: `"The rain in Spain".search("Spain")` results in `12`.

**localeCompare()**

- Returns a number indicating whether a reference string comes before, after, or is the same as the given string in sort order.
- Example: `"a".localeCompare("b")` results in `-1`.

**toString()**

- Returns a string representing the specified object.
- Example: `(123).toString()` results in `"123"`.

### 2.3 Why Some String Methods Work on Arrays and Vice Versa

The overlap occurs because JavaScript treats strings as array-like objects in many respects. This allows for a more flexible and intuitive way to manipulate text and collections of data. This happens due to their similar nature as ordered collections of elements.

### Common Methods Between Strings and Arrays

1. **slice()**
2. **concat()**
3. **includes()**

### Common Property Between Strings and Arrays

1. **length** property

### Iteration

Both strings and arrays can be iterated using loops like the `for` loop. However, note the following:

- **forEach()**: This is an array-specific method and does not work on strings.
- **for...of**: This loop works on both strings and arrays, allowing you to iterate over their elements.

### Difference between == and === ?

Ans-- In JavaScript, == and === are operators used for comparison, but they differ in how they compare values.
one does type coercion to make both types same and the other one does not do type coercion and does strict
comparison.

Note - In case of Non primitive == and === will just the reference so both will return false for example []==[] (this will be false ) and also []===[] (this will also be false kyunki diff reference memory
location is different where this object /array is stored)

#### Key Differences

1. **Type Coercion**

   - `==`: Performs type coercion, converting values to a common type before comparison.
   - `===`: Does not perform type coercion. It checks for both value and type equality.

2. **Strictness**
   - `==`: Known as the loose or abstract equality operator. It allows equality comparison after type conversion.
   - `===`: Known as the strict equality operator. It requires both values to be of the same type for equality.

#### Examples

```javascript
"5" == 5; // Output: true (because it only checks the value, so 5 == 5 after type coercion)
"5" === 5; // Output: false (because one is a number and the other is a string, even though the value is the same)
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
console.log("This is a single quote (') and this is a double quote (\")");
// Outputs: This is a single quote (') and this is a double quote (")

console.log("This is a backslash (\\)");
// Outputs: This is a backslash (\)

console.log("This is a triple backslash (\\\\\\)");
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
const result =
  str1.charAt(0).toUpperCase() +
  str1.slice(1) +
  " " +
  str2.charAt(0).toUpperCase() +
  str2.slice(1);
console.log(result); // Outputs: Hello World
```

---

### 6. Additional Note on String Immutability

- **Immutability**: Strings in JavaScript are immutable, meaning once a string is created, it cannot be changed. Any operation that appears to modify a string actually creates a new string.

- **Example**:

  ```javascript
  let str = "Bob";
  str[0] = "J"; // No effect on the original string
  console.log(str); // Outputs: Bob (string is immutable)

  str = "Job"; // Reassigns the variable to a new string
  console.log(str); // Outputs: Job
  ```

- **Using `charAt()` vs. Bracket Notation**:

  - **`charAt()`**: When the index is out of range, it returns an empty string.
  - **Bracket Notation**: Returns `undefined` for out-of-range indexes, making it more reliable.

  **Example**:

  ```javascript
  let str = "Bob";

  // Using charAt()
  console.log(str.charAt(0)); // Outputs: B
  console.log(str.charAt(3)); // Outputs: '' (empty string, index out of range)

  // Using bracket notation
  console.log(str[0]); // Outputs: B
  console.log(str[3]); // Outputs: undefined (index out of range)
  ```

So in conclusion Square bracket handles correctly so use it always

**Note:**

- JavaScript will not throw an error for directly modifying a string unless `'use strict'` is used.
- Reassigning a variable to a new string changes the reference, not the original string.

---

### 7. Difference Between `undefined` and `null`

Ans - Both indicate absense of value null is intentional that we provide and undefiined is unintentional when we left a variable without assigning anything

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

### Note -TILL above revise from jonas es6 and the above written notes no other and then revise array jonas


## **Lecture 4: Array Comparisons and Properties**--------------------------------------From 4 onwards-----------------------------------------------------

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

---

**Q2: What happens when you compare two arrays using `==` or `===` in JavaScript?**

- **Answer**: When you compare two arrays using `==` or `===`, the result is `false` because variables only store references to arrays. Even if the arrays have the same elements, their references (memory addresses) are different, so the comparison returns `false`.

  - **Example**:

    ```javascript
    let a = [1, 2, 3];
    let b = [1, 2, 3];
    let c = a;

    console.log(a == b); // false
    console.log(a === b); // false
    ```

  - **Note**: The references of `a` and `b` are different, so both `==` and `===` return `false`.

---

### **Q3: Can arrays in JavaScript store different types of data? Does an array expect expressions or values?**

- **Answer**: Yes, arrays can store any type of data in JavaScript. Arrays expect expressions, so whether it's an object, a number, a string, or any other data type, it can be stored within an array.Arrays can store any type of value, and since expressions evaluate to values, you can store expressions in arrays. When we say an array "expects an expression," it means that an array can store anything that results in a value, which includes expressions, literals, variables, and even functions.

**Example with Different Element Types:**

```javascript
let myArray = [
  42, // Number
  "Hello", // String
  true, // Boolean
  { name: "John" }, // Object
  [1, 2, 3], // Another array
  function () {
    return 5;
  }, // Function
  undefined, // Undefined
  null, // Null
  5 > 3 ? "Yes" : "No", // Ternary Operator
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

### \*\*Q4: What are "in-place methods"?

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

## Lecture 5 (onwards) ------------------------

### Methods of Array

**1) Searching in Array**

- **Method:** `.includes(value, fromIndex)`
- **Returns:** Boolean (`true` or `false`)
- **Description:** Checks if a specific value is present in the array, starting from the optional index provided.

  **Example:**

  ```javascript
  let arr = [1, 2, 3, 4, 5];
  console.log(arr.includes(4)); // Output: true
  console.log(arr.includes(6)); // Output: false
  console.log(arr.includes(4, 3)); // Output: false (starts searching from index 3)
  ```

#### **Note:** The optional parameter `fromIndex` specifies the index from which to start the search.

**2) Convert String to Array**

- **Method:** `.split(separator)`
- **Description:** Splits a string into an array of substrings based on the separator provided.
- **Returns:** Array

  **Examples:**

  ```javascript
  let str = "let us go";
  console.log(str.split("")); // Output: ["l", "e", "t", " ", "u", "s", " ", "g", "o"]
  console.log(str.split(" ")); // Output: ["let", "us", "go"]
  console.log(str.split()); // Output: ["let us go"]
  ```

#### **Note:** If no separator is provided, the entire string is returned as a single-element array.

**3) Convert Array to String**

- **Method:** `.join(separator)`
- **Description:** Joins the elements of an array into a string, separated by the specified separator.
- **Returns:** String

  **Examples:**

  ```javascript
  let arr = ["coding", "is", "fun"];
  console.log(arr.join()); // Output: "coding,is,fun"
  console.log(arr.join(" ")); // Output: "coding is fun"
  console.log(arr.join("-")); // Output: "coding-is-fun"
  ```

#### **Note:** If no separator is provided, elements are separated by commas by default.

**3.1) Method Chaining**

- **Description:** Combining multiple methods in one line of code.

  **Example:**

  ```javascript
  let str = "let us go";
  let result = str.split(" ").join("-").toUpperCase();
  console.log(result); // Output: "LET-US-GO"
  ```

**4) Nested Loops**

- **Description:** Used to iterate over arrays within arrays (e.g., 2D arrays).

  **Example:**

  ```javascript
  let arr = [
    [1, 2],
    [3, 4],
  ];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      console.log(arr[i][j]); // Output: 1, 2, 3, 4
    }
  }
  ```

**5) Multidimensional Arrays (2D Arrays)**

- **Description:** Arrays that contain other arrays as their elements.

  **Example:**

  ```javascript
  let arr = [1, 2, 3, 4, [5, 6, 7, 8]];
  console.log(arr[4][2]); // Output: 7
  ```

  - **Accessing Elements:** Use multiple square brackets. The first bracket accesses the outer array, and the second accesses the inner array.

  **2D Array Representation:**

  ```javascript
  // Representation:
  // 1 2
  // 3 4
  let arr = [
    [1, 2],
    [3, 4],
  ];
  ```

**5.1) Iterating Over 2D Arrays**

- **Description:** Use nested `for` loops to iterate through each element.

  **Example:**

  ```javascript
  let arr = [
    [0, 1],
    [2, 3],
  ];
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

---

### Different Ways of Creating an Array in JavaScript

**Q) What are the different ways to create an array in JavaScript?**

**Answer:**
There are multiple ways to create an array in JavaScript. Here are the three most common methods:

1. **Using Array Literal Notation**

   - This is the simplest and most common way to create an array.

   **Example:**

   ```javascript
   let arr = [1, 2, 3, 4];
   ```

   **Explanation:** In this approach, you directly list the elements inside square brackets `[]`.

2. **Using the Array Constructor**

   - You can also create an array using the Array constructor function.

   **Example:**

   ```javascript
   let arr = new Array(1, 2, 3, 4);
   ```

   **Explanation:** This approach is more verbose. You pass the elements as arguments to the Array constructor. If you pass a single number, it creates an array with that many empty slots (e.g., `new Array(4)` creates `[ <4 empty slots> ]`).

3. **Using the Array.of Method**

   - This method creates an array from the arguments passed.

   **Example:**

   ```javascript
   let arr = Array.of(1, 2, 3, 4);
   ```

   **Explanation:** `Array.of()` is similar to the Array constructor but handles single numbers differently by treating them as elements rather than a length.

---

---

# Detailed methods for creating, accessing, updating, and deleting object properties. Refer to your Jonas copy for specific examples and syntax.

---

---

### Introduction to JavaScript Objects

**Q) What are JavaScript Objects?**

**Answer:**

- JavaScript objects are collections of key-value pairs. They allow us to store and manage related data as a single entity, where each key (property) is associated with a value. These values can be of any data type, but keys are always strings (or symbols) in JavaScript.

---

**Q) Can you explain the difference between dot notation and square bracket notation when accessing object properties? When would you use one over the other?**

Answer -- (Interview)

- Square bracket notation allows access to properties that are not strings or are in sentence form, and even dynamically retrieves keys.
- For example, when the property name is unknown and needs to be accessed from an object, in this case square bracket notation is very helpful.
- In contrast, dot notation requires the property/key to be hardcoded.
- It is also very helpful when we don't know which property the user will select.
- In dot notation, the property/key has to be hardcoded.
- In square bracket notation, it is helpful in dynamic cases as in this case only the user selects a property.
- The square bracket notation will take the selection and retrieve it from the object if it exists; otherwise, it returns undefined when the property is not there.

**Answer:** (Detail)

- **Dot Notation** (`object.property`):

  - **Syntax and Ease of Use:** Dot notation is simple and straightforward, making it easy to read and write. It's used when accessing properties with valid identifiers (e.g., `object.name`).
  - **Property Names as Variables:** Dot notation doesn't allow the use of variables for property names. The property name is fixed and cannot be dynamically determined.
  - **Handling Special Characters and Spaces:** Dot notation cannot handle property names with special characters or spaces (e.g., `object.$property`).

- **Square Bracket Notation** (`object['property']`):
  - **Syntax and Ease of Use:** Square bracket notation is more flexible but slightly more verbose. It's used when property names are dynamic or not valid identifiers (e.g., `object['property name']`).
  - **Property Names as Variables:** Square bracket notation allows the use of variables for property names, which is particularly useful when property names are determined at runtime.
  - **Handling Special Characters and Spaces:** Square bracket notation can access properties with unconventional names, including special characters and spaces (e.g., `object['$property']` or `object['property name']`).

**Example:**

```javascript
let obj = {
  name: "Ram",
  age: 240000,
  "date of Avataran": "Treta Yug",
};

// Dot Notation
console.log(obj.name); // Output: "Ram"

// Square Bracket Notation
console.log(obj["date of Avataran"]); // Output: "Treta Yug"

// Dynamic Property Access using Square Bracket Notation
let propName = "age";
console.log(obj[propName]); // Output: 240000

// Dynamically Accessing Key in Object using a loop:
for (const key in person) {
  console.log(person[key]);
}
```

---

**Q) What are the different ways to create an object in JavaScript?**

**Answer:**
There are three primary ways to create an object in JavaScript:

1. **Object Literal Approach:**

   - This is the simplest and most common way to create an object, where properties are defined within the object at the time of creation.

   **Example:**

   ```javascript
   let obj = {
     name: "Ram",
     age: 240000,
     designation: "Developer",
    "date of Avataran" ; "Treta Yug",
   };
   ```

   `Note - Whenever we have a word like string in key of object we need to put that in quotes and hence we can't access it with dot notation we need square bracket to access it . `

`note 2-- Key names can only be strings in javascript ("kyunki dusra daalenge toh dot notation se access nahi ho payega islea")`

2. **Empty Object and Then Add Properties:**

   - You can create an empty object and then add properties to it.

   **Example:**

   ```javascript
   let obj = {};
   obj.name = "Ram";
   obj.age = 240000;
   obj.designation = "Developer";
   ```

3. **Using the `new` Keyword:**

   - You can create an object using the `new` keyword with the `Object` constructor.

   **Example:**

   ```javascript
   let obj = new Object();
   obj.name = "Ram";
   obj.age = 240000;
   obj.designation = "Developer";
   ```

## **Note:** In JavaScript, keys in objects are always strings. If a different data type is used, it will be automatically converted to a string. But the values can be of any data type .

**Q) How do you add, update, access, and delete properties in a JavaScript object?**

**Answer:**

- **Adding/Updating Properties:**

  - Use dot notation or square bracket notation to add or update a property.

  **Example:**

  ```javascript
  let obj = {};
  obj.name = "Ram"; // Adding a property
  obj.name = "Lord Ram"; // Updating the property

  obj["age"] = 240000; // Adding a property using square bracket notation
  ```

- **Accessing Properties:**

  - Use dot notation or square bracket notation to access the value of a property.

  **Example:**

  ```javascript
  console.log(obj.name); // Output: "Lord Ram"
  console.log(obj["age"]); // Output: 240000
  ```

- **Deleting Properties:**

  - Use the `delete` keyword to remove a property from an object.

  **Example:**

  ```javascript
  delete obj.age;
  console.log(obj); // Output: { name: "Lord Ram" }
  ```

---

**Q) How can you check if a property exists in a JavaScript object?**

**Answer:**

- **Using `hasOwnProperty`:**

  - The `hasOwnProperty` method checks if a property exists directly on the object (not inherited from the prototype chain).

  **Example:**

  ```javascript
  let obj = { name: "Ram" };
  console.log(obj.hasOwnProperty("name")); // Output: true
  console.log(obj.hasOwnProperty("age")); // Output: false
  ```

- **Using Undefined Check:**

  - You can also check if a property is undefined to determine if it exists.

  **Example:**

  ```javascript
  console.log(obj.name !== undefined); // Output: true
  console.log(obj.age !== undefined); // Output: false
  ```

---

**Q) Can you provide an example that demonstrates all CRUD operations (Create, Read, Update, Delete) on a JavaScript object?**

**Answer:**

**Example:**

```javascript
const godData = {
  name: "Ram",
  jobTitle: "God",
  email: "god@Great.com",
  isVerified: true,
};

// Read (Access) Property
console.log(godData.name); // Output: "Ram"
console.log(godData["jobTitle"]); // Output: "God"

// Update Property
godData.email = "GOD@greatestSonGreat.com";
godData["jobTitle"] = "Supreme God";

// Delete Property
delete godData.isVerified;
delete godData["jobTitle"];

// Create/Add Property
godData.avatar = "Treta Yug";
godData["power"] = "Infinite";

console.log(godData);
// Output: { name: "Ram", email: "GOD@greatestSonGreat.com", avatar: "Treta Yug", power: "Infinite" }
```

---

**Q) Can you provide an example of CRUD operations on a nested object, demonstrating both dot and square bracket notation?**

**Answer:**

**Example:**

```javascript
const godDetails = {
  name: "Ram",
  details: {
    jobTitle: "God",
    email: "god@Great.com",
    isVerified: true,
  },
};

// Read (Access) Nested Property
console.log(godDetails.details.jobTitle); // Output: "God"
console.log(godDetails["details"]["email"]); // Output: "god@Great.com"

// Update Nested Property
godDetails.details.email = "GOD@greatestSonGreat.com";
godDetails["details"]["jobTitle"] = "Supreme God";

// Delete Nested Property
delete godDetails.details.isVerified;
delete godDetails["details"]["jobTitle"];

// Create/Add Nested Property
godDetails.details.avatar = "Treta Yug";
godDetails["details"]["power"] = "Infinite";

console.log(godDetails);
// Output: { name: "Ram", details: { email: "GOD@greatestSonGreat.com", avatar: "Treta Yug", power: "Infinite" } }
```
