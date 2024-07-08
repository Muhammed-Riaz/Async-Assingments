"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let promise = new Promise((resolve => {
    console.log("promise pending");
    resolve("promise resolved");
}));
async function getpromise() {
    let get = await promise;
    return get;
}
getpromise().then((res) => {
    console.log(res);
});
