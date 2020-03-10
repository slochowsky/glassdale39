import { useConvictions } from "./convictionsProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")


const convictionSelect = () => {
    const convictions = useConvictions()

    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {

            const message = new CustomEvent("crimeSelected", {
                detail: {
                    crime: changeEvent.target.value
                }
            })
            eventHub.dispatchEvent(message)
        }
    })
// this function has no data being passed to it untill the the function "render is
// being invoked and then passed in the array in the paramaters called "convictions".
    const render = convictionsCollection => {
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${convictionsCollection.map(selectedConviction => {
            return `<option value="${selectedConviction.name}">${selectedConviction.name}</option>`
        })}
        </select>`
    }
    render(convictions)
}


export default convictionSelect