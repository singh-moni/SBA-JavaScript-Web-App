const API_KEY = "live_2PAq2jLoyecvPV9Y6guLVG2RpY7Z4FCEU7Wzl2XLedWtFCgXfKgAvOBr5GslAIPi";
const API_URL = `https://api.thecatapi.com/v1`;

// functrion to fetch data of cat breeds
export async function fetchBreeds() {
    try {
        // Make an HTTP GET request to the breeds endpoint of the Cat API
        const response = await fetch(`${API_URL}/breeds`);
        
        // Check if the response is successful (status code 200)
        if (!response.ok) {
            throw new Error(`Failed to fetch breeds: ${response.statusText}`);
        }
        
        // Parse the JSON data from the response
        const data = await response.json();
        
        // Return the array of cat breeds
        return data;
    } catch (error) {
        // Handle errors
        console.error('Error fetching breeds:', error);
        throw error;
    }
}
