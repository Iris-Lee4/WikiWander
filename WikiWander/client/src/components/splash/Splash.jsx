import { useNavigate } from "react-router-dom"
import { Button, Container } from "reactstrap"
import "./Splash.css"

export const Splash = ( { currentUser }) => {

    const navigate = useNavigate();

    return(
        <Container>
            <div className="splash-section">
            <h4>WIKI WANDER</h4>
            <a href="https://www.thewikigame.com/group">Inspired by The Wiki Game.</a>
            </div>
            <div className="splash-section">
                <h6>HOW TO PLAY</h6>
            </div>
            <div className="splash-section">
                <p>
                    There will be a start article & an end article. The goal is to get from the Wikipedia page of the start article and reach the Wikipedia page of the end article.
                </p>
            </div>
            <div className="splash-section">
                <p>
                    Use the links within the Wikipedia page that you are on to get to another Wikipedia page. Crawl through page by page until you reach the end article's page.
                </p>
            </div>
            <div className="splash-section">
                <p>
                    That's it! 
                </p>
            </div>
            <div className="splash-section">
                <Button
                onClick={() => {navigate('/game')}}
                >
                    New Game
                </Button>
            </div>
        </Container>
    )
}