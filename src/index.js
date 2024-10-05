document.addEventListener("DOMContentLoaded", () => {
  // your code here

let button = document.getElementById("button-submit")
button.addEventListener("click", handleAddTask);

//function that handles add task
function handleAddTask(event){
  event.preventDefault()

  //Getting values from input field
  const inputTask = document.getElementById("new-task-description").value


  //Prevent adding empty tasks
  if (inputTask.trim()===""){
    return;
  }  
  
  displayTask(inputTask);

  //Clear content in input field on submit  
  document.getElementById("new-task-description").value = ""
}

//function that display list items 
function displayTask(input){

  const ul = document.getElementById("tasks")
  //create list that has span for content and adjacent buttons
  const li = document.createElement("li")
  li.className = "list-group-item d-flex justify-content-between align-items-center"

  //create span 
  const spanContent = document.createElement("span")
  spanContent.textContent = input;
  spanContent.className = "min-width"
  
  //create edit button
  const editButton = document.createElement("button")
  editButton.textContent = "Edit"
  editButton.className= "btn btn-outline-info btn-sm"

  editButton.addEventListener("click", function(){
    editTask(spanContent); 
  })


  //create delete button
  const removeButton = document.createElement("button")
  removeButton.textContent = "Delete"
  removeButton.className = "btn btn-danger btn-sm"
  removeButton.addEventListener("click", function(){
    deleteTask(li)
  })



  //Append the span and two buttons to li
  li.appendChild(spanContent)
  li.appendChild(editButton)
  li.appendChild(removeButton)
  
  //Append li to ul
  ul.appendChild(li)
}

//function to edit tasks & make it global for html list items to access
window.editTask = function(span){
    // Make the span content editable
    span.contentEditable = true; 
    span.focus()
    span.className = "form-control"

    //Add event listener that turns edit off onpress enter 
    span.addEventListener('keydown',function(event){
      if (event.key === "Enter"){
        span.contentEditable = false; 
        span.classList.remove("form-control")
        span.className ="min-width"
      }   
    })
}
// function to delete task and make it global for html list items to access
window.deleteTask = function(list){
  list.remove()
}

});