const contentTarget = document.querySelector(".themes")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    debugger
    if (clickEvent.target.id.startsWith("btnTheme--")) {
        const [prefix, chosenColor] = clickEvent.target.id.split("--")
        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
       const colorChosenEvent = new CustomEvent("colorChosen", {
           detail: {
               color: chosenColor
           }
       })
       eventHub.dispatchEvent(colorChosenEvent)
    } 
})

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="themeButton" id="btnTheme--red">Red</button>
        <button class="themeButton" id="btnTheme--purple">Purple</button>
        <button class="themeButton" id="btnTheme--blue">Blue</button>
        <button class="themeButton" id="btnTheme--green">Green</button>
    `
}