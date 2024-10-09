import { useEffect, useState } from "react";
import { Routes } from "react-router-dom"
import { NavBar } from "./components/nav/NavBar.jsx";
import { ApplicationViews } from "./views/ApplicationViews.jsx";
import { Authorized } from "./views/Authorized.jsx";

export const App = () => {
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

  return(
    <Routes>
      <NavBar is isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} currentUser={currentUser} />
      {isLoggedIn  ? 
        <ApplicationViews />
        :
        <Authorized setIsLoggedIn={setIsLoggedIn} />
      }
    </Routes>
  )
}