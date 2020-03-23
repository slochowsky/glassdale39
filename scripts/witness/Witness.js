export const WitnessComponent = witness => {
    console.log("witness rendering component");
    return `
    <section class="witnessCard">
    <div class="witness__info">
    <div class="witness_Name">Witness: ${witness.name}</div>
    <div class="witness_Statement">Statement: ${witness.statements}</div>
    </div>
    </section>`

}

