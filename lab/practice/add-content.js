var today = new Date();
var hourNow = today.getHours();
var greeting;
var backgroundColor = prompt("What color do you want the background to be?")

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
