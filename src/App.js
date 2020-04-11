import React, {useEffect, useState} from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import {auth, default as fire} from './firebaseConfig'
import {setGlobal, useGlobal} from 'reactn'
import LinearProgress from "@material-ui/core/LinearProgress";
import {useAuthState} from 'react-firebase-hooks/auth';
import {useDocument} from "react-firebase-hooks/firestore";
import Profile from "./Components/Login/Profile";
import AddProduct from "./Components/Add Product/AddProduct";

async function _loadAssetsAsync() {
    return Promise.all([
        localStorage.getItem('user', (e, result) => {
            if (result) setGlobal({user: JSON.parse(result)})
        })
    ])
}

function App() {
    const [user, initialising, error] = useAuthState(auth);
    const [, setAuthUser] = useGlobal('authUser')
    const [didCheckAuth, setDidCheckAuth] = useState(false)
    const [userDoc] = useDocument(
        user && user.uid ?
            fire.firestore.doc(`users/${user.uid}`)
            : null
    )
    useEffect(() => {
        _loadAssetsAsync()
    }, [])

    useEffect(() => {
        const u = {
            ...user?.toJSON(),
            ...userDoc?.data()
        }
        setGlobal({
            user: u,
        })
        localStorage.setItem('user', JSON.stringify(u))
    }, [user, userDoc])

    useEffect(() => {
        if (!initialising) {
            setAuthUser(user, () => {
                setDidCheckAuth(true)
            })
        }
    }, [initialising])

    if (!didCheckAuth) return <LinearProgress style={{backgroundColor: '#245a46'}}/>
    if (error) {
        alert(error.message)
        return null
    }
    if (didCheckAuth && !user) {
        if (!window.location.pathname.includes('/'))
            window.location = '/'
    }
    return (
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route path={'/login'} component={Login}/>
            <Route path={'/profile'} component={Profile}/>
            <Route path={'/add-product'} component={AddProduct}/>
        </Switch>
    );
}

export default App;
