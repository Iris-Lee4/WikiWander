import { useEffect, useState } from "react"
import { ListGroup, ListGroupItem, Table } from "reactstrap"
import { getAllByUserId } from "../../services/gameService.jsx";

export const GamesList = ({ currentUser }) => {

    const[games, setGames] = useState([]);
    const[gamesLoaded, setGamesLoaded] = useState(false);

    const getGamesByUser = () => {
        getAllByUserId(currentUser.id).then(gamesArray => setGames(gamesArray));
        setGamesLoaded(true)
    };

    useEffect(() => {
        if(currentUser.id){
            getGamesByUser();
        }
    }, [currentUser]);
    
    return(
        <Table
        >
          <thead>
            <tr>
              <th>
                Date
              </th>
              <th>
                Start Article
              </th>
              <th>
                End Article
              </th>
              <th>
                # Steps
              </th>
            </tr>
          </thead>
          <tbody>
          {gamesLoaded === true && (
                <>
                {games.map((game) => (
                    <tr
                        key={game.id}
                    >
                        <th scope="row">
                            {game.timeStamp}                            
                        </th>
                        <td>
                            {game.startArticle.name}
                        </td>
                        <td>
                            {game.endArticle.name}
                        </td>
                        <td>
                            {game.stepCount}
                        </td>
                    </tr>
                ))}
                </>
            )}
          </tbody>
        </Table>
    )
}