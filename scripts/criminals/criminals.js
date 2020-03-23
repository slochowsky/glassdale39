export const criminalsCollection = (criminal) => {
    console.warn("ALL CRIMINALS HAVE BEEN RENDERED")
    return `
        <section class="criminalCard">
            <h3 class="criminalName">${criminal.name}</h3>
            <div class="criminal_text">
            <div>Age: ${criminal.age}</div>
            <div>Crime: ${criminal.conviction}</div>
            <div>Term start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term end: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
            </div>
            <button id="associates--${criminal.id}">Associate Alibis</button>
            </section>
            `
}
export default criminalsCollection