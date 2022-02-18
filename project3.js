//Grabbing child elements with .getElementByClassName
const vlogs =document.getElementsByClassName('vlog');
for(let vlog of vlogs){
    vlogs[1].style.color ='magenta';
    //function call to set style for each of loop elem
    setVlogStyle(vlog);
   /*  vlog.addEventListener('click', function(){
        vlog.style.backgroundColor = 'yellow';
    }) */
}
//set style in classlist using function
function setVlogStyle(vlog){
    vlog.style.border = '1px solid red';
    vlog.style.margin = '5px';
    vlog.style.padding = '15px';
}
//Add new Elements to a classlist using function
function addVlog(){
    const vlogContainer = document.getElementById('vlogs-container');
    const newVlog = document.createElement('div');
    newVlog.classList.add('vlog');
    newVlog.innerHTML = `
    <div class="vlog"><h2>My Vlog -1</h2>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente eos quia ullam voluptatibus! Pariatur vero ipsam dolorum, non saepe eaque nostrum quos itaque quis, culpa molestias eum asperiores laborum sunt?</p>
    </div>
    `;
    vlogContainer.appendChild(newVlog);
    //function call to set same style in new elems
    setVlogStyle(newVlog);
    /* newVlog.addEventListener('click', function(){
        newVlog.style.backgroundColor = 'yellow';
    })  */  
}

//set style with EVENT BUBBLE in parent elem
document.getElementById('vlogs-container').addEventListener('click', function(event){
     if(event.target.tagName.toLowerCase() == 'div') {
         event.target.style.backgroundColor = 'green';
     }
     else{
         event.target.parentNode.style.backgroundColor = 'green';
     }
})