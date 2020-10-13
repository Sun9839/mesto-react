import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Login from "./Login";
import Register from "./Register";
import ProtectedRoute from "./ProtectedRoute";
import MainPage from "./MainPage";

function App(props){
    const [loggedIn, setLoggedIn] = React.useState(false)
    return(
        <BrowserRouter>
        <Switch>
            <Route path='/sign-up'>
                <Register />
            </Route>
            <Route path='/sign-in'>
                <Login />
            </Route>
            <ProtectedRoute path='/' loggedIn={loggedIn} component={MainPage} />
        </Switch>
        </BrowserRouter>
    );
}

export default App;