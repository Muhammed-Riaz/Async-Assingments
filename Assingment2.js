"use strict";
//  Make named function is callback and pass function in parameter
Object.defineProperty(exports, "__esModule", { value: true });
function callback(cb) {
    cb();
}
// make second function delay 1 sec and pass in argument
function delay() {
    setTimeout(() => {
        console.log("Iam a call back");
    }, 1000);
}
// call the callback function pass argument function
callback(delay);
