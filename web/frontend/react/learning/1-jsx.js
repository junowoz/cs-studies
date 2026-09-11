/***************************************************************************************/
//INTRO TO JSX: First, import React and the ReactDOM
import React from "react";
import ReactDOM from "react-dom";

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//JSX ELEMENTS

// This are JSX elements, and they are treated as a JS Expressions
const h1 = <h1>Hello world</h1>;
let myArticle = <article></article>;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//ATTRIBUTES IN JSX

const panda = (
    <img src="images/panda.jpg" alt="panda" width="500px" height="500px" />
);
const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//NESTED JSX

const myDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
);

let yDiv = (
    <div>
        <h1>Hello world</h1>
    </div>
);

//JSX Outer Elements - Try to always wrap JSX elements in a DIV toa avoid errors.
// a JSX expression must have exactly one outermost element.
const paragraphs = (
    <div className="outermost-element">
        <p>I am a paragraph.</p>
        <p>I, too, am a paragraph.</p>
    </div>
);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//RENDERING JSX: ReactDOM.render()
// .render is a method of ReactDOM, and ReactDOM is a JS Library.

// the document.getElementById() acts as a container for the DOM.render. This is what will be called
// in the index.html file, and that piece of code will render the JSX file.

ReactDOM.render(<h1>Hello world</h1>, document.getElementById("app"));

//Passing a Variable to ReactDOM.render()
let myList = (
    <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
    </ul>
);

ReactDOM.render(myList, document.getElementById("app"));

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//The Virtual DOM
/**
 * ReactDOM.render() only updates DOM elements that have changed.
 * that means that if you render the exact same thing twice in a row, the second render will do nothing.
 */

/***************************************************************************************/
//ADVANCED JSX

//class vs className
let myDdiv = <div className="big">I AM A BIG DIV</div>;
ReactDOM.render(myDiv, document.getElementById("app"));
