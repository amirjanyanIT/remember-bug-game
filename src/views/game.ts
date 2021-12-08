import { Renderer } from "../modules/renderer"

export const GameView = () => {
    const gameView = new Renderer('game', "Game view")

    gameView.onInit = () => {
        console.log('GAME INIT');
    }

    gameView.onDestroy = () => {
        console.log('GAME DESTROY');
    }
}