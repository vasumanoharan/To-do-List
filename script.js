let button=document.getElementById('add')
let tod=document.querySelector('.todolist')
let input=document.getElementById('inputbox')

let todos=[]
window.onload=()=>{
    todos=JSON.parse(localStorage.getItem('todos')) || []
    todos.forEach(todo=>addtodo(todo))
    console.log(todos);
    
}
button.addEventListener('click',()=>{
    todos.push(input.value)
    localStorage.setItem('todos',JSON.stringify(todos))
    addtodo(input.value)
    input.value=''

})
function addtodo(todo){
    let para=document.createElement('p')
    para.innerHTML=todo
    
    tod.appendChild(para)
    
    para.addEventListener('click',()=>{
        para.style.textDecoration='Line-through'
        remove(todo)
    })
    para.addEventListener('dblclick',()=>{
        tod.removeChild(para)
        remove(todo)
    })

    function remove(todo){
        let indx=todos.indexOf(todo)
        console.log(indx);
        if(indx>-1){
            todos.splice(indx,1)
        }
        localStorage.setItem('todos',JSON.stringify(todos))
    }
    
}