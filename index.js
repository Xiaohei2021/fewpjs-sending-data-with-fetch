// Add your code here
function submitData(){
    return fetch("http://localhost:3000/users", 
    {
        method: "POST",   
        headers: 
        {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify
        ({
            name: "Steve",
            email: "steve@steve.com"
        })
    })
    .then(response => response.json())
    // .then(data => {debugger})
    .then(object =>
    {
        // debugger
        // const attrName = Object.keys(object);
        // const attrValue = Object.values(object);
        // const objArray = Object.entries(object);
        const ul = document.createElement('ul');
        // debugger
        for(const attr in object)
        {
            // debugger
            console.log(`${attr}: ${object[attr]}`)
            const li = document.createElement('li');
            li.innerHTML = `${attr}: ${object[attr]}`
            ul.appendChild(li);
        }
       
        // for(const [key, value] of Object.entries(object))
        // {
        //     console.log(`${key}: ${value}`)
        //     // debugger
        //     const li = document.createElement('li');
        //     li.innerHTML = `${key}: ${value}`;
        //     ul.appendChild(li);
        // }
        document.body.append(ul);
    })
    .catch(error => 
    {
        const msg = document.createElement('h2');
        msg.innerHTML = error.message;
        debugger
        document.body.appendChild(msg);
        console.log(error.message);

    })
};



