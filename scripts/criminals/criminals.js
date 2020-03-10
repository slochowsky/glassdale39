export const criminalsCollection = (criminal) => {
    console.log("ALL CRIMINALS HAVE BEEN RENDERED")
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
export default criminalsCollection