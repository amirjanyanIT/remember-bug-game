import { RendererI } from "./modules/Renderer"

declare global {
    interface Window {
        renderers: { 
            [key: string]: RendererI 
        }
    }
}
