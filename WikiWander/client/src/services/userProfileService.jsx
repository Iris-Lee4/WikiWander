const apiUrl = "https://localhost:5001/api/UserProfile";

export const login = (userObject) => {
  return fetch(`${apiUrl}/GetByEmail?email=${userObject.email}`)
  .then((r) => r.json())
    .then((userProfile) => {
      if(userProfile.id){
        localStorage.setItem("userProfile", JSON.stringify(userProfile));
        console.log(userProfile);

        return userProfile
      }
      else{
        return undefined
      }
    });
};

export const register = (userObject) => {
    return  fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userObject),
    })
    .then((response) => response.json())
      .then((savedUserProfile) => {
        localStorage.setItem("userProfile", JSON.stringify(savedUserProfile))
      });
  };

export const logout = () => {
    localStorage.clear()
};

export const getUserById = (id) => {
  return fetch(`${apiUrl}/${id}`)
  .then((res) => res.json())
};