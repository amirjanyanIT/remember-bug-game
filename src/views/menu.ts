import { Renderer } from "../modules/renderer"


export const MenuView = () => {

    const menuView = new Renderer('', `
        <div class="menu">
            <p>REMEMBER BUG GAME</p>
            <div class="actions">
                <button class="start-button">START</button>
                <button class="settings-button">SETTINGS</button>
            </div>
        </div>
    `)

    const domElements = {
        startButton: () => document.querySelector(`.${menuView.id} .menu .actions .start-button`),
        settingsButton: () => document.querySelector(`.${menuView.id} .menu .actions .settings-button`),
        handlers: {
            startButton: () => {
                console.log(1)
            },
            settingsButton: () => {
                console.log(2)
            }
        }
    }

    menuView.onInit = () => {
        domElements.startButton()?.addEventListener('click', domElements.handlers.startButton)
        domElements.settingsButton()?.addEventListener('click', domElements.handlers.settingsButton)


    }

    menuView.onDestroy = () => {
        domElements.startButton()?.removeEventListener('click', domElements.handlers.startButton)
        domElements.settingsButton()?.removeEventListener('click', domElements.handlers.settingsButton)
    }
}