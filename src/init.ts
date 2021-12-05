import "./styles/global.scss"
import "./styles/menu.scss"
import "./styles/board.scss"
import "./declaration/global"
import { initializeViews } from './views'
import { relocate } from "./modules/renderer"


initializeViews()


setTimeout(() => {
    relocate("game")
}, 3000)
