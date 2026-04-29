const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const inquiryForm = document.getElementById("inquiryForm");
const formMessage = document.getElementById("formMessage");
const yearEl = document.getElementById("year");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (inquiryForm && formMessage) {
  inquiryForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(inquiryForm);
    const fullName = String(formData.get("fullName") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    const phoneRegex = /^[0-9]{10}$/;

    if (!fullName || !phone || !message) {
      formMessage.textContent = "Please fill out all required fields.";
      formMessage.style.color = "#722f37";
      return;
    }

    if (!phoneRegex.test(phone)) {
      formMessage.textContent = "Please enter a valid 10-digit mobile number.";
      formMessage.style.color = "#722f37";
      return;
    }

    formMessage.textContent = "Inquiry submitted successfully. We will contact you soon.";
    formMessage.style.color = "#0a1f44";
    inquiryForm.reset();
  });
}
