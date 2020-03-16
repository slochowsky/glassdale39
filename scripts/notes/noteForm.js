import { saveNote, getNotes } from "./noteProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    
   eventHub.addEventListener("click", clickEvent => {
     if (clickEvent.target.id === "saveNote") {

        const newNote = {
            text: document.querySelector('#note-text').value,
            date: new Date(Date.now()).toLocaleDateString('en-US'),
            suspect: document.querySelector('#note-suspect').value
        }

        // Change API state and application state
        saveNote(newNote)
        console.log("new note that was saved", newNote)
       
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <div class="NoteForm">
   
        <label for="note-text"></label>
        <input type="text" id="note-text" placeholder="Description of note....">

        <label for="note-date"></label>
        <input type="date" id="note-date" placeholder="">

        <label for="note-suspect"></label>
        <input type="text" id="note-suspect" placeholder="Enter suspect name here...">
        
        <button id="saveNote">Save Note</button>
            
        </div>
    `
}
render()
}


export default NoteFormComponent
