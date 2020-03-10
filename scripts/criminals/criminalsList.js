import criminalsCollection from "./criminals.js"
import { useCriminals } from "./criminalsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const criminalList = () => {
    const criminalArray = useCriminals()

    eventHub.addEventListener("crimeSelected", event => {
        const crimeid = event.detail.crime
        const matchingCriminals = criminalArray.filter(
            (crime) => {
                if (crime.conviction === crimeid) {
                    return criminalArray
                }
            }
        )
        render(matchingCriminals)
    })

    const render = crimeCollections => {
        contentTarget.innerHTML = `
          ${crimeCollections.map(
                (criminal) => {
                    return criminalsCollection(criminal)
                }
            ).join("")
            }
              `
    }
    render(criminalArray)
}

export default criminalList
