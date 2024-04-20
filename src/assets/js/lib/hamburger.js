export default function () {
  const button = document.querySelector(".js-hamburger");
  const body = document.body;
  // const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  function backgroundFix() {
    // pos = window.scrollY;
    body.style.position = "fixed";
    body.style.width = "100vw";
    body.style.height = "100vh";
    body.style.top = "0";
    body.style.left = "0";
    body.style.right = "0";
    body.style.touchAction = "none";
  }

  function resetBackgroundFix() {
    body.style.position = "static";
    body.style.width = "initial";
    body.style.height = "initial";
    body.style.touchAction = "initial";
  }

  button.addEventListener("click", function (e) {
    body.classList.toggle("is-active-drawer");

    if (e.currentTarget.getAttribute("aria-expanded") === "false") {
      e.currentTarget.setAttribute("aria-expanded", "true");
      backgroundFix();
    } else {
      e.currentTarget.setAttribute("aria-expanded", "false");
      resetBackgroundFix();
    }
  });
}
