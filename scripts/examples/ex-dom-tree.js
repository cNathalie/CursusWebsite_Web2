const setup = () => {

    const website = document.querySelector("#website");
    website.addEventListener("click", () => {
        // go to website in new tab
        window.open("https://www.htmldog.com/examples/headings1.html");
    });
};

// We gaan willen wachten tot de DOM tree geladen is
// zodanig dat we daar met JavaScript aankunnen
window.addEventListener("load", setup);
