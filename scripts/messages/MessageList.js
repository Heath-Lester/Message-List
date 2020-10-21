import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")

/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
// REMOVED FOR EXCERCISE

// document.querySelector(".themes").addEventListener("click", e => {
//     const idOfClickedElement = e.target.id

//     if (idOfClickedElement.startsWith("themeButton--")) {
//         const [prefix, color] = idOfClickedElement.split("--")
//         contentTarget.classList = []
//         contentTarget.classList.add(color)
//     }
// })

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
const eventHub = document.querySelector(".container")

eventHub.addEventListener("colorChosen", event => {
    debugger
    const color = event.detail.color

    contentTarget.classList = []
    contentTarget.classList.add(color)
})