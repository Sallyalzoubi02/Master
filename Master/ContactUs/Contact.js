function AboutUs() {
    window.location.href="../aboutUs/about.html"
}
function Home() {
    window.location.href="../home/home.html"
}
function Contact() {
    window.location.href="../ContactUs/Contact.html"
}
function login() {
    window.location.href="../SignUp/SignUp.html"
}
function register() {
    window.location.href="../SignUp/SignUp.html?show=register"
}
function shop() {
    window.location.href="../shop/shop.html"
}

function Cart() {
    window.location.href="../cart/cart.html"
}
function profile(){
    window.location.href="../profile/profile.html"
}
function logout() {
    sessionStorage.setItem("isLogged","false");
    window.location.href="../home/home.html";
}
function recycling() {
    window.location.href = "../recycling/recycling.html";
}

window.onload = function () {
    setTimeout(function() {
        var isLogged = sessionStorage.getItem("isLogged");
        console.log(isLogged);
        if (isLogged === "true") {
            const dropdown = document.getElementById("dropdown-menu");
            dropdown.innerHTML = `
                <li><a class="dropdown-item" onclick="profile()">الصفحة الشخصية</a></li>
                <li><hr class="dropdown-divider"></li>
                <li><a class="dropdown-item" onclick="logout()">تسجيل الخروج</a></li>
            `;
        }
    }, 100); // Delay to ensure session is loaded
};

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate"); // اختيار العناصر
    

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add("visible"); // إضافة الـ class لجعل العنصر يظهر
        });
    }, 500); // وقت التأخير (500 مللي ثانية)
    // وقت التأخير (500 مللي ثانية)
});

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

function bluer() {
    const dropdown = document.getElementById("dropdown-menu");
    const userIcon = document.getElementById("usericon");
    const mainContent = document.getElementById("content");
    console.log(dropdown)
    console.log(userIcon)
    // userIcon.addEventListener("click", function (e) {
        // e.stopPropagation();
    const isOpen = dropdown.classList.contains("show");
    console.log(isOpen)

        // Toggle the blur effect
    if (isOpen) {
        mainContent.classList.add("blurred");
        
    } else {
        mainContent.classList.remove("blurred");
        
    }
    

    // Add a single event listener for clicking outside
    document.addEventListener("click", function (e) {
        // Check if the click is outside the dropdown and user icon
        if (!dropdown.contains(e.target) && !userIcon.contains(e.target)) {
            dropdown.classList.remove("show"); // Close the dropdown
            mainContent.classList.remove("blurred"); // Remove the blur
        }
    });
}

const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        const icon = item.querySelector('.faq-icon');

        question.addEventListener('click', () => {
            const isOpen = answer.classList.contains('open');

            // Close all answers
            document.querySelectorAll('.faq-answer').forEach(a => a.classList.remove('open'));
            document.querySelectorAll('.faq-icon').forEach(i => i.innerHTML = '<img src="../img/plus-square.png" alt="">');

            if (!isOpen) {
                answer.classList.add('open');
                icon.innerHTML = '<img src="../img/minus-square.png" alt="">';
            }
        });
    });
