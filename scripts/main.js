import { getCriminals } from "./criminals/criminalsProvider.js"
import criminalList from "./criminals/criminalsList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import convictionSelect from "./convictions/convictionsSelect.js"
// import { getNotes } from "./notes/noteProvider.js"
// import NoteListComponent from "./notes/noteList.js"
import NoteFormComponent from "./notes/noteForm.js"


NoteFormComponent()


getConvictions().then(
    () => convictionSelect()
    )

getCriminals().then(
    () => criminalList()
)

// getNotes().then(
//     () => NoteListComponent())
