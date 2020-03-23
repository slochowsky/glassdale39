import { useWitnesses } from "./witnessProvider.js"
import { WitnessComponent } from "./Witness.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".witnessContainer")

const WitnessListComponent = () => {
    const witnessesArray = useWitnesses()

let Visibility = false

eventHub.addEventListener("witnessButtonClicked", customEvent => {
    Visibility = !Visibility
    
    if (Visibility) {
        contentTarget.classList.remove("invisible")
    }
    else {
        contentTarget.classList.add("invisible")
    }
})

eventHub.addEventListener("click", e => {
    if (e.target.id === "witnessStatements") {
        
        const render = witnessCollection => {
            contentTarget.innerHTML = `${witnessCollection.map(
                (witness) => {
                        return WitnessComponent(witness)
                    }
                ).join("")
            }`
        }
        render(witnessesArray)
    }
})
}

export default WitnessListComponent