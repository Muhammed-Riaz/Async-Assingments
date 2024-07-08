async function error(){
    let promise = new Promise((reject,resolve)=>{
        reject("error")
        console.log(new Error)
        
    })
    .catch((error)=>{
        console.log(error);
        
    })
}
error()

