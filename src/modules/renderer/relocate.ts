export const relocate = (goTo: string): boolean => {
    window.location.hash = goTo;
    return true;
}