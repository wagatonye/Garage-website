

// Menu Toggle Functionality
const toggleBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

toggleBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  toggleBtn.classList.toggle("open");
});

// Booking Form Submission Validation
const bookingForm = document.getElementById("booking-form");

bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  // Retrieve form values
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const email = document.getElementById("email").value;
  const service = document.getElementById("service").value;
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value;

  // Validate form fields
  if (name && phone && service && date) {
    alert(`Booking Confirmed!\n\nName: ${name}\nPhone: ${phone}\nService: ${service}\nDate: ${date}\nMessage: ${message}`);
    bookingForm.reset(); // Reset form after submission
  } else {
    alert("Please fill out all required fields.");
  }
});