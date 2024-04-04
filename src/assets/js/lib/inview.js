export const inview = function (entry, isIntersecting, activeRootClass) {
  if (isIntersecting) {
    let delayTime = 0;

    if (typeof entry.target.dataset.parent !== "undefined") {
      activeRootClass = entry.target.dataset.parent;
    }

    if (Number.isFinite(Number(entry.target.dataset.delay))) {
      delayTime = entry.target.dataset.delay;
    }

    setTimeout(() => {
      entry.target.classList.add("is-inviewActive");
      entry.target.classList.remove("is-inviewOver", "is-inviewReady");
    }, delayTime);

    if (activeRootClass !== false) {
      document.documentElement.classList.add(`is-${activeRootClass}Active`);
      document.documentElement.classList.remove(`is-${activeRootClass}Over`);
    }
  } else {
    // console.log('auto');
    if (typeof entry.target.dataset.parent !== "undefined") {
      activeRootClass = entry.target.dataset.parent;
    }

    entry.target.classList.remove("is-inviewActive");
    document.documentElement.classList.remove("is-inviewActive");
    if (activeRootClass !== false) {
      document.documentElement.classList.remove(`is-${activeRootClass}Active`);
    }

    if (entry.boundingClientRect.y < entry.rootBounds.y) {
      entry.target.classList.add("is-inviewOver");

      if (activeRootClass !== false) {
        document.documentElement.classList.add(`is-${activeRootClass}Over`);
      }
    }
  }
};
