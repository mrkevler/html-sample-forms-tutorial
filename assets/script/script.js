/* HTML forms tutorial - mrKevler */
// Forms tutorial interactivity
document.addEventListener("DOMContentLoaded", function () {
  console.log("Forms Showcase initialized successfully");

  // Generate current year in footer
  const currentYear = new Date().getFullYear();
  const yearElement = document.getElementById("currentYear");
  if (yearElement) {
    yearElement.textContent = currentYear;
    console.log("Year updated to:", currentYear);
  } else {
    console.error("Year element not found in DOM");
  }

  // Smooth scrolling function for navigation and CTA buttons
  function scrollToSection(targetSelector) {
    const targetElement = document.querySelector(targetSelector);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 20; // Small offset from top
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    } else {
      console.warn("Target element not found:", targetSelector);
    }
  }

  // Make scrollToSection globally accessible
  window.scrollToSection = scrollToSection;

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      scrollToSection(targetId);

      // Update active navigation state
      updateActiveNavigation(targetId);
    });
  });

  // Update active navigation based on current section
  function updateActiveNavigation(targetId) {
    // Remove active class from all nav links
    document.querySelectorAll(".nav-menu a").forEach((link) => {
      link.classList.remove("active");
    });

    // Add active class to current nav link
    const activeLink = document.querySelector(
      `.nav-menu a[href="${targetId}"]`
    );
    if (activeLink) {
      activeLink.classList.add("active");
    }
  }

  // Header scroll effect
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.boxShadow = "0 6px 25px rgba(30, 136, 229, 0.15)";
      header.style.transform = "translateY(-2px)";
    } else {
      header.style.boxShadow = "0 4px 20px rgba(30, 136, 229, 0.1)";
      header.style.transform = "translateY(0)";
    }
  });

  // Intersection Observer for animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
        entry.target.classList.add("animate-in");
      }
    });
  }, observerOptions);

  // Observe sections for fade-in animation
  document
    .querySelectorAll(".forms-section, .about-section")
    .forEach((section) => {
      section.style.opacity = "0";
      section.style.transform = "translateY(40px)";
      section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      observer.observe(section);
    });

  // Form cards hover effects and click tracking
  const formCards = document.querySelectorAll(".form-card");
  formCards.forEach((card, index) => {
    // Add hover sound effect (optional)
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-8px) scale(1.02)";
    });

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)";
    });

    // Track clicks on form cards
    card.addEventListener("click", function (event) {
      // Only track if not clicking on buttons
      if (!event.target.closest(".form-actions")) {
        console.log(`Form card ${index + 1} clicked`);

        // Add click animation
        this.style.transform = "scale(0.98)";
        setTimeout(() => {
          this.style.transform = "translateY(-8px) scale(1.02)";
        }, 150);
      }
    });
  });

  // Navigation scroll spy
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');

    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (window.scrollY >= sectionTop - 200) {
        currentSection = section.getAttribute("id");
      }
    });

    // Update active navigation
    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentSection}`) {
        link.classList.add("active");
      }
    });
  });

  // Dynamic stats counter animation
  function animateStats() {
    const statNumbers = document.querySelectorAll(".stat-number");

    statNumbers.forEach((stat) => {
      const text = stat.textContent;
      if (text === "4") {
        animateNumber(stat, 0, 4, 1000);
      } else if (text === "100%") {
        animateNumber(stat, 0, 100, 1200, "%");
      }
    });
  }

  function animateNumber(element, start, end, duration, suffix = "") {
    const startTime = performance.now();

    function updateNumber(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const current = Math.round(start + (end - start) * progress);
      element.textContent = current + suffix;

      if (progress < 1) {
        requestAnimationFrame(updateNumber);
      }
    }

    requestAnimationFrame(updateNumber);
  }

  // Trigger stats animation when hero comes into view
  const heroObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          heroObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.5 }
  );

  // Trigger stats animation when hero comes into view
  const heroObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateStats();
          heroObserver.unobserve(entry.target); // Only animate once
        }
      });
    },
    { threshold: 0.5 }
  );

  const heroSection = document.querySelector(".hero");
  if (heroSection) {
    heroObserver.observe(heroSection);
  }

  // Performance optimization
  function optimizeInteractions() {
    const formCards = document.querySelectorAll(".form-card");
    formCards.forEach((card) => {
      card.style.willChange = "transform";
    });
  }

  optimizeInteractions();

  // Console log for development
  console.log("Forms Showcase initialized successfully");
  console.log(`Found ${formCards.length} form cards`);
});
