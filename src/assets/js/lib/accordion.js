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
