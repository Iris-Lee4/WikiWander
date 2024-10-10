import { useNavigate } from "react-router-dom"
import { Button, Container } from "reactstrap"

export const Splash = () => {

    const navigate = useNavigate();

    return(
        <Container>
            <h4>WIKI WANDER</h4>
            <a href="https://www.thewikigame.com/group">Inspired by The Wiki Game.</a>
            <div>
                <h6>HOW TO PLAY</h6>
            </div>
            <div>
                <h8>
                    There will be a start article & an end article. The goal is to get from the Wikipedia page of the start article and reach the Wikipedia page of the end article.
                </h8>
            </div>
            <div>
                <h8>
                    Use the links within the Wikipedia page that you are on to get to another Wikipedia page. Crawl through page by page until you reach the end article's page.
                </h8>
            </div>
            <div>
                <h8>
                    That's it! 
                </h8>
            </div>
            <Button
            onClick={() => {navigate('/game')}}
            >
                New Game
            </Button>
        </Container>
    )
}