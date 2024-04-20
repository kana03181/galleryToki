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

// フォームの送信時の共通処理
const form_submit = (e) => {
  e.preventDefault();
};

// 電話番号の確認
export const form_Tel = function () {
  const isValidTelNumber = (telNumber) => {
    const phonePattern = /^(?:0\d{1,4}-\d{1,4}-\d{4}|0\d{9,10})$/;
    return phonePattern.test(telNumber);
  };
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      form_submit(e);

      const telNumber = tel.value;
      if (!isValidTelNumber(telNumber)) {
        errorMsg(tel, "電話番号を正しく入力してください。");
      }
    });
  }
};

// メールアドレスの確認
export const form_Email = function () {
  const isValidEmailAddress = (EmailAddress) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(EmailAddress);
  };

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      form_submit(e);

      const emailAddress = email.value;
      if (!isValidEmailAddress(emailAddress)) {
        errorMsg(email, "メールアドレスの形式を確認してください。");
      }
    });
  }
};
