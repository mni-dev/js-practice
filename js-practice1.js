//Log out food names that contain 'm' from a string array
//Method 1:
const myFavFoods = ['maggi Noodls', 'asparagus', 'hamburgar', 'muffin cake', 'polao'];
for(let i = 0; i<myFavFoods.length; i++){
    if(myFavFoods[i].indexOf('m') != -1){
        // const foodsWithM = myFavFoods;
        // console.log(foodsWithM[i]);
        console.log(myFavFoods[i]);
    }
}

//Method 2:
const myFavFoods = ['maggi Noodls', 'asparagus', 'hamburgar', 'muffin cake', 'polao'];
myFavFoods.forEach(function(arr, arrInd, array){
    if(array[arrInd].match('m')){
        console.log(array[arrInd]);
    }
})

//Return names that start with 'md' from an Array
const myFriends = ['rezaul', 'md aiman', 'Md Atik', 'ashraf', 'athahar', 'MD ayub', 'md abdus sattar'];
//with for loop
for(let i =0; i<myFriends.length; i++){
    if(myFriends[i].startsWith('md')){
        console.log(myFriends[i]);
    }
 }
//with function
 function nameWithMd(ac){
    for(let i = 0; i<ac.length; i++){
        // const myF = myFriends[i];
        if(ac[i].startsWith('md')){
            // console.log(myFriends[i]);
            return ac[i];
        }
     }
    
 }
const friendsName = nameWithMd(myFriends);
// console.log(friendsName);

//print using slice();
const fruits = ['banana', 'orange', 'lemon', 'apple', 'mango'];
const myFavFruits = fruits.slice(1,3).toString();
// const fruitsToString = myFavFruits.toString();
// console.log(fruitsToString);
console.log(myFavFruits);