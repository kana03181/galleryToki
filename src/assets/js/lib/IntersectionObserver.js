export default function () {
  const contents = document.querySelectorAll(".js-content");
  // console.log(contents);

  const options = {
    root: null,
    rootMargin: "-50% 0px",
    threshold: 0,
  };

  //インスタンスを作成。要素が交差するたびに doWhenIntersect 関数を呼び出す
  const observer = new IntersectionObserver(doWhenIntersect, options);

  //.js-contentの監視を開始
  contents.forEach((content) => {
    observer.observe(content);
  });

  //交差したときに呼び出す関数
  function doWhenIntersect(entries) {
    entries.forEach((entry) => {
      // console.log(entry);
      if (entry.isIntersecting) {
        // console.log(entry.target);
        activateIndex(entry.target);
        // scrollToElement(entry.target);
      }
    });
  }

  //目次の色を変える
  function activateIndex(element) {
    const currentActiveIndex = document.querySelector(".js-index.active");

    if (currentActiveIndex !== null) {
      currentActiveIndex.classList.remove("active");
    }

    const newActiveIndex = document.querySelector(`.p-access__index__link[href="#${element.id}"]`);
    if (newActiveIndex !== null) {
      // null チェック
      newActiveIndex.closest(".js-index").classList.add("active");
    }
  }
}
