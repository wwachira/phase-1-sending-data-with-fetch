/** http://localhost:3000/dogs
http://localhost:3000/cats
http://localhost:3000/users
http://localhost:3000/robots the live servers available
*/
//http://localhost:3000/users, fetch function sends a POST request 
function submitData(name,email){
    return fetch ('http://localhost:3000/users',{
        method: "POST",
        headers:{
            "Content-Type":"application/json",
            "Accept":"application/json"
        },
        body: JSON.stringify({
            name,
            email
        })
    })
    
.then(function(response){
    return response.json()
})
.then(function(object){
    document.body.innerHTML = object["id"]

})
.catch(function (error){
    document.body.innerHTML =error.message
})
}

