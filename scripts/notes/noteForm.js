import { saveNote } from "./noteProvider.js"
import { useCriminals } from "../criminals/criminalsProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")



let visibility = false

eventHub.addEventListener("noteFormButtonClicked", customEvent => {
    visibility = !visibility

    if (visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        
  const text = document.querySelector('#note-text').value
  const date = document.querySelector('#note-date').value
  const criminalId = document.querySelector('#criminalDropdown').value

        const newNote = {
            text: text,
            date: date,
            criminal: parseInt(criminalId)
        }

        // Change API state and application state
        saveNote(newNote)
        console.log("new note that was saved", newNote)

    }
})

const render = () => {
    contentTarget.classList.add("invisible")
    const allCriminals = useCriminals()
    contentTarget.innerHTML = `
        <div class="NoteForm">
   
        <label for="note-text"></label>
        <input type="text" id="note-text" placeholder="Description of note....">

        <label for="note-date"></label>
        <input type="date" id="note-date" placeholder="">

        <label for="note-suspect"></label>
        <select id="criminalDropdown">
        <option value="0">Please choose a criminal...</option>
        ${allCriminals.map(
                (currentCriminalObject) => {
                    return `<option value="${currentCriminalObject.id}">${currentCriminalObject.name}</option>`
                }
            )
        }
        </select>
        <button id="saveNote">Save Note</button>
        </div>`

}


export const noteFormComponent = () => {
    render()
}

