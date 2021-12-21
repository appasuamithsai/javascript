// function getData(uId) {
//     setTimeout(() => {
//     console.log("Fetched the data!");
//     return "skc@gmail.com";
//     }, 4000);
//     }
    
//     console.log("start");
//     var email = getData("skc");
//     console.log("Email id of the user id is: " + email);
//     console.log("end");


// function getData(uId){
    
//     return new Promise((reslove,reject)=>{
//         setTimeout(() => {
//             console.log("Fetched the data!");
//             reslove("skc@gmail.com");
//         }, 1000);
//     });
// }

// console.log("start");
// var email = getData("skc");
// email.then((email)=>{
//     console.log("Email id of the user id is: " + email);
//     console.log("end");

// });



function getData(uId) {
    return new Promise((reslove,reject)=>{
                setTimeout(() => {
                    console.log("Fetched the data!");
                    reslove("skc@gmail.com");
                }, 4000);
    });
}

async function call(){        
    console.log("start");
    const email = await getData("skc");
    console.log("Email id of the user id is: " + email);
    console.log("end");
}

call();