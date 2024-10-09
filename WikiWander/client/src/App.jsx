import { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from 'react';
import { NavBar } from './components/nav/NavBar.jsx';
import { Authorize } from './views/Authorize.jsx';
import { ApplicationViews } from './views/ApplicationViews.jsx';

export const App = () =>  {
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const [currentUser, setCurrentUser] = useState({})

    const user = localStorage.getItem("userProfile")
    const parsedUser = JSON.parse(user)

    useEffect(() => {
        if (!localStorage.getItem("userProfile")) {
            setIsLoggedIn(false)

        }
    }, [isLoggedIn])

    useEffect(() => {
        if (parsedUser) {
            setCurrentUser(parsedUser)
        }
    }, [isLoggedIn])

    return (
        <Router>
            <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser}/>
            {isLoggedIn ?
                <ApplicationViews currentUser={currentUser} />
                :
                <Authorize setIsLoggedIn={setIsLoggedIn} />
            }
        </Router>
    );
}

export default App;