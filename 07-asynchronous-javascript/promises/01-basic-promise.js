function checkPassword(password) {
return new Promise((resolve,reject)=>{
    let length=password.toString().length;
    if(length>=8)
        resolve("Strong Password");
    else
        reject("Weak Password");
});
}

//test case 1.
checkPassword(12345678)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});

//test case 2.
checkPassword(123)
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
});