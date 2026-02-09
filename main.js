async function postUsers() {
    let input = document.getElementById("input");
    let inputvalue = input.value;

    await fetch("https://0f01222373e87a68.mokky.dev/todos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            text: inputvalue,
        }),
    });
    input.value = "";  
    await getUsers();
}


async function getUsers() {
    const response = await fetch("https://0f01222373e87a68.mokky.dev/todos");
    const data = await response.json();

    let ul = document.getElementById("todos");
    ul.innerHTML = ""; 

    data.forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = item.text;

        let button = document.createElement("button");
        button.innerHTML = "DELETE";

        button.onclick = () => deleteUsers(item.id);

        li.append(button);
        ul.append(li);
    });
}


async function deleteUsers(id) {
    await fetch(`https://0f01222373e87a68.mokky.dev/todos/${id}`, {
        method: "DELETE",
    });

    await getUsers();
}
