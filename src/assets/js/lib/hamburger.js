export default function () {
  const hamburgerButton = document.querySelector(".js-hamburger");
  const globalNav = document.getElementById("global-nav");
  const html = document.documentElement;

  if (hamburgerButton) {
    hamburgerButton.addEventListener("click", (e) => {
      const isExpanded = e.currentTarget.getAttribute("aria-expanded") !== "false";
      e.currentTarget.setAttribute("aria-expanded", !isExpanded);

      document.documentElement.classList.toggle("is-active-drawer");

      if (document.documentElement.classList.contains("is-active-drawer")) {
        html.style.overflow = "hidden";
      } else {
        html.style.overflow = "";
        html.style.overflowY = "scroll";
      }
    });

    globalNav.addEventListener("click", (e) => {
      const clickedElement = e.target;
      if (
        clickedElement.getAttribute("href") === "#" ||
        document.documentElement.classList.contains("is-active-drawer")
      ) {
        document.documentElement.classList.remove("is-active-drawer");
        html.style.overflow = "";
        // console.log(aTags[i]);
      }
    });
  }
}
