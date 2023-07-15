export const saveUser = (user) => {
    const currentUser = {
      name: user.displayName,
      email: user.email,
      photoURL: user.photoURL,
    };
  
    fetch(`http://localhost:5000/${user?.email}`, {
      method: "post",
      headers: {
        "content-type": "application/json",
      },
  
      body: JSON.stringify(currentUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  