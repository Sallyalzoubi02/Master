// تحميل شريط التنقل والـ footer
fetch('../nav/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav').innerHTML = data;

    // إعادة تفعيل زر الـ Burger Menu
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    if (menuToggle) {
      menuToggle.addEventListener('click', () => {
        menu.classList.toggle('active');
      });
    }
  });

fetch('../footer/footer.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

// دوال التنقل بين الصفحات
function AboutUs() {
  window.location.href = "../aboutUs/about.html";
}

function Home() {
  window.location.href = "../home/home.html";
}

function Contact() {
  window.location.href = "../ContactUs/Contact.html";
}

function login() {
  window.location.href = "../SignUp/SignUp.html";
}

function register() {
  window.location.href = "../SignUp/SignUp.html?show=register";
}

function shop() {
  window.location.href = "../shop/shop.html";
}

function Cart() {
  window.location.href = "../cart/cart.html";
}

function recycling() {
  window.location.href = "../recycling/recycling.html";
}

// إضافة الأنيميشن عند تحميل الصفحة
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".animate");

  setTimeout(() => {
    elements.forEach(element => {
      element.classList.add("visible");
    });
  }, 500);
});

// خطوات تغيير كلمة المرور
document.addEventListener("DOMContentLoaded", function () {
  const step1 = document.getElementById('step1');
  const step2 = document.getElementById('step2');
  const step3 = document.getElementById('step3');
  const success = document.getElementById('success');

  const sendCodeButton = step1.querySelector('button');
  const verifyCodeButton = step2.querySelector('button');
  const resetPasswordButton = step3.querySelector('button');

  const emailInput = step1.querySelector('input[type="email"]');
  const verificationInputs = step2.querySelectorAll('.verification-input');
  const passwordInput = step3.querySelector('input[type="password"]');
  const confirmPasswordInput = step3.querySelectorAll('input[type="password"]')[1];

  // إخفاء جميع الخطوات بشكل مبدئي
  function hideAllSteps() {
    step1.classList.add('d-none');
    step2.classList.add('d-none');
    step3.classList.add('d-none');
    success.classList.add('d-none');
  }

  // إظهار الخطوة المحددة
  function showStep(step) {
    hideAllSteps();
    step.classList.remove('d-none');
  }

  // التنقل إلى الخطوة 2 عند إرسال الرمز
  sendCodeButton.addEventListener('click', function () {
    if (emailInput.value) {
      showStep(step2);
    } else {
      alert("Please enter a valid email address.");
    }
  });

  // التحقق من الرمز وإظهار الخطوة 3
  verifyCodeButton.addEventListener('click', function () {
    let isCodeComplete = true;
    verificationInputs.forEach(input => {
      if (input.value === "") {
        isCodeComplete = false;
      }
    });

    if (isCodeComplete) {
      showStep(step3);
    } else {
      alert("Please enter the verification code.");
    }
  });

  // التحقق من تطابق كلمة المرور وإظهار النجاح
  resetPasswordButton.addEventListener('click', function () {
    if (passwordInput.value === confirmPasswordInput.value && passwordInput.value.length >= 8) {
      showStep(success);
    } else {
      alert("Passwords do not match or are too short.");
    }
  });

  // إظهار الصفحة الأولى عند تحميل الصفحة
  showStep(step1);
});
