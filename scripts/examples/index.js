import {
  toggleElementBackgroundColor,
  toggleElementVisibility,
} from "./functions/styleChanges.js";

const setup = () => {
  const folderColor = "lightblue";

  const httpsFolder = document.getElementById("https-folder");
  const httpsTitle = document.getElementById("https-title");
  httpsTitle.addEventListener("click", () => {
    toggleElementVisibility(httpsFolder);
    toggleElementBackgroundColor(httpsTitle, folderColor);
  });

  const jsIntroFolder = document.getElementById("js-intro-folder");
  const jsIntroTitle = document.getElementById("js-intro-title");
  jsIntroTitle.addEventListener("click", () => {
    toggleElementVisibility(jsIntroFolder);
    toggleElementBackgroundColor(jsIntroTitle, folderColor);
  });

  const jsBasicsFolder = document.getElementById("js-basics-folder");
  const jsBasicsTitle = document.getElementById("js-basics-title");
  jsBasicsTitle.addEventListener("click", () => {
    toggleElementVisibility(jsBasicsFolder);
    toggleElementBackgroundColor(jsBasicsTitle, folderColor);
  });

  const domFolder = document.getElementById("dom-folder");
  const domTitle = document.getElementById("dom-title");
  domTitle.addEventListener("click", () => {
    toggleElementVisibility(domFolder);
    toggleElementBackgroundColor(domTitle, folderColor);
  });

  const eventsFolder = document.getElementById("events-folder");
  const eventsTitle = document.getElementById("events-title");
  eventsTitle.addEventListener("click", () => {
    toggleElementVisibility(eventsFolder);
    toggleElementBackgroundColor(eventsTitle, folderColor);
  });
};

window.addEventListener("load", setup);
