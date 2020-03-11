export const noteComponent = (note) => {
    return `
    <div class="noteCard">
    <h4>${note.suspect}</h4>
    <p>${note.date}</p>
    <p>${note.text}</p>
    </div>`
  }