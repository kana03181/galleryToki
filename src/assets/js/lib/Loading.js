export default class Loading {
  constructor(options) {
    this.timeoutId;

    this.defaultOptions = {
      isJS: true,
      isLoad: true,
      isIos: true,
      isResize: true,
      introSelector: ".js-intro",
      targetSelector: "html",
    };

    this.options = Object.assign(this.defaultOptions, options);
    this.introElem = document.querySelector(this.options.introSelector);
    this.targetElem = document.querySelector(this.options.targetSelector);

    if (!this.targetElem) {
      return;
    }

    this._init();
  }

  _init() {
    if (this.options.isJS) {
      this.targetElem.classList.add("is-useJs");
    }

    if (this.options.isLoad) {
      window.addEventListener("load", () => {
        this.targetElem.classList.add("is-loaded");

        if (this.introElem != null) {
          this._loaded();
        }
      });
    }

    if (this.options.isIos) {
      this._checkIos();
    }
    if (this.options.isResize) {
      window.addEventListener("resize", this._resize.bind(this), { passive: true });
    }
  }

  _loaded() {
    setTimeout(() => {
      this.targetElem.classList.add("is-start");
    }, 1600);
  }

  _checkIos() {
    const isIos =
      /iP(hone|(o|a)d)/.test(navigator.userAgent) ||
      (/iPad|Macintosh/i.test(navigator.userAgent) && "ontouchend" in document);

    if (isIos) {
      this.targetElem.classList.add("is-ios");
    }
  }

  _resize() {
    this.targetElem.classList.add("is-resize");
    clearTimeout(this.timeoutId);

    this.timeoutId = setTimeout(() => {
      this.targetElem.classList.remove("is-resize");
    }, 500);
  }
}
