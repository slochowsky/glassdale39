import { getNotes, useNotes } from "./noteProvider.js"
import { noteComponent } from "./note.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})

const render = () => {
    getNotes().then(() => {
        const allTheNotes = useNotes()
        contentTarget.innerHTML = allTheNotes.map(
            currentNoteObject => {
                return noteComponent(currentNoteObject)
            }
        ).join("")
    })
}