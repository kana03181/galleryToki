export default class Slider {
  constructor(elem, options) {
    this.DOM = {};
    this.DOM.slider = document.querySelector(elem);
    this.DOM.nav = document.querySelector(".js-slider__nav");
    this.DOM.prevBtn = document.querySelector(".js-slider__prevButton");
    this.DOM.nextBtn = document.querySelector(".js-slider__nextButton");
    this.DOM.counter = document.querySelector(".js-slider__counter");
    this.timerId = null;
    this.total = null;
    this.page = 0;

    // デフォルト
    this.defaultOptions = {
      mode: "fade", // エフェクト
      duration: 6000, // アニメーション時間
      autoPlay: true, // 自動再生
      digit: 1, // カウンターの桁数
    };

    // オプション
    this.options = Object.assign(this.defaultOptions, options);

    // 初期設定
    this._init(); // 初期化
  }

  // 初期化メソッド

  _init() {
    // スライダーの要素がない
    if (!this.DOM.slider) {
      return false;
    }

    // スライダーのトータル
    this.total = this.DOM.slider.children.length;

    // モード
    this.DOM.slider.setAttribute("data-mode", this.options.mode);

    // ナビゲーション
    if (this.DOM.nav !== null) {
      this._createNav();
    }

    // 前へボタン
    if (this.DOM.prevBtn) {
      this.DOM.prevBtn.addEventListener("click", this._prevPage.bind(this), { passive: true });
    }

    // 次へボタン
    if (this.DOM.nextBtn) {
      this.DOM.nextBtn.addEventListener("click", this._nextPage.bind(this), { passive: true });
    }

    // カウンター
    if (this.DOM.counter !== null) {
      this._createCounter();
    }

    // 写真を含めた読み込み完了時
    window.addEventListener("load", () => {
      this._setPage();
    });
  }

  // 一つ前のページを取得
  _getPrev() {
    return this.page < 1 ? this.total - 1 : this.page - 1;
  }

  // 一つ次のページを取得
  _getNext() {
    return this.page >= this.total - 1 ? 0 : this.page + 1;
  }

  // スライダーの処理
  _setPage() {
    // タイマー停止
    if (this.timerId) {
      this._stopPlay();
    }

    Array.from(this.DOM.slider.children).forEach((elem) => {
      elem.classList.remove("is-sliderPrev");
      elem.classList.remove("is-sliderActive");
      elem.classList.remove("is-sliderNext");
    });

    this.DOM.slider.children[this._getPrev()].classList.add("is-sliderPrev");
    this.DOM.slider.children[this.page].classList.add("is-sliderActive");
    this.DOM.slider.children[this._getNext()].classList.add("is-sliderNext");

    // カウンター
    if (this.DOM.counter !== null) {
      this._setCounter();
    }

    // 自動再生
    if (this.options.autoPlay) {
      this._startPlay();
    }
  }

  // 自動再生の開始
  _startPlay() {
    this.timerId = setTimeout(() => {
      if (this.page >= this.total - 1) {
        this.page = 0;
      } else {
        this.page++;
      }

      this._setPage();
    }, this.options.duration);
  }

  // 自動再生の停止
  _stopPlay() {
    clearTimeout(this.timerId);
  }

  // 前のコンテンツに移動
  _prevPage() {
    this.page = this._getPrev();
    this._setPage();
  }

  // 次のコンテンツに移動
  _nextPage() {
    this.page = this._getNext();
    this._setPage();
  }

  _changePage(e) {
    // console.log(e.currentTarget);
    this.page = Number(e.currentTarget.getAttribute("data-id"));
    // console.log(this.page);
    this._setPage();
  }

  _createNav() {
    for (let i = 0; i < this.total; i++) {
      // 要素の生成
      let listElem = document.createElement("li");
      let buttonElem = document.createElement("button");
      let spanElem = document.createElement("span");

      // テキストの生成
      const buttonText = document.createTextNode(i + 1);

      // classの追加
      listElem.classList.add("c-slider__navItem");
      buttonElem.classList.add("c-slider__navButton");
      spanElem.classList.add("u-visuallyhidden");

      // 属性の追加
      buttonElem.setAttribute("type", "button");
      buttonElem.setAttribute("data-id", i);

      // 要素の挿入
      spanElem.appendChild(buttonText);
      buttonElem.appendChild(spanElem);
      listElem.appendChild(buttonElem);
      this.DOM.nav.appendChild(listElem);

      // イベントの追加
      buttonElem.addEventListener("click", this._changePage.bind(this), { passive: true });
    }
  }

  _createCounter() {
    // 要素の生成
    this.DOM.count = document.createElement("span");
    this.DOM.total = document.createElement("span");
    this.DOM.operator = document.createElement("span");

    // テキストの生成
    const operatorText = document.createTextNode("/");

    // classを追加
    this.DOM.count.classList.add("c-slider__count");
    this.DOM.total.classList.add("c-slider__total");

    // テキストを挿入
    this.DOM.operator.appendChild(operatorText);

    // 要素を挿入
    this.DOM.counter.appendChild(this.DOM.count);
    this.DOM.counter.appendChild(this.DOM.operator);
    this.DOM.counter.appendChild(this.DOM.total);
  }

  _setCounter() {
    this.DOM.count.innerText = (this.page + 1).toString().padStart(this.options.digit, "0");
    this.DOM.total.innerText = this.total.toString().padStart(this.options.digit, "0");
  }
}
