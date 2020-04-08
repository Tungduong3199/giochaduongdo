import React from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";

function App() {
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/Login'} component={Login}/>
        </Switch>
    );
}

export default App;
