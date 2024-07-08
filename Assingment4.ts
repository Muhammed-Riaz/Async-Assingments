// let promise1:Promise<any> = new Promise(resolve=>{
//    (setTimeout(()=>{
//     console.log("promise one resolving");
    
//         resolve("promise one resolve")
//     },2000))
// })


// let promise2:Promise<any> = new Promise(resolve=>{
//     (setTimeout(()=>{
//         console.log("promise two pending");
        
//         resolve("Promise two resolved")
//         },2000))
// })


// async function Response():Promise<string[]>{
//    let result1 =  await promise1
//    let result2 = await promise2 
//    return [result1,result2]
// }

// let getpromise = Response().then((res)=>{console.log(res);
// })
// console.log(getpromise);

let promise1 :any = new Promise(resolve => setTimeout(()=>{
    console.log("promise one pending");
    resolve("promise resolved")
}))

let promise2:any = new Promise((resolve)=>setTimeout(()=>{
   console.log("promise two pending");
   resolve("promise two resolved")
}))

async function wait():Promise<string[]>{
    let result1 =await promise1
    let result2 =await promise2
    return [result1,result2]
}

let print = wait().then((res)=>{
    console.log(res);
})
console.log(print);




















