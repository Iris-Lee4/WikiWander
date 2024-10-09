const apiUrl = "https://localhost:5001/userprofile";

export const login = (userObject) => {
  return fetch(`${apiUrl}/getbyemail?email=${userObject.email}`)
  .then((r) => r.json())
    .then((userProfile) => {
      if(userProfile.id && !userProfile.deactivated){
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        return userProfile
      }
      else{
        return undefined
      }
    });
}

export const register = (userObject, password) => {
    return  fetch(`${apiUrl}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject, password),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
      });
  };
