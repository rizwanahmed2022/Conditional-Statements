// 1. Ask the user for their age. If the age is 18 or more, show an alert: "You are an
// adult.", else show: "You are a minor."

// var age = prompt("Please enter your age:");
// if (age >= 18) {
//     alert("You are an adult.");
// }
// else {
//     alert("You are a minor.");
// }








// 2. Ask the user to enter a number. If it's positive, log: "Positive number"; else log:
// "Not positive".

// var number = prompt("Please enter a number:");
// if (number > 0) {
//     console.log("Positive number");
// }
// else {
//     console.log("Not positive");
// }   








// 3. Ask the user for a number. If it’s even, alert: "Even number"; else alert: "Odd
// number".

// var num = prompt("Please enter a number:");
// if (num % 2 === 0) {
//     alert("Even number");
// } else {
//     alert("Odd number");
// }






// 4. Ask for a username. If the username is "admin", display "Welcome, admin!"; else
// display "Access denied."

// var username = prompt("Please enter your username:");
// if (username === "admin") {
//     alert("Welcome, admin!");
// } else {
//     alert("Access denied.");
// }







// 5. Ask for two numbers. If they are equal, log "Both numbers are the same";
// otherwise, log "The numbers are different".

// var num1 = prompt("Enter the first number:");
// var num2 = prompt("Enter the second number:");
// if (num1 === num2) {
//     console.log("Both numbers are the same");
// } else {
//     console.log("The numbers are different");
// }







// 6. Ask the user to enter two numbers. Check which one is larger and alert: "First is
// larger" or "Second is larger".

// var numA = prompt("Enter the first number:");
// var numB = prompt("Enter the second number:");
// if (numA > numB) {
//     alert("First is larger");
// }
// else if (numB > numA) {
//     alert("Second is larger");
// }
// else {
//     alert("Both numbers are equal");
// }













// 7. Ask for a number. If it's greater than 100, alert "Too big!", else alert "Within
// range".

// var number = prompt("Please enter a number:");
// if (number > 100) {
//     alert("Too big!");
// }
// else {
//     alert("Within range");
// }







// // 8. Ask for a score. If it’s 50 or higher, log "You passed!", else log "You failed."

// var score = prompt("Please enter your score:");
// if (score >= 50) {
//     console.log("You passed!");
// }
// else {
//     console.log("You failed.");
// }















// 9. Ask the user to enter a temperature. If it’s over 30, alert "It's hot!"; else alert "It's
// not hot."

// var temperature = prompt("Please enter the temperature:");
// if (temperature > 30) {
//     alert("It's hot!");
// }
// else {
//     alert("It's not hot.");
// }   






// 10. Ask the user to enter a number. If it's 0, alert "Zero"; if it’s not zero, alert "Not zero".

// var number = prompt("Please enter a number:");
// if (number == 0) {
//     alert("Zero");
// }
// else {
//     alert("Not zero");
// }












// 11. Ask the user for their age. If it's 60 or more, log "You are a senior citizen.",
// else log "You are not a senior."

// var age = prompt("Please enter your age:");
// if (age >= 60) {
//     console.log("You are a senior citizen.");
// }
// else {
//     console.log("You are not a senior.");
// }















// 12. Ask the user for their name. If the name is "Alice", alert "Hi, Alice!"; else alert
// "You're not Alice!"

// var name = prompt("Please enter your name:");
// if (name === "Alice") {
//     alert("Hi, Alice!");
// } else {
//     alert("You're not Alice!");
// }









// 13. Ask the user for a password. If it matches "12345", log "Correct password"; else
// log "Wrong password".

// var password = prompt("Please enter your password:");
// if (password === "12345") {
//     console.log("Correct password");
// } else {
//     console.log("Wrong password");
// }




// 14. Ask the user for the current hour (0–23). If it’s less than 12, alert "Good morning!";
// else alert "Good afternoon!"

// var hour = prompt("Please enter the current hour (0-23):");
// if (hour < 12) {
//     alert("Good morning!");
// } else {
//     alert("Good afternoon!");
// }




// 15. Ask the user to enter a number. If it's divisible by 5, log "Divisible by 5"; else log
// "Not divisible by 5".

// var num = prompt("Please enter a number:");
// if (num % 5 === 0) {
//     console.log("Divisible by 5");
// } else {
//     console.log("Not divisible by 5");
// }










// 16. Ask the user if they want to play a game (yes/no). If they type "yes", alert "Let's
// play!"; else alert "Maybe next time!"

// var playGame = prompt("Do you want to play a game? (yes/no)");
// if (playGame === "yes") {
//     alert("Let's play!");
// } else {
//     alert("Maybe next time!");
// }











// 17. Ask the user for a color. If the color is "blue", log "Cool choice!"; else log
// "Interesting color!"

// var color = prompt("Please enter a color:");
// if (color === "blue") {
//     console.log("Cool choice!");
// } else {
//     console.log("Interesting color!");
// }











// 18. Ask for the day of the week. If it’s "Sunday", alert "Weekend!"; else alert "Weekday".

// var day = prompt("Please enter the day of the week:");
// if (day === "Sunday") {
//     alert("Weekend!");
// } else {
//     alert("Weekday");
// }










// 19. Ask the user to enter a fruit. If it's "banana" or "apple", alert "We have that!";
// else alert "Sorry, out of stock."

// var fruit = prompt("Please enter a fruit:");
// if (fruit === "banana" || fruit === "apple") {
//     alert("We have that!");
// } else {
//     alert("Sorry, out of stock.");
// }







// 20. Ask the user to type "start" to begin. If they do, alert "Game started!"; else alert
// "Waiting for input..."

// var startGame = prompt("Type 'start' to begin:");
// if (startGame === "start") {
//     alert("Game started!");
// } else {
//     alert("Waiting for input...");
// }










// 1. Age-Based Grade Check
// Check a student's marks and display:
// ● "Distinction" if marks ≥ 80
// ● "Pass" if marks ≥ 50 and < 80
// ● "Fail" if marks < 50
// ● "Invalid Marks" if marks are not between 0 and 100

// var marks = prompt("Please enter your marks (0-100):");
// if (marks >= 80 && marks <= 100) {
//     console.log("Distinction");
// } else if (marks >= 50 && marks < 80) {
//     console.log("Pass");
// } else if (marks < 50 && marks >= 0) {
//     console.log("Fail");
// } else {
//     console.log("Invalid Marks");
// }








// 2. Discount Eligibility Based on Age and Membership
// Given a person's age and membership status, show:
// ● "Senior Premium Discount" if age ≥ 60 and is a premium member
// ● "Senior Discount" if age ≥ 60
// ● "Premium Discount" if a premium member
// ● "No Discount" otherwise

// var age = prompt("Please enter your age:");
// var isPremiumMember = confirm("Are you a premium member?");
// if (age >= 60 && isPremiumMember) {
//     console.log("Senior Premium Discount");
// } else if (age >= 60) {
//     console.log("Senior Discount");
// } else if (isPremiumMember) {
//     console.log("Premium Discount");
// } else {
//     console.log("No Discount");
// }










// 3. Login and Email Verification
// ● If user is logged in and email is verified → "Access granted"
// ● If user is logged in but not verified → "Please verify your email"
// ● If not logged in → "Please log in"

// var isLoggedIn = confirm("Are you logged in?");
// var isEmailVerified = confirm("Is your email verified?");
// if (isLoggedIn) {
//     if (isEmailVerified) {
//         console.log("Access granted");
//     } else {
//         console.log("Please verify your email");
//     }
// } else {
//     console.log("Please log in");
// }   




// 4. Contest Eligibility
// Check if a person is eligible to enter a contest:

// ● Must be between ages 18–35
// ● Must be from Pakistan or India
// ● Must not be banned
// Display appropriate messages for age, region, or ban issues.

// var age = prompt("Please enter your age:");
// var country = prompt("Please enter your country (Pakistan/India):");
// var isBanned = confirm("Are you banned from the contest?");
// if (age >= 18 && age <= 35) {
//     if (country === "Pakistan" || country === "India") {
//         if (!isBanned) {
//             console.log("You are eligible to enter the contest.");
//         }
//         else {
//             console.log("You are banned from the contest.");
//         }
//     } else {
//         console.log("You must be from Pakistan or India to enter the contest.");
//     }
// } else {
//     console.log("You must be between 18 and 35 years old to enter the contest.");
// }






// 5. Subscription Access Check
// Given the subscription plan and login status:
// ● "Welcome Premium User" if plan is "premium" and logged in
// ● "Welcome Free User" if plan is "free" and logged in
// ● "Please log in to continue" if not logged in
// ● "Invalid subscription" otherwise

// 6. Product Purchase Validation
// Check product conditions:
// ● "Buy now with discount" if price > 1000, in stock, and user is a member
// ● "Buy now" if in stock
// ● "Out of stock" if stock === 0
// ● "Invalid product" otherwise

// 7. Work Hours Check
// Check based on hoursWorked and isWeekend:

// ● "Overtime" if hours > 40 and not a weekend
// ● "Weekend work" if hours > 0 and is weekend
// ● "Regular hours" if ≤ 40
// ● "No work" if hours === 0

// 8. Age and Gender Classification
// Given a user's age and gender:
// ● "Teen Male" if age 13–19 and gender is "male"
// ● "Teen Female" if age 13–19 and gender is "female"
// ● "Adult" if age ≥ 20
// ● "Child" if age < 13

// 9. Weather Warning System
// Based on temperature and humidity:
// ● "Heatwave Alert" if temp ≥ 40 and humidity ≥ 60
// ● "Hot and Dry" if temp ≥ 40 and humidity < 60
// ● "Cool Weather" if temp ≤ 20
// ● "Moderate" otherwise

// 10. Score Grading System
// Given a score between 0–100:

// ● "Excellent" for 90–100
// ● "Good" for 70–89
// ● "Average" for 50–69
// ● "Poor" for 30–49
// ● "Fail" below 30
// ● "Invalid Score" if out of range

// 11. Course Access Control
// To access a course:
// ● Must be logged in
// ● Must be enrolled
// ● Must not be banned

// Show: "Access granted", "Enroll in course first", "User is banned", or "Please log in"

// 12. Driving Conditions
// Given a user's speed and license status:
// ● "License suspended" if speed > 120
// ● "Warning" if speed between 100–120
// ● "Normal driving" if speed ≤ 100 and has license
// ● "Driving without license" otherwise

// 13. Order Processing Status

// For an online order:
// ● "Order on the way" if payment is complete and shipped
// ● "Preparing your order" if payment is complete and not shipped
// ● "Awaiting payment" if payment is pending
// ● "Payment failed" if transaction failed

// 14. Battery Status Checker
// Given battery level and charging state:
// ● "Fully Charged" if level === 100
// ● "Charging..." if level < 100 and charging
// ● "Low Battery" if level < 20 and not charging
// ● "Battery OK" otherwise

// 15. Browser and Device Compatibility Check
// Based on user's browser and device:
// ● "Full features enabled" if browser is Chrome and device is Desktop
// ● "Limited mobile features" if browser is Chrome and device is Mobile
// ● "Please switch to Chrome" for all other browsers