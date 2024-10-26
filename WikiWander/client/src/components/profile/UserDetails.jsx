import { useEffect, useState } from "react"
import { Container } from "reactstrap"
import { getUserById } from "../../services/userProfileService.jsx";
import "./Profile.css"

export const UserDetails = ( { currentUser }) => {
    
    const[userDetails, setUserDetails] = useState({});

    const getUserDetails = () => {
        getUserById(currentUser.id).then(userObj => setUserDetails(userObj))
    };

    useEffect(() => {
        if(currentUser.id) {
            getUserDetails();
        }
    }, [currentUser])

    return(
        <Container>
            <div>
                <h6>
                    Name: {userDetails.fullName}  
                </h6>
            </div>
            <div>
                <h6>
                    Email: {userDetails.email} 
                </h6>
            </div>
            <div>
                <h6>
                    Display Name: {userDetails.displayName} 
                </h6>
            </div>
        </Container>
    )
}