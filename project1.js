
// Showing Doublt/Triple Number on button-click
document.getElementById('double').addEventListener('click', function(){
    // const inputField = document.getElementById('input-field');
    // const inputCont = inputField.value;
    // // console.log(inputCont)
    // const showField =document.getElementById('dbl-tpl');
    // showField.innerText = inputCont * 2;
    // if(inputCont != 'number'){
    //     alert('please enter a number');
    // }
    doubleTriple(2)
})
document.getElementById('triple').addEventListener('click', function(){
    // const inputField = document.getElementById('input-field');
    // const inputCont = inputField.value;
    // const showField = document.getElementById('dbl-tpl');
    // showField.innerText = inputCont * 3;
    // if(inputCont != 'number'){
    //     alert('please enter a number');
    // }
    doubleTriple(3)
})

function doubleTriple(num){
    const inputField = document.getElementById('input-field');
    const inputCont = inputField.value;
    const showField = document.getElementById('dbl-tpl');
    // let a = 10;
    showField.innerText = inputCont * num;
    if(isNaN(inputCont)){
        alert('please enter a number');
        // console.log(inputCont)
    
    } 
    else{
         return showField;
    } 
  /*  switch(inputCont){
       case 'string':
            alert('please, input a number.');
            break;
   } */

}
     
