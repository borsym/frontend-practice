const ratings = document.querySelectorAll('.rating .circle');
const success = document.querySelector('.success');
const card = document.querySelector('.card');
const ratingNumber = document.getElementById('rating-number');

function handleClick(event) {
  ratings.forEach((rating) => rating.classList.remove('active'));
  event.target.classList += ' active';
}

function handleSubmit(event) {
  const rating = document.querySelector('.rating .circle.active');
  if (!rating) {
    return;
  }
  const ratingText = rating.innerHTML;

  success.style.display = 'flex';
  card.style.display = 'none';
  ratingNumber.innerHTML += ratingText;
}

ratings.forEach((rating) => {
  rating.addEventListener('click', handleClick);
});
