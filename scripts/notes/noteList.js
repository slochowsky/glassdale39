import { getNotes, useNotes, deleteNote } from "./noteProvider.js"
import { noteComponent } from "./note.js"
import { useCriminals } from "../criminals/criminalsProvider.js"

const contentTarget = document.querySelector(".notesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("noteStateChanged", customEvent => {
    render()
})

eventHub.addEventListener("allNotesClicked", customEvent => {
    render()
})

let Visibility = false

eventHub.addEventListener("allNotesClicked", e => {
    Visibility = !Visibility

    if (Visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
}
)

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, id] = clickEvent.target.id.split("--")

        deleteNote(id).then(render)
    }
})
const render = () => {
    getNotes().then(() => {
        const allNotes = useNotes()
        const currentCriminalCollection = useCriminals()

    contentTarget.innerHTML = allNotes.map(currentNoteObject => {
        const accurateCriminal = currentCriminalCollection.find(criminal => {
                return criminal.id === currentNoteObject.criminalId
            })
            return noteComponent(currentNoteObject, accurateCriminal)
        }
        ).join("")
    })
}
