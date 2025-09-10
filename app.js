
      var typed = new Typed("#typing", {
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
           var swiper = new Swiper(".mySwiper", {
      effect: "coverflow", // 3D effect
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 20,
        stretch: 0,
        depth: 250,
        modifier: 1,
        slideShadows: true,
      },
      loop: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  // Typing Effect
new Typed("#typing", {
  strings: ["Free Shipping on All Orders!", "24/7 Customer Support", "Exclusive Deals for You!"],
  typeSpeed: 50,
  backSpeed: 30,
  backDelay: 2000,
  loop: true,
});

// Typed.js initialization
var typed = new Typed('#typing', {
  strings: [
    'Welcome to Blux Website',
    'Your Custom Engraving Partner',
    'Fast & Reliable Delivery'
  ],
  typeSpeed: 50,
  backSpeed: 25,
  loop: true
});

// Line by line reveal slider
const images = [
  "https://picsum.photos/id/1011/800/500",
  "https://picsum.photos/id/1015/800/500",
  "https://picsum.photos/id/1016/800/500",
  "https://picsum.photos/id/1020/800/500",
  "https://picsum.photos/id/1024/800/500"
];

const slider = document.getElementById("slider");
let index = 0;
let timer = null;

function buildSlide(imgUrl) {
  const slices = 6;
  const reveal = document.createElement("div");
  reveal.className = "reveal";
  reveal.style.setProperty("--img", `url(${imgUrl})`);

  for (let i = 0; i < slices; i++) {
    const s = document.createElement("span");
    s.className = "slice";
    s.style.setProperty("--i", i);
    s.style.backgroundImage = `url(${imgUrl})`;
    s.style.backgroundPosition = `${(i / (slices - 1)) * 100}% 50%`;
    reveal.appendChild(s);
  }

  const underlay = document.createElement("div");
  underlay.className = "underlay";
  underlay.style.setProperty("--img", `url(${imgUrl})`);

  slider.innerHTML = "";
  slider.append(underlay, reveal);
}

function show(i) {
  if (i < 0) i = images.length - 1;
  if (i >= images.length) i = 0;
  index = i;
  buildSlide(images[index]);
}

function startAutoPlay() {
  timer = setInterval(() => show(index + 1), 4000);
}

// Pause on hover
slider.addEventListener('mouseenter', () => clearInterval(timer));
slider.addEventListener('mouseleave', () => startAutoPlay());

show(0);
startAutoPlay();