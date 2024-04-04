export default function () {
  const slideDown = function (el) {
    el.style.height = "auto";
    let h = el.offsetHeight;

    el.style.height = h + "px";
    el.style.visibility = "inherit";
    el.style.overflow = "initial";
    el.style.opacity = "1";

    el.animate(
      {
        height: [0, h + "px"],
      },
      {
        duration: 300,
      }
    );
    el.style.height = "auto";
  };

  const slideUp = function (el) {
    let h = el.offsetHeight;

    el.style.height = h + "px";
    el.style.visibility = "hidden";
    el.style.overflow = "hidden";
    el.style.opacity = "0";

    el.animate(
      {
        height: [h + "px", 0],
      },
      {
        duration: 300,
      }
    );
    el.style.height = 0;
  };

  let activeIndex = null;
  console.log(activeIndex);

  const accordions = document.querySelectorAll(".js-include-accordion");
  accordions.forEach((accordion) => {
    const accordionBtns = accordion.querySelectorAll(".js-accordion__button");
    accordionBtns.forEach(function (accordionBtn, index) {
      accordionBtn.addEventListener("click", function (e) {
        activeIndex = index;
        // accordion.classList.toggle("active");
        e.currentTarget.classList.toggle("active");
        const content = accordionBtn.parentNode;
        const box = content.nextElementSibling;
        if (e.currentTarget.classList.contains("active") && e.currentTarget.getAttribute("aria-expanded") == "false") {
          slideDown(box);
          e.currentTarget.setAttribute("aria-expanded", "true");
        } else {
          slideUp(box);
          e.currentTarget.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
}
