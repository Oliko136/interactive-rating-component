const form = document.getElementById('form-js');
const cardEl = document.getElementById('card-js');
const thanksEl = document.getElementById('thanks-js');
const thanksTmpl = document.getElementById('thanks-template');

form.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const { rating } = Object.fromEntries(formData);
    if (!rating) {
        alert('Please, choose a rating');
        return;
    }

    renderThanks(rating);
}

function renderThanks(rating) {
    const clone = thanksTmpl.content.cloneNode(true);
    clone.querySelector('.message').textContent = `You selected ${rating} out of 5!`;
    clone.querySelector('.title').textContent = 'Thank you!';
    clone.querySelector('.description').textContent = "We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!";

    cardEl.classList.add('is-hidden');
    cardEl.innerHTML = '';
    thanksEl.classList.remove('is-hidden');

    thanksEl.appendChild(clone);
    
    form.reset();
}