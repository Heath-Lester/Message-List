const contentTarget = document.querySelector(".themes")

export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="themeButton" id="btnTheme--red">Red</button>
        <button class="themeButton" id="btnTheme--purple">Purple</button>
        <button class="themeButton" id="btnTheme--blue">Blue</button>
        <button class="themeButton" id="btnTheme--green">Green</button>
    `
}