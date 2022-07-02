import { restaurants } from './../DATA.json';
restaurants.forEach(restaurant => {
    console.log(restaurant.name);
});

const containerEl = document.querySelector('.container-content');

const renderEl = () => {
    restaurants.forEach(restaurant => {
        let template = `
        <div class="card-item">
            <div class="card-item-image">
                <div class="card-item-image-wrap">
                    <img src="${restaurant.pictureId}" width="450" alt="">
                    <span class="image-tag">${restaurant.city}</span>
                </div>
            </div>
            <div class="card-item-content">
                <h3 class="rating">Rating: ${restaurant.rating}</h3>
                <h2 class="res-name">${restaurant.name}</h2>
                <p class="res-desc">${restaurant.description}</p>
            </div>
        </div>
        `;

        containerEl.innerHTML += template;
    });
}

document.addEventListener('DOMContentLoaded', (e) => {
    renderEl();

});