# Getting started with react

To use react in your project, you can load two react scripts from an external website called unpkg.com

    - `react` is the core react library
    - `react-dom` provides DOM-specific methods that enable you to use React with DOM

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>react-1</title>
    <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
    <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
    <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
</head>
<body>
    <div id="app">
        <script type="text/jsx">
            const app = document.getElementById("app");
            // instead of directly maipulating the DOM with plain Javascript, 
            // you can use the `ReacDOM.render()` method from `react-dom` to tell react
            // to render our `<h1>` title inside our #app element
            ReactDOM.render(<h1>Arief, Juita, Ephra, Esther.🚀</h1>, app);
        </script>
    </div>
</body>
</html>
```

## Esential JavasScript for React
While you can learn JavaScript and React at the same time, being familiar with JavaScript can make the process of learning React easier.

In the next sections, you will be introduce some core concepts of React fro Javascript perspective. Here's a summary of Javascript topic that will be mentioned.

- [functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions) & [arrow functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [arrays and array method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
- [template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
- [ternary operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
- [es modules and import / export syntax](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

While this course does not dive into Javascript, it's good practice to stay up to date with the latest versions of Javascript. But if you don't feel proficient in Javascript yet, don't let this hinder you from starting to build with React!

## React Core Concepts
There are three core concepts of React that you'll need to be familiar with to start building React applications. These are:

    - Components
    - Props
    - State
