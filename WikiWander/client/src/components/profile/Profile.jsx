import { Col, Container, Row } from "reactstrap"
import { GamesList } from "./GamesList.jsx"

export const Profile = ({ currentUser }) => {

    return(
        <>
            <Container>
                <Row xs={2}>
                    <Col>
                        <h3>
                            Profile Details
                        </h3>
                    </Col>
                    <Col>
                        <h3>
                            Game History
                        </h3>
                        <div>
                            <GamesList currentUser={currentUser} />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}