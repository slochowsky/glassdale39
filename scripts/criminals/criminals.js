export const CriminalsCollection = (criminal) => {
    console.log("if you see this message, you got the criminal")
    return `
        <section class="criminal">
            <h3 class="criminal__header">${criminal.name}</h3>
            <div class="criminal_text">
            <div>Age: ${criminal.age}</div>
            <div>Crime: ${criminal.conviction}</div>
            <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            </div>
            </section>
    `
}
export default CriminalsCollection