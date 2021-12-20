function getData(uId) {
    return promise = new Promise((resolve,reject) => {
        setTimeout(() => {
            if(console.log("Fetching the data!")){
                console.log("Fetched the data!")
                resolve("skc@gmail.com");
            }else
                reject("error");
            }, 1000);
    })
}

console.log("start");
var email = getData("skc");
email.then((email) => {
    console.log("Email id of the user id is: " + email);
    console.log("end"); 
}).catch((error) => console.log("It received an "+error));