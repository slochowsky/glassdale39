// import { useNotes, getNotes } from "./noteProvider.js"
// import { noteComponent } from "./note.js"

// const eventHub = document.querySelector(".container")
// const noteHTML = document.querySelector(".noteFormContainer")

// const NoteListComponent = () => {
  

//   eventHub.addEventListener("showNoteButtonClicked", event => {
//     getNotes().then(
//       () => {
//         const allNotes = useNotes()
//         console.log(allNotes)
//         render(allNotes)
//       }
//     )
//   })

//   const render = noteCollection => {
//     noteHTML.innerHTML = 
//       noteCollection.map(
//         (note) => {
//           return noteComponent(note)
//         }
//       ).join("")
//   }
// }

// export default NoteListComponent