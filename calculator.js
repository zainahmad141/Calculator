var Result = document.getElementsByClassName("button")

var op = document.getElementsByClassName("button")
var operation = null;
var num1 = "";
var num2 = "";
var toggle = true;


var output = document.getElementById("output")

function getValue(num) { //2.2.2
   // abcd.efg
   if (output.value.indexOf('.') > -1 && num == '.') {
      return
   }
   console.log(num1, num2, operation)
   output.value += num
   if (operation === null) {
      num1 += num;
   } else {
      num2 += num;
   }
}

// if num1 and num2 and operation has already values, calculate them, store result in num1 and udpate the operation with new operator.
// floating values operations

// HOME WORK
// 1- create Scientific calculator
// a. Calculate Power function
// b. Calculate Square Root function
// c. Create a scientific calc button (button should take width of two buttons) and switch on and off the scientific function buttons
// 2- Enter any number and on pressing 'ENTER' should not show 0 but it should show the first number.

// Clock.html
// 1- show the current time in the center of page and font should be very large.
// 2- Update the time after every second.

function getOperator(op) {
   if (operation !== null) {
      calculate();
   }

   operation = op;
   output.value = "";
}

function clearScreen() {
   output.value = "";
   operation = null;
   num1 = num2 = "";
}

function calculate() {
   var res = 0;

   if (operation === '+') {
      res = Number(num1) + Number(num2);
   }
   else if (operation === '-') {
      res = Number(num1) - Number(num2);
   }
   else if (operation === '/') {
      res = Number(num1) / Number(num2);
   }
   else if (operation === '*') {
      res = Number(num1) * Number(num2);
   }
   document.title = output.value = res.toFixed(4);
   operation = null;
   num1 = res;
   num2 = "";
}

function toggleCalculator() {
   var toggleButton = document.getElementById("toggle");
   var buttons = document.getElementsByClassName("button")
   var buttonsarray = Array.from(buttons)

   if (toggle) {
      toggleButton.value = "OFF";
      toggleButton.style.backgroundColor = "red";
      toggleButton.style.color = "white";

      for (var i = 0; i < buttonsarray.length; i++) {
         buttonsarray[i].setAttribute("disabled", '');
      }

      toggleButton.removeAttribute("disabled");

   } else {
      toggleButton.value = "ON";
      toggleButton.style.backgroundColor = "green";
      toggleButton.style.color = "black";

      for (var i = 0; i < buttonsarray.length; i++) {
         buttonsarray[i].removeAttribute("disabled");
      }
   }

   toggle = !toggle;
}



