import { getCriminals } from "./criminals/criminalsProvider.js"
import criminalList from "./criminals/criminalsList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import convictionSelect from "./convictions/convictionsSelect.js"
import noteFormComponent from "./notes/noteForm.js"
import dialogComponent from "./dialog.js"
import { DisplayNoteFormButton } from "./notes/displayNoteFormButon.js"
import "./notes/noteList.js"
import { DisplayNotesButton } from "./notes/displayNotesButton.js"




getConvictions().then(
    () => convictionSelect()
)

getCriminals().then(
    () => criminalList()
)

dialogComponent()
DisplayNotesButton()
DisplayNoteFormButton()
noteFormComponent()