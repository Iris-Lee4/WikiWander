import { Col, Container, Row } from "reactstrap"
import { GamesList } from "./GamesList.jsx"
import { UserDetails } from "./UserDetails.jsx"

export const Profile = ({ currentUser }) => {

    return(
        <>
            <Container>
                <Row xs={2}>
                    <Col>
                        <h3>
                            Profile Details
                        </h3>
                        <div>
                            <UserDetails currentUser={currentUser} />
                        </div>
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