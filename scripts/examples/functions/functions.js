// Define the functions
const simulate200OK = () => {
    fetch('https://httpstat.us/200')
        .then(response => {
            if (response.ok) {
                console.log('Simulated 200 OK:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
};

const simulate404Error = () => {
    fetch('some-page.html')
        .then(response => {
            if (!response.ok) {
                console.log('Simulated 404 error:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
};

const simulateClientError = () => {
    fetch('https://httpstat.us/500')
        .then(response => {
            if (!response.ok) {
                console.log('Simulated 500 error:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
};

const simulateUnauthorized = () => {
    fetch('https://httpstat.us/401')
        .then(response => {
            if (!response.ok) {
                console.log('Simulated 401 error:', response.status);
            }
        })
        .catch(error => console.error('Error:', error));
};

// Export the functions
export const httpResponses = {
    simulate200OK,
    simulate404Error,
    simulateClientError,
    simulateUnauthorized
};