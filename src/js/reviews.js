import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const reviewsSwiper = new Swiper('.reviews-swiper', {
  // Optional parameters
  // wrapperClass: 'review-swipper-wrapper',
  direction: 'horizontal',
  // slideClass: 'review-swiper-slide,'
  //Enables navigation through slides using mouse wheel.

  mousewheel: {
    invert: true,
  },
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-swiper-button-right',
    prevEl: '.reviews-swiper-button-left',
  },
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    // when window width is >= 640px
    1440: {
      slidesPerView: 4,
      spaceBetween: 16,
    },
  },
});
const reviewsSwiperButtonLeft = document.querySelector(
  '.reviews-swiper-button-left'
);
const reviewsIconLeft =
  reviewsSwiperButtonLeft.querySelector('.reviews-icon-left');
const reviewsSwiperButtonRight = document.querySelector(
  '.reviews-swiper-button-right'
);
const reviewsIconRight = reviewsSwiperButtonRight.querySelector(
  '.reviews-icon-right'
);
reviewsSwiper.on('slideChange', function () {
  if (reviewsSwiper.isBeginning) {
    reviewsSwiperButtonLeft.classList.remove('reviews-button-active');
    reviewsSwiperButtonLeft.disabled = 'disabled';
    reviewsIconLeft.classList.remove('reviews-icon-active');
  } else {
    reviewsSwiperButtonLeft.classList.add('reviews-button-active');
    reviewsSwiperButtonLeft.disabled = '';
    reviewsIconLeft.classList.add('reviews-icon-active');
  }
  if (reviewsSwiper.isEnd) {
    reviewsSwiperButtonRight.classList.remove('reviews-button-active');
    reviewsSwiperButtonRight.disabled = 'disabled';
    reviewsIconRight.classList.remove('reviews-icon-active');
  } else {
    reviewsSwiperButtonRight.classList.add('reviews-button-active');
    reviewsSwiperButtonRight.disabled = '';
    reviewsIconRight.classList.add('reviews-icon-active');
  }
});
const REVIEWS_BASE_URL = 'https://portfolio-js.b.goit.study/api/reviews';
async function loadData(url = REVIEWS_BASE_URL) {
  const { data } = await axios(url);
  return data;
}
document.addEventListener('DOMContentLoaded', loadReviews);
const reviewsContainer = document.querySelector('.reviews-list');
async function loadReviews() {
  try {
    const data = await loadData();
    reviewsContainer.insertAdjacentHTML('beforeend', createMarkupReviews(data));
    // reviewsSwiper.updateSlides();
  } catch (error) {
    iziToast.show({
      theme: 'dark',
      backgroundColor: '#EF4040',
      message: `Reviews error: ${error.message}`,
      messageSize: '16px',
      messageLineHeight: '150%',
      position: 'topRight',
      maxWidth: '354px',
    });
    reviewsContainer.innerHTML = 'Not found';
  }
}
function createMarkupReviews(arr) {
  return arr
    .map(
      ({ author, avatar_url, review }) => `
        <li class="reviews-item swiper-slide">
            <img
                class="reviews-item-img"
                src="${avatar_url}"
                alt="avatar"
                width="48"
                height="48"
            />
            <div class="reviews-item-card">
                <h3 class="reviews-item-title">${author}</h3>
                <p class="reviews-item-content">${review}</p>
            </div>            
        </li>        
    `
    )
    .join('');
}
