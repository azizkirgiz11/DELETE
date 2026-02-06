let currentID;

// POST - backende bilgi gonderir
async function postUsers() {
    let response = await fetch("https://89c843f447a1f97c.mokky.dev/users", {
        method:"POST", // backend e (server) bilgi gonderme
        headers:{
            "Content-Type":"application/json",
        },
        // stringify - js to json
        // pase - json to js
        body: JSON.stringify({                                 
            name:"Aziz",                       
            age: 13,                 
        })                  
    });
    let data = await response.json()
    // currentID = data.id; // patch icin
    console.log(data);   
    // return data.id; // patch icin
}


// GET - backenden bilgileri alir
async function getUsers() {
    const response = await fetch("https://89c843f447a1f97c.mokky.dev/users")
    const data = await response.json();
    console.log(data);   
}


// PATCH - gonderdigimiz bilgiyi degistirir
// async function patchUsers(id) {
//     let response = await fetch(`https://89c843f447a1f97c.mokky.dev/users/${id}`, {
//         method:"PATCH", // backend e (server) bilgi gonderme
//         headers:{
//             "Content-Type":"application/json",
//         },
//         // stringify - js to json
//         // pase - json to js
//         body: JSON.stringify({                                 
//             name:"QMamvetov ziz",                       
//             age: 99,                 
//         })                  
//     });
//     let data = await response.json()
//     console.log(data);   
// }

// async function getUsers() {
//     await postUsers();
//     await patchUsers(currentID);
// }
// getUsers()

// DELETE - backendden bilgi siler
async function deleteUsers(id) {
    let response = await fetch(`https://89c843f447a1f97c.mokky.dev/users/${id}`, {
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
        },               
    });
    
}
