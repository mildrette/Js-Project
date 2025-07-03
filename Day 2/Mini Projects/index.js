// mini food list manager app

// const addFoodItems = ["irish", "coco yam", "sweet Potatos", "yam", "rice", "beans", "Plantain"];
// let food = 0;

// for (let food = 0; food < foodList.length; food++){
//     console.log(`${food + 1}. my Food List : ${foodList[food]}`);
// }

// foodList.push('egg');
// foodList.push("corn");

// const food = ["irish", "coco yam", "sweet Potatos", "yam", "rice", "beans", "Plantain"];

// function addFoodItems(foodList) {
//     food.push(foodList);
//     console.log(" update food list : ")
//     console.log(`Adding "${foodList}" to the food List.`)
//     printFoodlist();
// }

// addFoodItems("egg");
// addFoodItems("corn");
// addFoodItems("fish");

// Step 1: Create the initial food list
const foodList = ["irish", "coco yam", "sweet potatoes", "yam", "rice", "beans", "plantain"];

function myFoodList(newList){
foodList.push(newList);
    console.log("Shopping List: ");
    // console.log(`my food list: ${newList}`);
    printFoodList();
}

function printFoodList(){
for (let food = 0; food < foodList.length; food++) {
    console.log(`${food + 1}. my shooping list for food : ${foodList[food]}`);
}
}

myFoodList("eggPlant");
myFoodList("corn");