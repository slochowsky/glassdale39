// const eventHub = document.querySelector(".container")

// const dispatchStateChangeEvent = () => {
//     const noteStateChangedEvent = new CustomEvent("noteStateChanged")

//     eventHub.dispatchEvent(noteStateChangedEvent)
// }

let notes = []

export const useNotes = () => {
  return notes
}

export const getNotes = () => {
  return fetch('http://localhost:8088/notes')
    .then(response => response.json())
    .then(
      note => {
        notes = note.slice()
        console.log("STATE OF NOTES ARRAY", notes)
      }
    )
}


export const saveNote = note => {
  return fetch('http://localhost:8088/notes', {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(note)
  })
  .then(getNotes)
  // .then(dispatchStateChangeEvent)
}


