import { renderNotes } from "./app.js"  

  let note=document.querySelector(".note")
  let title=document.querySelector(".title")
  let addNoteButton=document.querySelector(".add-btn")
  let notesDisplay=document.querySelector(".notes-display")
  let showOtherNotes=document.querySelector(".notes-container")
  let showPinnedNotes=document.querySelector(".pinned-notes-container")
  // console.log("inside main.js",showPinnedNotes)
  let pinTitle=document.querySelector(".pin-title");
  let otherTitle=document.querySelector(".other-title")

  let arrayOfNotes= JSON.parse(localStorage.getItem("notes"))||[]
  if(arrayOfNotes.length>0){
    pinTitle.classList.toggle("d-none");
    otherTitle.classList.toggle("d-none");
  }

  showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>!isPinned && !isArchieved ));
  showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isPinned && !isArchieved ))
  // [{title:"todo",note:"ajufsdjfadfjds",_id:"123",isPinned:false,isArchieved:false, isDeleted:false}]

  addNoteButton.addEventListener("click",()=>{
    if(note.value.trim().length>0 || title.value.trim().length>0){
        arrayOfNotes=[...arrayOfNotes,{id: Date.now(),title:title.value.trim(),note:note.value.trim(), isPinned:false, 
        isArchieved:false}]  //we spread the array so that it remains unmutated because we are adding a new value to 
        //the array
        note.value=title.value=""
        showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>!isPinned && !isArchieved ))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
    }
  })

  notesDisplay.addEventListener("click",(e)=>{
    let key=e.target.dataset.type;
    let noteId=e.target.dataset.id;

    // console.log({key,noteId})

    switch(key){
      case "del":
        // to delte something from the array we use filter method
        arrayOfNotes =arrayOfNotes.filter(({id})=>id.toString()!==noteId) 
        showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>!isPinned && !isArchieved ));  
        showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isPinned && !isArchieved))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
        break;

      case "pinned":
        //find the id of notes that can be pinned and then convert the ispineed of that obj to true and return
        //the same array without the need of creating a new array
        arrayOfNotes=arrayOfNotes.map(note=>note.id.toString()===noteId?{...note,isPinned:!note.isPinned}:note)
        showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>!isPinned && !isArchieved))
        showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isPinned && !isArchieved ))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
        break;

      case "archive":
        console.log("hi")
        arrayOfNotes=arrayOfNotes.map(note=>note.id.toString()===noteId?{...note,isArchieved:!note.isArchieved}:note)
        showOtherNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>!isArchieved && !isPinned))
        showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isPinned && !isArchieved))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
        break;
        

    }
})
// showPinnedNotes.addEventListener("click",(e)=>{
//       let type=e.target.dataset.type;
//       let noteId=e.target.dataset.id;
  
//   switch(type){
//       case "archive":
//         console.log("hello")
//           arrayOfNotes=arrayOfNotes.map((note)=>note.id===noteId? {isArchieved:!note.isArchieved}:note)
//           showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter((isArchieved)=>!isArchieved))
//           localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
//           break;
//   }
//   })
  
//how to archieve a pinned note
