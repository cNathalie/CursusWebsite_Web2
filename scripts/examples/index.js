import { toggleBackgroundColor as toggleElementBackgroundColor, toggleElementVisibility } from "./functions/styleChanges.js";

const setup = () => {

    const httpsFolder = document.getElementById("https-folder");
    const httpsTitle = document.getElementById("https-title");
    httpsTitle.addEventListener("click", () => {
        toggleElementVisibility(httpsFolder);
        toggleElementBackgroundColor(httpsTitle, "lightblue");
    });

    const jsIntroFolder = document.getElementById("js-intro-folder");
    const jsIntroTitle = document.getElementById("js-intro-title");
    jsIntroTitle.addEventListener("click", () => {
        toggleElementVisibility(jsIntroFolder);
        toggleElementBackgroundColor(jsIntroTitle, "lightblue");
    });
};

// We gaan willen wachten tot de DOM tree geladen is
// zodanig dat we daar met JavaScript aankunnen
window.addEventListener("load", setup);