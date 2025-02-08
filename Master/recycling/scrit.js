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
function edit_sub() {
    window.location.href="../subscribe/subscribeEdit.html";
}
function sub() {
    window.location.href="../subscribe/subscribe.html";
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


function showContent(id) {
    document.querySelectorAll('.recycle-content').forEach(content => {
      content.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
  }

