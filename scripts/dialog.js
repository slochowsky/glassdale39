import { useCriminals } from "./criminals/criminalsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

const dialogComponent = () => {

    eventHub.addEventListener("associateAlibisButtonClicked", event => {
        const criminals = useCriminals()
        console.log(event.detail.criminalId)
        const foundCriminal = criminals.find(
            (singleCriminal) => {
                return singleCriminal.id === parseInt(criminalId)
            }
        )
        const alibisHTML = foundCriminal.known_associates.map(
            (singleAssociate) => {
                return `
                    <div>${singleAssociate.name}: ${singleAssociate.alibi}</div>
                `
            }
        ).join("")

        document.querySelector(".alibiText").innerHTML = alibisHTML
        document.querySelector(".alibies").showModal()
    })

    const alibiHTMLRep = () => {
        contentTarget.innerHTML = `
            <dialog class="alibies">
            <div class="alibiText"></div>
            <button id="closeDialog">close</button>
            </dialog>
            `
    }
    alibiHTMLRep()


    // this loop allows the closing of a button on any one criminal that is selected

    const allCloseButtons = document.querySelectorAll("#closeDialog")

    for (const btn of allCloseButtons) {
        btn.addEventListener(
            "click",
            theEvent => {
                const dialogElement = theEvent.target.parentNode
                dialogElement.close()
            }
        )
    }
}

export default dialogComponent