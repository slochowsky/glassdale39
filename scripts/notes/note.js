export const noteComponent = (note, criminal) => {
  return `
    <div class="noteCard">
    <header>
    <h2>${criminal.name}</h2>
    </header>
    <p class="noteDate">${note.date}</p>
    <p class="noteText">${note.text}</p>
    <button id="deleteNote--${note.id}">Delete</button>
    </div>`
}