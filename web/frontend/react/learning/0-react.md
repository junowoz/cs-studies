# COMPONENTS

Reusable piece of UI that includes with design and functionality. Is a class with a state and the render.
All the data rendered will be displayed in the form of a js object called state.
The method render tells react how the state is render to the user.

class Component {
state = {}; //Data to interact with the user
render () {}
}

//VIRTUAL DOM = REACT ELEMENT
// REAL DOM = DOM ELEMENT

---

## HOOKS

Only function in function components

- useState execute in a specific order
- Hooks can't be inside functions, or if statements, or loops, nested functions, nothin. Always on top level

### useState

always returns an array with 2 elements
