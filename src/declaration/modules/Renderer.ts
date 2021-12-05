
export enum RendererStatus {
    created,
    mounted,
    unmounted
}

export interface RendererI {

    status: RendererStatus,
    id: string
    location: string
    content: string
    domElement: HTMLElement

    onInit: () => void
    onDestroy:  () => void
    
    _render: () => void;
    _onInit: () => void
    _onDestroy: () => void
    
    
}