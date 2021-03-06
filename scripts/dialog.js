import { useCriminals } from "./criminals/criminalsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".alibiContainer")

const dialogComponent = () => {

    eventHub.addEventListener("associateAlibisButtonClicked", event => {
        const criminals = useCriminals()
        console.log(event.detail.criminalId)

        const criminalid = event.detail.criminalId

        const foundCriminal = criminals.find(
            (singleCriminal) => {
                if (singleCriminal.id === parseInt(criminalid)) {
                    return true
                }
                return false
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
            <button class="closeDialog">close</button>
            </dialog>
            `
    }
    alibiHTMLRep()

    const allCloseButtons = document.querySelectorAll(".closeDialog")

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