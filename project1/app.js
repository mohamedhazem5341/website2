const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide1");
const prevbtn = document.querySelector(".prevbtn");
const nextbtn = document.querySelector(".nextbtn");
const alls = document.querySelector(".alls");

const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const smallmenu = document.querySelector(".smallmenu");

menu.addEventListener("click", function (eo) {
  smallmenu.classList.add("show");
});
close.addEventListener("click", function (eo) {
  smallmenu.classList.remove("show");
});

const button = document.querySelector("#btn");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const button5 = document.querySelector("#btn5");
const button6 = document.querySelector("#btn6");
const stest = document.querySelector(".stest");
const back = document.querySelector(".back");

button.addEventListener("click", function (eo) {
  stest.classList.add("show");
});
button2.addEventListener("click", function (eo) {
  stest.classList.add("show");
});
button3.addEventListener("click", function (eo) {
  stest.classList.add("show");
});
button4.addEventListener("click", function (eo) {
  stest.classList.add("show");
});
button5.addEventListener("click", function (eo) {
  stest.classList.add("show");
});
button6.addEventListener("click", function (eo) {
  stest.classList.add("show");
});

back.addEventListener("click", function (eo) {
  stest.classList.remove("show");
});

let index = 0;
let autoScroll;

// smaller than 1030px
function enableSlider2() {
  if (window.matchMedia("(max-width: 1030px)").matches) {
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        if (index < slides.length - 1) {
          index++;
        } else {
          index = 0;
        }
        updateSlider2();
      }, 3000);
    }
    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    let slideWidth2 = 150;

    function updateSlider2() {
      alls.style.transition = "transform 0.5s ease-in-out";
      alls.style.transform = `translateX(-${index * slideWidth2}px)`;
    }

    nextbtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateSlider2();
      stopAutoScroll();
      startAutoScroll();
    });
    prevbtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
      } else {
        index = slides.length - 1;
      }
      updateSlider2();
      stopAutoScroll();
      startAutoScroll();
    });

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
    startAutoScroll();
  }
}
// smaller than 480px
function enableSlider3() {
  if (window.matchMedia("(max-width: 480px)").matches) {
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        if (index < slides.length - 1) {
          index++;
        } else {
          index = 0;
        }
        updateSlider3();
      }, 3000);
    }
    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    let slideWidth3 = 120;

    function updateSlider3() {
      alls.style.transition = "transform 0.5s ease-in-out";
      alls.style.transform = `translateX(-${index * slideWidth3}px)`;
    }

    nextbtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateSlider3();
      stopAutoScroll();
      startAutoScroll();
    });
    prevbtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
      } else {
        index = slides.length - 1;
      }
      updateSlider3();
      stopAutoScroll();
      startAutoScroll();
    });

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
    startAutoScroll();
  }
}
//   biggger than 1031px
function enableSlider() {
  if (window.matchMedia("(min-width: 1031px)").matches) {
    function startAutoScroll() {
      autoScroll = setInterval(() => {
        if (index < slides.length - 1) {
          index++;
        } else {
          index = 0;
        }
        updateSlider();
      }, 3000);
    }
    function stopAutoScroll() {
      clearInterval(autoScroll);
    }

    const slideWidth = 400;

    function updateSlider() {
      alls.style.transition = "transform 0.5s ease-in-out";
      alls.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    nextbtn.addEventListener("click", () => {
      if (index < slides.length - 1) {
        index++;
      } else {
        index = 0;
      }
      updateSlider();
      stopAutoScroll();
      startAutoScroll();
    });
    prevbtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
      } else {
        index = slides.length - 1;
      }
      updateSlider();
      stopAutoScroll();
      startAutoScroll();
    });

    slider.addEventListener("mouseenter", stopAutoScroll);
    slider.addEventListener("mouseleave", startAutoScroll);
    startAutoScroll();
  }
}
//   auto load the page when resizing
let lastWidth = window.innerWidth;

function size() {
  let currentWidth = window.innerWidth;

  if (
    (lastWidth <= 1030 && currentWidth > 1030) ||
    (lastWidth > 1030 && currentWidth <= 1030)
  ) {
    location.reload();
  }

  lastWidth = currentWidth;

  if (window.matchMedia("(max-width: 1030px)").matches) {
    enableSlider2();
  } else if (window.matchMedia("(max-width: 480px)").matches) {
    enableSlider3();
  } else if (window.matchMedia("(min-width: 1031px)").matches) {
    enableSlider();
  }
}

function size2() {
  let currentWidth = window.innerWidth;

  if (
    (lastWidth <= 480 && currentWidth > 480) ||
    (lastWidth > 480 && currentWidth <= 480)
  ) {
    location.reload();
  }

  lastWidth = currentWidth;

  if (window.matchMedia("(max-width: 480px)").matches) {
    enableSlider3();
  } else if (window.matchMedia("(max-width: 1030px)").matches) {
    enableSlider2();
  }
}
size();
size2();
window.addEventListener("resize", size);
window.addEventListener("resize", size2);
