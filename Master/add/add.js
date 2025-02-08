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

function next(){
    window.location.href="add2.html"
}

function profile(){
    window.location.href="../profile/profile.html"
}
function logout() {
    sessionStorage.setItem("isLogged","false");
    window.location.href="../home/home.html";
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



document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".animate"); // اختيار العناصر
    const elements2 = document.querySelectorAll(".animate2"); // اختيار العناصر

    setTimeout(() => {
        elements.forEach(element => {
            element.classList.add("visible"); // إضافة الـ class لجعل العنصر يظهر
        });
    }, 500); // وقت التأخير (500 مللي ثانية)
    setTimeout(() => {
        elements2.forEach(element => {
            element.classList.add("visible2"); // إضافة الـ class لجعل العنصر يظهر
        });
    }, 500); // وقت التأخير (500 مللي ثانية)
});



// Initialize Leaflet Map
const map = L.map('map').setView([32.556, 35.85], 13); // Centered on Irbid as an example
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
}).addTo(map);

// Draggable marker for user-selected location
const marker = L.marker([32.556, 35.85], { draggable: true }).addTo(map);

marker.on('dragend', function () {
  const position = marker.getLatLng();
  alert(`Selected Location: Latitude ${position.lat}, Longitude ${position.lng}`);
});

var fastDelivery = document.getElementById("fastDelivery");
var paymentMethod = document.getElementById("paymentMethod");
var cardInfo = document.getElementById("cardInfo");

fastDelivery.addEventListener("change", function () {
  paymentMethod.disabled = !fastDelivery.checked;
});

paymentMethod.addEventListener("change", function () {
    if (paymentMethod.value === "card") {
      cardInfo.style.display = "block"; // Show card info
    } else {
      cardInfo.style.display = "none"; // Hide card info
    }
  });

  
function back() {
    window.history.back();
}