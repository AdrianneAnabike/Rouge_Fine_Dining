document.addEventListener("DOMContentLoaded", function () {
  // ==============================
  // MOBILE MENU TOGGLE
  // ==============================
  const menuToggle = document.querySelector(".menu-toggle");
  const headerMenu = document.querySelector(".header-menu");

  if (menuToggle && headerMenu) {
    menuToggle.addEventListener("click", function () {
      menuToggle.classList.toggle("toggled");
      headerMenu.classList.toggle("toggled");
    });

    // Close menu when any link is clicked
    headerMenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        menuToggle.classList.remove("toggled");
        headerMenu.classList.remove("toggled");
      });
    });
  }

  // ==============================
  // STICKY HEADER ON SCROLL
  // ==============================
  const siteHeader = document.querySelector(".site-header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      siteHeader.classList.add("sticky_head");
    } else {
      siteHeader.classList.remove("sticky_head");
    }
  });

  // ==============================
  // PARALLAX EFFECT (MOUSE + SCROLL)
  // ==============================
  const scene = document.querySelector(".parallax-scene");
  if (scene) {
    const shapes = scene.querySelectorAll("[data-depth]");

    // Mouse-based parallax
    document.addEventListener("mousemove", (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;

      shapes.forEach((shape) => {
        const depth = parseFloat(shape.getAttribute("data-depth"));
        const moveX = -x * depth * 30;
        const moveY = -y * depth * 30;
        shape.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
      });
    });

    // Scroll-based parallax (for mobile/touch)
    window.addEventListener("scroll", () => {
      const scrollY = window.scrollY;
      shapes.forEach((shape) => {
        const depth = parseFloat(shape.getAttribute("data-depth"));
        const moveY = scrollY * depth * 0.4;
        shape.style.transform = `translate3d(0, ${moveY}px, 0)`;
      });
    });
  }
});



//
// Show/hide close icon when Fancybox opens/closes
Fancybox.bind("[data-fancybox='video']", {
  on: {
    reveal: (fancybox) => {
      document.querySelector('.video-close').style.display = 'block';
    },
    destroy: (fancybox) => {
      document.querySelector('.video-close').style.display = 'none';
    }
  }
});

// Close video manually when clicking the icon
document.querySelector('.video-close').addEventListener('click', () => {
  Fancybox.close();
});


var book_table = new Swiper(".book-table-img-slider", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,
        effect: "coverflow",
        coverflowEffect: {
            rotate: 3,
            stretch: 2,
            depth: 100,
            modifier: 5,
            slideShadows: false,
        },
        loopAdditionSlides: true,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var team_slider = new Swiper(".team-slider", {
        slidesPerView: 3,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        speed: 2000,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            },
        },
    });


const scrollBtn = document.getElementById("scrollTopBtn");

  // Show button when scrolled down
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.classList.add("show");
    } else {
      scrollBtn.classList.remove("show");
    }
  });

  // Scroll to top smoothly
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  

const faqTopics = document.querySelectorAll(".faq-topic");

faqTopics.forEach((topic) => {
  topic.addEventListener("click", function () {
    // Close any other open topic
    faqTopics.forEach((item) => {
      if (item !== this) {
        item.classList.remove("active");
        const otherPanel = item.nextElementSibling;
        if (otherPanel && otherPanel.classList.contains("faq-content")) {
          otherPanel.style.maxHeight = null;
        }
      }
    });

    // Toggle current topic
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel && panel.classList.contains("faq-content")) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
      }
    }
  });
});

// ===== SUB-QUESTION TOGGLE =====
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", function () {
    // Close other sub-questions in the same section
    const parentContent = this.closest(".faq-content");
    const allQuestions = parentContent.querySelectorAll(".faq-question");
    allQuestions.forEach((q) => {
      if (q !== this) {
        q.classList.remove("active");
        const otherAnswer = q.nextElementSibling;
        if (otherAnswer && otherAnswer.classList.contains("faq-answer")) {
          otherAnswer.style.maxHeight = null;
        }
      }
    });

    // Toggle this question
    this.classList.toggle("active");
    const answer = this.nextElementSibling;
    if (answer && answer.classList.contains("faq-answer")) {
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
      }
    }
  });
});
    