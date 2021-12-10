import { 
    Observable,
    Renderer,
    relocate
 } from "../modules"

export const GameView = () => {
    const stateObj = {
        a: 1
    }
    const state = new Observable(stateObj, (newState) => {
        console.log({ newState })
    })
    const setState = state.getMutator().mutate
    


    const gameView = new Renderer('game', `
        <div class="board">
            <div class="stats">
                <div class="score">
                    <span class="title">Score: </span>
                    <span class="value"></span>
                </div>
                <div class="trys">
                    <span class="title">Trys: </span>
                    <span class="value"></span>
                </div>
            </div>
            <div class="platform">
            
            </div>
        </div>
    `)

    const domElements = {
        stats: {
            score: {
                title: () => document.querySelector(`.${gameView.id} .board .stats .score .title`),
                value: () => document.querySelector(`.${gameView.id} .board .stats .score .value`),
            },
            trys: {
                title: () => document.querySelector(`.${gameView.id} .board .trys .title`),
                value: () => document.querySelector(`.${gameView.id} .board .trys .value`),
            },
        },
        platform: () => document.querySelector(`.${gameView.id} .board .platform`),
        handlers: {
            startButton: () => relocate('game'),
            settingsButton: () => relocate('settings')
        }
    }

    gameView.onInit = () => {
        console.log(1)
    }

    gameView.onDestroy = () => {
        console.log(2)
    }
}