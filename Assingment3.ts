// make simple func that retrun a promise
// get delay 3 sec resolve value is "Resolved"

function promise(){
   let promise =  new Promise((resolve,reject)=>{

           setTimeout(()=>{
               resolve("Resolved!")
           },3000)
       }).then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
   }
    
// now promise resolved call function use method to get promise value
promise()


