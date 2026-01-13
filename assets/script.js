// Open contact modal
function openContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
  }
}

// Close contact modal
function closeContactModal() {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
  }
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
document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("contactModal");
  if (modal) {
    modal.addEventListener("click", function (e) {
      if (e.target === this) {
        closeContactModal();
      }
    });
  }

  // Add click handler only to the hero CTA button
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
