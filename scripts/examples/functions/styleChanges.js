export const toggleElementVisibility = (element) => {
    if(element.classList.contains('hidden')) {
        element.classList.remove('hidden');
    } else {
        element.classList.add('hidden');
    }
};

export const toggleBackgroundColor = (element, color) => {
    if(element.style.backgroundColor === color) {
        element.style.backgroundColor = "";
    } else {
        element.style.backgroundColor = color;
    }
}
;