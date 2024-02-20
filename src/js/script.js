const hamburger = document.querySelector('#hamburger-menu')
const navMenu = document.querySelector("ul")
const linkMenu = document.querySelectorAll("a.nav-menu")

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active')
  navMenu.classList.toggle('show-nav')
})

document.addEventListener('click', (e) => {
  if (
    hamburger.classList.contains("active") &&
    e.target.classList.value != "hamburger-line" && !e.target.contains(navMenu)
  ) {
    hamburger.classList.remove('active')
    navMenu.classList.remove('show-nav')
  }
})

linkMenu.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();

    const activeClass = document.getElementsByClassName("lg:active-nav");

    activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
    this.className += " lg:active-nav"

    if (window.innerWidth >= 1024) {
      if (this.getAttribute("href") == "#home") {
        console.log(window.scrollY);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#about") {
        window.scrollTo({
          top: 657,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#skills") {
        window.scrollTo({
          top: 1520,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#project") {
        window.scrollTo({
          top: 2320,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#contact") {
        window.scrollTo({
          top: 3092,
          behavior: "smooth",
        });
      }
    } else if (window.innerWidth >= 768) {
      if (this.getAttribute("href") == "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#about") {
        window.scrollTo({
          top: 940,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#skills") {
        window.scrollTo({
          top: 2445,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#project") {
        window.scrollTo({
          top: 3700,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#contact") {
        window.scrollTo({
          top: 5580,
          behavior: "smooth",
        });
      }
    } else if (window.innerWidth < 768) {
      if (this.getAttribute("href") == "#home") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#about") {
        window.scrollTo({
          top: 1130,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#skills") {
        window.scrollTo({
          top: 3300,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#project") {
        window.scrollTo({
          top: 4590,
          behavior: "smooth",
        });
      } else if (this.getAttribute("href") == "#contact") {
        window.scrollTo({
          top: 6205,
          behavior: "smooth",
        });
      }
    }
  })
})

window.addEventListener('scroll', function() {
  const activeClass = document.getElementsByClassName("lg:active-nav");

  if (this.innerWidth >= 1024) {
    if (this.scrollY >= 0) {
      activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
      
      linkMenu[0].classList.add("lg:active-nav")
    } 
    
    if (this.scrollY >= 530) {
      activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
      
      linkMenu[1].classList.add("lg:active-nav")
    }
    
    if (this.scrollY >= 1350) {
      activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
      
      linkMenu[2].classList.add("lg:active-nav")
    }

    if (this.scrollY >= 2250) {
      activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
      
      linkMenu[3].classList.add("lg:active-nav")
    }

    if (this.scrollY >= 2960) {
      activeClass[0].className = activeClass[0].className.replace(" lg:active-nav", "")
      
      linkMenu[4].classList.add("lg:active-nav")
    }
  }
})

new Typed("#message", {
  stringsElement: "#desc",
  backDelay: 3000,
  typeSpeed: 20,
  backSpeed: 30,
  loop: true,
  autoInsertCss: true
});

particlesJS("particles-js", {
  particles: {
    number: { value: 142, density: { enable: true, value_area: 800 } },
    color: { value: "#0ea5e9" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { nb_sides: 7 },
      image: { src: "img/github.svg", width: 100, height: 100 },
    },
    opacity: {
      value: 0.49705773886831206,
      random: false,
      anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
    },
    size: {
      value: 8.017060304327615,
      random: true,
      anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#0ea5e9",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 6,
      direction: "none",
      random: false,
      straight: false,
      out_mode: "out",
      bounce: false,
      attract: { enable: false, rotateX: 600, rotateY: 1200 },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: { enable: false, mode: "repulse" },
      onclick: { enable: true, mode: "push" },
      resize: true,
    },
    modes: {
      grab: { distance: 400, line_linked: { opacity: 1 } },
      bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
      repulse: { distance: 200, duration: 0.4 },
      push: { particles_nb: 4 },
      remove: { particles_nb: 2 },
    },
  },
  retina_detect: true,
});

AOS.init({
  offset: 120,
  easing: "ease-in-out",
  once: true,
  mirror: false
})

const html = document.querySelector("html")
const darkToggle = document.getElementById("dark-toggle")

darkToggle.addEventListener('click', function() {
  if (localStorage.theme === "light" || localStorage.key("theme") === null) {
    html.classList.add("dark")
    this.children[0].attributes[0].value = ""
    this.children[0].attributes[0].value += "src/images/sun.png"
    localStorage.theme = "dark"
  } else {
    html.classList.remove("dark");
    this.children[0].attributes[0].value = "";
    this.children[0].attributes[0].value += "src/images/moon.png";
    localStorage.theme = "light";
  }
})

if (localStorage.theme === "dark") {
  html.classList.add("dark")
  darkToggle.children[0].attributes[0].value = "";
  darkToggle.children[0].attributes[0].value += "src/images/sun.png";
} else {
  html.classList.remove("dark")
}