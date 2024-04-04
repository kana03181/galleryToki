export default function () {
  let body = document.body;
  console.log(body);

  window.addEventListener("resize", function () {
    let windowWidth = document.documentElement.clientWidth;
    // console.log(windowWidth);

    if (windowWidth <= 1023) {
      body.classList.add("is-resize");
    } else {
      body.classList.remove("is-resize");
    }
  });
}
