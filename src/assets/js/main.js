// Polyfill
import "intersection-observer";
import objectFitImages from "object-fit-images";
import closetPolyfill from "./lib/closet.polyfill";
objectFitImages();
closetPolyfill();

// Libraly
// import Loading from "./lib/Loading";
// import $ from "jquery";
// import SmoothScroll from "smooth-scroll";
// import ScrollObserver from './lib/ScrollObserver';
// import Toggle from "./lib/Toggle";
// import Close from "./lib/Close";
// import Slider from "./lib/Slider";
// import { dropdown } from './lib/dropdown';
// import { inview } from "./lib/inview";
// import swiper from "./lib/swiper";

import gsap from "./lib/gsap";
import hamburger from "./lib/hamburger";
import windowResize from "./lib/windowResize";
import toTop from "./lib/toTop";
import accordion from "./lib/accordion";
// import validation from "./lib/validation";
import { form_Tel, form_Email } from "./lib/validation";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

new gsap();
new toTop();
new hamburger();
new windowResize();
new accordion();
// new validation();
new form_Tel();
new form_Email();
// swiper();
// new swiper();
// new Loading();
// new Toggle(".js-drawer");
// new SmoothScroll('a[href*="#"]');

const breakpoints = {
  hero: {
    768: {
      spaceBetween: 180,
    },
    1024: {
      spaceBetween: 64,
    },
  },
  shareSpace: {
    768: {
      spaceBetween: 180,
    },
    1024: {
      spaceBetween: 64,
    },
  },
  roomFacility: {
    768: {
      spaceBetween: 180,
    },
    1024: {
      spaceBetween: 40,
    },
  },
  access: {
    768: {
      spaceBetween: 180,
    },
    1024: {
      spaceBetween: 40,
    },
  },
};

const createSwiper = (selector, options) => {
  return new Swiper(selector, options);
};

const createThumbnailSwiper = (swiperSelector, thumbnailSelector, options) => {
  const thumbnailSwiper = new Swiper(thumbnailSelector, {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });

  return new Swiper(swiperSelector, {
    ...options,
    thumbs: {
      swiper: thumbnailSwiper,
    },
  });
};

/** swiper(feature) **/
const featureBreakPoint = 1023;
let featureSwiper;

function manageSwiper() {
  if (window.innerWidth > featureBreakPoint) {
    if (featureSwiper) {
      featureSwiper.destroy(false, true);
      featureSwiper = null;
    }
  } else {
    if (!featureSwiper) {
      featureSwiper = new Swiper(".p-feature__swiper", {
        loop: false,
        spaceBetween: 36,
        slidesPerView: "auto",
        grabCursor: true,
        pagination: {
          el: ".swiper-pagination",
          type: "bullets",
          clickable: "clickable",
        },
        scrollbar: {
          el: ".swiper-scrollbar",
          hide: false,
          draggable: true,
        },
      });
    }
  }
}

window.addEventListener("load", manageSwiper);
window.addEventListener("resize", manageSwiper);

manageSwiper();

/** swiper(hero) **/
createSwiper(".p-hero__swiper", {
  loop: true,
  speed: 2000,
  effect: "fade",
  slidesPerView: "auto",
  autoplay: {
    delay: 2500,
  },
  breakpoints: breakpoints.hero,
  pagination: {
    el: ".p-hero__swiper__pagination",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(index:room&facility shareSpace) **/
createSwiper(".p-room__facility__swiper.-shareSpace", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  breakpoints: breakpoints.shareSpace,
  navigation: {
    nextEl: ".c-swiper__button__next.-shareSpace",
    prevEl: ".c-swiper__button__prev.-shareSpace",
    disabledClass: "swiper-button-disabled",
  },
  pagination: {
    el: ".p-room__facility__pagination.-shareSpace",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(location) **/
createSwiper(".p-location__swiper", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",

  navigation: {
    nextEl: ".c-swiper__button__next",
    prevEl: ".c-swiper__button__prev",
  },

  pagination: {
    el: ".c-swiper-pagination.-location",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(room&facility room1) **/
createThumbnailSwiper(".p-rooms__swiper.-room1", ".p-rooms__swiper__thumbnail.-room1", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.roomFacility,

  navigation: {
    nextEl: ".c-swiper__button__next.-room1",
    prevEl: ".c-swiper__button__prev.-room1",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-rooms__pagination.-room1",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(room&facility room2) **/
createThumbnailSwiper(".p-rooms__swiper.-room2", ".p-rooms__swiper__thumbnail.-room2", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.roomFacility,

  navigation: {
    nextEl: ".c-swiper__button__next.-room2",
    prevEl: ".c-swiper__button__prev.-room2",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-rooms__pagination.-room2",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(room&facility living) **/
createThumbnailSwiper(".p-rooms__swiper.-living", ".p-rooms__swiper__thumbnail.-living", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.roomFacility,

  navigation: {
    nextEl: ".c-swiper__button__next.-living",
    prevEl: ".c-swiper__button__prev.-living",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-rooms__pagination.-living",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(room&facility bathRoom) **/
createThumbnailSwiper(".p-rooms__swiper.-bathroom", ".p-rooms__swiper__thumbnail.-bathroom", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.roomFacility,

  navigation: {
    nextEl: ".c-swiper__button__next.-bathroom",
    prevEl: ".c-swiper__button__prev.-bathroom",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-rooms__pagination.-bathroom",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(room&facility kitchen) **/
createThumbnailSwiper(".p-rooms__swiper.-kitchen", ".p-rooms__swiper__thumbnail.-kitchen", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.roomFacility,

  navigation: {
    nextEl: ".c-swiper__button__next.-kitchen",
    prevEl: ".c-swiper__button__prev.-kitchen",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-rooms__pagination.-kitchen",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access airplane__bus) **/
createSwiper(".p-access__swiper.-airplane__bus", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-airplane__bus",
    prevEl: ".c-swiper__button__prev.-airplane__bus",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-airplane__bus",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access airplane__car) **/
createSwiper(".p-access__swiper.-airplane__car", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-airplane__car",
    prevEl: ".c-swiper__button__prev.-airplane__car",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-airplane__car",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access shinkansen__bus__direct) **/
createSwiper(".p-access__swiper.-shinkansen__bus__direct", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-shinkansen__bus__direct",
    prevEl: ".c-swiper__button__prev.-shinkansen__bus__direct",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-shinkansen__bus__direct",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access shinkansen__bus__transfer) **/
createSwiper(".p-access__swiper.-shinkansen__bus__transfer", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-shinkansen__bus__transfer",
    prevEl: ".c-swiper__button__prev.-shinkansen__bus__transfer",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-shinkansen__bus__transfer",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access shinkansen__tram) **/
createSwiper(".p-access__swiper.-shinkansen__tram", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-shinkansen__tram",
    prevEl: ".c-swiper__button__prev.-shinkansen__tram",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-shinkansen__tram",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access shinkansen__train) **/
createSwiper(".p-access__swiper.-shinkansen__train", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-shinkansen__train",
    prevEl: ".c-swiper__button__prev.-shinkansen__train",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-shinkansen__train",
    type: "bullets",
    clickable: "clickable",
  },
});

/** swiper(access expressBus) **/
createSwiper(".p-access__swiper.-expressBus", {
  loop: false,
  spaceBetween: 32,
  slidesPerView: "auto",
  grabCursor: true,

  breakpoints: breakpoints.access,

  navigation: {
    nextEl: ".c-swiper__button__next.-expressBus",
    prevEl: ".c-swiper__button__prev.-expressBus",
    disabledClass: "swiper-button-disabled",
  },

  pagination: {
    el: ".p-access__swiper__pagination.-expressBus",
    type: "bullets",
    clickable: "clickable",
  },
});
