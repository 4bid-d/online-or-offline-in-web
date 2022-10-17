let log = console.log;

const uri = "https://jsonplaceholder.typicode.com/users";

let req =new Request(uri, {
    method:"GET",
    mode:"cors"
})

fetch(req)
    .then((response)=>{
        if(response.ok){
            return response.json()
        }else{
            throw new Error("BAAD HTTP")
        }
    })
    .then((jsonData)=>{
        // log(jsonData)
        let ul = document.querySelector("#users");
        let df  = new DocumentFragment();
        jsonData.forEach((user) => {
            let li = document.createElement("li")
            let subUl = document.createElement("ul")
            let subLi = document.createElement("li")
            let p1 = document.createElement("p")
            let p2 = document.createElement("p")
            p1.textContent = "username"
            p2.textContent = "email"
            df.appendChild(p1)
            li.textContent = user.name
            subUl.appendChild(p2)
            subUl.appendChild(subLi)
            li.appendChild(subUl)
            subLi.textContent = user.email
            df.appendChild(li)
        });
        ul.appendChild(df)

    })