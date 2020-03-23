export const noteComponent = (note, accurateCriminal) => {
  return `
    <div class="noteCard">
    <h4 class="noteHeader">${accurateCriminal.name}</h4>
    <p class="noteDate">${note.date}</p>
    <p class="noteText">${note.text}</p>
    <button id="deleteNote--${note.id}">Delete</button>
    </div>`
}