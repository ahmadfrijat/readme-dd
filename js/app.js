prompt("what is your name ?");
var name = prompt("what is your name ?");
alert(name);
alert("hello" + name);

var userInput = prompt("what is my name (abdalrahman or ahmad)?").toLowerCase(userInput);
switch (userInput) {
    case 'abdalrahman':
        alert("that true");
        break;
    case 'ahmad':
        alert('that false');
        break;

}
var userInput2 = prompt("what is my hoppy (sport or drawing)?").toLowerCase(userInput2);
switch (userInput2) {
    case 'sport':
        alert("that true");
        break;
    case 'drawing':
        alert('that false');
        break;

}
var myTeam = prompt("Is my hair black?(yes or no )").toLowerCase(myTeam);
if (myTeam === "yes") {
    alert('true');
}
// console.log("true");
else {
    alert('false');
    //console.log("false");
}
console.log('myTeam');

var myskin = prompt("Is my skin black?(yes or no )").toLowerCase(myskin);
if (myskin === "yes") {
    alert('false');
}
// console.log("false");
else {
    alert('true');
    //console.log("true");
}
console.log('myskin');

var mylength = prompt("Is my length 174?(yes or no )").toLowerCase(mylength);
if (mylength === "yes") {
    alert('true');
}
// console.log("true");
else {
    alert('false');
    //console.log("false");
}
var limit = 4;
var y = 0 ;
var guess = prompt('How many brothers i have ?');
var x = 1;
while (guess !== 3) {

    while (x < limit) {

        if (guess < 3) {
            guess = prompt('too low, How many brothers i have ?');
            x++
        

        } else if (guess > 3) {
            guess = prompt('too high, How many brothers i have ?');
            x++;
    
            if (x == 4) {

            }

        } else {
            x = 4;
        }

    }
    alert("The Number Is 3")
    guess = 3;
}

alert("that's true")
//console.log("true")
var limit1 = 6;
var array =['red','blue','black','green','yallo','orang','white']
var guess = prompt('wich color is true ?'+ (array) );
var x = 1;
while (guess !== array[3]) {

    while (x < limit1) {
        if (guess !== array[3]) {
            guess = prompt('that fals please try again'+ (array) );
       x++
       y++
        }else {
            x=6 ;
        }
        }
        alert('the color is green');

    }
    alert("the color is green thats true")
    //console.log("true")
    guess = array[3];
alert('you have ' + y + 'wrong question')