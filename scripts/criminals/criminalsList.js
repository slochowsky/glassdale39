import criminalsCollection from "./criminals.js"
import { useCriminals } from "./criminalsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".criminalsContainer")

const criminalList = () => {
    const criminalArray = useCriminals()

    eventHub.addEventListener("crimeSelected", event => {
        const crimeid = event.detail.crime
        const matchingCriminals = criminalArray.filter(
            crime => {
                if (crime.conviction === crimeid) {
                    return true
                } return false
            }
        )
        render(matchingCriminals)
    })

    const render = crimeCollections => {
        contentTarget.innerHTML = `${crimeCollections.map(
            (criminal) => {
                return criminalsCollection(criminal)
            }
        ).join("")
            }
              `
    }
    render(criminalArray)
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("associates--")) {

        const [prefix, id] = clickEvent.target.id.split("--")

        const message = new CustomEvent("associateAlibisButtonClicked", {

            detail: {
                criminalId: id
            }
        })
        eventHub.dispatchEvent(message)
    }
})


eventHub.addEventListener("click", e => {
    if (e.target.id === "showAllCriminals") {
        render(criminalArray)
    }
})


export default criminalList
