import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
import Todo from "../component/ToDo";

function Home({toDo, addToDo}) {
    const [ text, setText ] = useState("");

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        addToDo(text);
        setText("");
    }

    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit} >
                <input type="text" value={text} onChange={onChange}/>
                <button>Add</button>
            </form>
            <ul>
                {toDo.map( ele =>(
                    <Todo 
                        text={ele.text}
                        id={ele.id}
                        key={ele.id}
                    />
                ))
                }
            </ul>
        </>
        
    )
}

function mapStateToProps(state) {
    return { toDo : state };
}

function mapDispatchToProps(dispatch) {
    return {
        addToDo: text => dispatch(actionCreators.addToDo(text))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);