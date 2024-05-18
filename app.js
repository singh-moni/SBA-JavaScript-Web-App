
import { fetchCatBreeds, fetchDogBreeds, fetchCatImage, fetchDogImage, favoriteBreed } from './api.mjs';
import { populateDropdown, displayImage } from './ui.mjs';

document.addEventListener('DOMContentLoaded', async () => {
    const catDropdown = document.getElementById('cat_btn');
    const dogDropdown = document.getElementById('dog_btn');
    const catResult = document.getElementById('cat_result');
    const dogResult = document.getElementById('dog_result');

    try {
        const catBreeds = await fetchCatBreeds();
        populateDropdown(catDropdown, catBreeds);

        const dogBreeds = await fetchDogBreeds();
        populateDropdown(dogDropdown, dogBreeds);
    } catch (error) {
        console.error('Error during initial data fetch:', error);
    }

    catDropdown.addEventListener('change', async () => {
        const breedId = catDropdown.value;
        try {
            const data = await fetchCatImage(breedId);
            displayImage(catResult, data[0].url, breedId, 'cat', handleFavorite);
        } catch (error) {
            console.error('Error fetching cat image:', error);
        }
    });

    dogDropdown.addEventListener('change', async () => {
        const breedId = dogDropdown.value;
        try {
            const data = await fetchDogImage(breedId);
            displayImage(dogResult, data[0].url, breedId, 'dog', handleFavorite);
        } catch (error) {
            console.error('Error fetching dog image:', error);
        }
    });

    async function handleFavorite(event) {
        const button = event.target.closest('.favorite-button');
        const breedId = button.dataset.breedId;
        const type = button.dataset.type;

        try {
            const result = await favoriteBreed(breedId, type);
            console.log(`Favorite ${type} result:`, result);
            alert(`${type} breed favorited successfully!`);
        } catch (error) {
            console.error('Error favoriting breed:', error);
        }
    }
});
