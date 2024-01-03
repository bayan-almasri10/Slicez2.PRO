$(document).ready(function () {
    new Image().src = "imgs/adCreactive.png";
    new Image().src = "imgs/concept.png";
    new Image().src = "imgs/brandIdentity.png";
    new Image().src = "imgs/digitalMarketing.png";
    new Image().src = "imgs/ebook.png";
    new Image().src = "imgs/email.png";
    new Image().src = "imgs/illustration.png";
    new Image().src = "imgs/interior.png";
    new Image().src = "imgs/motionDesign.png";
    new Image().src = "imgs/webDesign.png";
    new Image().src = "imgs/presentation.png";
    new Image().src = "imgs/printDesign.png";
    new Image().src = "imgs/packaging.png";
    new Image().src = "imgs/video.png";
    new Image().src = "imgs/socialMedia.png";
    new Image().src = "imgs/f-28.png";
    new Image().src = "imgs/f-29.png";
    new Image().src = "imgs/f-30.png";
    new Image().src = "imgs/f-31.png";
    new Image().src = "imgs/f-32.png";
    new Image().src = "imgs/f-33.png";
    new Image().src = "imgs/f-34.png";
    new Image().src = "imgs/halfLogo.png";
    new Image().src = "imgs/halfLogoLeft.png";
    new Image().src = "imgs/logo.png";
    new Image().src = "imgs/logos-slicez.png";
    new Image().src = "imgs/mainBackground.png";
    new Image().src = "imgs/landingBack.png";
    new Image().src = "imgs/landingBackPhone.png";
    new Image().src = "imgs/p1.jpg";
    new Image().src = "imgs/p2.jpg";
    new Image().src = "imgs/p3.jpg";
    new Image().src = "imgs/p4.jpg";
    new Image().src = "imgs/p5.jpg";
    new Image().src = "imgs/p6.jpg";
    new Image().src = "imgs/p7.jpg";
    new Image().src = "imgs/slicez-.png";
    new Image().src = "imgs/slicez-1.png";
    new Image().src = "imgs/slicez-UXU.png";
    new Image().src = "imgs/SZ-07.png";
    new Image().src = "imgs/SZ-19.png";
    new Image().src = "imgs/SZ-24.png";
    new Image().src = "imgs/SZ-25.png";
});
let currentSlidePortfolio = 0;

function changeSlidePortfolio(directionPortfolio) {
  const slidesPortfolio = document.querySelector(".portfolio .slider");
  const slideWidthPortfolio =
    document.querySelector(".portfolio .slide").offsetWidth;
  const dotsPortfolio = document.querySelectorAll(".portfolio .dot");

  currentSlidePortfolio += directionPortfolio;

  if (currentSlidePortfolio < 0) {
    currentSlidePortfolio = slidesPortfolio.childElementCount - 1;
  } else if (currentSlidePortfolio >= slidesPortfolio.childElementCount) {
    currentSlidePortfolio = 0;
  }

  slidesPortfolio.style.transform = `translateX(${
    -currentSlidePortfolio * slideWidthPortfolio
  }px)`;

  // Update the active state of the corresponding dot
  dotsPortfolio.forEach((dot, index) => {
    dot.classList.remove("active");
    if (index === currentSlidePortfolio) {
      dot.classList.add("active");
    }
  });
}

// Add an event listener to each dot for manual navigation
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlidePortfolio = index;
    changeSlidePortfolio(0);
  });
});

let currentSlideFeedback = 0;

function changeSlideFeedback(directionFeedback) {
  const slidesFeedback = document.querySelector(".feedback .sliderF");
  const slideWidthFeedback =
    document.querySelector(".feedback .slideF").offsetWidth;
  const dotsFeedback = document.querySelectorAll(".feedback .dotF");

  currentSlideFeedback += directionFeedback;

  if (currentSlideFeedback < 0) {
    currentSlideFeedback = slidesFeedback.childElementCount - 1;
  } else if (currentSlideFeedback >= slidesFeedback.childElementCount) {
    currentSlideFeedback = 0;
  }

  slidesFeedback.style.transform = `translateX(${
    -currentSlideFeedback * slideWidthFeedback
  }px)`;

  // Update the active state of the corresponding dot
  dotsFeedback.forEach((dotF, index) => {
    dotF.classList.remove("active");
    if (index === currentSlideFeedback) {
      dotF.classList.add("active");
    }
  });
}

// Add an event listener to each dot for manual navigation
document.querySelectorAll(".dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlideFeedback = index;
    changeSlideFeedback(0);
  });
});

// Back to top button
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $(".back-to-top").fadeIn("slow");
  } else {
    $(".back-to-top").fadeOut("slow");
  }
});
$(".back-to-top").click(function () {
  $("html, body").animate({ scrollTop: 0 }, 1500, "easeInOutExpo");
  return false;
});
