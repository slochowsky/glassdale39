import { getCriminals } from "./criminals/criminalsProvider.js"
import criminalList from "./criminals/criminalsList.js"
import { getConvictions } from "./convictions/convictionsProvider.js"
import convictionSelect from "./convictions/convictionsSelect.js"
import { noteFormComponent } from "./notes/noteForm.js"
import dialogComponent from "./dialog.js"
import { DisplayNoteFormButton } from "./notes/displayNoteFormButon.js"
// import  "./notes/noteList.js"
import { DisplayNotesButton } from "./notes/displayNotesButton.js"
import WitnessListComponent from "./witness/witnessList.js"
import { getWitnesses } from "./witness/witnessProvider.js"
import { WitnessStatementButton } from "./witness/WitnessButton.js"
import { NotesList } from "./notes/noteList.js"

getCriminals()
    .then(criminalList)
    .then(NotesList)
    .then(noteFormComponent)


    getConvictions().then(convictionSelect)

getWitnesses().then(WitnessListComponent)



dialogComponent()
DisplayNotesButton()
DisplayNoteFormButton()
WitnessStatementButton()
