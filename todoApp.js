let ul= document.querySelector("ul");
let inp= document.querySelector("input");
let btn= document.querySelector("button");

btn.addEventListener("click", function(){
    let task= document.createElement("li");
    task.innerText= inp.value;
    let dlt= document.createElement("button");
    dlt.innerText= "Delete";
    dlt.classList.add("delete");
    task.appendChild(dlt);
    ul.append(task);
    inp.value='';
});

ul.addEventListener("click", function(event){
    // console.dir(event.target);
    if(event.target.nodeName== "BUTTON"){
        let taskLi= event.target.parentElement;
        taskLi.remove();    
        console.log("deleted");
    }
});

// let dlt= document.querySelectorAll(".delete");
// for(dl of dlt){ // this is not valid for the new tasks which get created so we use event bubbing concept and access these through their parent
//     dl.addEventListener("click", function(){
//         let par= this.parentElement;
//         par.remove();
//     });
// }
