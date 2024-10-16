import { Button, Container } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

export const GameWon = () => {
    const navigate = useNavigate();

    return(
        <Container>
            <h5>You did it!</h5>
            <Button
            onClick={() => navigate('/game')}
            >
                New Game
            </Button>
        </Container>
    )
}