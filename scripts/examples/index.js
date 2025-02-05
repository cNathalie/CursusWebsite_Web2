import {
  toggleElementBackgroundColor,
  toggleElementVisibility,
} from "./functions/styleChanges.js";

const setup = () => {
  const folderColor = "lightblue";

  const topics = [
    ["https-folder", "https-title"],
    ["js-intro-folder", "js-intro-title"],
    ["js-basics-folder", "js-basics-title"],
    ["dom-folder", "dom-title"],
    ["events-folder", "events-title"],
  ];

  topics.forEach(([folderId, titleId]) => {
    const folder = document.getElementById(folderId);
    const title = document.getElementById(titleId);
    title.addEventListener("click", () => {
      toggleElementVisibility(folder);
      toggleElementBackgroundColor(title, folderColor);
    });
  });
};

window.addEventListener("load", setup);
