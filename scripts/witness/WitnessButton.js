
const contentTarget = document.querySelector(".witnessButtonContainer")
const eventHub = document.querySelector(".container")


contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "witnessStatements") {
        // Create a custom event to tell any interested component that the user wants to see notes
        const customEvent = new CustomEvent("witnessButtonClicked")
        
        // Dispatch it to event hub
        eventHub.dispatchEvent(customEvent)
    }
})

export const WitnessStatementButton = () => {
    contentTarget.innerHTML = `
<div><button id="witnessStatements">Witness Statements</button>
`}