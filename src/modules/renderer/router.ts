export const router = () => {
    const renderersList = Object.values(window.renderers);

    const currentRendeerer = renderersList.find(
        (rendeerer) => {
            return rendeerer.location === (window.location.hash || "")
        }
    )

    renderersList.forEach(rendeerer => {
        let currentLoc = ""

        if(window.location.hash) {
            currentLoc = window.location.hash.split("#")[1];
        }

        if(rendeerer.location !== currentLoc) {
            rendeerer._onDestroy();
        }
    })


    if(currentRendeerer) {
        currentRendeerer._onInit()

        return true;
    }
}