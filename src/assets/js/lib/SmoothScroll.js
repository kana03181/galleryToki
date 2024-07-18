export default function () {
  // const initializeSmoothScroll = () => {
  //   document.addEventListener("click", handleClick, { capture: true });
  // };
  // const getHeaderBlockSize = () => {
  //   const header = document.querySelector("[data-fixed-header]");
  //   if (!header) {
  //     return "0";
  //   }
  //   const { position, blockSize } = window.getComputedStyle(header);
  //   const isFixed = position == "fixed" || position === "sticky";
  //   return isFixed ? blockSize : "0";
  // };
  // const scrollToTarget = (element) => {
  //   const headerBlockSize = getHeaderBlockSize();
  //   element.style.scrollMarginBlockStart = headerBlockSize;
  //   const isPrefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   const scrollBehavior = isPrefersReduced ? "instant" : "smooth";
  //   element.scrollIntoView({ behavior: scrollBehavior, inline: "end" });
  // };
  // const focusTarget = (element) => {
  //   element.focus({ preventScroll: true });
  //   if (document.activeElement !== element) {
  //     element.setAttribute("tabindex", "-1");
  //     element.focus({ preventScroll: true });
  //   }
  // };
  // const handleClick = (event) => {
  //   if (event.button !== 0) return;
  //   const currentLink = event.target.closest('a[href*="#"]');
  //   if (!currentLink) return;
  //   const hash = currentLink.hash;
  //   if (
  //     !hash ||
  //     currentLink.getAttribute("role") === "tab" ||
  //     currentLink.getAttribute("role") === "button" ||
  //     currentLink.getAttribute("data-smooth-scroll") === "disabled"
  //   )
  //     return;
  //   // アンカーリンクのハッシュ部分からターゲット要素を取得
  //   const target = document.getElementById(decodeURIComponent(hash.slice(1))) || (hash === "#top" && document.body);
  //   if (target) {
  //     // デフォルトのリンク遷移を防止
  //     event.preventDefault();
  //     // ターゲット要素までスムースにスクロール
  //     scrollToTarget(target);
  //     // ターゲット要素にフォーカスを設定
  //     focusTarget(target);
  //     // ブラウザの履歴にアンカーリンクのハッシュを追加
  //     if (!(hash === "#top")) {
  //       history.pushState({}, "", hash);
  //     }
  //   }
  // };
  // initializeSmoothScroll();
}
