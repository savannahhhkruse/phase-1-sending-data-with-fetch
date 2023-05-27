// Add your code here
function submitData(name, email) {
    const formData = {
      name: name,
      email: email
    };
  
    const configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(formData)
    };
  
    return fetch("http://localhost:3000/users", configObj)
      .then(function(response) {
        return response.json();
      })
      .then(function(object) {
        const newId = object.id;
        document.body.innerHTML += newId;
      })
      .catch(function(error) {
        document.body.innerHTML += error.message;
      });
  }