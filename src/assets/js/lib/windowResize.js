export default function () {
  let body = document.body;
  let resizeTimer;

  window.addEventListener("resize", function () {
    clearTimeout(resizeTimer);

    function addClassOnResize() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth <= 1280) {
        body.classList.add("is-resize");
      } else {
        body.classList.remove("is-resize");
      }
    }

    addClassOnResize();

    resizeTimer = setTimeout(function () {
      body.classList.remove("is-resize");
    }, 250);
  });
}
