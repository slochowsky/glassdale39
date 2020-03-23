import { useWitnesses } from "./witnessProvider.js"
import { WitnessComponent } from "./Witness.js"


const eventHub = document.querySelector(".container")
const criminalHTML = document.querySelector(".criminalsContainer")

const WitnessListComponent = () => {

    const witnessesArray = useWitnesses()

    eventHub.addEventListener("click", e => {
        if (e.target.id === "witnessStatements") {
            const render = witnessCollection => {
                criminalHTML.innerHTML = `${witnessCollection.map(
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