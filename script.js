// Scroll animation
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
  reveals.forEach(el => {
    if (el.getBoundingClientRect().top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Contact form → Backend API
document.getElementById("contactForm").addEventListener("submit", async e => {
  e.preventDefault();

  const inputs = e.target.elements;
  const data = {
    name: inputs[0].value,
    email: inputs[1].value,
    message: inputs[2].value
  };

  const res = await fetch("http://localhost:5000/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  document.getElementById("status").textContent =
    res.ok ? "Message sent successfully ✅" : "Error sending message ❌";
});
