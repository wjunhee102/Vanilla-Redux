import React from 'react';
import ReactDOM from 'react-dom';
import ReduxApp from './component/ReduxApp';
import { Provider } from "react-redux";
import store from "./store";

ReactDOM.render(
<Provider store={store}>
    <ReduxApp />
</Provider>
, document.getElementById('root')
);
// import { createStore } from "redux";

// const add = document.getElementById("add");
// const minus = document.getElementById("minus");
// const number = document.querySelector("span");

// const ADD = "ADD";
// const MINUS = "MINUS";

// const reducer = (state = 0, action) => {
//     switch (action.type) {
//         case ADD :
//             return state + 1
//         case MINUS : 
//             return state - 1
//         default :
//             return state
//     }
// };

// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// const handleAdd = () => {
//     store.dispatch({type: ADD});
// }
// const handleMinus = () => {
//     store.dispatch({type: MINUS});
// }

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);

// const countDisplay = ()=>{
//     number.innerHTML = store.getState();
// }


// store.subscribe(countDisplay)

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";

// const addToDo = (text) => {
//     return {
//         type : ADD_TODO, 
//         text
//     }
// }

// const deleteToDo = id => {
//     return {
//         type: DELETE_TODO, 
//         id
//     }
// }

// const reducer = (state=[], action) => {
//     switch(action.type) {
//         case ADD_TODO :
//             const newToDoObj = {text : action.text, id: Date.now()}
//             return [newToDoObj,...state];
//         case DELETE_TODO :
//             return state.filter(toDo => toDo.id !== action.id);
//         default :
//             return state;
//     }
// };
// // 절대 MUTATE STATE 쓰면 안됨.

// const store = createStore(reducer,
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(()=> console.log(store.getState()));

// const dispatchAddToDo = (text) => {
//     store.dispatch(addToDo(text))
// }

// const dispatchDeleteToDo = (e) => {
//     const id = parseInt(e.target.parentNode.id);
//     store.dispatch(deleteToDo(id));
// }

// const paintToDos = () => {
//     const toDos = store.getState();
//     ul.innerHTML = ""
//     toDos.forEach(toDo => {
//         const li = document.createElement("li");
//         const btn = document.createElement("button");
//         btn.innerText = "DEL";
//         btn.addEventListener("click", dispatchDeleteToDo)
//         li.id = toDo.id;
//         li.innerText = toDo.text;
//         li.appendChild(btn);
//         ul.appendChild(li);
//     })
// }

// store.subscribe(paintToDos);




// const onSubmit = e => {
//     e.preventDefault();
//     const toDo = input.value;
//     input.value = "";
//     dispatchAddToDo(toDo);
// };

// form.addEventListener("submit", onSubmit);