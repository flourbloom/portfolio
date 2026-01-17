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

// Toggle mobile menu
function toggleMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  if (hamburger && nav) {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");

    if (overlay) {
      overlay.classList.toggle("active");
    }

    // Prevent body scroll when menu is open
    if (nav.classList.contains("active")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }
}

// Close mobile menu
function closeMobileMenu() {
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");
  const overlay = document.querySelector(".mobile-menu-overlay");

  if (hamburger && nav) {
    hamburger.classList.remove("active");
    nav.classList.remove("active");

    if (overlay) {
      overlay.classList.remove("active");
    }

    document.body.style.overflow = "auto";
  }
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

  // Hamburger menu functionality
  const hamburger = document.getElementById("hamburger");
  const nav = document.getElementById("nav-menu");

  if (hamburger) {
    hamburger.addEventListener("click", toggleMobileMenu);
  }

  // Create and add overlay for mobile menu
  if (!document.querySelector(".mobile-menu-overlay")) {
    const overlay = document.createElement("div");
    overlay.className = "mobile-menu-overlay";
    document.body.appendChild(overlay);

    overlay.addEventListener("click", closeMobileMenu);
  }

  // Close mobile menu when clicking a nav link
  const navLinks = document.querySelectorAll("#nav-menu ul li a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Check if we're in mobile view
      if (window.innerWidth <= 1024) {
        closeMobileMenu();
      }
    });
  });

  // Close mobile menu on window resize if viewport becomes larger
  window.addEventListener("resize", function () {
    if (window.innerWidth > 1024) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on escape key
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeMobileMenu();
      closeContactModal();
    }
  });
});
