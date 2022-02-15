//Case-insensitive Search from ARRAY
const jsBooksArr = ['Eloquent JavaScript', 'JavaScript: the Definitive Guide', 'JavaScript: The Good Parts', 'High Performance javaScript', 'Closure: The Definitive Guide', 'Exploring ES6', 'Thinking in javaScript'];
const findMatch = 'Javascript'
const newJsBookArr =[];
for (const jsB of jsBooksArr){
    if(jsB.toLowerCase().indexOf(findMatch.toLowerCase()) != -1){
        newJsBookArr.push(jsB);
    }
}
// console.log(newJsBookArr);

//sorting array num to larger 
//Method 1:
const sortAscending = [4, 85, 79, 32, 65 ,49, 55, 59, 90, 99, 70, 3, 10, 22, 15];
/* sortAscending.sort((a, c)=>{
    console.log(a);
    return a - c;
})
console.log(sortAscending); */
/* sortAscending.sort((a,c)=>{
    if(a>c) return 1;
    if(c>a) return -1;
    return 0;
})
console.log(sortAscending); */
sortAscending.sort((a, c)=>{
    return c-a;
})
console.log(sortAscending);

//Method 2: using function
function sortSmToLg(num){
    num.sort(function(a, c){
        return a-c;
    }) 
}
// const sorting = sortSmToLg(sortAscending);
// console.log(sorting);
// console.log(sortSmToLg(sortAscending));

