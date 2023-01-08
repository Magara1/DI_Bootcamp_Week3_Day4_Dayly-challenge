/*
 @author : Magara Etychien N'gouan
 * 
 *Daily Challenge: Todo List

 *      
 * 
 * Date : 06 Janvier 2023
 * 
 * 
 * Recreate the todo list above:

Create an HTML, CSS and a JS file.

In the HTML file
create a form with one input type="text", and a “Submit” button.
add an empty div below the form
<div class="listTasks"></div>

In the js file, you must add the following functionalities:
Create an empty array : const tasks = [];

Create a function called addTask(). As soon as the user clicks on the button:
check that the input is not empty,
then add it to the array (ie. add the text of the task)
then add it to the DOM, below the form (in the <div class="listTasks"></div>) .
Each new task added should have (starting from left to right - check out the image at the top of the page)
a “X” button. Use font awesome for the “X” button.
an input type="checkbox". The label of the input is the task added by the user.

BONUS I (not mandatory):
Change the variable tasks to an array of task objects.
Each new task added to the array should have the properties : task_id, text and done (a boolean - false by default).
Every new task object should have a task_id, starting from 0, and a data-task-id attribute, which value is the same as the task_id. Check out data-* attributes here.
Create a function named doneTask(), that as soon as the user clicks on the “checkbox” input, the done property should change from false to true in the object, and from black to crossed out red in the DOM.

BONUS II (not mandatory):
Create a function named deleteTask(), that as soon as the user clicks on the “X” button, delete that specific task from the array listTasks.
 
*/


const tasks = [];

let formsearch = document.getElementsByTagName("form")[0];
let listTasks = document.getElementsByClassName("listTasks")[0];


formsearch.addEventListener("submit", (ev)=>{
    ev.preventDefault();

    addTask()
}
)

function addTask(){

   
    let userInput = document.getElementById("userInput");
    let userTexte = userInput.value;

    if (userTexte==""){

        alert("Veuillez saisie une valeur svp !!!");

    }else{
        let div =document.createElement("div");
         let i = document.createElement("i");
         let input = document.createElement("input");
         let label = document.createElement("label");
        

         listTasks.appendChild(div);
         listTasks.appendChild(clearButton)

         i.setAttribute("class", "fa-solid fa-square-xmark")
         i.style.marginLeft = "2%";
         div.appendChild(i);

         input.setAttribute("type", "checkbox");
         input.setAttribute("id", "checkbox");
         input.addEventListener("input",checkbox)
         div.appendChild(input);
       

         label.innerHTML = userTexte;
         label.style.fontSize ="20px";
         label.style.borderBottom ="1px solid blue";
         label.style.borderTop ="10px";
         div.appendChild(label);
         div.style.marginTop = "10px";

    }

    }

  
function checkbox(ev){
    let divparent = ev.target.closest("div");
    let label = divparent.lastElementChild;
    if (ev.target.checked == true){
        label.style.textDecoration ="line-through";
        label.style.color = "red";
        }else{
            label.style.textDecoration ="none";
            label.style.color = "black";  
        }
}

let clearButton = document.getElementById("clear-button");
listTasks.removeChild(clearButton);

function Clear(ev){
    listTasks.innerHTML="";
}



