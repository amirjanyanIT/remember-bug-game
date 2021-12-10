import { ObservableI } from "../../declaration/modules/Observable";

export class Observable implements ObservableI {
    
    observableReference;
    observeRef
    
    constructor(observableObjRef: object, observeRef: (newState: object) => void) {
        this.observableReference = observableObjRef
        this.observeRef = observeRef
    }

    getMutator() {
        return {
            mutate: (newState: object) => {
                this.observableReference = newState;
                this.observe(newState);
            }
        }
    }

    observe(newState: object) {
        this.observeRef(newState)
    }

}