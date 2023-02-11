// const BASE_URL = "http://localhost:9000";

    let name = document.querySelector("#name").value;
    let surname = document.querySelector("#surname").value;
    let password = document.querySelector("#password").value;

    let data = {
        name,
        surname,
        password,
    };

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
                      }).then((willDelete) => {
                        if (willDelete){
                            window.location.reload(true);
                        }
                      });
                }   
            }).catch((error)=>{
                swal({
                    title: "not found",
                    text: "error",
                    icon: "error",
                    button: "OK!",
                  });
            });


//     fetch(`${BASE_URL}/get-data`)
//     .then((res)=>res.json())
//     .then((json)=>{
//         json.data.map((item)=>{
//             console.log(item)
//         document.querySelector("#name").value = item.name;
//         document.querySelector("#surname").value = item.surname;
//         document.querySelector("#password").value = item.password; 
//         })              
// })


// document.querySelector("#update").addEventListener("click", ()=>{
    
//     fetch(`${BASE_URL}/create-data`,{
//         method: "Post",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),        
//     })
//             .then((res)=>res.json())
//             .then((json)=>{
//                 if(json.success == "OK"){
//                     document.querySelector("#name").value = "";
//                     document.querySelector("#surname").value = "";
//                     document.querySelector("#password").value = "";
//                     swal({
//                         title: "Good job!",
//                         text: `${json.message}`,
//                         icon: "success",
//                         button: "OK!",
//                       }).then((willDelete) => {
//                         if (willDelete){
//                             window.location.reload(true);
//                         }
//                       });
//                 }                
                
//             }).catch((error)=>{
//                 swal({
//                     title: "not found",
//                     text: "error",
//                     icon: "error",
//                     button: "OK!",
//                   });
//             })

// });
