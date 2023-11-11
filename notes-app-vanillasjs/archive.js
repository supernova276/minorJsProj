import { renderNotes } from "./app.js";
let arrayOfNotes=JSON.parse(localStorage.getItem("notes"))
let showArchiveNotes=document.querySelector(".archive-notes-container")
let showPinnedNotes=document.querySelector(".pinned-notes-container")
console.log("hiiiiiiiiiiiiiiiii",showPinnedNotes)

showArchiveNotes.addEventListener("click"  , (e)=>{
    let type=e.target.dataset.type;
    let noteId=e.target.dataset.id;

switch(type){
    case "del" :
        arrayOfNotes=arrayOfNotes.filter(({id})=>id.toString()!==noteId)
        showArchiveNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isArchieved && isPinned?isPinned:isArchieved ))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
        break;
    case "archive":
        console.log("inside arehive")
        arrayOfNotes=arrayOfNotes.map(({note})=>note.id===noteId? {isArchieved:!note.isArchieved}:note)
        showArchiveNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isArchieved && isPinned?isPinned:isArchieved ))
        showPinnedNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isPinned && !isArchieved))
        localStorage.setItem("notes",JSON.stringify(arrayOfNotes))
        break;
    // 
}

})
showArchiveNotes.innerHTML=renderNotes(arrayOfNotes.filter(({isPinned,isArchieved})=>isArchieved && isPinned?isPinned:isArchieved))
