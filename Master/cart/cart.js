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

function renderCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartTableBody = document.querySelector('tbody');
    cartTableBody.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <th scope="row">
                <div class="d-flex align-items-center">
                    <img src="${item.image}" class="img-fluid rounded-3" style="width: 120px;" alt="${item.name}">
                    <div class="flex-column ms-4">
                        <p class="mb-2">${item.title}</p>
                    </div>
                </div>
            </th>
            
            <td class="align-middle">
                <div class="d-flex align-item-center justify-content-center flex-row">
                    <button class="btn btn-link px-2 text-green" onclick="updateQuantity('${item.title}', -1)">
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" value="${item.quantity}" class="form-control form-control-sm" style="width: 50px;" readonly />
                    <button class="btn btn-link px-2 text-green" onclick="updateQuantity('${item.title}', 1)">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
            </td>
            <td class="align-middle">
                <p class="mb-0 text-center" dir='ltr' style="font-weight: 500; "> ${(item.price * item.quantity).toFixed(2)} JD</p>
            </td>
            <td class="align-middle">
                <div class="d-flex align-item-center justify-content-center flex-row">
                    <button class="btn btn-link px-2 text-danger" onclick="deleteItem('${item.title}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </div>
            </td>
        `;
        cartTableBody.appendChild(row);
    });

    updateCartTotal();
}

function updateCartTotal() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    document.querySelector('.total-price').textContent = `${total.toFixed(2)} JD`;
    const tax = 2.99; 
    document.querySelector('.tax').textContent = `${ (tax + total).toFixed(2)} JD`;

}

function updateQuantity(title, change) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(cartItem => cartItem.title === title);

    if (item) {
        item.quantity = Math.max(1, item.quantity + change); // Prevent quantity from going below 1
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCart(); // Re-render the cart to update UI
    }
}

// Function to delete an item with SweetAlert2 confirmation
function deleteItem(title) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const item = cart.find(cartItem => cartItem.title === title);

    if (!item) return;

    // SweetAlert2 confirmation dialog
    Swal.fire({
        title: 'هل أنت متأكد؟',
        text: `هل تريد حذف  "${item.title}" من السلة`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'حذف',
        cancelButtonText: 'إلغاء',
    }).then((result) => {
        if (result.isConfirmed) {
            // Find the row of the item in the table
            const cartTableBody = document.querySelector('tbody');
            const rows = cartTableBody.querySelectorAll('tr');

            // Animate fade-out for the item
            rows.forEach(row => {
                if (row.querySelector('p.mb-2')?.textContent === item.title) {
                    row.style.transition = 'opacity 0.5s ease';
                    row.style.opacity = '0';

                    setTimeout(() => {
                        // Remove the item after the animation
                        const updatedCart = cart.filter(cartItem => cartItem.title !== title);
                        localStorage.setItem('cart', JSON.stringify(updatedCart));
                        renderCart();

                        // Show success alert after deletion
                        Swal.fire(
                            'Deleted!',
                            `"${item.title}" has been removed from the cart.`,
                            'success'
                        );
                    }, 500); // Match the transition duration
                }
            });
        }
    });
}


// Call this function when the page loads
renderCart();

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