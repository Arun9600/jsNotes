//promise is an object that represents the success or failure of an asynchronous operation

//new Promise
let ap = new Promise((resolve, reject) => {
  let x = 2;
  if (x % 2 == 1) {
    resolve("Your promise has been resolved");
  } else {
    reject("Your Promise has been rejected");
  }
});

ap.then((message) => {
  console.log(message);
});

ap.catch((error) => {
  console.log(error);
});
