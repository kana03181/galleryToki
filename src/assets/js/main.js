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
import SmoothScroll from "./lib/SmoothScroll";
import accordion from "./lib/accordion";
import IntersectionObserver from "./lib/IntersectionObserver";
// import validation from "./lib/validation";
import { form_Tel, form_Email } from "./lib/validation";
import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

new gsap();
new SmoothScroll();
new hamburger();
new windowResize();
new accordion();
new IntersectionObserver();
// new validation();
new form_Tel();
new form_Email();
// swiper();
// new swiper();
// new Loading();
// new Toggle(".js-drawer");
// new SmoothScroll('a[href*="#"]');

//**********  ここから下はswiperのJS  **********/

// /*
//   全てのswiperのブレイクポイントを管理
// */
const breakpoints = {
  hero: {
    768: {
      spaceBetween: 180,
    },
    1024: {
      spaceBetween: 64,
    },
  },

  feature: {
    768: {
      spaceBetween: 56,
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
      spaceBetween: 120,
    },
    1024: {
      spaceBetween: 40,
    },
  },

  location: {
    1024: {
      slidesPerView: 1.15,
      spaceBetween: 64,
    },

    1280: {
      slidesPerView: 0.999,
      spaceBetween: 88,
    },

    1440: {
      slidesPerView: 0.998,
      spaceBetween: 88,
    },
  },

  rooms: {
    768: {
      spaceBetween: 16,
    },
    1024: {
      spaceBetween: 0,
    },
  },

  access_main: {
    768: {
      spaceBetween: 24,
    },
    1024: {
      spaceBetween: 40,
      slidesPerView: 1,
    },
  },

  access_thumb: {
    768: {
      spaceBetween: 16,
    },
  },
};

// /*TOPページのSwiperを作成する関数  // */

const createSwiper = (selector, options) => {
  return new Swiper(selector, options);
};

// /*
//   swiper(feature)
//   画面サイズ1024px以上の時はswiperを破棄。それ以下の時は再生成する。
// */
const targetSwiper = document.querySelector(".p-feature__swiper");
const breakPoint = 1023; // Swiperを破棄するブレークポイント
let featureSwiper = null; // Swiperインスタンスを保持する変数

// Swiperを生成/破棄する関数
function manageSwiper() {
  const windowWidth = window.innerWidth;

  if (targetSwiper) {
    if (windowWidth >= breakPoint) {
      // 1024px以上の場合
      if (featureSwiper) {
        // Swiperインスタンスが存在するなら
        featureSwiper.destroy(true, true); // Swiperを破棄
        featureSwiper = null; // インスタンスをリセット
      }
    } else {
      // 1024px未満の場合
      if (!featureSwiper) {
        // Swiperインスタンスが存在しないなら
        featureSwiper = new Swiper(".p-feature__swiper", {
          loop: false,
          spaceBetween: 36,
          slidesPerView: "auto",
          grabCursor: true,
          scrollbar: {
            el: ".swiper-scrollbar",
            hide: false,
            draggable: true,
          },
        });
      }
    }
  }
}
window.addEventListener("load", manageSwiper); // ページロード時に実行
window.addEventListener("resize", manageSwiper); // ウィンドウリサイズ時に実行

manageSwiper(); // 初期状態でSwiperを管理

// /*
//   swiper(hero)
// */
document.addEventListener("DOMContentLoaded", function () {
  const swiperContainer = document.querySelector(".js-hero__swiper__wrapper");
  if (swiperContainer) {
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

    swiperContainer.style.visibility = "visible";
  }
});

// /*
//   swiper(TOP:room & facility)
// */
createSwiper(".p-room__facility__swiper.-shareSpace", {
  loop: false,
  spaceBetween: 32,
  speed: 630,
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

// /*
//   swiper(location)
// */
createSwiper(".p-location__swiper", {
  loop: false,
  spaceBetween: 32,
  speed: 630,
  breakpoints: breakpoints.location,
  centeredSlides: true,
  // slidesPerView: 1.15,

  navigation: {
    nextEl: ".c-swiper__button__next",
    prevEl: ".c-swiper__button__prev",
  },

  pagination: {
    el: ".swiper-pagination.-locationPage",
    type: "bullets",
    clickable: "clickable",
  },
});

// /*  サムネイル付きのSwiperを作成する関数  // */
let thumbnailSwiperInstance;
let mainSwiperInstance;

window.addEventListener("resize", () => {
  if (thumbnailSwiperInstance) {
    thumbnailSwiperInstance.update();
  }
  if (mainSwiperInstance) {
    mainSwiperInstance.update();
  }
});

const createThumbnailSwiper = (mainSwiperSelector, thumbnailSelector, options) => {
  const defaultThumbnailOptions = {
    slidesPerView: "auto",
    watchSlidesProgress: false,
  };

  const combinedThumbnailOptions = {
    ...defaultThumbnailOptions,
    ...options?.thumbnailOptions, // オプションがあるかチェックしてから展開
  };

  const thumbnailSwiperInstance = new Swiper(thumbnailSelector, combinedThumbnailOptions);

  const mainSwiperInstance = new Swiper(mainSwiperSelector, {
    loop: false,
    spaceBetween: 32,
    speed: 630,
    slidesPerView: "auto",
    ...options?.mainOptions,
    thumbs: {
      swiper: thumbnailSwiperInstance,
    },
  });

  mainSwiperInstance.thumbs.swiper = thumbnailSwiperInstance;

  return thumbnailSwiperInstance;
};

// /*
//   room&facility (room1)
// */
createThumbnailSwiper(".p-rooms__swiper.-room1", ".c-swiper__thumbnail.-room1", {
  mainOptions: {
    effect: "fade",
    breakpoints: breakpoints.roomFacility,
    navigation: {
      nextEl: ".c-swiper__button__next.-room1",
      prevEl: ".c-swiper__button__prev.-room1",
      disabledClass: "swiper-button-disabled",
    },
  },
  thumbnailOptions: {
    allowTouchMove: false,
  },
});

// /*
//   room&facility (room2)
// */
createThumbnailSwiper(".p-rooms__swiper.-room2", ".c-swiper__thumbnail.-room2", {
  mainOptions: {
    effect: "fade",
    breakpoints: breakpoints.roomFacility,
    navigation: {
      nextEl: ".c-swiper__button__next.-room2",
      prevEl: ".c-swiper__button__prev.-room2",
      disabledClass: "swiper-button-disabled",
    },
  },
  thumbnailOptions: {
    allowTouchMove: false,
  },
});

// /*
//   room&facility (living)
// */
createThumbnailSwiper(".p-rooms__swiper.-living", ".c-swiper__thumbnail.-living", {
  mainOptions: {
    effect: "fade",
    breakpoints: breakpoints.roomFacility,
    navigation: {
      nextEl: ".c-swiper__button__next.-living",
      prevEl: ".c-swiper__button__prev.-living",
      disabledClass: "swiper-button-disabled",
    },
  },
  thumbnailOptions: {
    allowTouchMove: false,
  },
});

// /*
//   room&facility (bathRoom)
// */
createThumbnailSwiper(".p-rooms__swiper.-bathroom", ".c-swiper__thumbnail.-bathroom", {
  mainOptions: {
    effect: "fade",
    breakpoints: breakpoints.roomFacility,
    navigation: {
      nextEl: ".c-swiper__button__next.-bathroom",
      prevEl: ".c-swiper__button__prev.-bathroom",
      disabledClass: "swiper-button-disabled",
    },
  },
  thumbnailOptions: {
    allowTouchMove: false,
  },
});

// /*
//   room&facility (kitchen)
// */
createThumbnailSwiper(".p-rooms__swiper.-kitchen", ".c-swiper__thumbnail.-kitchen", {
  mainOptions: {
    effect: "fade",
    breakpoints: breakpoints.roomFacility,
    navigation: {
      nextEl: ".c-swiper__button__next.-kitchen",
      prevEl: ".c-swiper__button__prev.-kitchen",
      disabledClass: "swiper-button-disabled",
    },
  },
  thumbnailOptions: {
    allowTouchMove: false,
  },
});

// /*
//   access (飛行機 + バス)
// */
createThumbnailSwiper(".p-access__swiper.-airplane__bus", ".c-swiper__thumbnail.-airplane__bus", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-airplane__bus",
      prevEl: ".c-swiper__button__prev.-airplane__bus",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});

// /*
//   access (飛行機 + 車)
// */
createThumbnailSwiper(".p-access__swiper.-airplane__car", ".c-swiper__thumbnail.-airplane__car", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-airplane__car",
      prevEl: ".c-swiper__button__prev.-airplane__car",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});

// /*
//   access (新幹線 + バス（乗り換えなし）)
// */
createThumbnailSwiper(".p-access__swiper.-shinkansen__bus__direct", ".c-swiper__thumbnail.-shinkansen__bus__direct", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-shinkansen__bus__direct",
      prevEl: ".c-swiper__button__prev.-shinkansen__bus__direct",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});

// /*
//   access (新幹線 + バス（乗り換えあり）)
// */
createThumbnailSwiper(
  ".p-access__swiper.-shinkansen__bus__transfer",
  ".c-swiper__thumbnail.-shinkansen__bus__transfer",
  {
    mainOptions: {
      slidesPerView: 1.15,
      spaceBetween: 16,
      centeredSlides: true,
      breakpoints: breakpoints.access_main,
      navigation: {
        nextEl: ".c-swiper__button__next.-shinkansen__bus__transfer",
        prevEl: ".c-swiper__button__prev.-shinkansen__bus__transfer",
        disabledClass: "swiper-button-disabled",
      },
    },

    thumbnailOptions: {
      watchSlidesProgress: true,
      allowTouchMove: true,
      spaceBetween: 8,
      breakpoints: breakpoints.access_thumb,
    },
  }
);

// /*
//   access (新幹線 + 市電)
// */
createThumbnailSwiper(".p-access__swiper.-shinkansen__tram", ".c-swiper__thumbnail.-shinkansen__tram", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-shinkansen__tram",
      prevEl: ".c-swiper__button__prev.-shinkansen__tram",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});

// /*
//   access (新幹線 + 電車)
// */

createThumbnailSwiper(".p-access__swiper.-shinkansen__train", ".c-swiper__thumbnail.-shinkansen__train", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-shinkansen__train",
      prevEl: ".c-swiper__button__prev.-shinkansen__train",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});

// /*
//   access (高速バス)
// */

createThumbnailSwiper(".p-access__swiper.-expressBus", ".c-swiper__thumbnail.-expressBus", {
  mainOptions: {
    slidesPerView: 1.15,
    spaceBetween: 16,
    centeredSlides: true,
    breakpoints: breakpoints.access_main,
    navigation: {
      nextEl: ".c-swiper__button__next.-expressBus",
      prevEl: ".c-swiper__button__prev.-expressBus",
      disabledClass: "swiper-button-disabled",
    },
  },

  thumbnailOptions: {
    watchSlidesProgress: true,
    allowTouchMove: true,
    spaceBetween: 8,
    breakpoints: breakpoints.access_thumb,
  },
});
