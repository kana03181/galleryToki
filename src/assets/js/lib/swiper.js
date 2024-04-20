// import Swiper from "swiper";
// import "swiper/swiper-bundle.css";
// // import "swiper/css/navigation";

// export default function () {
  // const breakPoint = 1023;
// let featureSwiper;
// let swiperBool;
// let targetSwiper = document.querySelector(".p-feature__swiper");

// if (targetSwiper) {
//   window.addEventListener(
//     "load",
//     () => {
//       if (breakPoint <= window.innerWidth) {
//         swiperBool = false;
//       } else {
//         createSwiper();
//         swiperBool = true;
//       }
//     },
//     false
//   );

//   window.addEventListener(
//     "resize",
//     () => {
//       if (breakPoint < window.innerWidth && swiperBool) {
//         featureSwiper.destroy(false, true);
//         swiperBool = false;
//       } else if (breakPoint >= window.innerWidth && !swiperBool) {
//         createSwiper();
//         swiperBool = true;
//       }
//     },
//     false
//   );

//   /** swiper(feature)**/
//   const createSwiper = () => {
//     featureSwiper = new Swiper(".p-feature__swiper", {
//       loop: false,
//       spaceBetween: 36,
//       slidesPerView: "auto",
//       grabCursor: true,

//       pagination: {
//         el: ".swiper-pagination",
//         type: "bullets",
//         clickable: "clickable",
//       },

//       scrollbar: {
//         el: ".swiper-scrollbar",
//         hide: false,
//         draggable: true,
//       },
//     });
//   };
// }

// /** swiper(hero) **/
// new Swiper(".p-hero__swiper", {
//   loop: true,
//   speed: 2000,
//   effect: "fade",
//   slidesPerView: "auto",
//   autoplay: {
//     delay: 2500,
//   },

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 64,
//     },
//   },

//   pagination: {
//     el: ".p-hero__swiper__pagination",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// /** swiper(room&facility shareSpace) **/
// new Swiper(".p-room__facility__swiper.-shareSpace", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 64,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-shareSpace",
//     prevEl: ".c-swiper__button__prev.-shareSpace",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-room__facility__pagination.-shareSpace",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// /** swiper(location) **/
// new Swiper(".p-location__swiper", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",

//   // breakpoints: {
//   //   768: {
//   //     spaceBetween: 32,
//   //   },
//   // },

//   navigation: {
//     nextEl: ".c-swiper__button__next",
//     prevEl: ".c-swiper__button__prev",
//   },

//   pagination: {
//     el: ".c-swiper-pagination.-location",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// /** swiper(room&facility room1) **/
// const sliderThumbnail__room1 = new Swiper(".p-rooms__swiper__thumbnail.-room1", {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
// });

// new Swiper(".p-rooms__swiper.-room1", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-room1",
//     prevEl: ".c-swiper__button__prev.-room1",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-rooms__pagination.-room1",
//     type: "bullets",
//     clickable: "clickable",
//   },

//   thumbs: {
//     swiper: sliderThumbnail__room1,
//   },
// });

// /** swiper(room&facility room2) **/
// const sliderThumbnail__room2 = new Swiper(".p-rooms__swiper__thumbnail.-room2", {
//   slidesPerView: 3,
// });

// new Swiper(".p-rooms__swiper.-room2", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-room2",
//     prevEl: ".c-swiper__button__prev.-room2",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-rooms__pagination.-room2",
//     type: "bullets",
//     clickable: "clickable",
//   },

//   thumbs: {
//     swiper: sliderThumbnail__room2,
//   },
// });

// /** swiper(room&facility living) **/
// const sliderThumbnail__living = new Swiper(".p-rooms__swiper__thumbnail.-living", {
//   slidesPerView: 3,
// });

// new Swiper(".p-rooms__swiper.-living", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-living",
//     prevEl: ".c-swiper__button__prev.-living",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-rooms__pagination.-living",
//     type: "bullets",
//     clickable: "clickable",
//   },

//   thumbs: {
//     swiper: sliderThumbnail__living,
//   },
// });

// /** swiper(room&facility bathRoom) **/
// const sliderThumbnail__bathroom = new Swiper(".p-rooms__swiper__thumbnail.-bathroom", {
//   slidesPerView: 3,
// });

// new Swiper(".p-rooms__swiper.-bathroom", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-bathroom",
//     prevEl: ".c-swiper__button__prev.-bathroom",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-rooms__pagination.-bathroom",
//     type: "bullets",
//     clickable: "clickable",
//   },

//   thumbs: {
//     swiper: sliderThumbnail__bathroom,
//   },
// });

// /** swiper(room&facility kitchen) **/
// const sliderThumbnail__kitchen = new Swiper(".p-rooms__swiper__thumbnail.-kitchen", {
//   slidesPerView: 3,
//   width: "180px",
// });

// new Swiper(".p-rooms__swiper.-kitchen", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-kitchen",
//     prevEl: ".c-swiper__button__prev.-kitchen",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-rooms__pagination.-kitchen",
//     type: "bullets",
//     clickable: "clickable",
//   },

//   thumbs: {
//     swiper: sliderThumbnail__kitchen,
//   },
// });

// new Swiper(".p-access__swiper.-airplane__bus", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-airplane__bus",
//     prevEl: ".c-swiper__button__prev.-airplane__bus",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-airplane__bus",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-airplane__car", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-airplane__car",
//     prevEl: ".c-swiper__button__prev.-airplane__car",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-airplane__car",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-shinkansen__bus__direct", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-shinkansen__bus__direct",
//     prevEl: ".c-swiper__button__prev.-shinkansen__bus__direct",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-shinkansen__bus__direct",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-shinkansen__bus__transfer", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-shinkansen__bus__transfer",
//     prevEl: ".c-swiper__button__prev.-shinkansen__bus__transfer",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-shinkansen__bus__transfer",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-shinkansen__tram", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-shinkansen__tram",
//     prevEl: ".c-swiper__button__prev.-shinkansen__tram",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-shinkansen__tram",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-shinkansen__train", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-shinkansen__train",
//     prevEl: ".c-swiper__button__prev.-shinkansen__train",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-shinkansen__train",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });

// new Swiper(".p-access__swiper.-expressBus", {
//   loop: false,
//   spaceBetween: 32,
//   slidesPerView: "auto",
//   grabCursor: true,

//   breakpoints: {
//     768: {
//       spaceBetween: 180,
//     },

//     1024: {
//       spaceBetween: 40,
//     },
//   },

//   navigation: {
//     nextEl: ".c-swiper__button__next.-expressBus",
//     prevEl: ".c-swiper__button__prev.-expressBus",
//     disabledClass: "swiper-button-disabled",
//   },

//   pagination: {
//     el: ".p-access__swiper__pagination.-expressBus",
//     type: "bullets",
//     clickable: "clickable",
//   },
// });
// }
