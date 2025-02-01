const setup = () => {

// Add a hidden p element to the body
    const p = document.createElement('p');
    p.classList.add('hidden');
    p.id = 'selectMe';
    p.textContent = 'Dit is de inhoud van het geselecteerde (onzichtbare) element.';
    document.body.appendChild(p);

// Throw an error on click
 const error = document.getElementById('error');
    error.addEventListener('click', () => {
        console.error('This is an error message');
    });

// Throw a warning on click
const warning = document.getElementById('warning');
    warning.addEventListener('click', () => {
        console.warn('This is a warning message');
    });
};

window.addEventListener("load", setup);
