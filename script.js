// Register Form ရှိမရှိ အရင်စစ်မယ်
const regForm = document.querySelector('.reg-form');

if (regForm) {
    regForm.onsubmit = function(e) {
        e.preventDefault(); 
        alert("Registration Successful!");
        window.location.href = 'otp.html'; 
    };
}

// ပုံထဲက Line 12 ကနေ 26 အထိ နေရာမှာ ဒါလေးကို အစားထိုးလိုက်ပါ
let timeLeft = 60;
const secondsDisplay = document.getElementById("seconds");
const timerSpan = document.getElementById("timer-text");
const resendLink = document.getElementById("resend-link");

function startTimer() {
    const timer = setInterval(() => {
        timeLeft--;
        if (secondsDisplay) secondsDisplay.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            if (timerSpan) timerSpan.style.display = "none";
            if (resendLink) resendLink.style.display = "inline";
        }
    }, 1000);
}

// Resend OTP function ကိုလည်း အောက်နားမှာ ထပ်ထည့်ပေးပါ
function resendOTP() {
    alert("OTP has been resent!");
    location.reload(); 
}

// ဒါက ပုံထဲက Line 29 အတိုင်းပဲ ရှိနေရပါမယ်
window.onload = startTimer;

// OTP Box တစ်ခုချင်းစီ ခုန်သွားအောင်လုပ်နည်း
function moveToNext(current, index) {
    const inputs = document.querySelectorAll('.otp-input');
    if (current.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}

// Success Modal ပြဖို့အတွက်
function verifyOTP() {
    document.getElementById('successModal').style.display = 'flex';
}

function closeModal() {
    window.location.href = 'index.html';
}

function moveToNext(current, index) {
    const inputs = document.querySelectorAll('.otp-input');
    
    // ဂဏန်းတစ်ခုရိုက်ပြီးတာနဲ့ နောက် box ကို focus သွားမယ်
    if (current.value.length === 1 && index < inputs.length - 1) {
        inputs[index + 1].focus();
    }
}

// Input တွေအားလုံးကို keydown event နားထောင်ခိုင်းမယ်
document.querySelectorAll('.otp-input').forEach((input, index) => {
    input.addEventListener('keydown', (e) => {
        if (e.key === "Backspace" && input.value === "" && index > 0) {
            document.querySelectorAll('.otp-input')[index - 1].focus();
        }
    });
});
