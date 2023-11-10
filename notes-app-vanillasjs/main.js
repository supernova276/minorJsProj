console.log("hello")
  let note=document.querySelector(".note")
  let title=document.querySelector(".title")
  let addNoteButton=document.querySelector("add-btn")
  let notesDisplay=document.querySelector(".notes-display")
  let showOtherNotes=document.querySelector(".notes-container")
  let showPinnedNotes=document.querySelector(".add-btn")

  let arrayOfNotes=[{title:"todo",note:"ajufsdjfadfjds",_id:"123",isPined:false,isArchieved:false, isDeleted:false}]

  addNoteButton.addEventListener("click",()=>{
    if(note.value.trim().length>0 || title.value.trim().length>0){
        arrayOfNotes=[...arrayOfNotes,{id:new Date(),title:title.value.trim(),note:note.value.trim(), isPined:false,
        isDeleted:false}]  //we spread the array so that it remains unmutated because we are adding a new value to 
        //the array
    }
    console.log(arrayOfNotes)
  })