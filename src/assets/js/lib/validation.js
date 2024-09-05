export default function validateContactForm() {
  document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const tel = document.getElementById("tel");
    const email = document.getElementById("email");

    // エラーメッセージの生成
    const errorMsg = (el, error) => {
      const newSpan = document.createElement("span");
      newSpan.classList.add("is-error");
      newSpan.textContent = error;
      el.parentNode.appendChild(newSpan);
    };

    // エラーメッセージのクリア
    const clearErrorMsg = (el) => {
      const errorElement = el.parentNode.querySelector(".is-error");
      if (errorElement) {
        errorElement.remove();
      }
    };

    // 電話番号のバリデーション
    const isValidTelNumber = (telNumber) => {
      const phonePattern = /^(?:0\d{1,4}-\d{1,4}-\d{4}|0\d{9,10})$/;
      return phonePattern.test(telNumber);
    };

    // メールアドレスのバリデーション
    const isValidEmailAddress = (EmailAddress) => {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailPattern.test(EmailAddress);
    };

    // フォームの送信時の共通処理
    const form_submit = (e) => {
      e.preventDefault();
      let isValid = true;

      // 電話番号のバリデーション
      if (tel) {
        //telがnullでないか確認
        const telNumber = tel.value;
        clearErrorMsg(tel);
        if (!isValidTelNumber(telNumber)) {
          errorMsg(tel, "電話番号を正しく入力してください。");
          isValid = false;
        }
      }

      // メールアドレスのバリデーション
      if (email) {
        //emailがnullでないか確認
        const emailAddress = email.value;
        clearErrorMsg(email);
        if (!isValidEmailAddress(emailAddress)) {
          errorMsg(email, "メールアドレスの形式を確認してください。");
          isValid = false;
        }
      }

      // すべてのバリデーションが成功した場合にフォームを送信
      if (isValid && contactForm) {
        //contactForm が null でないか確認
        contactForm.submit();
      }
    };

    // フォーム送信時のイベントリスナーを設定
    if (contactForm) {
      contactForm.addEventListener("submit", form_submit);
    }

    // ユーザーが入力を修正したときにエラーメッセージをクリア
    if (tel) {
      tel.addEventListener("input", () => clearErrorMsg(tel));
    }

    if (email) {
      email.addEventListener("input", () => clearErrorMsg(email));
    }
  });
}
