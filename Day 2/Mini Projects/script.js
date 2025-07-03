// mini list app

// const myLife = {
//     job:"web Developer",  
//     age: 30,
//     country: "Cameroon",
//     tribe: "santa",
//     Regiion: "North West",
//     Hobbies: ["coding", "cooking", "watching Movies", "dancing"],
//     Skills: ["html", "css", "React", "Javascript", "Bootstrap", "Tailwind"],
//     Languages: ["English", "French", "Pidgin"],
//     Goals: ["Become a full stack developer", "Travel the world", "Start a Business", "learn a new Language", "Build a Mobile App"]
// };


// function displayLifeList(category, NewList){
//     myLifeList.Hobbies.push(NewList);

//     console.log("My life List are: ");
//     console.log(`Adding, ${NewList} to my life list ...`)
//     printLifeList();
// }

// function printLifeList(){
//     for (let list = 0; list < myLifeList.Hobbies.length; list++){
//         console.log(`${list + 1}. ${myLifeList.Hobbies[list]}`);
//     }
// }

// displayLifeList("Goals", "learn a new skill");
// displayLifeList("Hobbies", "dress up");
// displayLifeList("Hobbies", "Worshipping Good");
// displayLifeList("Languages", "Spanish");

// console.log("My life list is Complete!");
// console.log("Thank you for checking out my life list!");




// ==========================================



// mini list app

const myLifeList = {
    job:"web Developer",  
    age: 30,
    country: "Cameroon",
    tribe: "santa",
    Regiion: "North West",
    Hobbies: ["coding", "cooking", "watching Movies", "dancing"],
    Skills: ["html", "css", "React", "Javascript", "Bootstrap", "Tailwind"],
    Languages: ["English", "French", "Pidgin"],
    Goals: ["Become a full stack developer", "Travel the world", "Start a Business", "learn a new Language", "Build a Mobile App"]
};


function displayLifeList(category, newItem){

    if (Array.isArray(myLifeList[category])){
        myLifeList[category].push(newItem);
          console.log(`✅ Added "${newItem}" to your ${category} list.`);
        printLifeList(category);
    } else {
         console.log(` Sorry, "${category}" is not a valid category in my life list.`)}
    }


function printLifeList(category){
    console.log(` your ${category} list: `);
    for (let list = 0; list < myLifeList[category].length; list++) {
        console.log(`${list + 1}. ${myLifeList[category][list]}`);
    }
    console.log("----------");
}

displayLifeList("Goals", "learn a new skill");
displayLifeList("Hobbies", "dress up");
displayLifeList("Hobbies", "Worshipping Good");
displayLifeList("Languages", "Spanish");
displayLifeList("Skills", "Node.js");

console.log("My life list is Complete!");
console.log("Thank you for checking out my life list!");