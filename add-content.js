function greetingMessage() {

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
}

// function changeBackground() {
//     var userinput = prompt("Type a color to change the color of the background")

//     var backgroundColor = document.getElementById('background');
//     backgroundColor.textContent = "body {background: " + userinput + "}"
// }



function nameMessage() {
    var name = prompt('What is your name?');
    var elName = document.getElementById('person');
    elName.textContent = 'Hello ' + name;
}


// function getPreference() {
//     var response = prompt('Would you like an Apple or a Cookie?');
//     var item;
    
//     while(response != 'cookie' && response != 'apple') {
//         response = prompt('Choose Apple or Cookie');
//     }

//     if(response == 'apple') {
//         item = ' <img width="80px" height="80px" src="apple.jpeg" />';
//     } else if (response == 'cookie') {
//         item = ' <img width="80px" height="80px" src="cookie.png" />';
//     }

//     return item;
    
// }   

// function getFood() {
//     var counting = prompt('How many would you like?');
//     while(isNaN(counting) || counting ==='') {
//         var counting = prompt('Please type a number for how many  you would like.');
//     }
//     return counting;
// }

// function loopingFood(x, food) {
//     var msg = '';
//     for(i = 0; i < x; i++) {
//         document.write(food);
//     }
// }

// function displayFood() {
//     var preference = getPreference()
//     var numOfFood = getFood();
//     loopingFood(numOfFood, preference);
// }



greetingMessage();
// changeBackground();
nameMessage(); 
// displayFood();
// // alert("For the king in the North!!!!") ;


// change background colors

function colorRed() {
    document.getElementById('background').innerHTML = 
    "body {background: tomato}"
}

function colorBlue() {
    document.getElementById('background').innerHTML = 
    "body {background: DodgerBlue}"
}

function colorGreen() {
    document.getElementById('background').innerHTML = 
    "body {background: MediumSeaGreen}"
}

function colorOrange() {
    document.getElementById('background').innerHTML = 
    "body {background: Orange}"
}

function colorViolet() {
    document.getElementById('background').innerHTML = 
    "body {background: Violet}"
}

function colorHoneydew() {
    document.getElementById('background').innerHTML = 
    "body {background: Honeydew}"
}

function colorHotPink() {
    document.getElementById('background').innerHTML = 
    "body {background: HotPink}"
}

function colorPurple() {
    document.getElementById('background').innerHTML = 
    "body {background: MediumPurple}"
}