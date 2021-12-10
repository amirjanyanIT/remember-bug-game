export interface ObservableI {
    observableReference: object;
    getMutator: () => ({
        mutate: (newState: object) => void
    });
    observe: (newState: object) => void;
}