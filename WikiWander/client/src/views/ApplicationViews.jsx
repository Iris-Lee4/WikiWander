import { Route, Routes } from "react-router-dom"
import { Splash } from "../components/splash/Splash.jsx"
import { Game } from "../components/game/Game.jsx"

export const ApplicationViews = () => {
    return(
       <Routes>
            <Route path="/" element={<Splash />} />
            <Route path="game" element={<Game />} />
        </Routes>
    )
}