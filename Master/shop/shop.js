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

    document.addEventListener("DOMContentLoaded", () => {
        const elements = document.querySelectorAll(".animate"); // اختيار العناصر
        
    
        setTimeout(() => {
            elements.forEach(element => {
                element.classList.add("visible"); // إضافة الـ class لجعل العنصر يظهر
            });
        }, 500); // وقت التأخير (500 مللي ثانية)
        
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


//---------------cards fetch-----------------------
document.addEventListener("DOMContentLoaded", () => {
    const cardContainer = document.getElementById("card-container");

    // Fetch JSON data
    fetch("cards.json")
        .then(response => response.json())
        .then(data => {
            data.forEach(card => {
                const cardElement = `
                <div class="card" style="max-width: 320px">
                    <img src="${card.image}" class="card-img-top" alt="${card.title}">
                    <div class="card-body">
                        <h5 class="card-title">${card.title}</h5>
                        <p class="card-text">${card.description}</p>
                        <div class="d-flex justify-content-between align-items-center">
                            <span class="h5 mb-0">${card.price}JD</span>
                            <div>
                                ${getStars(card.rating)}
                                <small class="text-muted">(${card.rating})</small>
                            </div>
                        </div>
                    </div>
                    <div class="card-footer d-flex justify-content-between bg-light">
                        <button class="btn btn-green btn-sm" onclick="addToCart('${card.title}','${card.image}','${card.price}')">Add to Cart</button>
                        <button class="btn btn-outline-secondary btn-sm"><i class="bi bi-heart"></i></button>
                    </div>
                </div>
                `;
                cardContainer.innerHTML += cardElement;
            });
        });

    // Function to generate stars
    function getStars(rating) {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;
        let stars = "";

        for (let i = 0; i < fullStars; i++) {
            stars += `<i class="bi bi-star-fill text-warning"></i>`;
        }

        if (halfStar) {
            stars += `<i class="bi bi-star-half text-warning"></i>`;
        }

        for (let i = fullStars + (halfStar ? 1 : 0); i < 5; i++) {
            stars += `<i class="bi bi-star text-muted"></i>`;
        }

        return stars;
    }
});

//-------------add to cart---------------------
function addToCart(Title,img,Price) {
    const item ={
        title: Title,
        image:img,
        price: Price
    }
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(cartItem => cartItem.title === item.title);

    if (existingItem) {
        existingItem.quantity += 1; // Increment quantity if item already exists
    } else {
        item.quantity = 1; // Add new item with initial quantity
        cart.push(item);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Item added to cart!');
}
