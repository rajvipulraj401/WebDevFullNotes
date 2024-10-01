			-----------------------Js 100 -------------------






---

1. **What is an Algorithm or Task?**
   - **Answer:** When we achieve something by following a series of steps, we call it a task or algorithm.

2. **What is an IDE?**
   - **Answer:** IDE stands for Integrated Development Environment. It's a place where we can write and develop code. It's called "integrated" because it can handle multiple programming languages in one environment.

2.1 **What are Keywords ?**

- **Answer:** Keywords in programming are reserved words that have special meanings in the language and cannot be used as identifiers. ex for, break , while , var etc

3. **What is a Compiler?**
   - **Answer:** A compiler is a tool that translates the code we write in a high-level or low-level language into machine code, which the computer can understand and execute. The compiler takes your JavaScript code and translates it into machine code, which runs directly on your computer's hardware.
   - **For Example:**
     - **JavaScript** is a high-level language.
     - **Examples of JavaScript Compilers:**
       - **V8:** Used in Google Chrome.
       - **SpiderMonkey:** Used in Mozilla Firefox.

4. **What is a Sequence?**
   - **Answer:** A sequence is a set of rules or instructions that you follow one after another to complete a task.

5. **What is a Program?**
   - **Answer:** When we take a task and write it in a programming language so that a machine can understand and perform it, this is called a program.

6. **What is Debugging?**
   - **Answer:** Debugging is not just about fixing errors; it’s also about spotting them. It involves:
     - **Removing** errors
     - **Inserting** corrections
     - **Modifying** existing code to fix problems

7. **How Do We Use `console.log` for Debugging?**
   - **Answer:** We can use `console.log` to print multiple lines of code outputs. By checking where the error occurs after specific `console.log` statements, we can identify the exact block of code causing the issue.

8. **Why Does a Computer Only Understand Binary?**
   - **Answer:** Computers operate using electrical circuits, which have two states: **on** and **off**. These states are represented by 1 and 0 in binary code. 
     - **On (1):** When the circuit is on, it sends an electrical signal.
     - **Off (0):** When the circuit is off, it doesn't send a signal.
   - Since computers can only detect these two states, binary (a system made up of 1s and 0s) is the simplest and most efficient language for computers to process and store information. All complex operations and data in a computer are ultimately broken down into these binary sequences.

9. **How Are Compilers So Fast?**
   - **Answer:** Compilers are fast because they optimize the code during the translation process. They translate the entire program at once and generate efficient machine code, allowing the program to run quickly.

10. **Why Is Python Considered a Slow Language?**
    - **Answer:** Python uses a lot of English-like words and has many built-in keywords, making it easy to read and write. However, because of this, the computer has to do more work to translate Python code into machine code (binary). This extra translation step, along with processing all the keywords, takes more time.
    - **Comparison with C++:**
      - C++ uses less English and has fewer keywords, making it closer to the computer's language. This allows it to be translated into machine code much faster, so C++ programs run quicker than Python programs.
    - **In short**, Python is slower because it's designed to be user-friendly with many keywords and easy-to-read syntax, while C++ is faster because it’s closer to what the computer directly understands.

11. **What is an Interpreted Language?**
    - **Answer:** An interpreted language is a type of programming language where the code is executed line-by-line by an interpreter at runtime. Instead of translating the entire program into machine code at once, the interpreter reads and executes the code directly, which allows for more flexibility but can be slower.
    - **Example:** JavaScript, Python, and PHP are common interpreted languages.

12. **What is a Compiled Language?**
    - **Answer:** A compiled language is a type of programming language where the code is translated into machine code by a compiler before it runs. This process happens once, and the compiled machine code is then executed by the computer's processor. Compiled languages generally run faster because the code is already converted into machine language before execution.
    - **Example:** C++, Java, and Go are common compiled languages.

13. **What is the Difference Between Interpreted and Compiled Languages?**
    - **Execution Process:**
      - **Interpreted Language:** Code is executed line-by-line at runtime, making it more flexible but typically slower.
      - **Compiled Language:** Code is converted into machine code by a compiler before execution, making it faster but requiring a separate compilation step.
    - **Flexibility vs. Speed:**
      - **Interpreted Language:** More flexible as you can execute code without a separate compilation step, which is useful for scripting and quick testing.
      - **Compiled Language:** Generally faster because the entire program is translated into machine code ahead of time, allowing for optimized execution.
    - **Error Detection:**
      - **Interpreted Language:** Errors are found at runtime since the code is interpreted on the fly.
      - **Compiled Language:** Errors are detected during the compilation process, allowing them to be fixed before running the program.

14. **Why Is JavaScript Considered a Slow Language?**
    - **Answer:** JavaScript is an interpreted language that uses a lot of flexible, dynamic features, making it easy to write and use in web development. However, because the code is interpreted line-by-line at runtime, the computer has to do more work to execute JavaScript code, which can make it slower.
    - **Comparison with C++:**
      - C++ is a compiled language with fewer dynamic features, making it closer to the computer's language. This allows C++ code to be translated into machine code much faster, so C++ programs typically run quicker than JavaScript programs.
    - **In short**, JavaScript is slower because it’s designed to be flexible and easy to use, particularly in web development, while C++ is faster because it’s closer to what the computer directly understands and is optimized for performance.

---




  Now JAVASCRIPT  Questions from js 100 starts:-----------




### 1. What are Data Types?

   - **Answer:** Data types specify what kind of value a variable can hold. They determine the type of data that can be stored and manipulated in a program. In JavaScript, there are different data types:

- **Primitive Data Types**:
  - **Number**: Represents numeric values. Example: `42`, `3.14`.
  - **String**: Represents sequences of characters. Example: `"Hello"`, `'World'`.
  - **Boolean**: Represents logical values: `true` or `false`.
  - **Undefined**: A variable that has been declared but not assigned a value. Example: `let x; // x is undefined`.
  - **Null**: Represents the intentional absence of any object value. Example: `let y = null;`.
  - **Symbol**: Represents a unique identifier (introduced in ES6).
  - **BigInt**: Used to represent integers larger than `2^53 - 1`.

- **Non-Primitive Data Types**: -- This is basically object which can be mutated  (and these also have inbuild methods attached to it  as these are objects afterall in javascript ) and primitive on other hand can't be mutated 
  - **Object**: Used to store collections of data or more complex entities. Example: `{name: "Vipul", age: 22}`.
  - **Array**: A special type of object that stores a list of values. Example: `[1, 2, 3]`.
  - **Function:** Represents a block of code that can be called (e.g., `function() { return 'Hello'; }`).


---

### 1.1 What are Variables?

Variables are containers used to store, change, and access data or information in a program. In JavaScript, you can create variables using three different keywords: `var`, `let`, and `const`.

#### **1. Variable Declaration Keywords**

1. **`var` Keyword**
   - **Allows Re-declaration**: Yes
   - **Allows Re-assignment**: Yes
   - **Example**:
     ```javascript
     var a = 5;
     var a = 18; // No error, redeclaration is allowed
     a = 10;     // Re-assignment is allowed
     ```

2. **`let` Keyword**
   - **Allows Re-declaration**: No
   - **Allows Re-assignment**: Yes
   - **Example**:
     ```javascript
     let a = 10;
     a = "shiv"; // Correct, reassignment is allowed
     
     let a = 12; // Error, redeclaration is not allowed
     ```

3. **`const` Keyword**
   - **Allows Re-declaration**: No
   - **Allows Re-assignment**: No
   - **Example**:
     ```javascript
     const days = 7;
     days = 8;  // Error, reassignment is not allowed
     
     const days = 9; // Error, redeclaration is not allowed
     ```

#### **Table of Variable Keywords**

| Keyword | Allows Re-declaration | Allows Re-assignment |
|---------|------------------------|----------------------|
| `var`   | ✔                      | ✔                    |
| `let`   | ❌                      | ✔                    |
| `const` | ❌                      | ❌                    |

#### **Conclusion**

- **Variables**: Are not the values themselves but references or pointers to the memory location where the values are stored. Changing a variable’s value means pointing to a different memory location.
- **Primitive Types**: Cannot be mutated; they are immutable.
- **Non-Primitive Types**: Can be mutated; they are mutable.

**Note**: Primitive types include `number`, `string`, `boolean`, `undefined`, and `null`. Non-primitive types include objects, arrays, and functions.

---


### 2. What is a Statement?
   - **Answer:** A statement is a line of code that performs an action. It controls the flow of the code it may or may not produce a value .  It ONLY do something in the code it does not necessarily produce anything .  It usually ends with a semicolon.

```javascript
let x = 5; // This is a statement that declares a variable and assigns it a value.
```

### 3. What is an Expression?

   - **Answer:**An expression is any valid unit of code that resolves to a value. It produces some value in the code .For example:

```javascript
2 + 2 // This is an expression that evaluates to 4.
```
Here’s a revised version of the notes with clearer distinctions between statements and expressions:

---

**Difference between statement and Expression:**

- **Statement**: Executes an action or command. It performs an operation and may produce side effects, but it does not return a value that can be used in further expressions. 
  - **Example**: `console.log('Hello, World!');` — This statement outputs a message to the console. It performs an action but does not produce a value that can be used further.

- **Expression**: Produces a value when evaluated. It calculates and returns a value that can be used in other expressions or operations. 
  - **Example**: `x > 10` — This expression evaluates to a boolean value (`true` or `false`) based on the condition. It produces a value (the result of the comparison) that can be used in other expressions or assignments.

---



### 4. What is a Value?
A value is the actual data that an expression evaluates to. For example, `4` is the value of the expression `2 + 2`.



### 5. **What are Different Types of Operators? Explain Them with Examples.**

 - **Answer:** - Operators are symbols used to perform operations on operands (values and variables).

1. **Arithmetic Operators**: Used for mathematical operations.
   - **`+`** (Addition): `5 + 3` results in `8`.
   - **`-`** (Subtraction): `5 - 3` results in `2`.
   - **`*`** (Multiplication): `5 * 3` results in `15`.
   - **`/`** (Division): `6 / 3` results in `2`.
   - **`%`** (Modulus): `5 % 3` results in `2`.
   - **`**`** (Exponentiation): `2 ** 3` results in `8` (2 raised to the power of 3).

2. **Relational (Comparison) Operators**: Used to compare values.
   - **`<`** (Less than): `5 < 3` results in `false`.
   - **`>`** (Greater than): `5 > 3` results in `true`.
   - **`<=`** (Less than or equal to): `5 <= 5` results in `true`.
   - **`>=`** (Greater than or equal to): `5 >= 3` results in `true`.
   - **`!=`** (Not equal to): `5 != 3` results in `true`.
   - **`==`** (Equal to): `5 == 5` results in `true`.
   - **`===`** (Strict equal to): `5 === '5'` results in `false` (compares both value and type).
   - **`!==`** (Strict not equal to): `5 !== '5'` results in `true` (compares both value and type).

3. **Logical (Conditional) Operators**: Used to perform logical operations.
   - **`&&`** (Logical AND): `true && false` results in `false`.
   - **`||`** (Logical OR): `true || false` results in `true`.
   - **`!`** (Logical NOT): `!true` results in `false`.


4. **Conditional (Ternary) Operator**: A shorthand for `if-else` statements, used for decision-making.
   - **`? :`** (Ternary): `x > 10 ? 'Large' : 'Small'` results in `'Large'` if `x` is greater than `10`, otherwise `'Small'`.

Note -- You're right, the ternary operator (`? :`) is often categorized under conditional operators, but it’s not a logical operator like `&&`, `||`, or `!`. Instead, it serves as a shorthand for `if-else` statements and is used to make decisions based on conditions.


5. **Unary Operators**: Operate on a single operand.
   - **`++`** (Increment): `x++` increases the value of `x` by 1.
   - **`--`** (Decrement): `x--` decreases the value of `x` by 1.
   - **`-`** (Unary negation): `-x` negates the value of `x`.

6. **Assignment Operators**: Used to assign values to variables.
   - **`=`** (Assignment): `x = 5` assigns `5` to `x`.
   - **`+=`** (Add and assign): `x += 3` adds `3` to `x` and assigns the result to `x`.
   - **`-=`** (Subtract and assign): `x -= 3` subtracts `3` from `x` and assigns the result to `x`.
   - **`*=`** (Multiply and assign): `x *= 3` multiplies `x` by `3` and assigns the result to `x`.
   - **`/=`** (Divide and assign): `x /= 3` divides `x` by `3` and assigns the result to `x`.
   - **`%=`** (Modulus and assign): `x %= 3` performs modulus on `x` by `3` and assigns the result to `x`.

7. **Bitwise Operators**: Operate on binary representations of numbers.
   - **`&`** (Bitwise AND): `5 & 3` results in `1`.
   - **`|`** (Bitwise OR): `5 | 3` results in `7`.
   - **`^`** (Bitwise XOR): `5 ^ 3` results in `6`.
   - **`~`** (Bitwise NOT): `~5` results in `-6` (bitwise negation).
   - **`<<`** (Left shift): `5 << 1` results in `10` (shifts bits to the left).
   - **`>>`** (Right shift): `5 >> 1` results in `2` (shifts bits to the right).
   - **`>>>`** (Unsigned right shift): `5 >>> 1` results in `2` (shifts bits to the right with zero fill).

8. **Binary Operators**: Operate on two operands.
   - **`+`** (Addition): `5 + 3` results in `8`.
   - **`-`** (Subtraction): `5 - 3` results in `2`.
   - **`*`** (Multiplication): `5 * 3` results in `15`.
   - **`/`** (Division): `6 / 3` results in `2`.
   - **`%`** (Modulus): `5 % 3` results in `2`.
   - **`&`** (Bitwise AND): `5 & 3` results in `1`.
   - **`|`** (Bitwise OR): `5 | 3` results in `7`.
   - **`^`** (Bitwise XOR): `5 ^ 3` results in `6`.
   - **`<<`** (Left shift): `5 << 1` results in `10`.
   - **`>>`** (Right shift): `5 >> 1` results in `2`.
   - **`>>>`** (Unsigned right shift): `5 >>> 1` results in `2`.

---

### 6. Why are `if-else` and `switch` called Statements and the Ternary Operator an Operator?

   - **Answer:**  **If-Else** and **Switch** are called statements because they control the flow of execution based on conditions  and execute different blocks of code, but they do not return a value themselves. 
- The **Ternary Operator** (`? :`) is called an operator because it evaluates a condition and directly produces a value based on that condition.


Note -  Use `if-else` for single-time checks, this is not   a loop so it checks only one time

### 7. Why Do We Use Loops?

   - **Answer:** We use loops to repeat a block of code multiple times based on a condition. They allow us to automate repetitive tasks.

### 8. Why Use a `while` Loop and When is the Right Time to Use It?

 - **Answer:** The `while` loop is used when you want to repeat a block of code as long as a condition is true. It is suitable when you do not know beforehand how many times you need to iterate (e.g., reading user input until they provide valid data).

### 9. Why Use a `for` Loop and When is the Right Time to Use It?

 - **Answer:** The `for` loop is used when you know in advance how many times you need to iterate over a block of code. It is suitable for scenarios like iterating over array elements or counting with a specific range.

### 10. What is a Function?

    - **Answer:** A function is a block of reusable code that performs a specific task. It can take inputs (parameters) and return an output (result).It can be invoked by calling its name.

### 11. How Many Types of Functions are in JavaScript?

    - **Answer:** JavaScript functions can be categorized into several types:

1. **Function Declarations:** Functions declared with the `function` keyword. They are hoisted, meaning they can be called before they are defined.
   - **Example:** 
     ```javascript
     function myFunc() { /* code */ }
     ```

2. **Function Expressions:** Functions assigned to variables. They are not hoisted, so they must be defined before they are used.
   - **Example:** 
     ```javascript
     const myFunc = function() { /* code */ };
     ```

3. **Arrow Functions:** A concise syntax for writing functions, introduced in ES6. They do not have their own `this` context and are often used for short, simple functions.
   - **Example:** 
     ```javascript
     const myFunc = () => { /* code */ };
     ```

4. **Anonymous Functions:** Functions without a name, often used as arguments or in function expressions.
   - **Example:** 
     ```javascript
     setTimeout(function() { /* code */ }, 1000);
     ```

5. **Named Functions:** Functions that have a specific name and can be used in various contexts.
   - **Example:** 
     ```javascript
     function namedFunc() { /* code */ }
     ```

6. **Immediately Invoked Function Expressions (IIFE):** Functions that are executed immediately after their definition. They are often used to create a new scope.
   - **Example:** 
     ```javascript
     (function() { /* code */ })();
     ```

---

#### **Explanation of the Answers:**

- **Function Declarations** and **Function Expressions** cover the basic way of defining functions in JavaScript.
- **Arrow Functions** provide a modern, concise syntax.
- **Anonymous Functions** and **Named Functions** describe functions based on naming.
- **IIFE** is a specific pattern for immediately executing a function to create a new scope.



---

### **12. What is the Naming Convention in JavaScript for Variables/Functions?**

- **Answer:** Naming conventions in JavaScript help in writing readable, maintainable, and consistent code. The following conventions are commonly used:

**Note:** Names should start with a letter, an underscore (`_`), or a dollar sign (`$`). After the first character, names can include letters, numbers, underscores, and dollar signs, but cannot include spaces.

1. **Variables:** 
   - **Convention:** Use `camelCase` for variable names. This means the first word is in lowercase, and each subsequent word starts with an uppercase letter. 
   - **Example:** `myVariableName`
   - **Why?** This convention improves readability and maintains consistency in code.

2. **Functions:** 
   - **Convention:** Also use `camelCase` for function names. Follow the same rule as variables: the first word is lowercase, and each subsequent word starts with an uppercase letter. 
   - **Example:** `myFunctionName()`
   - **Why?** This convention helps in identifying function names easily and is consistent with variable naming.

3. **Constants:** 
   - **Convention:** Use `UPPER_SNAKE_CASE` for constants. This means all letters are uppercase and words are separated by underscores. 
   - **Example:** `MAX_VALUE`
   - **Why?** This distinguishes constants from variables and functions, making it clear that the value should not change.

4. **Classes:** 
   - **Convention:** Use `PascalCase` for class names. Each word starts with an uppercase letter. 
   - **Example:** `MyClassName`
   - **Why?** This helps in distinguishing class names from variables and functions and follows standard conventions in object-oriented programming.

5. **Descriptive Names:** 
   - **Convention:** Choose meaningful names that convey the purpose or usage of the variable or function. 
   - **Example:** Instead of `x`, use `userAge` if it represents the age of a user.
   - **Why?** Descriptive names make code easier to understand and maintain, enhancing readability.

6. **Restrictions:** 
   - **Spaces:** Not allowed in variable or function names.
   - **Special Characters:** Only underscores (`_`) and dollar signs (`$`) are permitted, but they should be used sparingly.

By adhering to these conventions, you ensure that your code is more readable, maintainable, and follows widely accepted JavaScript practices.

---

### **13. How to Use the Ternary Operator to Do Nested If-Else for 4 Cases?**

#### Problem Name: **Nested Ternary Operator Example**

- **Answer:**  Nested ternary operators can handle multiple conditions in a compact form. Here’s a more complicated example with four cases:

```javascript
// Define conditions
let score = 85;
let hasExtraCredit = true;
let isSenior = false;

// Nested ternary operator to determine grade
let grade = score >= 90
  ? "A"
  : score >= 80 && score < 90
    ? hasExtraCredit
      ? "B+"
      : "B"
    : score >= 70
      ? isSenior
        ? "C+"
        : "C"
      : "D";

console.log(grade); // Output will be "B+" if hasExtraCredit is true
```

#### Explanation:

1. **First Condition (`score >= 90`)**: If the score is 90 or higher, the grade is `"A"`.
2. **Second Condition (`score >= 80 && score < 90`)**: If the score is between 80 and 89:
   - **Sub-condition (`hasExtraCredit`)**: If the student has extra credit, the grade is `"B+"`. Otherwise, it is `"B"`.
3. **Third Condition (`score >= 70`)**: If the score is between 70 and 79:
   - **Sub-condition (`isSenior`)**: If the student is a senior, the grade is `"C+"`. Otherwise, it is `"C"`.
4. **Else Case**: If none of the above conditions are met, the grade is `"D"`.



### 14. Understanding the Scope Issue with the `fish` Function

#### Problem Name: **Understanding Function Scope in JavaScript**

- **Answer:**-   In the provided code, the `fishcount` variable is declared inside the `fish` function, making it local to that function. This means it cannot be accessed outside the function, which is why a `ReferenceError` is thrown when you try to log it outside the function.

```javascript
function fish() {
  var fishcount = 1;
  console.log(fishcount); // Inside the function
}

fish();
console.log(fishcount); // Outside the function, will throw a ReferenceError
```

 #### **Output:**
 
  ```
      1
      ReferenceError: fishcount is not defined
```
      
**Notes:**
-    - **Function Scope:** The variable `fishcount` is declared inside the `fish` function using `var`. This makes `fishcount` a local variable, meaning it is only accessible within the `fish` function.
      - **Global Scope:** After the `fish` function is called, the code tries to execute `console.log(fishcount);` outside the function. Since `fishcount` is not declared in the global scope, JavaScript throws a `ReferenceError`, indicating that `fishcount` is not defined.

**Explanation:** Local Variables: Variables declared with `var`, `let`, or `const` inside a function are local to that function and cannot be accessed outside of it. Global Variables: Variables declared outside of any function are global and can be accessed from anywhere in the code.


Note2 --It is not undefined cause it is already defined but the compiler will not be able to access it hence it will throw reference Error because it is not able to access that scope.(var is a function scope so yaha var globally declare hota toh access ho jata)



### 15. How to Use Function Scope and Understand Parameterized vs Non-Parameterized Functions

#### Function Scope:
1. **Local Scope:** Variables declared within a function are only accessible within that function.
2. **Global Scope:** Variables declared outside of any function are accessible throughout the entire program.
3. **Nested Functions:** Functions defined within another function (nested functions) have access to the outer function’s variables.

#### Parameterized vs Non-Parameterized Functions:
- **Parameterized Function:** Accepts input parameters. 
  - **Example:** `function add(a, b) { return a + b; }`
- **Non-Parameterized Function:** Does not accept any input parameters.
  - **Example:** `function greet() { console.log("Hello!"); }`

#### Arguments vs Parameters:
- **Parameters:** Variables in the function definition that act as placeholders for the values to be passed to the function.
  - **Example:** In `function multiply(x, y)`, `x` and `y` are parameters.
- **Arguments:** Actual values provided to the function when it is called.
  - **Example:** In `multiply(5, 3)`, `5` and `3` are arguments.

The explanations for questions 16 and 17 are both clear, but there is some repetition, particularly regarding the postfix and prefix increment operators. Here’s a concise summary and comparison:

### 16. What is the Difference Between Postfix and Prefix Increment Operators?

#### Explanation:
- **Postfix Increment (`start++`)**: Returns the value of `start` first, then increments it.
- **Prefix Increment (`++start`)**: Increments `start` first, then returns the new value.

#### Example:
```javascript
let start = 5;

function postfixIncrement() {
    return start++;
}

function prefixIncrement() {
    return ++start;
}

console.log(postfixIncrement()); // Outputs: 5 (old value)
console.log(start);              // Outputs: 6 (incremented value)

start = 5; // Resetting start for the next example

console.log(prefixIncrement());  // Outputs: 6 (new value)
console.log(start);              // Outputs: 6 (incremented value)
```

#### Summary:
- **Postfix Increment**: Returns the value before incrementing.
- **Prefix Increment**: Returns the value after incrementing.

---

### 17. Difference Between `num++` vs. `++num` vs. `num + 1`

#### 1. `num++` (Post-Increment Operator)
- **Behavior**: Increments `num` by 1 **after** using its current value.
- **Effect**: The original value is used first, then `num` is increased.
- **Example**:
  ```javascript
  let num = 5;
  let result = num++;  // result is 5, num becomes 6
  ```

#### 2. `++num` (Pre-Increment Operator)
- **Behavior**: Increments `num` by 1 **before** using its new value.
- **Effect**: `num` is increased first, and then the new value is used.
- **Example**:
  ```javascript
  let num = 5;
  let result = ++num;  // result is 6, num is also 6
  ```

#### 3. `num + 1`
- **Behavior**: Adds 1 to `num` **without changing** `num`.
- **Effect**: `num` remains unchanged.
- **Example**:
  ```javascript
  let num = 5;
  let result = num + 1;  // result is 6, num is still 5
  ```

#### Key Differences:
- **`num++`**: Uses the current value of `num`, then increments it.
- **`++num`**: Increments `num` first, then uses the new value.
- **`num + 1`**: Calculates a new value based on `num` without altering `num`.

---

**Conclusion**:  `num + 1`is not about incrementing the variable itself but rather calculating a newvalue.

-------------------------------------------------------------------------------------------------------------
### VViMP

## operator precedence table in JavaScript, ordered from highest to lowest precedence:

1. **Grouping**: `()`
2. **Member Access**: `.` `[]`
3. **Function Call**: `()`
4. **New with Arguments**: `new`
5. **Postfix Increment/Decrement**: `++` `--`
6. **Prefix Increment/Decrement**: `++` `--`
7. **Unary Operators**: `+` `-` `~` `!` `typeof` `void` `delete`
8. **Exponentiation**: `**`
9. **Multiplication/Division/Modulus**: `*` `/` `%`
10. **Addition/Subtraction**: `+` `-`
11. **Bitwise Shift**: `<<` `>>` `>>>`
12. **Relational Operators**: `<` `<=` `>` `>=` `in` `instanceof`
13. **Equality Operators**: `==` `!=` `===` `!==`
14. **Bitwise AND**: `&`
15. **Bitwise XOR**: `^`
16. **Bitwise OR**: `|`
17. **Logical AND**: `&&`
18. **Logical OR**: `||`
19. **Nullish Coalescing**: `??`
20. **Conditional (Ternary) Operator**: `? :`
21. **Assignment Operators**: `=` `+=` `-=` `*=` `/=` `%=` `**=` `<<=` `>>=` `>>>=` `&=` `^=` `|=` `&&=` `||=` `??=`
22. **Comma Operator**: `,`

### Associativity
- **Left-to-Right**: Most operators, including arithmetic, bitwise, and logical operators.
- **Right-to-Right**: Assignment operators and the exponentiation operator.



## **Easy Way to Remember Operator Precedence**:(sabse achha sabko bracket me daalo jisko pehle karana hai)

Remember **"BEDMRAS"** to remember the order: (bed me raat anal sex)
(note - mult,div have same level and addition substraction have same level after div and multiplication above is just to remember)
- **B**: Brackets ( … ) — Highest precedence
- **E**: Exponentiation (**) 
- **DM**: Multiplication (`*`) / Division (`/`) — Next level
- **R**: Modulus ( % ) — Follows multiplication and division
- **A**: Addition (`+`) / Subtraction (`-`) — Lower than multiplication and division
- **S**: Shift operators (`<<`, `>>`, `>>>`)
- **R**: Relational operators (`<`, `<=`, `>`, `>=`, `in`, `instanceof`)
- **E**: Equality operators (`==`, `!=`, `===`, `!==`)
- **B**: Bitwise operators (`&`, `^`, `|`)
- **L**: Logical operators (`&&`, `||`)
- **N**: Nullish Coalescing (`??`)
- **C**: Conditional (Ternary) (`? :`)
- **A**: Assignment operators (`=`, `+=`, `-=` and others)
- **C**: Comma operator (`,`)

**Note:** When operators of the same precedence level appear, evaluate them from left to right.

### Example:
```javascript
console.log(1 + 2 ** 3 * 4 / 5); // Outputs: 7.4
```
**Explanation:** The precedence order is followed

---
