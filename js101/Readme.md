

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

