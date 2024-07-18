export default function () {
  document.addEventListener("DOMContentLoaded", () => {
    setUpAccordion();
  });

  const setUpAccordion = () => {
    const accordion = document.querySelectorAll(".js-accordion");
    const RUNNING_VALUE = "running";
    const IS_OPENED_CLASS = "is-opened";

    accordion.forEach((el) => {
      const accordionItems = el.querySelector(".js-accordion__items");
      const accordionBox = el.querySelector(".js-accordion__box");

      accordionItems.addEventListener("click", (event) => {
        // デフォルトの挙動を無効化
        event.preventDefault();

        // 連打防止用。アニメーション中だったらクリックイベントを受け付けないでリターンする
        if (el.dataset.animStatus === RUNNING_VALUE) {
          return;
        }

        // accordionのopen属性を判定
        if (el.open) {
          // アコーディオンを閉じるときの処理。クラスの切り替え
          el.classList.toggle(IS_OPENED_CLASS);

          // アニメーションを実行
          const closingAnim = accordionBox.animate(closingAnimKeyframes(accordionBox), animTiming);
          el.dataset.animStatus === RUNNING_VALUE;

          // アニメーションの完了後に
          closingAnim.onfinish = () => {
            // open属性を取り除く
            el.removeAttribute("open");

            // アニメーション実行中用の値を取り除く
            el.dataset.animStatus = "";
          };
        } else {
          // アコーディオンを開くときにopen属性を付与
          el.setAttribute("open", "true");

          // アイコン操作用クラスを切り替える(クラスを付与)
          el.classList.toggle(IS_OPENED_CLASS);

          // アニメーションを実行
          const openingAnim = accordionBox.animate(openingAnimKeyframes(accordionBox), animTiming);

          // アニメーション実行中用の値を入れる
          el.dataset.animStatus = RUNNING_VALUE;

          openingAnim.onfinish = () => {
            el.dataset.animStatus = "";
          };
        }
      });
    });
  };

  //アニメーションの時間とイージング
  const animTiming = {
    duration: 600,
    easing: "ease-out",
  };

  // アコーディオンを開くときのキーフレーム
  const openingAnimKeyframes = (accordionBox) => [
    {
      height: 0,
      opacity: 0,
    },
    {
      height: accordionBox.offsetHeight + "px",
      opacity: 1,
    },
  ];

  // アコーディオンを閉じるときのキーフレーム
  const closingAnimKeyframes = (accordionBox) => [
    {
      height: accordionBox.offsetHeight + "px",
      opacity: 1,
    },
    {
      height: 0,
      opacity: 0,
    },
  ];
}
