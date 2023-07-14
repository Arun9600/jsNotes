//function declaration - function declaraed using function name is called function declaration
function ap(a, b) {
  console.log(`Function Declaration`, a + b);
}
ap(1, 2); //function will be executed only when it is invoked

//function expression - function is stored in a variable is called function expression. A function without a name is called anonymns function
var x = function (a, b) {
  console.log(`Function Expression`, a * b);
};
x(2, 3);

//self invoking function
(function (a, b) {
  console.log(`Self Invoking function`, a + b);
})(5, 6);

//aarow function
let y = (a, b) => console.log(`Arrow Function`, a + b);
y(6, 6);
