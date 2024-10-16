import { Route, Routes } from "react-router-dom"
import { Splash } from "../components/splash/Splash.jsx"
import { Game } from "../components/game/Game.jsx"
import { useEffect, useState } from "react"

export const ApplicationViews = () => {

    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        const localUser = localStorage.getItem("userProfile")
        const userObject = JSON.parse(localUser)

        setCurrentUser(userObject)
    }, [])

    return(
       <Routes>
            <Route path="/" element={<Splash currentUser={currentUser} />} />
            <Route path="game" element={<Game currentUser={currentUser} />} />
        </Routes>
    )
}