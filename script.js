// document.addEventListener("DOMContentLoaded",()=>{
    
    let form = document.querySelector("#parent-form")
    
let task_name = document.querySelector("#task-name")
let task_description = document.querySelector("#task-description")
let task_priority = document.querySelector("#option")
let task_btn_add = document.querySelector("#btn-add")
let task_btn_reset = document.querySelector("#btn-reset")
let task_list = document.querySelector("#new-list")


let data = [];

task_btn_add.addEventListener("click", (e) => {
    e.preventDefault();
    let task = {
        name: task_name.value,
        description_task: task_description.value,
        priority: task_priority.value
    }
    data.push(task)
    console.log(data)
    rendertask();
    
})
function rendertask() {
    task_list.innerHTML="";
    data.forEach((task) => {
        let row = document.createElement("tr");
        row.innerHTML = `<td>${task.name}</td>
        <td>${task.description_task}</td>
        <td>${task.priority}</td>
        <td><p contenteditable="true">Pending</p></td>
       <td> <button class="btn_remove">Remove</button></td>`;
        
        task_list.appendChild(row);
        
    })
    const removeButtons = task_list.querySelectorAll(".btn_remove");
    removeButtons.forEach(button => {
      button.addEventListener("click", () => {
        console.log("btn clicked")
        task_list.removeChild(button.parentNode.parentElement); // Remove row containing the button
      });
    });
}
task_btn_reset.addEventListener("click",(e)=>{
e.preventDefault();
data=[];
rendertask();
})
// })