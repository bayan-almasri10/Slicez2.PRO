let currentSlidePortfolio = 0;

function changeSlidePortfolio(directionPortfolio) {
    const slidesPortfolio = document.querySelector('.portfolio .slider');
    const slideWidthPortfolio = document.querySelector('.portfolio .slide').offsetWidth;
    const dotsPortfolio = document.querySelectorAll('.portfolio .dot');

    currentSlidePortfolio += directionPortfolio;

    if (currentSlidePortfolio < 0) {
        currentSlidePortfolio = slidesPortfolio.childElementCount - 1;
    } else if (currentSlidePortfolio >= slidesPortfolio.childElementCount) {
        currentSlidePortfolio = 0;
    }

    slidesPortfolio.style.transform = `translateX(${-currentSlidePortfolio * slideWidthPortfolio}px)`;

    // Update the active state of the corresponding dot
    dotsPortfolio.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlidePortfolio) {
            dot.classList.add('active');
        }
    });
}

// Add an event listener to each dot for manual navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlidePortfolio = index;
        changeSlidePortfolio(0);
    });
});

let currentSlideFeedback = 0;

function changeSlideFeedback(directionFeedback) {
    const slidesFeedback = document.querySelector('.feedback .sliderF');
    const slideWidthFeedback = document.querySelector('.feedback .slideF').offsetWidth;
    const dotsFeedback = document.querySelectorAll('.feedback .dotF');

    currentSlideFeedback += directionFeedback;

    if (currentSlideFeedback < 0) {
        currentSlideFeedback = slidesFeedback.childElementCount - 1;
    } else if (currentSlideFeedback >= slidesFeedback.childElementCount) {
        currentSlideFeedback = 0;
    }

    slidesFeedback.style.transform = `translateX(${-currentSlideFeedback * slideWidthFeedback}px)`;

    // Update the active state of the corresponding dot
    dotsFeedback.forEach((dotF, index) => {
        dotF.classList.remove('active');
        if (index === currentSlideFeedback) {
            dotF.classList.add('active');
        }
    });
}

// Add an event listener to each dot for manual navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlideFeedback = index;
        changeSlideFeedback(0);
    });
});




























// // For the portfolio slider
// let currentPortfolioSlide = 0;

// function changePortfolioSlide(direction) {
//     const portfolioSlides = document.querySelectorAll('.portfolio .slider');
//     const slideWidth = portfolioSlides[currentPortfolioSlide].querySelector('.slide').offsetWidth;

//     currentPortfolioSlide += direction;

//     if (currentPortfolioSlide < 0) {
//         currentPortfolioSlide = portfolioSlides.length - 1;
//     } else if (currentPortfolioSlide >= portfolioSlides.length) {
//         currentPortfolioSlide = 0;
//     }

//     portfolioSlides[currentPortfolioSlide].style.transform = `translateX(${-currentPortfolioSlide * slideWidth}px)`;
// }

// function currentPortfolioSlide(index) {
//     currentPortfolioSlide = index - 1;
//     changePortfolioSlide(0);
// }

// // For the feedback slider
// let currentFeedbackSlide = 0;

// function changeFeedbackSlide(direction) {
//     const feedbackSlides = document.querySelectorAll('.feedback .slider');
//     const slideWidth = feedbackSlides[currentFeedbackSlide].querySelector('.slide').offsetWidth;

//     currentFeedbackSlide += direction;

//     if (currentFeedbackSlide < 0) {
//         currentFeedbackSlide = feedbackSlides.length - 1;
//     } else if (currentFeedbackSlide >= feedbackSlides.length) {
//         currentFeedbackSlide = 0;
//     }

//     feedbackSlides[currentFeedbackSlide].style.transform = `translateX(${-currentFeedbackSlide * slideWidth}px)`;
// }

// function currentFeedbackSlide(index) {
//     currentFeedbackSlide = index - 1;
//     changeFeedbackSlide(0);
// }

// changePortfolioSlide();
// currentPortfolioSlide();
// changeFeedbackSlide();
// currentFeedbackSlide();
// let currentSlide2 = 0;
// function changeSlide(direction2) {
//     const slides2 = document.querySelector('.slider2');
//     const slideWidth = document.querySelector('.slide2').offsetWidth;
//     const dots2 = document.querySelectorAll('.dot');

//     currentSlide2 += direction2;

//     if (currentSlide2 < 0) {
//         currentSlide2 = slides2.childElementCount - 1;
//     } else if (currentSlide2 >= slides2.childElementCount) {
//         currentSlide2 = 0;
//     }

//     slides2.style.transform = `translateX(${-currentSlide2 * slideWidth}px)`;

//     dots2.forEach((dot, index) => {
//         dot.classList.remove('active');
//         if (index === currentSlide2) {
//             dot.classList.add('active');
//         }
//     });
// }

// document.querySelectorAll('.dot').forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentSlide2 = index;
//         changeSlide(0);
//     });
// });

