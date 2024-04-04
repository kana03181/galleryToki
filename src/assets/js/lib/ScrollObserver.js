export default class ScrollObserver {
  constructor(els, cd, options) {
    this.els = document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0% 0% -240px",
      threshold: [0, 0.5, 1.0],
      once: true,
      readyClass: "is-inviewReady",
      activeRootClass: false,
    };
    this.cd = cd;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this.readyClass = this.options.readyClass;
    this._init();
  }

  _init() {
    const callback = function (entries, observer) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.cd(entry, true, this.options.activeRootClass);
          if (this.once && !this.options.activeRootClass) {
            observer.unobserve(entry.target);
          }
        } else {
          this.cd(entry, false, this.options.activeRootClass);
        }
      });
    };

    this.io = new IntersectionObserver(callback.bind(this), this.options);

    this.io.POLL_INTERVAL = 100;

    this.els.forEach((el) => {
      el.classList.add(this.readyClass);
      this.io.observe(el);
    });
  }

  destory() {
    this.io.disconnect();
  }
}
