// #region Анімація карток та підтримка взаємодії через мишу, клавіатуру та сенсорний екран

document.addEventListener("DOMContentLoaded", () => {
    const prevBtn = document.querySelector('.btn-prev');
    const nextBtn = document.querySelector('.btn-next');
    const cards = document.querySelectorAll('.li-cards');

    let currentIndex = 0;
    let isAnimating = false; // Прапорець для запобігання множинним перемиканням

    const updateButtons = () => {
        const prevArrow = prevBtn.querySelector('.svg-icon-scrool');
        const nextArrow = nextBtn.querySelector('.svg-icon-scrool');

        prevBtn.classList.remove('active');
        nextBtn.classList.remove('active');

        if (currentIndex === 0) {
            prevBtn.disabled = true;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            prevArrow.style.stroke = '#3b3b3b';
        } else {
            prevBtn.disabled = false;
            prevBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            prevArrow.style.stroke = '';
            prevBtn.classList.add('active');
        }

        if (currentIndex === cards.length - 1) {
            nextBtn.disabled = true;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.2)';
            nextArrow.style.stroke = '#3b3b3b';
        } else {
            nextBtn.disabled = false;
            nextBtn.style.border = '1px solid rgba(250, 250, 250, 0.5)';
            nextArrow.style.stroke = '';
            nextBtn.classList.add('active');
        }
    };

    const showNextCard = () => {
        if (isAnimating || currentIndex >= cards.length - 1) return; // Блокуємо, якщо йде анімація
        isAnimating = true;

        cards[currentIndex].classList.add('slide-out-left');
        cards[currentIndex].classList.remove('active');

        setTimeout(() => {
            cards[currentIndex].classList.add('visually-hidden');
            cards[currentIndex].classList.remove('slide-out-left');

            currentIndex++;
            cards[currentIndex].classList.remove('visually-hidden');
            cards[currentIndex].classList.add('active', 'slide-in-right');

            setTimeout(() => {
                cards[currentIndex].classList.remove('slide-in-right');
                isAnimating = false; // Знімаємо блокування
                updateButtons();
            }, 600);
        }, 600);
    };

    const showPrevCard = () => {
        if (isAnimating || currentIndex <= 0) return; // Блокуємо, якщо йде анімація
        isAnimating = true;

        cards[currentIndex].classList.add('slide-out-right');
        cards[currentIndex].classList.remove('active');

        setTimeout(() => {
            cards[currentIndex].classList.add('visually-hidden');
            cards[currentIndex].classList.remove('slide-out-right');

            currentIndex--;
            cards[currentIndex].classList.remove('visually-hidden');
            cards[currentIndex].classList.add('active', 'slide-in-left');

            setTimeout(() => {
                cards[currentIndex].classList.remove('slide-in-left');
                isAnimating = false; // Знімаємо блокування
                updateButtons();
            }, 600);
        }, 600);
    };

    // Обробка подій кнопок
    nextBtn.addEventListener('click', showNextCard);
    prevBtn.addEventListener('click', showPrevCard);

    // Обробка подій клавіатури
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowRight') {
            showNextCard();
        } else if (event.key === 'ArrowLeft') {
            showPrevCard();
        }
    });

    // Реалізація свайпів для сенсорних екранів
    let startX = 0;
    let endX = 0;

    document.addEventListener('touchstart', (event) => {
        startX = event.touches[0].clientX;
    });

    document.addEventListener('touchend', (event) => {
        endX = event.changedTouches[0].clientX;
        const diff = startX - endX;

        if (diff > 50) {
            showNextCard(); // Свайп вліво
        } else if (diff < -50) {
            showPrevCard(); // Свайп вправо
        }

        startX = 0;
        endX = 0;
    });

    // Реалізація перетягування мишкою
    let isDragging = false;
    let dragStartX = 0;

    document.addEventListener('mousedown', (event) => {
        isDragging = true;
        dragStartX = event.clientX;
    });

    document.addEventListener('mouseup', (event) => {
        if (!isDragging) return;
        isDragging = false;

        const dragEndX = event.clientX;
        const diff = dragStartX - dragEndX;

        if (diff > 50) {
            showNextCard(); // Перетягування вліво
        } else if (diff < -50) {
            showPrevCard(); // Перетягування вправо
        }
    });

    updateButtons();

    // Додавання можливості пересування за допомогою Tab
    prevBtn.setAttribute('tabindex', '0');
    nextBtn.setAttribute('tabindex', '0');
});

// #endregion Анімація карток
