// learning condittionals in javascript

// you compare values using the equality operator (==) or the strict equality operator (===)
// you can also use the inequality operator (!=) or the strict inequality operator (!==)


// let weather = "hot";

// if (weather === "cold") {
//     console.log("Wear a Pullover and sockes");
// } else if (weather === "hot") {
//     console.log("Wear a Sundress and sandals");
// } else {
//     console.log("Your can rock any Thing of choice");
// }

const moods = ["Happy", "Sad", "Okay"];

for (let i = 0; i < moods.length; i++){
    let mood = moods[i];

    if (mood === "Happy"){
    console.log("Keep Smiling")
} else if (mood === "Sad"){
    console.log("Cheer up! Everything will be fine")
} else{
    console.log("Take a deep breath")
}
}



let age = 20;

if (age < 13 ){
    console.log(" your a child")
} else if (age > 13 && age < 19) {
    console.log("your a Teenageer")
} else {
    console.log("Your and Adult")
}


let foodList = ["achu", "jollof rice", "cornchaff", "plantain"];

for (let food = 0; food < foodList.length; food++){
    let foodItems = foodList[food];

if (foodItems === "achu" || foodItems === "cornchaff"){
    console.log(`${foodItems} is a traditional dish`)
} else if (foodItems === "jollof rice") {
    console.log("party Food")
} else{
    console.log("Just Regular But Testy!")
}

}

let isLoggedIn = true;

if (isLoggedIn) {
    console.log("Welcome back, Zoe");
} else {
    console.log("Please Log in to Continue")
}

const mood = ["Happy", "Angry", "Sad", "Excited"];


for (let i = 0; i < mood.length; i++)
{
let pickedMood = mood[i];

    if (pickedMood === "Happy") {
    console.log("keep Smiling");
} else if (pickedMood === "Angry"){
    console.log("Take a deep breath and relax")
} else if (pickedMood === "Sad"){
    console.log("Sending you Hugs")
} else {
    console.log("Yay! Celebrate It!")
}

}
