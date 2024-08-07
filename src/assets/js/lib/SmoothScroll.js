export default function () {
  const initializeSmoothScroll = () => {
    document.addEventListener("click", handleClick, { capture: true });
  };

  const getHeaderBlockSize = () => {
    const header = document.querySelector("[data-fixed-header]");
    if (!header) {
      return 0;
    }
    const { position, blockSize } = window.getComputedStyle(header);
    const isFixed = position == "fixed" || position === "sticky";
    return isFixed ? parseFloat(blockSize) : 0;
  };

  // イージング関数
  const easeOutCubic = (t) => --t * t * t + 1;

  // スムーズスクロールの関数
  const smoothScroll = (target, duration) => {
    const start = window.scrollY || document.documentElement.scrollTop; // 現在のスクロール位置
    const headerBlockSize = getHeaderBlockSize(); // ヘッダーのサイズを取得
    const targetPosition = target.getBoundingClientRect().top + start - headerBlockSize - 30; // ターゲットの位置
    const startTime = performance.now(); // アニメーション開始時刻

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime; // 経過時間
      const progress = Math.min(elapsed / duration, 1); // スクロールの進行度
      const easedProgress = easeOutCubic(progress); // イージングを適用

      // スクロール位置を更新
      window.scrollTo(0, start + (targetPosition - start) * easedProgress);

      if (progress < 1) {
        // まだスクロールが完了していなければ、次のフレームでアニメーションを続ける
        requestAnimationFrame(animateScroll);
      } else {
        // スクロール完了後にターゲットにフォーカスを当てる
        focusTarget(target);
      }
    };

    requestAnimationFrame(animateScroll); // アニメーションを開始
  };

  const scrollToTarget = (element) => {
    const isPrefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const duration = isPrefersReduced ? 0 : 630; // スクロール時間を調整
    smoothScroll(element, duration); // スムーズスクロールを実行
  };

  const focusTarget = (element) => {
    element.focus({ preventScroll: true }); // スクロールせずにフォーカスを当てる
    if (document.activeElement !== element) {
      // 要素が現在アクティブでない場合、tabindexを設定して再フォーカスを試みる
      element.setAttribute("tabindex", "-1");
      element.focus({ preventScroll: true });
    }
  };

  const handleClick = (event) => {
    if (event.button !== 0) return; // 左クリック以外は無視
    const currentLink = event.target.closest('a[href*="#"]'); // アンカーリンクを取得
    if (!currentLink) return; // アンカーリンクがない場合は終了

    const hash = currentLink.hash;
    if (
      !hash ||
      currentLink.getAttribute("role") === "tab" ||
      currentLink.getAttribute("role") === "button" ||
      currentLink.getAttribute("data-smooth-scroll") === "disabled"
    )
      return; // スムーズスクロールを無効化する条件を満たしている場合は終了

    // アンカーリンクのハッシュ部分からターゲット要素を取得
    const target = document.getElementById(decodeURIComponent(hash.slice(1))) || (hash === "#top" && document.body);
    if (target) {
      // デフォルトのリンク遷移を防止
      event.preventDefault();
      // ターゲット要素までスムースにスクロール
      scrollToTarget(target);
      // ブラウザの履歴にアンカーリンクのハッシュを追加
      if (!(hash === "#top")) {
        history.pushState({}, "", hash);
      }
    }
  };

  initializeSmoothScroll(); // スムーズスクロールの初期化
}
