// make a simple function get delay 2 sec and return promise

function first(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      let log = "wait when promise is resolved";
      resolve(log);
    }, 10000);
  });
}
async function resol() {
  let call = await first();
  console.log(call);
}
resol();

function delay(): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, 5000));
}

// use async function to await when promise resolved
// and this async func return Promise string

async function wait(): Promise<string> {
  let response = await delay();
  return "Hello world";
}

// now use async func to call pending promise

async function callfunc() {
  let result = await wait();
  console.log(result);
}
callfunc();
