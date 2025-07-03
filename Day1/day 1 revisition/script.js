// let name = "Zoe";
// let age = "30";
// var isFat = false;
// var student = null;
// let notSet;

// console.log(notSet)
// let notSet;
// const Mildred = {name: "mildred Zoe", age: 30, isFat: "false", student: "null", notSet }

// console.log(Mildred)

// // profile files
// const profile = {
//     fullName: "mildred Fonka", 
//     age: 30,
//     country: "cameroonain",
//     isStudent: false,
//     hobbies: ["coding", "singing", "eating", "sleeping", "learning New Things"]
// }

// profile.hobbies.push("prayers", "writing", "reading")

// console.log("your name is : ", profile.fullName),
// console.log("your Hobbies are: ", profile.hobbies)

// // array of friends

// const friends = ['vanessa', "light", "favour", "sasha", "joy", "wisdom","lum"];
// friends.push("petra", "blessings", "queenta")
// console.log(friends)
// console.log("my Best Friends name is : ", friends[5]);
// console.log("Total Friends is : ", friends.length)

/* learning Loops, here learning the For Loops */
const loops = ["money", "food", "fruits", "coding", "dresses", "reading", "writing", "cleaning"];
 
// normal loops
for (let i = 0; i < loops.length; i++){
console.log("list of things i love: ", loops[i])
}

// how to add numbers in a loops
for (let i = 0; i < loops.length; i++){
    console.log(`${i + 1}. ${loops[i]}`)
};

// for Loops

for (let i = 0; i < 9; i++){
    console.log("counts: ", i)
}


// while loops
const items = ["money", "food", "fruits", "coding", "dresses", "reading", "writing", "cleaning"];
let i = 0;
while (i < items.length){
    console.log("while loops: ", items[i])
    i++;
}