// Smooth scroll
function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

// Login
function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  if (email === "admin" && password === "1234") {
    document.getElementById("loginStatus").innerText = "✅ Logged in";
  } else {
    document.getElementById("loginStatus").innerText = "❌ Invalid credentials";
  }
}

// Booking
function bookSlot() {
  let service = document.getElementById("service").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;

  document.getElementById("confirmation").innerText =
    `✅ ${service} booked on ${date} at ${time}`;
}

// Fade animation on scroll
const faders = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {
  faders.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("show");
    }
  });
});