import { useEffect, useState } from "react"
import { Button, Modal, ModalFooter, ModalHeader, Table } from "reactstrap"
import { deleteGame, getAllByUserId } from "../../services/gameService.jsx";

export const GamesList = ({ args, currentUser }) => {

    const[games, setGames] = useState([]);
    const[gamesLoaded, setGamesLoaded] = useState(false);
    const[modal, setModal] = useState(false);
    const[selectedGameId, setSelectedGameId] = useState(null);

    const toggle = () => setModal(!modal);
    
    const getGamesByUser = (id) => {
        getAllByUserId(id)
        .then((gamesArray) => {
            setGames(gamesArray) 
            setGamesLoaded(true)
        })
    };

    const formatDate = (timeStamp) => {
        const date = new Date(timeStamp)
        return date.toLocaleDateString('en-US')
    };

    const formatBool = (bool) => {
        if(bool === true ) {
            return ':)'
        } else {
            return ":'("
        }
    }

    const handleDelete = (gameId) => {
        deleteGame(gameId)
        .then(document.location.reload())
    };

    useEffect(() => {
        if(currentUser.id){
            getGamesByUser(currentUser.id);
        }
    }, [currentUser.id]);
    
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
              <th>
                Completed
              </th>
              <th>
                Remove
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
                            {formatDate(game.timeStamp)}                            
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
                        <td>
                            {formatBool(game.completed)}
                        </td>
                        <td>
                            <Button color="danger" onClick={() => {
                                setSelectedGameId(game.id);
                                toggle()
                                }}>
                                Delete
                            </Button> 
                            <Modal isOpen={modal} toggle={toggle} {...args}>
                                <ModalHeader toggle={toggle}>Are you sure you want to delete this game?</ModalHeader>
                                <ModalFooter>
                                <Button color="primary" onClick={() => {handleDelete(selectedGameId)}}>
                                    Yes
                                </Button>{' '}
                                <Button color="secondary" onClick={toggle}>
                                    Nevermind
                                </Button>
                                </ModalFooter>
                            </Modal>
                        </td>
                    </tr>
                ))}
                </>
            )}
          </tbody>
        </Table>
    )
}