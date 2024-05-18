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
// New function to favorite a breed
export async function favoriteBreed(breedId, type) {
    const url = type === 'cat' ? 'https://api.thecatapi.com/v1/favourites' : 'https://api.thedogapi.com/v1/favourites';
    const apiKey = type === 'cat' ? catApiKey : dogApiKey;

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
            body: JSON.stringify({ image_id: breedId, sub_id: 'user123' })  // sub_id can be a unique user identifier
        });
        return response.json();
    } catch (error) {
        console.error('Error favoriting breed:', error);
    }
}

