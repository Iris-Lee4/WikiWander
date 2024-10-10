import { Route, Routes } from "react-router-dom"
import { Game } from "../components/game/Game.jsx"

export const ApplicationViews = () => {
    return(
       <Routes>
            <Route path="/" element={<Game />} />
        </Routes>
    )
}