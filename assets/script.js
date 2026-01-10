// Open contact modal
function openContactModal() {
  document.getElementById("contactModal").classList.add("active");
  document.body.style.overflow = "hidden";
}

// Close contact modal
function closeContactModal() {
  document.getElementById("contactModal").classList.remove("active");
  document.body.style.overflow = "auto";
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const formData = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    message: form.message.value,
  };

  // Log form data (you can replace this with actual API call)
  console.log("Form submitted:", formData);

  // Show success message
  alert("Thank you for your message! I'll get back to you soon.");

  // Reset form and close modal
  form.reset();
  closeContactModal();
}

// Close modal when clicking outside
document.getElementById("contactModal").addEventListener("click", function (e) {
  if (e.target === this) {
    closeContactModal();
  }
});

// Add click handler only to the hero CTA button
document.addEventListener("DOMContentLoaded", function () {
  const heroButton = document.querySelector(
    '.hero .cta-button[href="#contact"]'
  );
  if (heroButton) {
    heroButton.addEventListener("click", function (e) {
      e.preventDefault();
      openContactModal();
    });
  }
});
