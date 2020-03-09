// import { getOfficers } from "./officers/officersProvider.js";
import { getCriminals } from "./criminals/criminalsProvider.js";
import criminalList from "./criminals/criminalsList.js";

// getOfficers()
// getCriminals()
// criminalList()

getCriminals().then(
    () => criminalList()
)