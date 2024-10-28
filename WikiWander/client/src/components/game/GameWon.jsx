import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const GameWon = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <h5>You did it!</h5>
            <img src="https://cdn.pixabay.com/photo/2017/08/16/22/29/excited-2649320_640.jpg" />
            <Button
            onClick={() => navigate('/game')}
            >
                New Game
            </Button>
        </Container>
    )
}