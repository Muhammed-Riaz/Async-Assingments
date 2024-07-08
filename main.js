"use strict";
// make a simple function get delay 2 sec and return promise
Object.defineProperty(exports, "__esModule", { value: true });
function delay() {
    return new Promise(resolve => setTimeout(resolve, 2000));
}
// use async function to await when promise resolved
// and this async func return Promise string
async function wait() {
    let response = await delay();
    return "Hello world";
}
async function callfunc() {
    let result = await wait();
    console.log(result);
}
callfunc();
