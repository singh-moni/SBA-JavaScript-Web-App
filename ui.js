export function renderGallery(data, container) {
    container.innerHTML = '';
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = item.imageUrl;
        img.alt = item.title;

        const title = document.createElement('h2');
        title.textContent = item.title;

        const description = document.createElement('p');
        description.textContent = item.description;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(description);
        
        container.appendChild(card);
    });
}
