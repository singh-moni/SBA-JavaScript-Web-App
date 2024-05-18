const catApiKey = 'live_2PAq2jLoyecvPV9Y6guLVG2RpY7Z4FCEU7Wzl2XLedWtFCgXfKgAvOBr5GslAIPi';
const dogApiKey = 'live_ZetJX9r9LdPR2pvuD0AVhusRTpW4Sq2kOXW3b7WwXpYLBFtCsmNCpTgOQglL2dh0';

export async function fetchCatBreeds() {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/breeds', {
            headers: { 'x-api-key': catApiKey }
        });
        return response.json();
    } catch (error) {
        console.error('Error fetching cat breeds:', error);
    }
}

export async function fetchDogBreeds() {
    try {
        const response = await fetch('https://api.thedogapi.com/v1/breeds', {
            headers: { 'x-api-key': dogApiKey }
        });
        return response.json();
    } catch (error) {
        console.error('Error fetching dog breeds:', error);
    }
}

export async function fetchCatImage(breedId) {
    try {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}&api_key=${catApiKey}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching cat image:', error);
    }
}

export async function fetchDogImage(breedId) {
    try {
        const response = await fetch(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}&api_key=${dogApiKey}`);
        return response.json();
    } catch (error) {
        console.error('Error fetching dog image:', error);
    }
}
