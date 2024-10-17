import { useEffect, useState } from "react"
import { ListGroup, ListGroupItem } from "reactstrap"
import { getAllByUserId } from "../../services/gameService.jsx";

export const GamesList = ({ currentUser }) => {

    const[games, setGames] = useState([]);
    const[gamesLoaded, setGamesLoaded] = useState(false);

    const getGamesByUser = () => {
        console.log(currentUser)
        getAllByUserId(currentUser.id).then(gamesArray => setGames(gamesArray));
        setGamesLoaded(true)
    };

    useEffect(() => {
        if(currentUser.id){
            getGamesByUser();
        }
    }, []);
    
    return(
        <ListGroup>
            {gamesLoaded === true && (
                <>
                {games.map((game) => (
                    <ListGroupItem
                        key={game.id}
                    >
                        {game.id}
                    </ListGroupItem>
                ))}
                </>
            )}
           
        </ListGroup>
    )
}