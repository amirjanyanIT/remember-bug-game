import { Renderer } from "../modules/renderer"


export const MenuView = () => {
    const menuView = new Renderer('', "Menu View")
    const gameView = new Renderer('game', "Game view")


    console.log({
        menuView,
        gameView
    })
}