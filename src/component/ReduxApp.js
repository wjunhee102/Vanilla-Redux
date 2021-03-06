import React from'react';
import { HashRouter as Router , Route } from "react-router-dom";
import Home from "../routes/home";
import Detail from "../routes/Detail";



const ReduxApp = ()=>{
    return (
        <Router>
            <Route path="/" exact component={Home}></Route>
            <Route path="/:id" exact component={Detail}></Route>
        </Router>
    )
}

export default ReduxApp;