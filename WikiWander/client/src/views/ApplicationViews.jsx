import { Route, Routes } from "react-router-dom"
import { Splash } from "../components/splash/Splash.jsx"
import { Game } from "../components/game/Game.jsx"
import { useEffect, useState } from "react"
import { GameWon } from "../components/game/GameWon.jsx"
import { Profile } from "../components/profile/Profile.jsx"

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
            <Route path="winner" element={<GameWon currentUser={currentUser} />} />
            <Route path="profile" element={<Profile currentUser={currentUser} /> } />
        </Routes>
    )
}