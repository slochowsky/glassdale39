import CriminalsCollection from "./criminals.js"
import { useCriminals } from "./criminalsProvider.js"



const contentTarget = document.querySelector(".criminalsContainer")

const criminalList = () => {
    const criminalObjectArray = useCriminals()
    
    for (const criminalObject of criminalObjectArray) {
        
        const criminalHTML = CriminalsCollection(criminalObject)
        
        contentTarget.innerHTML += criminalHTML
    }
    
}




export default criminalList