export default function () {
  let toTop = document.querySelector(".js-toTop");
  // console.log(toTop);

  toTop.addEventListener("click", () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  });
}
