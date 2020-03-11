const contentTarget = document.querySelector(".noteFormContainer")

const render = () => {
    contentTarget.innerHTML = `
        <div class="NoteForm">

        <label for="note-text">Notes:</label>
        <input type="text" id="note-text" placeholder="Enter text">

        <label for="note-date">Date:</label>
        <input type="date" id="note-date" placeholder="select date">

        <label for="note-suspect">Suspect:</label>
        <input type="text" id="note-suspect" placeholder="Enter suspect">

        <button id="saveNote">Save Note</button>

        </div>
    `
}
render()

const NoteForm = () => {
    render()
}

export default NoteForm








// import { saveNote } from "./noteProvider.js"
// import NoteListComponent from "./noteList.js"

// const eventHub = document.querySelector(".container")

// const NoteFormComponent = () => {
    
//     // Handle internal element click
//     eventHub.addEventListener("click", clickEvent => {
//       if (clickEvent.target.id === "saveNote") {
       
//           // Make a new object representation of a note
//           const newNote = {
//             text: document.querySelector('#note-text').value,
//             date: new Date(Date.now()).toLocaleDateString('en-US'),
//             suspect: document.querySelector('#note-suspect').value,
//         }

//         // Change API state and application state
//         saveNote(newNote).then(() => NoteListComponent())
//     }
// }) 

//    eventHub.addEventListener("click", clickEvent => {
//      if (clickEvent.target.id === "showNotes") {
//        const message = new CustomEvent("showNoteButtonClicked")
//        eventHub.dispatchEvent(message)
//      }
//    })


// export default NoteFormComponent