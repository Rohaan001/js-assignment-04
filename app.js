// Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).

// var A = 90;
// var Z = 65;
// var a = 97;
// var z = 122;

// var userInput = prompt("please inter a letter keyword about  ASCII code")
// if(userInput == "Z"){
//     document.write("its your letter ASCIT code " + Z)


// }
// else if(userInput == A){
//     document.write("its your letter ASCIT code " + A)
// }
// else if(userInput == "a"){
//     document.write("its your letter ASCIT code " + a)   
// }
// else if(userInput == "z"){
//     document.write("its your letter ASCIT code " + z)
// }

// var firstInt = +prompt("Enter Your First Int");
// var secondInt = +prompt("Enter Your First Int");
// if(firstInt >= secondInt){
//     document.write("First integer is " , firstInt," and Second Int is " ,secondInt ," and First Int is greater then sceond Int "  );

// } 
// else if(secondInt >= firstInt){
//     document.write("First integer is " , firstInt," and Second Int is " ,secondInt ," and secondInt is greater then firstInt "  );

// } 
// else{
//     console.log("error")
// }


// Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.

// var userInput = +prompt("enter your num")
// if(userInput === +userInput){
//     document.write("your num is positive")
// }
// else {
//     document.write("your num is negatibe")
// }
//Question 04//

// var vowels =prompt("Enter a Alphabet");
// if(vowels .toLowerCase === "a"){
//     Alert
// }
// Question No 5
// // (a)
// var correctPassword = "AH3421";

// //(b) 
// var userPassword = prompt("Enter Your Password:");

// // (c)
// if (!userPassword) {
//   console.log("Please Enter Your Password");
// }
//  else if (userPassword === correctPassword) {
//   console.log("Correct!");
// }
//  else {
//   console.log("Incorrect Password.");
// }

// Question No 6

// var greeting;
// var hour = 13;

// if (hour < 18) {
// greeting = "Good Day";
// }
// else{
// greeting = "Good Evening";
// }
// document.write (greeting);

// *******************************************************

// var hour = +prompt("Enter The Hour (0-23):");
// var greeting;

//   if (hour < 18) {
//     greeting = "Good Day";
//   } else {
//     greeting = "Good Evening";
//   }
//   console.log(greeting);


// Question No 7

// var time = +prompt("Enter The Time ");
// var hours = Math.floor(time / 100);
// var minutes = time % 100;

// if (minutes >= 60) {
//   hours = hours + Math.floor(minutes / 60); 
//   minutes = minutes % 60; 
// }
// var period;

// if (hours >= 12) {
//   period = "PM";
//   if (hours > 12) {
//     hours = hours - 12;  
//   }
// } else {
//   period = "AM";
//   if (hours === 0) {
//     hours = 12;  
//   }
// }


// var formattedTime;

// if (minutes < 10) {
//   formattedTime = hours + ":0" + minutes + " " + period;  
// } else {
//   formattedTime = hours + ":" + minutes + " " + period;
// }

// var greeting;

// if (time >= 0 && time < 1200) {
//   greeting = "Good Morning!";
// } else if (time >= 1200 && time < 1700) {
//   greeting = "Good Afternoon!";
// } else if (time >= 1700 && time < 2100) {
//   greeting = "Good Evening!";
// } else if (time >= 2100 && time <= 2359) {
//   greeting = "Good Night!";
// } else {
//   greeting = "Invalid Time Entered!";
// }

// console.log("Time Entered: " + formattedTime + " - " + greeting);