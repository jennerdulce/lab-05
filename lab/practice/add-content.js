var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome';
}

var el = document.getElementById('message');
el.textContent = greeting;

alert("For the king in the North!!!!") 
var enter = confirm("Press okay to proceed.")
// if (enter == true ) {
//     enter;
// } else {
//     close window
// }
// console.log("Enter value", enter)

var userinput = prompt("Type a color")

var backgroundColor = document.getElementById('background');
backgroundColor.textContent = "body {background: " + userinput + "}"

