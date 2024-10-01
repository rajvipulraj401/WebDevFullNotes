All extra dsa question of dsa js 101 lecture 10 and 9 some remaining quiz question 




// function getTopStudents(students, N) {
//   // Sort the students array in descending order based on grades
//   students.sort((a, b) => b.grade - a.grade);

//   // Select the top N students
//   const topStudents = students.slice(0, N);

//   // Format the output
//   return topStudents.map(student => `name: ${student.name}`);
// }


// console.log(getTopStudents([ { name: "Alice", grade: 90 }, { name: "Bob", grade: 95 }, { name: "Charlie", grade: 85 }, { name: "David", grade: 92 }, { name: "Eve", grade: 88 } ], 3));
// console.log(getTopStudents([ { name: 'Alice', grade: 85 }, { name: 'Bob', grade: 92 }, { name: 'Charlie', grade: 78 }, { name: 'David', grade: 88 }, { name: 'Emily', grade: 95 } ], 1));











//  FilterStudents (Without Using Any Methods)


// function getTopStudents(students, N) {
//     // Sort the students array in descending order based on grades without using any methods
//     for (let i = 0; i < students.length - 1; i++) {
//         for (let j = 0; j < students.length - 1 - i; j++) {
//             if (students[j].grade < students[j + 1].grade) {
//                 // Swap the elements
//                 let temp = students[j];
//                 students[j] = students[j + 1];
//                 students[j + 1] = temp;
//             }
//         }
//     }

//     // Select the top N students
//     let topStudents = [];
//     for (let i = 0; i < N; i++) {
//         topStudents.push(`name: ${students[i].name}`);
//     }

//     return topStudents;
// }

// // Test cases
// console.log(getTopStudents([
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 95 },
//     { name: "Charlie", grade: 85 },
//     { name: "David", grade: 92 },
//     { name: "Eve", grade: 88 }
// ], 3));

// console.log(getTopStudents([
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 },
//     { name: 'David', grade: 88 },
//     { name: 'Emily', grade: 95 }
// ], 1));



//  FilterStudents (Without Using Any Methods)

// function filterStudents(students, passingGrade) {
//     // This function returns an array containing the names of all the students who have achieved a grade greater than or equal to passingGrade without using any methods
//     let newArr = [];
//     for (let i = 0; i < students.length; i++) {
//         if (students[i].grade >= passingGrade) {
//             newArr.push(students[i].name);
//         }
//     }
//     return newArr;
// }

// // Test cases
// console.log(filterStudents([
//     { name: "Alice", grade: 90 },
//     { name: "Bob", grade: 95 },
//     { name: "Charlie", grade: 85 },
//     { name: "David", grade: 92 },
//     { name: "Eve", grade: 88 }
// ], 90));

// console.log(filterStudents([
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 },
//     { name: 'David', grade: 88 },
//     { name: 'Emily', grade: 95 }
// ], 92));





---------------( Remove duplicates question  5 methods )-------------------


Sure! Here are five different methods to remove duplicates from an array, including their time and space complexities.

### Method 1: Using Set Data Structure
**Time Complexity: O(N)**
**Space Complexity: O(N)**
```javascript
// Please do not modify the below mentioned line of code
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
    // Method 1: Using Set Data Structure
    if (arr.length === 0) return [];

    let uniqueSet = new Set(arr);
    let newArr = [];
    uniqueSet.forEach(value => newArr[newArr.length] = value);

    return newArr;
}

// Test cases
console.log(removeDeduplicate([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDeduplicate([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(removeDeduplicate([5, 5, 5, 3, 3, 2, 1, 1, 1, 6])); // [5, 3, 2, 1, 6]
```

### Method 2: Without Using Any Built-in Methods
**Time Complexity: O(N^2)**
**Space Complexity: O(N)**
```javascript
// Please do not modify the below mentioned line of code
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
    // Method 2: Without Using Any Built-in Methods
    if (arr.length === 0) return [];

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

// Test cases
console.log(removeDeduplicate([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDeduplicate([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(removeDeduplicate([5, 5, 5, 3, 3, 2, 1, 1, 1, 6])); // [5, 3, 2, 1, 6]
```

### Method 3: Using `includes` Method
**Time Complexity: O(N^2)**
**Space Complexity: O(N)**
```javascript
// Please do not modify the below mentioned line of code
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
    // Method 3: Using includes Method
    if (arr.length === 0) return [];

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (!newArr.includes(arr[i])) {
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

// Test cases
console.log(removeDeduplicate([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDeduplicate([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(removeDeduplicate([5, 5, 5, 3, 3, 2, 1, 1, 1, 6])); // [5, 3, 2, 1, 6]
```

### Method 4: Using a Loop to Manually Copy Elements
**Time Complexity: O(N^2)**
**Space Complexity: O(N)**
```javascript
// Please do not modify the below mentioned line of code
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
    // Method 4: Using a Loop to Manually Copy Elements
    if (arr.length === 0) return [];

    let newArr = [];
    let newIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newIndex; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArr[newIndex] = arr[i];
            newIndex++;
        }
    }

    return newArr;
}

// Test cases
console.log(removeDeduplicate([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDeduplicate([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(removeDeduplicate([5, 5, 5, 3, 3, 2, 1, 1, 1, 6])); // [5, 3, 2, 1, 6]
```

### Method 5: Using `newArr.length` for Indexing
**Time Complexity: O(N^2)**
**Space Complexity: O(N)**
```javascript
// Please do not modify the below mentioned line of code
module.exports = removeDeduplicate;

function removeDeduplicate(arr) {
    // Method 5: Using newArr.length for Indexing
    if (arr.length === 0) return [];

    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        let isDuplicate = false;
        for (let j = 0; j < newArr.length; j++) {
            if (arr[i] === newArr[j]) {
                isDuplicate = true;
                break;
            }
        }
        if (!isDuplicate) {
            newArr[newArr.length] = arr[i];
        }
    }

    return newArr;
}

// Test cases
console.log(removeDeduplicate([1, 2, 3, 2, 4, 5, 3])); // [1, 2, 3, 4, 5]
console.log(removeDeduplicate([5, 4, 3, 2, 1])); // [5, 4, 3, 2, 1]
console.log(removeDeduplicate([5, 5, 5, 3, 3, 2, 1, 1, 1, 6])); // [5, 3, 2, 1, 6]
```

### Summary
- **Method 1**: Using Set Data Structure
- **Method 2**: Without Using Any Built-in Methods
- **Method 3**: Using `includes` Method
- **Method 4**: Using a Loop to Manually Copy Elements
- **Method 5**: Using `newArr.length` for Indexing
