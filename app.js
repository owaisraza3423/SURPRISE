// Typing Effect
    new Typed("#typing", {
      strings: [
        "Best Quality : Handpicked accessories crafted for durability and excellence",
        "Luxury Experience : Elevate your lifestyle with our premium gadgets",
        "Unique Innovation : Cutting-Edge designs that set you apart",
        "Keen Performance : Optimized for top-tier functionality and efficiency"
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 1500,
      loop: true
    });

    // Card Slider
    const cards = document.querySelectorAll(".card");
    const nextBtn = document.querySelector(".btn-right");
    const prevBtn = document.querySelector(".btn-left");
    let activeIndex = 0;

    function updateCards() {
      cards.forEach((card, index) => {
        card.classList.remove("active");
        if (index === activeIndex) {
          card.classList.add("active");
        }
        card.style.transform = `translateX(${(index - activeIndex) * 320}px) scale(${index === activeIndex ? 1 : 0.8})`;
        card.style.opacity = index === activeIndex ? 1 : 0.5;
        card.style.zIndex = index === activeIndex ? 2 : 1;
      });
    }

    nextBtn.addEventListener("click", () => {
      activeIndex = (activeIndex + 1) % cards.length;
      updateCards();
    });

    prevBtn.addEventListener("click", () => {
      activeIndex = (activeIndex - 1 + cards.length) % cards.length;
      updateCards();
    });

    updateCards();