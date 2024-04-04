export default class Close {
  constructor(ele, options) {
    this.DOM = {};
    this.DOM.btn = document.querySelectorAll(ele);

    this.defaultOptions = {
      controlId: false,
    };
    this.options = Object.assign(this.defaultOptions, options);

    // console.log(this.DOM.btn);
    if (this.DOM.btn !== null) {
      this.DOM.btn.forEach((elem) => {
        elem.addEventListener("click", this._close.bind(this), { passive: true });
      });
    }
  }

  _close(e) {
    const href = e.currentTarget.getAttribute("href");

    if (this.options.controlId !== false && href.startsWith("#")) {
      this.DOM.controlId = document.querySelector(`[aria-controls="${this.options.controlId}"]`);
      const isExpanded = this.DOM.controlId.getAttribute("aria-expanded") !== "false";
      if (isExpanded) {
        this.DOM.controlId.click();
      }
    }
  }
}
