export default function () {
  const button = document.querySelector(".js-hamburger");
  const body = document.body;
  // console.log(button);

  button.addEventListener("click", function (e) {
    body.classList.toggle("is-active-drawer");

    if (e.currentTarget.getAttribute("aria-expanded") === "false") {
      e.currentTarget.setAttribute("aria-expanded", "true");
    } else {
      e.currentTarget.setAttribute("aria-expanded", "false");
    }
  });
}
