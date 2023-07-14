let submit = document.getElementById("submit");
submit.style.display = "block";
submit.style.marginTop = "10px";
let text = document.getElementById("text");
text.style.display = "block";
text.style.marginTop = "10px";
text.style.height = "20px";
submit.addEventListener("click", function (e) {
  e.preventDefault();
  let i = document.getElementById("text").value;
  try {
    if (i === "") {
      throw "This field should not be empty";
    }
    if (isNaN(i)) {
      throw "Please Enter a Number";
    }
    if (i.length > 2) {
      throw "Please enter a valid two digit number";
    }
    document.getElementById("output").innerHTML = `The Entered number is: ${i}`;
  } catch (error) {
    document.getElementById("output").innerHTML = error;
  }
});
