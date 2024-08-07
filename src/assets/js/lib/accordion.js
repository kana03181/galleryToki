// export default function () {
//   document.addEventListener("DOMContentLoaded", () => {
//     setUpAccordion();
//   });

//   const setUpAccordion = () => {
//     const accordion__sm1 = document.querySelectorAll(".js-accordion__sm1");
//     const accordion__sm2 = document.querySelectorAll(".js-accordion__sm2");
//     const accordion__lg1 = document.querySelectorAll(".js-accordion__lg1");
//     const accordion__lg2 = document.querySelectorAll(".js-accordion__lg2");
//     const RUNNING_VALUE = "running";
//     const IS_OPENED_CLASS = "is-opened";

//     accordion__sm1.forEach((el) => {
//       const accordionItems__sm1 = el.querySelector(".js-accordion__items__sm1");
//       const accordionBox__sm1 = el.querySelector(".js-accordion__box__sm1");

//       accordionItems__sm1.addEventListener("click", (event) => {
//         // デフォルトの挙動を無効化
//         event.preventDefault();

//         // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
//         if (el.dataset.animStatus === RUNNING_VALUE) {
//           return;
//         }

//         // accordionのopen属性を判定
//         if (el.open) {
//           // アコーディオンを閉じるときの処理。クラスの切り替え
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const closingAnim1 = accordionBox__sm1.animate(closingAnimKeyframes(accordionBox__sm1), animTiming1);
//           el.dataset.animStatus === RUNNING_VALUE;

//           // アニメーションの完了後に
//           closingAnim1.onfinish = () => {
//             // open属性を取り除く
//             el.removeAttribute("open");

//             // アニメーション実行中用の値を取り除く
//             el.dataset.animStatus = "";
//           };
//         } else {
//           // アコーディオンを開くときにopen属性を付与
//           el.setAttribute("open", "true");

//           // アイコン操作用クラスを切り替える(クラスを付与)
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const openingAnim1 = accordionBox__sm1.animate(openingAnimKeyframes(accordionBox__sm1), animTiming1);

//           // アニメーション実行中用の値を入れる
//           el.dataset.animStatus = RUNNING_VALUE;

//           openingAnim1.onfinish = () => {
//             el.dataset.animStatus = "";
//           };
//         }
//       });
//     });

//     accordion__sm2.forEach((el) => {
//       const accordionItems__sm2 = el.querySelector(".js-accordion__items__sm2");
//       const accordionBox__sm2 = el.querySelector(".js-accordion__box__sm2");

//       accordionItems__sm2.addEventListener("click", (event) => {
//         // デフォルトの挙動を無効化
//         event.preventDefault();

//         // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
//         if (el.dataset.animStatus === RUNNING_VALUE) {
//           return;
//         }

//         // accordionのopen属性を判定
//         if (el.open) {
//           // アコーディオンを閉じるときの処理。クラスの切り替え
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const closingAnim2 = accordionBox__sm2.animate(closingAnimKeyframes(accordionBox__sm2), animTiming2);
//           el.dataset.animStatus === RUNNING_VALUE;

//           // アニメーションの完了後に
//           closingAnim2.onfinish = () => {
//             // open属性を取り除く
//             el.removeAttribute("open");

//             // アニメーション実行中用の値を取り除く
//             el.dataset.animStatus = "";
//           };
//         } else {
//           // アコーディオンを開くときにopen属性を付与
//           el.setAttribute("open", "true");

//           // アイコン操作用クラスを切り替える(クラスを付与)
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const openingAnim2 = accordionBox__sm2.animate(openingAnimKeyframes(accordionBox__sm2), animTiming2);

//           // アニメーション実行中用の値を入れる
//           el.dataset.animStatus = RUNNING_VALUE;

//           openingAnim2.onfinish = () => {
//             el.dataset.animStatus = "";
//           };
//         }
//       });
//     });

//     accordion__lg1.forEach((el) => {
//       const accordionItems__lg1 = el.querySelector(".js-accordion__items__lg1");
//       const accordionBox__lg1 = el.querySelector(".js-accordion__box__lg1");

//       accordionItems__lg1.addEventListener("click", (event) => {
//         // デフォルトの挙動を無効化
//         event.preventDefault();

//         // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
//         if (el.dataset.animStatus === RUNNING_VALUE) {
//           return;
//         }

//         // accordionのopen属性を判定
//         if (el.open) {
//           // アコーディオンを閉じるときの処理。クラスの切り替え
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const closingAnim2 = accordionBox__lg1.animate(closingAnimKeyframes(accordionBox__lg1), animTiming3);
//           el.dataset.animStatus === RUNNING_VALUE;

//           // アニメーションの完了後に
//           closingAnim2.onfinish = () => {
//             // open属性を取り除く
//             el.removeAttribute("open");

//             // アニメーション実行中用の値を取り除く
//             el.dataset.animStatus = "";
//           };
//         } else {
//           // アコーディオンを開くときにopen属性を付与
//           el.setAttribute("open", "true");

//           // アイコン操作用クラスを切り替える(クラスを付与)
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const openingAnim2 = accordionBox__lg1.animate(openingAnimKeyframes(accordionBox__lg1), animTiming3);

//           // アニメーション実行中用の値を入れる
//           el.dataset.animStatus = RUNNING_VALUE;

//           openingAnim2.onfinish = () => {
//             el.dataset.animStatus = "";
//           };
//         }
//       });
//     });

//     accordion__lg2.forEach((el) => {
//       const accordionItems__lg2 = el.querySelector(".js-accordion__items__lg2");
//       const accordionBox__lg2 = el.querySelector(".js-accordion__box__lg2");

//       accordionItems__lg2.addEventListener("click", (event) => {
//         // デフォルトの挙動を無効化
//         event.preventDefault();

//         // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
//         if (el.dataset.animStatus === RUNNING_VALUE) {
//           return;
//         }

//         // accordionのopen属性を判定
//         if (el.open) {
//           // アコーディオンを閉じるときの処理。クラスの切り替え
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const closingAnim2 = accordionBox__lg2.animate(closingAnimKeyframes(accordionBox__lg2), animTiming3);
//           el.dataset.animStatus === RUNNING_VALUE;

//           // アニメーションの完了後に
//           closingAnim2.onfinish = () => {
//             // open属性を取り除く
//             el.removeAttribute("open");

//             // アニメーション実行中用の値を取り除く
//             el.dataset.animStatus = "";
//           };
//         } else {
//           // アコーディオンを開くときにopen属性を付与
//           el.setAttribute("open", "true");

//           // アイコン操作用クラスを切り替える(クラスを付与)
//           el.classList.toggle(IS_OPENED_CLASS);

//           // アニメーションを実行
//           const openingAnim2 = accordionBox__lg2.animate(openingAnimKeyframes(accordionBox__lg2), animTiming4);

//           // アニメーション実行中用の値を入れる
//           el.dataset.animStatus = RUNNING_VALUE;

//           openingAnim2.onfinish = () => {
//             el.dataset.animStatus = "";
//           };
//         }
//       });
//     });
//   };

//   //アニメーションの時間とイージング
//   const animTiming1 = {
//     duration: 400,
//     easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
//   };

//   const animTiming2 = {
//     duration: 570,
//     easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
//   };

//   const animTiming3 = {
//     duration: 1200,
//     easing: "ease-out",
//   };

//   const animTiming4 = {
//     duration: 3000,
//     easing: "ease-out",
//   };

//   // アコーディオンを開くとき
//   const openingAnimKeyframes = (accordionBox) => [
//     {
//       height: 0,
//       opacity: 0,
//     },
//     {
//       height: accordionBox.offsetHeight + "px",
//       opacity: 2,
//     },
//   ];

//   // アコーディオンを閉じるとき
//   const closingAnimKeyframes = (accordionBox) => [
//     {
//       height: accordionBox.offsetHeight + "px",
//       opacity: 1,
//     },
//     {
//       height: 0,
//       opacity: 0,
//     },
//   ];
// }

export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion(
      ".js-accordion__sm1",
      ".js-accordion__items__sm1",
      ".js-accordion__box__sm1",
      animTiming1,
      animTiming1
    );
    setUpAccordion(
      ".js-accordion__sm2",
      ".js-accordion__items__sm2",
      ".js-accordion__box__sm2",
      animTiming2,
      animTiming2
    );
    setUpAccordion(
      ".js-accordion__lg1",
      ".js-accordion__items__lg1",
      ".js-accordion__box__lg1",
      animTiming3,
      animTiming3
    );
    setUpAccordion(
      ".js-accordion__lg2",
      ".js-accordion__items__lg2",
      ".js-accordion__box__lg2",
      animTiming4,
      animTiming3
    );
  });

  const setUpAccordion = (accordionSelector, itemSelector, boxSelector, animTimingOpen, animTimingClose) => {
    const accordions = document.querySelectorAll(accordionSelector);
    const RUNNING_VALUE = "running";
    const IS_OPENED_CLASS = "is-opened";

    accordions.forEach((el) => {
      const accordionItems = el.querySelector(itemSelector);
      const accordionBox = el.querySelector(boxSelector);

      accordionItems.addEventListener("click", (event) => {
        event.preventDefault();

        if (el.dataset.animStatus === RUNNING_VALUE) {
          return;
        }

        if (el.open) {
          el.classList.toggle(IS_OPENED_CLASS);

          const closingAnim = accordionBox.animate(closingAnimKeyframes(accordionBox), animTimingClose);
          el.dataset.animStatus = RUNNING_VALUE;

          closingAnim.onfinish = () => {
            el.removeAttribute("open");
            el.dataset.animStatus = "";
          };
        } else {
          el.setAttribute("open", "true");
          el.classList.toggle(IS_OPENED_CLASS);

          const openingAnim = accordionBox.animate(openingAnimKeyframes(accordionBox), animTimingOpen);
          el.dataset.animStatus = RUNNING_VALUE;

          openingAnim.onfinish = () => {
            el.dataset.animStatus = "";
          };
        }
      });
    });
  };

  //アニメーションの時間とイージング
  const animTiming1 = {
    duration: 400,
    easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
  };

  const animTiming2 = {
    duration: 570,
    easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
  };

  const animTiming3 = {
    duration: 1500,
    easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
  };

  const animTiming4 = {
    duration: 3000,
    easing: "cubic-bezier(0.14, 0.24, 0.41, 0.92)",
  };

  // アコーディオンを開くとき
  const openingAnimKeyframes = (accordionBox) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: accordionBox.scrollHeight + "px",
      opacity: 1,
    },
  ];

  // アコーディオンを閉じるとき
  const closingAnimKeyframes = (accordionBox) => [
    {
      height: accordionBox.scrollHeight + "px",
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];
}
