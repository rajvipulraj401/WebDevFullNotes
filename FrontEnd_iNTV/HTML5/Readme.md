

 # NOTE -DO NOT WRITE DETAILED ANS JO SIRF ANS NAAM SE HAI YA intvAns NAAME SE WO PAART ANS KA LIKHNA .  NOW START 👇🏼👇🏼👇🏼

Q0) What is HTML?

Answer---HTML stands for HyperText Markup Language. It is used to provide structure to web pages by defining elements such as buttons, links, images, and headings. Think of it as the skeleton of a website which is essential for creating any web page. Without HTML, there wouldn’t be any websites
.
---

Q1) What does an HTML document consist of?

Answer ----An HTML document consists of four main parts Doctype Declaration , root element , head element and Body element .

1. **Doctype Declaration**: This declaration defines the document type and version of HTML. It ensures the browser knows to render the page in standards mode.
   ```html
   <!DOCTYPE html>
   ```

2. **Root Element**: The `<html>` tag is the root element that wraps all the content of the HTML document.
   ```html
   <html>
   ```

3. **Head Element**: This section includes meta-information about the document, such as:
   - **Title**: The title of the webpage, which appears in the browser tab.
   - **Meta Tags**: Information about the webpage, like character set, author, and description.
   - **Links to Stylesheets**: External CSS files that style the webpage.
   - **Scripts**: JavaScript files that add interactivity to the webpage.
 

4. **Body Element**: This section contains the actual content of the webpage, such as:
   - **Text**: Paragraphs, headings, and lists.
   - **Images**: Pictures and graphics.
   - **Links**: Hyperlinks to other webpages.
   - **Forms**: Input fields, buttons, and other form elements.
   - **Multimedia**: Videos and audio files.

---


Q2) What are HTML Tags?

Ans -**HTML Tags** are the building blocks of HTML elements. They consist of an opening tag and a closing tag which is used to mark the beginning and end of an HTML element. For example, in the `<p>`(paragraph element) element, `<p>` is the opening tag and `</p>` is the closing tag.

**Note:** Not all HTML tags have closing tags. These are called **self-closing tags** or **void tags**. Examples include the `<img>` tag, `<br>` tag, and `<input>` tag.

Tags that have both opening and closing tags are called **container tags** or **non-void tags**. Examples include `<div></div>`, `<p></p>`, and `<h1></h1>`.

---


Q3) What is the difference between HTML tags and HTML elements?

Ans -Difference Between HTML Tags and HTML Elements

**HTML Tags**:
-  HTML Tags consists of an opening tag and a closing tag which is used to mark the beginning and end of an HTML element

**HTML Elements**:
- HTML elements are the complete structure created  using both the tags and the content. For example, if we have a paragraph element with the content "hello," Then for this we have an opening tag, content, and a closing tag. This whole together is called an element.



| **Aspect**          | **HTML Tags**                                                                 | **HTML Elements**                                                                 |
|---------------------|------------------------------------------------------------------------------|----------------------------------------------------------------------------------|
| **Definition**      | Tags are the markers used to define the start and end of an element.          | HTML elements are the complete structure created by using tags and the content.  |
| **Syntax**          | Tags are enclosed in angle brackets. For example, `<p>` is an opening tag and `</p>` is a closing tag. | An element consists of an opening tag, content, and a closing tag.               |
| **Example**         | `<p>` (opening tag) and `</p>` (closing tag)                                  | `<p>This is a paragraph.</p>`                                                    |

---


Q4) What is Formatting in HTML?

Ans - **HTML Formatting** is the process of enhancing the appearance of text on a webpage to improve its look and feel. In order to do that we have various html tags such

Examples:
- **Italic**: `<i>` or `<em>` *italic is trh*
- **Underline**: `<u>`
- **Bold**: `<b>` or `<strong>`
- **Strikethrough**: `<s>` or `<del>` **kata hua**
- **Subscript**: `<sub>` **H2O (yaha 2 neeche likho yahi subscript hai)**
- **Superscript**: `<sup>` **e=mc2 (yaha 2 upar likho yahi superscript hai)**

---


Q5) How to Create a Hyperlink in HTML?

Ans -HTML provides an anchor tag (`<a>`) to create hyperlinks that link one page to another. The syntax for creating a hyperlink is:

```html
<a href="URL">Link Text</a>
```
These tags can appear in any of the following ways:

- **Unvisited Link**: Displayed as underlined and blue.
- **Visited Link**: Displayed as underlined and purple.
- **Active Link**: Displayed as underlined and red.
---

Q5.1) Does a hyperlink only apply to text?

Ans -No, hyperlinks can be applied to both text and images. The HTML anchor tag (`<a>`) defines a hyperlink that links one page to another. The `href` attribute is the most important attribute of the anchor tag, specifying the URL of the page the link goes to.
```html
<a href="https://www.example.com">
    <img src="image.jpg" alt="An image">
</a>
```

Q 6) What are HTML Attributes and how do we use them?

Ans-  **HTML Attributes** are special words used inside the opening tag of an HTML element to control the element’s behavior or provide additional information about that element. Attributes typically come in name/value pairs like `name="value"` and are always included in the opening tag.

For example:
```html
<link rel="stylesheet" href="style.css">
```
Here, `rel` and `href` are attributes that provide extra information about the `<link>` tag, such as what kind of link it is and what its relation is.

---
Q7) What is a Marquee in HTML?

Ans - The **HTML Marquee** element (`<marquee>`) is used to create a scrolling area of text or images on a web page. This element allows content to move horizontally or vertically across the screen, attracting attention or adding dynamic movement to a webpage.

- **Scrolling Text from Left to Right**:
  ```html
  <marquee direction="right">This text will scroll from left to right.</marquee>
  ```
  **Output**: <marquee direction="right">This text will scroll from left to right.</marquee>



**Note:** The `<marquee>` tag is deprecated in HTML5 and is not recommended for use in modern web development. It is better to use CSS animations for similar effects.
-----

Q8) Which HTML Tag is Used to Display Data in Tabular Form?

Ans - The HTML `<table>` tag is used to display data in a tabular form (rows and columns). It also helps manage the layout of the page, such as the header section, navigation bar, body content, and footer section.

Here is a list of tags used while displaying data in a tabular form:

| **Tag**       | **Description**                                                                 |
|---------------|---------------------------------------------------------------------------------|
| `<table>`     | Defines a table.                                                                |
| `<tr>`        | Defines a row in a table.                                                       |
| `<th>`        | Defines a header cell in a table.                                               |
| `<td>`        | Defines a cell in a table.                                                      |
| `<caption>`   | Defines the table caption.                                                      |
| `<colgroup>`  | Specifies a group of one or more columns in a table for formatting.             |
| `<col>`       | Used with `<colgroup>` to specify column properties for each column.            |
| `<tbody>`     | Groups the body content in a table.                                             |
| `<thead>`     | Groups the header content in a table.                                           |
| `<tfoot>`     | Groups the footer content in a table.                                           |

### Example of an HTML Table

```html
<!DOCTYPE html>
<html>
<head>
    <title>HTML Table Example</title>
</head>
<body>
    <table border="1">
        <caption>Monthly Savings</caption>
        <thead>
            <tr>
                <th>Month</th>
                <th>Savings</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>January</td>
                <td>$100</td>
            </tr>
            <tr>
                <td>February</td>
                <td>$80</td>
            </tr>
        </tbody>
        <tfoot>
            <tr>
                <td>Total</td>
                <td>$180</td>
            </tr>
        </tfoot>
    </table>
</body>
</html>
```

**Output**:

---

**Monthly Savings**

| **Month**   | **Savings** |
|-------------|-------------|
| January     | $100        |
| February    | $80         |
| **Total**   | **$180**    |

### Explanation of Example Code

- **DOCTYPE Declaration**: The `<!DOCTYPE html>` declaration defines the document type, which is HTML5 in this case.
- **`<head>`**: This section contains metadata about the document, like its title.
- **`<table>`**: The main tag that creates the table. The `border="1"` attribute adds a border to the table.
- **`<caption>`**: Provides a heading or title to the table ("Monthly Savings" in this case).
- **`<thead>`**: Contains the table header, where `<th>` elements define the column names: "Month" and "Savings."
- **`<tbody>`**: Contains the main body of the table with data rows for "January" and "February."
- **`<tfoot>`**: Contains the footer section, where the total savings are calculated.

---
Q9) What is the `<caption>` Tag ?

Ans - The `<caption>` tag in HTML is used to provide a title or explanation for the data in an HTML table. It must be placed immediately after the `<table>` tag and is typically displayed above the table by default.

---


Q10 ) What are list types in HTML and what are its various types?

IntvAns ---

1. **Ordered List (`<ol>`)**: This type of list is used when the order of items is important. Each item in the list is numbered, and the numbering is automatically handled by the browser. Ordered lists are useful for instructions, steps, or any content that needs to be presented in a specific sequence.

2. **Unordered List (`<ul>`)**: This type of list is used when the order of items is not important. Each item in the list is marked with a bullet point. Unordered lists are commonly used for lists of items where the sequence does not matter, such as a list of features or a shopping list.

3. **Definition List (`<dl>`)**: This type of list is used for defining terms and their descriptions, similar to a dictionary. Each term is defined using the `<dt>` tag, and its description is provided using the `<dd>` tag. Definition lists are useful for glossaries, FAQs, or any content that requires term-definition pairs.



 -HTML lists are used to group related items together. They help in organizing content in a structured manner, making it easier for users to read and understand. The three main types of lists in HTML are:

1. **Ordered List**:
   - Displays elements in a numbered format.
   - Represented by the `<ol>` tag.
   - Example:
     ```html
     <ol>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ol>
     ```

2. **Unordered List**:
   - Displays elements in a bulleted format.
   - Represented by the `<ul>` tag.
   - Example:
     ```html
     <ul>
       <li>First item</li>
       <li>Second item</li>
       <li>Third item</li>
     </ul>
     ```

3. **Definition List**:
   - Displays elements in a definition format, similar to a dictionary.
   - Uses the `<dl>`, `<dt>`, and `<dd>` tags.
   - Example:
     ```html
     <dl>
       <dt>HTML</dt>
       <dd>HyperText Markup Language</dd>
       <dt>CSS</dt>
       <dd>Cascading Style Sheets</dd>
     </dl>
     ```
---

Output of Definition List :-

**HTML**  
&nbsp;&nbsp;&nbsp;&nbsp;HyperText Markup Language

**CSS**  
&nbsp;&nbsp;&nbsp;&nbsp;Cascading Style Sheets

---




---

Q11) What are  semantic tags in  HTML?Give some example and What are nonSemantic tags give some example

Ans --
### Semantic Tags in HTML

**Semantic tags** in HTML are those tag that clearly describe the meaning of the content they hold .It  clearly describe the meaning of the content they hold in a human- and machine-readable way. These tags help both the browser and developers understand the structure and content of a webpage more effectively.

#### Benefits of Semantic Tags:
- Improve SEO (Search Engine Optimization) as search engines can better understand the content.
- Enhance accessibility for screen readers and other assistive technologies.
- Make the HTML code more readable and maintainable.

#### Examples of Semantic Tags: `<header> , <article> ,<aside> <section>,<nav>` etc


### Non-Semantic Tags in HTML

On the other hand **Non-semantic tags**in HTML are those tag that do not convey any meaning of the content they are holding .They are used purely for styling and layout, without specifying what content they are holding.

#### Examples of Non-Semantic Tags are `<div>, <span>` , <b>, <i>(aise bolo div span bold etc) etc.

**Note**: Tags like `<p>`, `<h1>`, etc., are semantic as they provide meaning to the content. Conversely, tags like `<b>`, `<i>`, `<u>`, `<font>`, and `<center>` are non-semantic because they are used purely for styling without specifying any information of the content they are holding .

Note 2-Semantic tags improve clarity, accessibility, and search engine optimization, while non-semantic tags are more general-purpose containers used for layout and styling.
---

---
Q12) What is an Image Map in HTML?


 intv Ans --
`An  Image map in Html is used to display an image on a  website in which we want to have multiple clickable areas (hotspots) that lead to different locations or perform various actions. for example - Imagine we have a map of a county and we want to be able to click on the different city and be able to see the details about the city .so for these kind of scenarios we use image Map As using an image inside an anchor tag will not be able to achieve this and only make the entire image clickable and point to only one specific location but the Image Map will not only make it point to different location It also allows for pixel-perfect interaction by defining different shapes (like circles, rectangles, or polygons) for each clickable area, providing precise targeting of the regions on the image.

(very helpful when we have different shape images like shoes and we want to cover the whole image so when user hover on it it becomes clickable making it precise and pixel perfect)`


❌❌❌❌no write detailed❌❌❌❌❌❌

####  Detailed Ans -- 
An **image map** in HTML is an image with clickable areas, known as **hotspots**, that link to different destinations or trigger specific actions when clicked. You can define specific areas on the image to act as links, making different parts of the image interactive.

### How Does an Image Map Work?

1. **Image**: The image is displayed using the `<img>` tag.
2. **Map Definition**: The clickable areas are defined using the `<map>` tag.
3. **Clickable Areas**: The clickable parts of the image (hotspots) are created using the `<area>` tag within the `<map>`.

---

### Step-by-Step Explanation

#### 1. **Add the Image**
First, add the image you want to use in the image map using the `<img>` tag and assign it to a map using the `usemap` attribute.

```html
<img src="https://s1.1zoom.me/big0/924/Fitness_Dumbbells_Human_482898.jpg" alt="Fitness Image" usemap="#fitnessmap" width="600">
```

- **`src`**: The source URL of the image.
- **`usemap`**: Associates the image with a map, identified by `#fitnessmap`.

#### 2. **Define the Image Map**
Next, define the map using the `<map>` tag, giving it the same name as the `usemap` reference (`fitnessmap`).

```html
<map name="fitnessmap">
  <!-- Areas will be defined here -->
</map>
```

#### 3. **Create Clickable Areas**
Now, define clickable areas within the map using the `<area>` tag. You need to specify:
- **`shape`**: The shape of the clickable area (e.g., `rect`, `circle`, or `poly` for a polygon).
- **`coords`**: The coordinates that define the clickable area.
- **`href`**: The URL or link that the area will point to.

Example of defining areas:

```html
<map name="fitnessmap">
  <!-- Circular area around the dumbbell -->
  <area shape="circle" coords="300,180,70" href="https://example.com/dumbbells" alt="Dumbbells">

  <!-- Rectangular area on the human body -->
  <area shape="rect" coords="120,40,500,350" href="https://example.com/fitness" alt="Fitness Body">
</map>
```

- **For the circle**: 
  - `coords="300,180,70"` means the center of the circle is at (300, 180) and its radius is 70.
- **For the rectangle**: 
  - `coords="120,40,500,350"` means the top-left corner is at (120, 40) and the bottom-right corner is at (500, 350).

---

### Full Example Code

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Map Example</title>
</head>
<body>
    <h1>Interactive Image Map</h1>
    
    <!-- Image with clickable areas -->
    <img src="https://s1.1zoom.me/big0/924/Fitness_Dumbbells_Human_482898.jpg" alt="Fitness Image" usemap="#fitnessmap" width="600">
    
    <!-- Map definition with clickable areas -->
    <map name="fitnessmap">
      <!-- Circular clickable area for the dumbbells -->
      <area shape="circle" coords="300,180,70" href="https://example.com/dumbbells" alt="Dumbbells">
      
      <!-- Rectangular clickable area for the fitness body -->
      <area shape="rect" coords="120,40,500,350" href="https://example.com/fitness" alt="Fitness Body">
    </map>
    
</body>
</html>
```

---

### Visual Output Explanation

1. The image will appear on the page.
2. **Clickable Areas**:
   - Clicking on the **dumbbells** part of the image will redirect you to a link about dumbbells (`https://example.com/dumbbells`).
   - Clicking on the **body** part will redirect you to a fitness-related link (`https://example.com/fitness`).

---

### How to Test

- You can copy and paste this HTML code into a `.html` file and open it in a browser.
- When you hover over the specific areas (like the dumbbells or the body), the mouse pointer will change, and clicking those areas will take you to the respective links.

---

### Conclusion

An image map is best used when you have **one image** but want **multiple clickable areas** with different behaviors. It is a great way to create interactive images where clicking on specific parts of the image performs unique actions.

----------------------
-------------------

Q13) How to insert a copyright symbol on a browser page?

Ans-  You can insert a copyright symbol by using  `&copy; or &#169;` in an HTML file.
--

Q14.0) How to create a nested webpage in HTML? or What is use of iframe tag?

Ans - To create a nested webpage in HTML, we use `<iframe>` tag in html . In other words, it represents a webpage within a webpage. The HTML  `<iframe >`tag defines an inline frame. For example: 
```html
<!DOCTYPE html>    
<html>    
<body>    
<h2>HTML Iframes example</h2>    
<p>Use the height and width attributes to specify the size of the iframe:</p>    
<iframe src="https://www.javatpoint.com/" height="300" width="400"></iframe>    
</body>    
</html>
```    
Output -- INSIDE our website another website of java point will be there usko scroll kr payenge bs ho gya 

---
Q14) How do you keep list elements straight in an HTML file?

IntvAns - In order to keep list elements straight in an HTML file we should use proper tag of which kind of list we are making and should ensure that the list tag is properly enclosed in the type of list tag we are making  ex `<ul> , <ol> <dl >` list .
Also in order to add more allignment or styling we can use css .ex flexbox , margin , padding , text-allign .

#### Ans -- 
To keep list elements organized in HTML:

1. **Use Proper Tags**: 
   - `<ol>` for ordered lists, `<ul>` for unordered lists, and `<dl>` for definition lists.
   
2. **Indentation**: 
   -  Properly Indent list items using (`<li>`) tag for readability. 

3. **Consistent Structure**: 
   - Ensure all `<li>` elements are inside `<ol>`, `<ul>`, or `<dl>`.

4. **Nesting Lists**: 
   - Properly format nested lists for clarity.

5. **Use CSS**: 
   - Style lists (markers, spacing) with CSS for better presentation. 




------


 Q15) How do you align list elements in an HTML file?


Intv Ans -- We can align list element in an Html file using css for example we can use flexbox to make it align in different ways , also we can use properties like text-align , padding and margint to make allignment more smooth
 Ans -- 
To align list elements in an HTML file, you can use CSS for precise control over alignment and spacing. Here are some common ways to achieve alignment:

1. **Using CSS `list-style-position`**:
   - Controls whether list markers (bullets or numbers) are inside or outside the list items.
   ```css
   ul {
     list-style-position: inside; /* Aligns markers with the list text */
   }
   ```

2. **Using CSS `text-align`**:
   - Aligns the text of list items to the left, right, or center.
   ```css
   ul {
     text-align: center; /* Centers the text */
   }
   ```

3. **Adjusting Indentation**:
   - Use `margin` or `padding` to adjust the indentation of list items.
   ```css
   ul {
     padding-left: 20px; /* Indents the list */
   }
   ```

4. **Flexbox for Custom Alignment**:
   - Use Flexbox for more advanced alignment options.
   ```css
   ul {
     display: flex;
     justify-content: space-between; /* Spreads items evenly */
   }
   ```

----

Q16) What is the difference between an ordered list and an unordered list?


Intv Ans --  
The difference between an ordered list and an unordered list is based on whether the items need to be in a specific order. 

- We use an **ordered list** when the order of items matters, such as steps in a process. Each item is automatically numbered or lettered by the browser.
  
- An **unordered list** is used when the order of items doesn’t matter, and list items are displayed with bullet points by default, without any numbering or specific order.

---

Q17) What is a style sheet?

 Ans --  
A **style sheet** is used to add styling to a web page, and it's typically attached to an HTML document using the `<link>` tag. By using a style sheet we can control the appearance of the webpage, including things like colors, fonts, layout, animations and  hover effects . It helps make the webpage visually appealing and interactive, ensuring proper alignment and responsiveness across devices.

---


Q18) How do we insert a comment in HTML?

Ans -To insert a comment in an Html file we use an opening angle bracket  followed by an exmlamation mark and then two dashes and then again  two dashes and a closing angle bracket.

So whatever we write between this `<!-- Your comment here -->`. is treated as comment by HTML and will not be displayed in the browser. Comments are useful for adding notes or explanations in the code that are visible only to developers.

---


Q19) Can you create a multi-colored text on a web page?

Ans - 
Yes, we can create multi-colored text on a web page using **CSS**. By applying different **color** properties to specific parts of the text, we can change the color for each portion. This can be done by wrapping different sections of text in `<span>` or `<div>` elements and styling them with CSS.

For example:
```html
<p>
  This is <span style="color:red;">red</span>, 
  this is <span style="color:blue;">blue</span>, 
  and this is <span style="color:green;">green</span>.
</p>
```

---

Q 20)  Is it possible to change the color of the bullet?


 Intv Ans --  
Yes, it's possible to change the color of the bullet in several ways:

1. **Using `::marker`**: The `::marker` pseudo-element can be used to directly style the bullet itself. You can apply color, font size, etc.

2. **Using a Custom Bullet Image**: You can replace the default bullet with a custom image, allowing full control over the bullet's appearance.

3. **Using `::before` Pseudo-Element**: You can create your own custom bullet by adding a colored bullet symbol before each list item using `::before`.

4. **Using `text-shadow`**: You can create a colored bullet effect by applying `text-shadow` to the list item. This method makes the text itself transparent and applies a shadow with the desired color to simulate colored bullets.


`Note - Note: The color of the bullet is typically the same as the color of the first text in the list item. Therefore, if you want to change the bullet color, you generally need to change the color of the text as well.`

####For detail answer visit github and understand it clearly

❌❌❌❌no write detailed❌❌❌❌❌❌

###Detail Answer ---- 
Yes, you can change the color of the bullet points in a list using several methods. Here are some ways to do it:

1. **Using `::marker` Pseudo-Element**: The `::marker` pseudo-element allows you to style the bullet points directly.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Change Bullet Color</title>
        <style>
            ul {
                list-style-type: disc; /* Default bullet style */
            }

            ul li::marker {
                color: red; /* Change bullet color to red */
            }
        </style>
    </head>
    <body>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
    </html>
    ```

2. **Using Custom Bullet Image**: Replace the default bullets with a custom image that has the desired color.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Custom Bullet Image</title>
        <style>
            ul {
                list-style-type: none; /* Remove default bullets */
                padding-left: 0;
            }

            ul li {
                background: url('path-to-your-colored-bullet.png') no-repeat left center;
                padding-left: 25px; /* Adjust according to your bullet image size */
            }
        </style>
    </head>
    <body>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
    </html>
    ```

3. **Using Pseudo-Elements**: Create custom bullets with different colors using the `::before` pseudo-element.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Colored Bullet with Pseudo-Element</title>
        <style>
            ul {
                list-style-type: none; /* Remove default bullets */
                padding-left: 0;
            }

            ul li {
                position: relative;
                padding-left: 20px; /* Space for custom bullet */
            }

            ul li::before {
                content: '•'; /* Bullet character */
                color: red; /* Bullet color */
                position: absolute;
                left: 0;
                top: 0;
            }
        </style>
    </head>
    <body>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
    </html>
    ```

4. **Using `text-shadow` for Bullet Points**: Apply a text shadow to the bullet points for a colored effect.

    ```html
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bullet Color with Text Shadow</title>
        <style>
            ul {
                list-style-type: disc; /* Default bullet style */
            }

            ul li {
                color: transparent; /* Hide the text color */
                text-shadow: 
                    0 0 0 red; /* Red shadow creates the bullet color effect */
            }
        </style>
    </head>
    <body>
        <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
        </ul>
    </body>
    </html>
    ```

**Note**: The color of the bullet is always the color of the first text of the list. So, if you want to change the color of the bullet, you must change the color of the text. This is why methods like `::marker`, custom bullet images, or pseudo-elements are used to achieve more control over bullet color.

**Additional Example Using Inline CSS:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Change Bullet Color</title>
</head>
<body>
    <ul style="list-style-type: disc;">
        <li style="color: red;">Item 1</li>
        <li style="color: red;">Item 2</li>
        <li style="color: red;">Item 3</li>
    </ul>
</body>
</html>
```

**List Styling:**
- The `<ul>` tag has `style="list-style-type: disc;"` to ensure default bullet styling.
- Each `<li>` tag has `style="color: red;"` to set both the text color and the bullet color to red.

---

Q21) How many tags can be used to separate a section of texts?

 Intv Ans -- 

You can use several tags to separate sections of text, each serving different purposes:

1. **`<br>`**: Inserts a line break within the same block of text.
2. **`<p>`**: Defines a paragraph, creating space above and below itself.
3. **`<h1>`, `<h2>`, etc.**: Defines headings of various levels, adding space and highlighting sections.
4. **`<div>`**: A container for grouping content, typically used with CSS to add spacing.
5. **`<section>`, `<article>`, `<aside>`, `<header>`, `<footer>`, `<nav>`**: Semantic tags that structure content and often add spacing based on CSS.

**Summary**: Use `<br>` for line breaks, and tags like `<p>`, `<h1>`, and `<div>` for creating distinct sections with spacing.
---


Q22) How to make a picture a background image of a web page?

INtv Ans -To set a picture as the background of a web page, use  background-image property and specify the URL of the image. For example:

```css
body {
    background-image: url('path-to-your-image.jpg');
}
```

---

Q23) What are empty elements?

Intv Ans --  HTML elements that do not contain have any content or closing tags are called empty elements. For example: `<br>, <hr>` etc.


---

 Q24) What is the use of a span tag? Give one example.

Intv Ans --  
The `<span>` tag is used to apply styling and JavaScript functionality to a specific part of text within a block of text. For example,  if we have a text   "Hello beautiful world," and we want to change the color of "beautiful,"  and make it clickable . So For this we would use span>` tag and apply the style and the onClick method on it . 

 So in conclusion span tag is  an inline element that does not create additional space or line breaks and allows you to modify specific text without affecting the rest of the content .
  example:

```html
<span style="color: red;" onclick="alert('Clicked!')">beautiful</span>
```

---

Q25) What are the entities in HTML?

Intv Ans --  
HTML entities are special codes used to display characters that are reserved in HTML or not easily typable. These entities ensure that characters are displayed correctly in the browser without being interpreted as HTML code. For example, `&lt;` represents `<`, and `&amp;` represents `&`.

**Purpose:**
- **Reserved Characters:** Some characters like `<` and `>` are reserved in HTML for defining tags. Entities ensure these characters are displayed correctly.
- **Special Characters:** Entities are also used for characters not easily typed on a keyboard, such as `©` (copyright) or `€` (euro).

---

Q26) Why is a URL encoded in HTML?

#### Intv Ans --  
URL encoding, also known as percent encoding, is used to convert characters into a format that can be transmitted over the Internet. This is essential because URLs can only be sent using the ASCII character set, and Since URLs often contain characters that are not part of   ASCII set or have characters that have special meanings in HTML (e.g., `/`, `&`, `?`). So  these characters need to be converted into a valid ASCII format to prevents issues with URLs being misinterpreted by web servers and browsers .  So , The non-ASCII characters are replaced with a "%" followed by hexadecimal digits.
For example, spaces are encoded as `%20`, and special characters like `&` and `?` are converted into `%26` and `%3F` respectively.

---


Q27)  Is `<!DOCTYPE html>` an HTML tag?

Intv Ans --  
No, the `<!DOCTYPE html>` declaration is not an HTML tag. It is like an instruction used to inform the browser  about  which version of Html is being used to render the page like In this case, `<!DOCTYPE html>` specifies that the document is using HTML5.

---

Q28) What is whitespace in HTML?

 Intv Ans --  
Whitespace in HTML refers to any space, tab, or line break used to separate elements and content in the code. It helps with the readability of the code but is generally ignored by browsers when rendering the page, meaning multiple spaces or line breaks are treated as a single space.

For example:

```html
Hello          world



How    are you?
```

**Output:**

```
Hello world

How are you?
```

Additional Notes:
- **Non-breaking Space (`&nbsp;`)**: To add a space that will not be collapsed, you can use the non-breaking space entity `&nbsp;`.
-**Multiple Line breaks(`<br>`)** : To create multiple line breaks, use multiple <br> tags or apply CSS for spacing.
- **Whitespace Collapse**: Browsers collapse multiple whitespace characters into a single

----
Q29) How do we create links to different sections within the same HTML web page?

 Intv Ans --  
To create links to different sections within the same HTML web page, we use an anchor tag (`<a>`) combined with an `id` attribute. This technique is often referred to as creating “anchor links” or “bookmarks.”

In order to do that we add an  `id` Attribute to the Target Section where we want to go and then we use the anchor tag and inside its href attribut we write # and its id name to link it to that id section.


here how we do:

1. **Add an `id` Attribute to the Target Section**: Assign a unique `id` to the section you want to link to.
   
2. **Create a Link to the Target Section**:  Use the `href` attribute in an anchor tag with a `#` followed by the `id` value of the target section.

**Example:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page with Internal Links</title>
</head>
<body>
    <!-- Links -->
    <a href="#section1">Go to Section 1</a>
  

    <!-- Sections -->
    <h2 id="section1">Section 1</h2>
    <p>This is Section 1.</p>

    
</body>
</html>
```

In this example, clicking on "Go to Section 1" will scroll the page to the element with `id="section1"`.

---

 Q30) Can we create our own HTML tags like creating our name HTML tags? If yes, how and why?

#### Intv Ans --  
Yes, we can create our own HTML tags using a concept known as Custom Elements or Web Components. It allows us to define new HTML tags with custom behavior and properties. 

**How to Create Custom HTML Tags:**
1. **Define a Custom Element Class**:
   Create a JavaScript class that extends the `HTMLElement` class.

2. **Register the Custom Element**:
   Use the `customElements.define()` method to define your new element and associate it with the class you created.

3. **Use the Custom Element in HTML**:
   Once defined, you can use your custom element just like any other HTML tag.

**Why Use Custom Elements?**
- **Encapsulation**: Encapsulate HTML, CSS, and JavaScript into a single component.
- **Reusability**: Reuse complex functionality or styling across different parts of your application.
- **Maintainability**: Keep related code together, making it easier to manage and update.
- **Abstraction**: Simplify the interface for complex components, making them easier to use and understand.

**Example Code:**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Custom HTML Tag</title>
    <style>
        my-element {
            display: block;
            padding: 10px;
            background-color: lightblue;
            border: 1px solid blue;
        }
    </style>
</head>
<body>

    <!-- Use the custom element -->
    <my-element>Hello, I'm a custom element!</my-element>

    <script>
        // Define a custom element class
        class MyElement extends HTMLElement {
            constructor() {
                super();
                // Attach a shadow DOM to the element
                const shadow = this.attachShadow({mode: 'open'});
                shadow.innerHTML = `<p>This is a custom element</p>`;
            }
        }

        // Register the custom element
        customElements.define('my-element', MyElement);
    </script>

</body>
</html>
```

In this example:
- A custom element `<my-element>` is created.
- The element uses shadow DOM to encapsulate its content and styling.

---

Q31) What is the `alt` attribute in HTML?

Intv Ans --  
The `alt` attribute, short for "alternative text," is used in HTML to provide a text description of an image. It is added to the `<img>` tag to describe the content of the image for screen readers and in cases where the image cannot be displayed. 

**Purpose:**
- **Accessibility**: Helps visually impaired users understand the content of the image through screen readers.
- **SEO**: Assists search engines in indexing the image content.
- **Fallback**: Provides a textual description when the image fails to load.

**Example:**

```html
<img src="logo.png" alt="Company logo">
```
---


Q 32) How do we add inline style to an HTML element? Give an example by adding color to a heading.

Intv Ans --  
To add inline style to an HTML element, we use the `style` attribute directly within the HTML tag. The `style` attribute allows us to apply CSS styles to the element , using a key-value pair format where the CSS property and value are specified.

**Example:**

```html
<h1 style="color: blue;">This is a blue heading</h1>
```
---

Q33)What are the different kinds of Doctypes available? 

Intv Ans --  
Doctype declarations are used to specify the version of HTML or XHTML that a document is using. They help browsers render the page correctly. Here are the main types of Doctypes:

1. **HTML5**: The simplest and most modern Doctype, which does not require a reference to a DTD (Document Type Definition). It is used for HTML5 documents.
   ```html
   <!DOCTYPE html>
   ```

2. **HTML 4.01**: Three variations exist, depending on the type of document:
   - **Strict**: No deprecated tags or attributes.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
     ```
   - **Transitional**: Allows deprecated tags and attributes for backward compatibility.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
     ```
   - **Frameset**: Used for documents that use frames.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
     ```

3. **XHTML 1.0**: Also has three variations, similar to HTML 4.01:
   - **Strict**: No deprecated elements or attributes.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
     ```
   - **Transitional**: Allows deprecated elements and attributes.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
     ```
   - **Frameset**: Used for documents with frames.
     ```html
     <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
     ```
---



Q34) What are the different ways to add styling in HTML? Give all the three ways.

Intv Ans --  
There are three primary ways to add styling to HTML documents:

1. **Inline Styling**: Apply styles directly within an HTML element using the `style` attribute.

2. **Internal Styling**: Define styles within a `<style>` tag in the `<head>` section of the HTML document.

3. **External Styling**: Link to an external CSS file using the `<link>` tag in the `<head>` section of the HTML document. ` <link rel="stylesheet" href="styles.css"> `

In CSS, the hierarchy or specificity of styles determines which styles are applied when multiple styles are applied to the same element. so the **Specificity Ordering** is that Inline styles have the highest specificity, followed by internal styles, and then external styles.

---

Q35) What is the differenece between an "attribute" and a "property" on HTMl?

 Intv Ans --  
In HTML, attributes and properties represent different aspects of elements:

1. **Attribute**:
   - **Definition**: An attribute is a part of the HTML element's markup. It provides additional information about an element and is defined within the opening tag.
   - **Example**: `<input type="text" value="Hello">`

2. **Property**:
   - **Definition**: A property is a value that can be accessed or modified through JavaScript. It represents the current state or value of an element and reflects changes made by JavaScript.
   - **Usage**: It is use to  reflect the current state of the element, such as `value` for input elements, `textContent` for text, etc.

   - **Example**: `document.querySelector('input').value = 'World';`

**Key Difference**: Attributes define initial values or settings in the HTML markup, while properties represent the current state or value of an element in the DOM, which can change dynamically.

---


 Q36) What is the purpose of the 'doctype' declaration in HTML documents?what will happen if it is not present there?

 Intv Ans --  
The `<!DOCTYPE>` declaration serves as an instruction to the browser about which version of HTML or XHTML is being used to render the page. For example, `<!DOCTYPE html>` specifies that the document is using HTML5. It is not an HTML tag but an instruction placed at the start of the HTML document to ensure the browser renders the page correctly. Without it, browsers may render the page in "quirks mode," leading to inconsistent display across different browsers.
 

----

Q37) What are the differences between block elements, inline elements, and inline-block elements?

#### Intv Ans --
In HTML, elements can have different display properties such as block, inline, and inline-block. 

1. **Block Elements**: 
   - Block elements are those elements that take up the full width available and always start on a new line. They stack vertically, taking up the entire width of their parent container.
   - You can control dimensions (width, height), margins, and padding for block elements.
   - **Use case**: These elements are basically used for structuring  and creating layout of a webpage like sections, headers, or footers. 
   - **Examples** of block elements are : `<div>`, `<p>`, `heading tag` etc.


2. **Inline Elements**:
   - On the other hand Inline elements only take up as much width as their content requires, and they do not start on a new line. and flow within the same line.
   - They only respect horizontal dimensions like padding and margins, but vertical dimensions (height) are ignored and when we give them veritcal padding or margin it will not affect the elements height , instead it might cause them to overlap with adjacent lines of text .(HEIGHT property set krenge toh bhi koi fayda nahi seedha ignore hoga )

   - **Use case**: Inline elements are Used for smaller content within block-level elements like links or text styling.
   - **Examples**: `<span>`, `<a>`, `<strong>`, `<em>` etc.

3. **Inline-block Elements**:
   - Inline-block elements are like inline elements in that they do not start on a new line, but they behave like block elements in that you can set width, height, padding, and margins for them.
   - **Use case**: These are  Used for navigation menus, buttons, or elements that need to be horizontally aligned while still having block-like properties (width/height).
   - **Examples**: `<button>`, `<select>`, `<meter>`, `<progress>`, `<marquee>`, `<textarea>`, `<input>`.---



---

Q 38) How does the browser load HTML and JavaScript files upon visiting a particular website?

#### Intv Ans --  
When you visit a website, the browser follows a structured process to load and display the page, along with any associated JavaScript files.

1. **DNS Lookup**: The browser first performs a DNS lookup to find the server's IP address by resolving the domain name (e.g., www.example.com).

2. **HTTP Request**: Once the IP is found, the browser sends an HTTP or HTTPS request to the server asking for the HTML file of the page.

3. **HTML Parsing**: After receiving the HTML file, the browser starts parsing the HTML content from top to bottom. As it reads through the HTML:
   - If it encounters **CSS** links (`<link>`), it sends additional requests to fetch the external CSS files.
   - If it finds **JavaScript** files (`<script>`), it pauses HTML parsing, downloads, and executes the JavaScript (unless it has attributes like `async` or `defer`).

4. **DOM Construction**: While parsing the HTML, the browser builds the **Document Object Model (DOM)**, representing the page structure in memory. 

5. **CSSOM Construction**: The browser also builds the **CSS Object Model (CSSOM)**, which maps styles to elements based on the CSS it loaded.

6. **JavaScript Execution**: If the browser encounters any JavaScript during parsing, it executes it in the order it is found (unless deferred or asynchronous). If it's modifying the DOM, it alters the current structure.

7. **Render Tree & Layout**: Once both the DOM and CSSOM are built, the browser creates the **Render Tree**, determining the layout and styling of each element.

8. **Painting**: Finally, the browser renders the page, painting the pixels on the screen for the user to view the content.
The updated additional notes look good and provide a clear explanation of the `async` and `defer` attributes in JavaScript. They effectively communicate how these attributes help manage script loading and execution to ensure a smoother user experience. Here’s how they appear:

---

#### Additional Notes:
- **Async and Defer**: JavaScript can block rendering, so the `async` and `defer` attributes are used to load scripts without blocking the parsing of the HTML. 
   - `async`: Fetches the script asynchronously in the background along with HTML parsing, and executes it as soon as it is fetched, without waiting for the rest of the HTML to be parsed.
   - `defer`: Fetches the script in the background while HTML parsing is ongoing, but executes the script only after the HTML is completely parsed.

This step-by-step process ensures that the browser can load, parse, and display both HTML and JavaScript efficiently for a smooth user experience.

---

Q39) What is the difference between HTML and DOM ?


IntvAns---    The difference between **HTML** and the **DOM** lies in what they represent and how they function.

**HTML** (HyperText Markup Language) is the code that we write to create the structure and content of a webpage. It defines elements like headings, paragraphs, images, links, etc., using tags. HTML is static and represents the raw content of the webpage.

**DOM** (Document Object Model), on the other hand, is an in-memory representation of the webpage, : It is the structure which is created by the browser after it reads the HTML, and it can be changed dynamically using JavaScript. Like Using JavaScript We can add, remove, or modify elements and manipulate the content, structure, and style of the webpage in the DOM even after the page is loaded.

So ,In short, **HTML** is the code, while the **DOM**  is the structure   that the browser creates after it reads the HTML and allows you to interact with via JavaScript. 
----
(NOTE -- **do not write in copy detailed notes**) 
DetailedAns ---Let's break down the difference between **DOM (Document Object Model)** and **HTML** step by step, along with examples:

### 1. **What is HTML?**
   - **HTML** stands for **HyperText Markup Language**.
   - It is the language used to create and structure web pages.
   - HTML defines the structure and content of a webpage using elements like `<div>`, `<h1>`, `<p>`, `<a>`, etc.
   
   **Example:**
   ```html
   <html>
     <head>
       <title>My Web Page</title>
     </head>
     <body>
       <h1>Welcome to My Website</h1>
       <p>This is a paragraph of text on my website.</p>
     </body>
   </html>
   ```

   - Here, the HTML defines the **static structure** of the webpage. It's what the browser reads first.

### 2. **What is the DOM?**
   - The **DOM (Document Object Model)** is a **programmatic representation** of the HTML document.
   - It allows **JavaScript** and other programming languages to interact with the webpage.
   - After the browser loads the HTML, it creates a **DOM** that mirrors the structure of the HTML. This DOM is an **object** that can be accessed and modified.

   **Example:**
   When the browser reads the HTML example above, it creates a DOM like this:
   ```javascript
   document
     └── <html>
           ├── <head>
           │     └── <title>My Web Page</title>
           └── <body>
                 ├── <h1>Welcome to My Website</h1>
                 └── <p>This is a paragraph of text on my website.</p>
   ```

### 3. **Key Difference Between HTML and DOM**
   - **HTML is the static markup**: It is the code written by developers that is displayed by the browser.
   - **DOM is the dynamic representation**: It is the structure created by the browser after it reads the HTML, and it can be changed dynamically using JavaScript.

### 4. **How DOM Works with JavaScript**
   - JavaScript can manipulate the DOM, meaning it can add, remove, or modify elements and attributes in real-time.
   
   **Example:**
   Let's say you have this HTML:
   ```html
   <p id="text">Hello, World!</p>
   <button onclick="changeText()">Change Text</button>
   ```

   Using JavaScript, you can manipulate the DOM to change the content:
   ```javascript
   function changeText() {
     document.getElementById("text").innerHTML = "Text Changed!";
   }
   ```

   In this case, JavaScript accesses the **DOM** (not the original HTML) to change the content of the `<p>` tag.

### 5. **Summary of the Difference**
   - **HTML**: The code you write to structure and display content on a webpage.
   - **DOM**: The representation of the HTML structure that the browser creates and allows you to interact with via JavaScript.
-----------------



Q40)  How  many HTTP request for the above index.html page will result in ?

Ans ---


```html
<!DOCTYPE html>
<html lang="en">

<head>
    <link rel="stylesheet" href="styles.css">
    <title>Learning By Doing!</title>
</head>

<body>
        <h1>Learn By Doing</h1>
        <img src="img.jpg">
        <script src="script.js"></script>
</body>

</html>
```

1)An HTTP request for the above index.html page will result in at least 3 other HTTP requests which are for fetching

```html
styles.css i.e <link rel="stylesheet" href="styles.css">
Img.jpg i.e <img src="img.jpg">
script.js i.e <script src="script.js"></script>
```
------------------------










## abhi bs yhi tk likho isse upar tk ka
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Q 41)

18) What is SVG in HTML?

20) Define multipart form data ?(see interview bit)

23) How to optimize website assets loading ? (see interview bit)

27) What are the ways to add JavaScript to an HTML webpage?



30) Explain the layout of HTML fully.


32) Please explain how to indicate the character set being used by a document in HTML?(SEE INTERIEW BIT)

33) What is the difference between div and span in HTML?

34) How to create a new HTML element? Write the code also as an example.

42) What is the advantage of collapsing whitespace?

44) Explain the key difference between LocalStorage and SessionStorage objects.

45) When is it appropriate to use frames?

47) What happens if you open the external CSS file in a browser?

48) What is the difference between <strong> <b> tags and <em> , <i> tags?

49) How do you create text on a webpage that allows you to send an email when clicked?

50) How are active links different from normal links?

52) Are there instances where the text will appear outside of the browser?

53) Write an HTML table tag sequence that outputs the following:
   ```
   50 pcs 100 500
   10 pcs 5 50
   ```

   Answer --
   <table>
  <tr>
    <td>50 pcs</td>
    <td>100</td>
    <td>500</td>
  </tr>
  <tr>
    <td>10 pcs</td>
    <td>5</td>
    <td>50</td>
  </tr>
</table>

54) What is the advantage of grouping several checkboxes together?

56) What are the limits of the text field size?

57) What is the relationship between the border and rule attributes?


60) List the media types and formats supported by HTML.

61) What is cell spacing and cell padding? How they both are different from each other

62) What is the difference between HTML and XHTML?

63) How many types of inline tags cause IMG can have height and width as height and width cannot be given to HTML elements?

64) What are HTML and HTML5 and what are the advantages of HTML5?

67) What is the difference between head and body in HTML? Where to place the JS link reference?

68) What is the title tag in HTML? What are the 4 advantages of the title tag?

69) What are meta tags? What are the 5 types of meta tags?What are the advantages of it ?

70) What is the significance of <head> and <body> tag in HTML?

71) What are the roles and uses of the div element in HTML?

*** 72)  What is the difference between “display: none” and “visibility: hidden”, when used as attributes to the HTML element.
(see interview Bit)

73) What is the role of p, a, br, hr, em, img, input & button elements?

74) What is the role of header, main, section, footer and address elements in HTML?

75) What is the role of heading tags in HTML? How many types of heading does and Html contain ?How does it impact SEO?

76) What is the difference between section and article elements?

77) What are root, parent, child & nested elements?

79) How to specify the link in HTML and explain the target attribute?

80) Can HTML tags be written in uppercase?

81) What are the 3 differences between block-level and inline elements?

82) List all block-level and inline elements in HTML.

83) What are HTML attributes? What are the types of HTML attributes?

84) What are the ID, style and class attributes of an element? When to use what?

85) What will happen if two elements have the same IDs?

86) How to specify multiple classes for a single element? What is the style precedence?

87) What are data attributes in HTML?

88) What are the 5 types of links in HTML?

89) What is the difference between absolute and relative URLs?

90) What is the purpose of the nav element in HTML?

*** 91)  Difference between link tag <link> and anchor tag <a>?

Answer--The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag <link> defines a link between a document and an external resource and these are not clickable.


92) How to specify the path of any file in VS Code (just learn this if something is 2 levels back and 2 levels ahead, how you will reference it)?

94) What is a fragment identifier in a URL?

95) What is the purpose of the base element in HTML?

96) How do you add an external stylesheet in your HTML?

97) How do you open a link in a new tab?

98) How do you create an email link?

100) What is a nested list in HTML?

101) What are table, tr, th, td elements? What are table advantages and disadvantages?

102) What is the colspan attribute in HTML?

103) What is the best way to add a border to a table, column, and cell?

104) When to use scripts in the head and when to use scripts in the body?

Answer --If the scripts contain some event-triggered functions or jquery library then we should use them in the head section. If the script writes the content on the page or is not inside a function then it should be placed inside the body section at the bottom. In short, follow below three points:

Place library scripts or event scripts in the head section.
Place normal scripts that do not write anything on the page, in the head section until there is any performance issue.
Place scripts that render something on the web page at the bottom of the body section.
29. What are forms and how to create forms in HTML?



113) How do you create links to a section within the same page?

114) Do older HTML files work on newer browsers?

115) If the user's operating system does not support the needed character, how can the symbol be represented?

116) How do you change the number type in the middle of a list?

117) State bullet types available in HTML.

123) What if there is no text between the tags or if a text was omitted by mistake? Will it affect the display of the HTML file?

124) Is it possible to set specific colors for the table border? Write the code showing how you do that.

125) Can a single text link point to two different web pages?

126) Are there instances where the text will appear outside of the browser?

127) How to handle events in HTML ?

128) Tell me two benefits of HTML5 web storage.

129) What are the two types of web storage in HTML5?

130) How can we include audio or video in a webpage?
ANSWER---
HTML5 provides two tags: <audio> and <video> tags using which we can add the audio or video directly in the webpage.



131) What are forms in HTML and how do you use them? How to create forms in HTML?


137) What is the difference between <figure> tag and <img> tag?(INTERVIEW BIT)

Answer --The <figure> tag specifies the self-contained content, like diagrams, images, code snippets, etc. <figure> tag is used to semantically organize the contents of an image like image, image caption, etc., whereas the <img> tag is used to embed the picture in the HTML5 document.

138) How to specify the metadata in HTML5?

Answer --To specify we can use <meta> tag which is a void tag,i.e., it does not have a closing tag. Some of the attributes used with meta tags are name, content, http-equiv, etc. The below image tells how to specify the metadata.

Also add the image of interview bit thing

139). Is the <datalist> tag and <select> tag same?

Answer --No. The <datalist> tag and <select> tag are different. In the case of <select> tag a user will have to choose from a list of options, whereas <datalist> when used along with the <input> tag provides a suggestion that the user selects one of the options given or can enter some entirely different value.

Also add the image of interview bt thing.

140) Is drag and drop possible using HTML5 and how?
Answer --Yes, in HTML5 we can drag and drop an element. This can be achieved using the drag and drop-related events to be used with the element which we want to drag and drop.

141) Difference between SVG and Canvas HTML5 element?

Answer --SVG	Canvas
SVG is a vector based i.e., composed of shapes. 	It is Raster based i.e., composed of pixels.
SVG works better with a larger surface.	Canvas works better with a smaller surface.
SVG can be modified using CSS and scripts.	Canvas can only be modified using scripts.
SVG is highly scalable. So we can print at hi

(Add the correct table from interview bit PEHLE KHUD ke words me  liho)

142)13. What type of audio files can be played using HTML5?
HTML5 supports the following three types of audio file formats:

Mp3
WAV
Ogg


143) What are the significant goals of the HTML5 specification?
These were the target area of the HTML5 specs:

Answer ---Introduction of new element tags to better structure the web page such as <header> tag.
Forming a standard in cross-browser behavior and support for different devices and platforms
Backward compatible with the older version HTML web pages
Introduction of basic interactive elements without the dependency of plugins such as <video> tag instead of the flash plugin.


144) Explain the concept of web storage in HTML5.
Answer --This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5:

Local Storage - This helps in storing data that will be retained even though the user reopens the browser. It is stored for each webapp on different browsers.
Session Storage - This is used for one session only. After the user closes the browser this gets deleted.


145) How can you highlight text in HTML?

146)How can i get indexed better by search engines ?

148)  What are defer and async attributes on a <script> tag?

149) what's new in HTML5?

150) can a webpage have mutlitple <header> elements and multiple <footer> elements?

151) What is the purpose of <main> element?

----------------------------------------------------------------------------------------------------
---------------------------------------------------

# From Question 16 of HTML5 QUESTION OF INTERVIEW BIT LAST SECTION BEFORE MCQ wo usko baad me krna wo advance sab hai
From question 12 from FullStack Cafe (These only required when you are senior developer)
