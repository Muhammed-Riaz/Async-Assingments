"use strict";
// // class person {
// //     // this
// //     // new 
// //     // constructor
// // }
Object.defineProperty(exports, "__esModule", { value: true });
// class person {
//     //  this {}
//     x:string = "Riaz"
//     y:string = "sir bilal"   
//     // this {
//     //    x = 20
//         // y= 10
//     // }
//     constructor(x:string,y:string){
//         this.x = x
//         this.y = y
//     }    
// }
// class User {
//     s:person
//     num1 : number
//     constructor(s:person,num:number)
//     constructor(s:person,num:number)
//     constructor(s:person,num:number)    
//     constructor(a:person,num:number){
//         this.s = a
//         this.num1 = num
//     }
//     call(){
//         console.log("this is my names",this.s);
//     }
// }
// let get = new person("Riaz","sir Bilal shahb")
// let get2 = new person("Sir fahad ","xyz")
// // console.log(get);
// // console.log(get2);
// let get3 = new User({x:"Araib",y:"faizan"},9)
// console.log(get3);
// get3.call()
// // function signature
// // assertion operator
class Ovverload {
    name;
    age;
    gender;
    constructor(name1, age1, gender1) {
        this.name = name1;
        this.age = age1;
        this.gender = gender1;
    }
}
let newOverload = new Ovverload(1, 22, "332");
