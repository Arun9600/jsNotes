//A Function which is passed as an argument to another function is called callback function
//Asynchronous calll backs example

//setTimemout - Simple set Timeout
let x = () => {
  console.log("Arun");
};
setTimeout(x, 3000); //x will be printed after 3seconds

//setInterval - will be execued repeatedly in a give interval of time
let d = () => {
  let dat = new Date();
  let hours = dat.getHours();
  let min = dat.getMinutes();
  let sec = dat.getSeconds();
  if (sec.toString().length == 1) {
    sec = "0" + sec;
  }
  console.log(`The time is ${hours} : ${min} : ${sec}`);
};
setInterval(d, 1000); // this will executed repeately for every 1 second

//synchronous callbacks are map(), sort(), fllter()
