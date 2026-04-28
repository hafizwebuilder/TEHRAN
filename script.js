const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });
}

const reviews = Array.from(document.querySelectorAll('.review'));
const buttons = Array.from(document.querySelectorAll('.carousel-btn'));
let idx = 0;
const showReview = (next) => {
  if (!reviews.length) return;
  reviews[idx].classList.remove('active');
  idx = (next + reviews.length) % reviews.length;
  reviews[idx].classList.add('active');
};
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    showReview(btn.dataset.dir === 'next' ? idx + 1 : idx - 1);
  });
});
