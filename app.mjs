// app.js

import { fetchBreeds } from './api.mjs';

// Use fetchBreeds function to fetch data of cat breeds and populate the select dropdown
fetchBreeds()
    .then(breeds => {
        // Populate select dropdown with breed names
        breeds.forEach(breed => {
            const option = document.createElement('option');
            option.value = breed.id;
            option.textContent = breed.name;
            breedSelect.appendChild(option);
        });
    })
    .catch(error => {
        console.error('Error fetching breeds:', error.message);
    });
