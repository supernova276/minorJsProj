let todoInput=document.querySelector(".input") //getelement by id is faster than queryselector
let addButton=document.querySelector(".button")
let showTodos=document.querySelector(".todos-container")
let todo;
let localData=JSON.parse(localStorage.getItem("todo"))
let todolist=localData || [];
render(todolist)    

function uuid(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,function(param){
    let number=Math.random() * 16 | 0;
    let randomNumber=param=='x'?number:(number & 0x3 | 0x8);
    return randomNumber.toString(16);
  });
}
addButton.addEventListener("click",(e)=>{
  e.preventDefault()  //please do not do the defaltu action of form submission or reloading the page
  let todo=todoInput.value
  if(todo.length>0){
  todolist.push({id:uuid(), todo:todo,isCompleted:false})
}
localStorage.setItem("todo",JSON.stringify(todolist))
todoInput.value="";   
//converts the array into sring
//it takes everything as string, if we use an object it convets this object into this string
//this is called instance of string for object
render(todolist);
})
showTodos.addEventListener("click",(e)=>{
    //use to select the particular ele like the checkbox or the label
      let key=e.target.dataset.key
      let deletekey=e.target.dataset.todokey
      console.log(deletekey)
      todolist=todolist.filter(todo=>todo.id!==deletekey)
      // console.log(key,e.target)
      //add strike through
      //if the current input is for the current lable we should strike through
      //in order to capture bubling we have to use key to refer to diff elements----not sure

  todolist=todolist.map(todo=>todo.id===key? {...todo,isCompleted:!todo.isCompleted}:todo)
  localStorage.setItem("todo",JSON.stringify(todolist)) 
  render(todolist)
  console.log(todolist)
})

function render(todolist){
  console.log("inside render")

  // object destructuring would help us to not need to use todo.id, todo.todo 

  //to connect the input to label we add id to input and for to label
  showTodos.innerHTML=todolist.map(({id,todo,isCompleted})=>`<div class="todo relative"><input 
  class="t-checkbox t-pointer" type="checkbox" id="item-${id}"
  data-key=${id} ${isCompleted?"checked": ""}>
  <label class="todo todo-text t-pointer ${isCompleted?"checked-todo" : ""}" for="item-${id}" 
  data-key=${id}>${todo}</label><button class=" absolute right-0 button cursor"><i class="fa-solid fa-trash 
  del-btn"  data-todokey=${id}></i>
  </button></div>`
  )
}