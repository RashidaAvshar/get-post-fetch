const BASE_URL ="http://localhost:9000";
document.querySelector("#register").addEventListener("click",()=>{
    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let password = document.querySelector("#password").value;
    let data = {
        name,
        surname,
        password,
    }
    fetch(`${BASE_URL}/create-data`,{
        method: "Post",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),        
    })
            .then((res)=>res.json())
            .then((json)=>{
                if(json.success == "OK"){
                    document.querySelector("#name").value = "";
                    document.querySelector("#surname").value = "";
                    document.querySelector("#password").value = "";
                    swal({
                        title: "Good job!",
                        text: `${json.message}`,
                        icon: "success",
                        button: "OK!",
                      });
                      window.location.reload(true);
                }                
                
            }).catch((error)=>{
                swal({
                    title: "not found",
                    text: "error",
                    icon: "error",
                    button: "OK!",
                  });
            })

});


fetch(`${BASE_URL}/get-data`)
        .then((res)=>res.json())
        .then((json)=>{
            json.data.map(item=>(
                document.querySelector(".customers").innerHTML += `
            <tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.surname}</td>
            <td>${item.password}</td>
          </tr> `

            ))
                   
 })





