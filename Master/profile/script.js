// let isLoggedIn= localStorage.getItem('isLoggedIn') ;
// var Base64
// const user = JSON.parse(localStorage.getItem("user"));
// let UserName=user.Username
// function getData(){
//     var username = document.getElementById('actualFullName');
//     var email = document.getElementById('actualEmail');
//     var phone = document.getElementById('actualPhone');
//     var gender = document.getElementById('actualGender');

//     var ProfImage = document.getElementById('profileImage');


//     const user = JSON.parse(localStorage.getItem("user"));
//     console.log(user);

//     username.innerHTML =  user.Username
//     email.innerHTML = user.regEmail
//     phone.innerHTML = user.phone
//     gender.innerHTML =  user.gender
//     document.getElementById('profileFullNameInput').value = user.Username;
//     document.getElementById('profileEmailInput').value = user.regEmail;
//     document.getElementById('phone').value = user.phone;
//     document.getElementById('gender').value = user.gender;
//     console.log('user.image',user.image)
//     if(user.image){
//         ProfImage.src=user.image;
//     }
    
// }
// getData();

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

// calendar
document.addEventListener("DOMContentLoaded", function() {
    const calendarElement = document.querySelector('#calendar');
    const calendar = new FullCalendar.Calendar(calendarElement, {
        initialView: 'dayGridMonth',
        locale: 'en-us',
        initialDate: '2024-02-13',
    });
    calendar.render();
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


function add(){
    window.location.href="../add/add.html"
}

document.getElementById("resetPasswordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة

    const currentPassword = document.getElementById("currentPassword").value;
    const newPassword = document.getElementById("newPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (newPassword.length < 6) {
        alert("يجب أن تكون كلمة المرور الجديدة على الأقل 6 أحرف.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("كلمة المرور الجديدة وتأكيدها غير متطابقين.");
        return;
    }

    // إرسال البيانات إلى السيرفر
    fetch('/change-password', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
            currentPassword: currentPassword, 
            newPassword: newPassword 
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert("تم تغيير كلمة المرور بنجاح.");
            document.getElementById("resetPasswordForm").reset();
            let modal = bootstrap.Modal.getInstance(document.getElementById('resetPasswordModal'));
            modal.hide();
        } else {
            alert("حدث خطأ: " + data.message);
        }
    })
    .catch(error => {
        console.error("Error:", error);
        alert("حدث خطأ في العملية.");
    });
});


// function saveChanges() {
//     const fullName = document.getElementById('profileFullNameInput').value;
//     const phone = document.getElementById('phone').value;
//     const user = JSON.parse(localStorage.getItem("user"));
//     user.Username = fullName
//     user.phone =phone
//     user.image=Base64;
//     let regEmail = user.regEmail
//     console.log(regEmail)
    
    
//     const users = JSON.parse(localStorage.getItem("users"));
//     console.log(users);
//     const userIndex = users.findIndex(user => user.regEmail === regEmail);
//     if (userIndex !== -1) {
//         users[userIndex].Username = fullName;
//         users[userIndex].phone = phone;
//         users[userIndex].image=Base64;
//     }
//     localStorage.setItem("users", JSON.stringify(users));
//     localStorage.setItem('user',JSON.stringify(user))
//     getData();
//     alert('Profile updated successfully!');
//     document.querySelector('#editProfileModal .btn-close').click();
// }


// function previewImage(event) {
//     const imageFile = event.target.files[0];
//     console.log('imageFile',imageFile)
//     if (imageFile) {
//         const reader = new FileReader();
//         reader.onload = function (e) {
//            Base64=e.target.result;
//            console.log('Base64',Base64);       

//         };
//         reader.onerror=(err)=>{
// console.error(err);
//         };
//         reader.readAsDataURL(imageFile);
//         const user = JSON.parse(localStorage.getItem("user"));
   
//     }
// }

// function CalculateAllTestResults(){

//     let IqScore=GetExamScore('iqans','iqcorrectAns')
//     let IqPercentage=parseInt(GetExamPercentage('iqcorrectAns',IqScore)*100) 
//     document.getElementById('IqTestResultPer').innerHTML=IqPercentage+'%';
//     document.getElementById('IqTestResult').style.setProperty('--percentage',IqPercentage)

    
//     let EnglishScore=GetExamScore('engans','engcorrectAns')
//     let EnglishPercentage=parseInt(GetExamPercentage('engcorrectAns',EnglishScore)*100) 
//     document.getElementById('EnglishTestResultPer').innerHTML=EnglishPercentage+'%';
//     document.getElementById('EnglishTestResult').style.setProperty('--percentage',EnglishPercentage)


//     let TechnicalScore=GetExamScore('techans','techcorrectAns')
//     let TechnicalPercentage=parseInt(GetExamPercentage('techcorrectAns',TechnicalScore)*100) 
//     document.getElementById('TechnicalTestResultPer').innerHTML=TechnicalPercentage+'%';
//     document.getElementById('TechnicalTestResult').style.setProperty('--percentage',TechnicalPercentage)

// }    



// function GetExamScore(arrName,corr){
//     let arrAns= sessionStorage.getItem(arrName+'-'+UserName).split(',')
//     let arrAnsb= sessionStorage.getItem(arrName+'-'+UserName)
//     console.log(arrAns)
//     let arrCorrect= sessionStorage.getItem(corr+'-'+UserName).split(',')
//     console.log(arrCorrect)
    
//     let score = 0
//     for (let i = 0 ; i < arrAns.length ; i++){
//         if (arrAns[i].trim() == arrCorrect[i].trim()){
//             score++;
//         }

//     }
//     return score;
// }


// function GetExamPercentage(corr,Currentscore){
    
//     let arrCorrect= sessionStorage.getItem(corr+'-'+UserName).split(',')
    
//     return Currentscore/arrCorrect.length;
    
// }

// CalculateAllTestResults();
