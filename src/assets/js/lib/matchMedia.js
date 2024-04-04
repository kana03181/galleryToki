export default (breakPoint) => {
  const mediaQuery = matchMedia(`(min-width: ${breakPoint}px)`);

  // ページが読み込まれた時に実行
  handle(mediaQuery);

  // ウィンドウサイズが変更されても実行されるように
  mediaQuery.addEventListener("change", handle);

  function handle(mq) {
    if (mq.matches) {
      return true;
    } else {
      return false;
    }
  }
};
