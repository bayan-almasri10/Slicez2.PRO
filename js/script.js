let currentSlide = 0;

function changeSlide(direction) {
    const slides = document.querySelector('.slider');
    const slideWidth = document.querySelector('.slide').offsetWidth;
    const dots = document.querySelectorAll('.dot');

    currentSlide += direction;

    if (currentSlide < 0) {
        currentSlide = slides.childElementCount - 1;
    } else if (currentSlide >= slides.childElementCount) {
        currentSlide = 0;
    }

    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;

    // Update the active state of the corresponding dot
    dots.forEach((dot, index) => {
        dot.classList.remove('active');
        if (index === currentSlide) {
            dot.classList.add('active');
        }
    });
}

// Add an event listener to each dot for manual navigation
document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        changeSlide(0);
    });
});

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

