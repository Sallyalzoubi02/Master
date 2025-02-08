

function AboutUs() {
    window.location.href = "../aboutUs/about.html"
}
function Home() {
    window.location.href = "../home/home.html"
}
function Contact() {
    window.location.href = "../ContactUs/Contact.html"
}
function login() {
    window.location.href = "../SignUp/SignUp.html"
}
function Cart() {
    window.location.href = "../cart/cart.html"
}
function logout() {
    sessionStorage.setItem("isLogged","false");
    window.location.href="../home/home.html";
}
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
