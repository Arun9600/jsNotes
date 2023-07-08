let d = new Date();

//to get year
console.log(`Current Year:`, d.getFullYear());

//to get a month, month always starts from 0, so we need add +1 at the end
console.log(`Current Month:`, d.getMonth() + 1);

//to get date
console.log(`Date:`, d.getDate());

//get hour
console.log(`Date:`, d.getHours());

//get minutes
console.log(`Minutes:`, d.getMinutes());

//get seconds
console.log(`Seconds:`, d.getSeconds());

//current Time
function time() {
  let da = new Date();
  let dat = da.getDate();
  let ho = da.getHours();
  let min = da.getMinutes();
  let sec = da.getSeconds();
  console.log(`${ho} : ${min} : ${sec}`);
}

setInterval(time, 1000);
