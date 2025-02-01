import { httpResponses } from './functions/httpResponses.js';

const setup = () => {

    // EVENT LISTENERS
    const link1 = document.getElementById('link1');
    link1.addEventListener('click', httpResponses.simulate200OK);    

    const link2 = document.getElementById('link2');
    link2.addEventListener('click', () => httpResponses.simulate404Error());   

    const link3 = document.getElementById('link3');
    link3.addEventListener('click', () => httpResponses.simulateClientError());     

    const link4 = document.getElementById('link4');
    link4.addEventListener('click', () => httpResponses.simulateUnauthorized());
};




window.addEventListener("load", setup);
 
       
