const form = document.getElementById('form-js');
const cardEl = document.getElementById('card-js');
const thanksEl = document.getElementById('thanks-js');
const ratingEl = document.getElementById('rating-js');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { rating } = Object.fromEntries(formData);
    renderThanks(rating);
}

function renderThanks(rating) {
    cardEl.classList.add('is-hidden');
    thanksEl.classList.remove('is-hidden');

    ratingEl.textContent = rating;
    form.reset();
}

