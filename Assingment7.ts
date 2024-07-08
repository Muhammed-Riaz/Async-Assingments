function take(arg:number){
    return new Promise(resolve => setTimeout(()=>{
        let result = arg**2
        resolve(result)
    },1000)
)
.then((res)=>{
    console.log(res);
    
})
}
take(3) // 9
take(4)// 16
take(5)//25
take(6)//36