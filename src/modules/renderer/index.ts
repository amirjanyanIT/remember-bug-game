import { RendererI, RendererStatus } from "../../declaration/modules/Renderer";
import { v4 as uuid } from "uuid";
import "./hashObserver"
import { router } from './router'

export class Renderer implements RendererI {

    status = RendererStatus.created
    id
    location
    content
    domElement = document.createElement('div')

    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onInit() {}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    onDestroy() {}

    constructor(location: string, content: string) {

        const id = uuid()
        this.id = id
        
        this.location = location ? `#${location}` : ""
        
        this.content = content

        if(!window.renderers)
            window.renderers = {}

        window.renderers[id] = this
        this.domElement.classList.add(id)
        router()

    }

    _render() {
        if(this.status !== RendererStatus.mounted) {
            document.body.append(this.domElement)
            this.domElement.innerHTML = this.content
            this.status = RendererStatus.mounted
        }
    }

    _onInit = () => {
        this._render()
        this.onInit()
    }

    _onDestroy = () => {
        if(this.status !== RendererStatus.created) {
            this.status = RendererStatus.unmounted
            document.body.removeChild(this.domElement)
            this.onDestroy()
        }
    }
    
}

export { relocate } from './relocate'
