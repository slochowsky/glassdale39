import { getCriminals } from "./criminals/criminalsProvider.js";
import criminalList from "./criminals/criminalsList.js";
import { getConvictions } from "./convictions/convictionsProvider.js";
import convictionSelect from "./convictions/convictionsSelect.js";


getConvictions().then(
    () => convictionSelect()
)

getCriminals().then(
    () => criminalList()
)