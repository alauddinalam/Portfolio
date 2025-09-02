// Navbar toggle
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");
if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("show");
  });
}

// Typed.js animation
if (window.Typed) {
  new Typed("#element", {
    strings: ["Frontend Developer", "Backend Developer", "Web Designer"],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
  });
}

/* ==================== THEME TOGGLE ==================== */
const root = document.documentElement;
const btn = document.getElementById("theme-toggle");
const ICONS = {
  moon: '<i class="fa-solid fa-moon"></i>',
  sun: '<i class="fa-solid fa-sun"></i>'
};

function applyTheme(theme) {
  // theme can be "light" or "dark"
  root.classList.remove("light", "dark");
  if (theme) root.classList.add(theme);
  // icon + aria state
  const isDark = root.classList.contains("dark");
  if (btn) {
    btn.innerHTML = isDark ? ICONS.sun : ICONS.moon;
    btn.setAttribute("aria-pressed", String(isDark));
  }
  // set color-scheme for native form controls
  document.documentElement.style.colorScheme = isDark ? "dark" : "light";
}

// Initialize from localStorage or system preference
(function initTheme() {
  const saved = localStorage.getItem("theme"); // "light" | "dark" | null
  if (saved === "light" || saved === "dark") {
    applyTheme(saved);
  } else {
    const prefersDark = window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyTheme(prefersDark ? "dark" : "light");
  }
})();

// Toggle on click + persist
if (btn) {
  btn.addEventListener("click", () => {
    const next = root.classList.contains("dark") ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });
}

// Also react to system changes if user hasn't manually chosen yet
const media = window.matchMedia("(prefers-color-scheme: dark)");
if (media && typeof media.addEventListener === "function") {
  media.addEventListener("change", (e) => {
    const saved = localStorage.getItem("theme");
    if (!saved) applyTheme(e.matches ? "dark" : "light");
  });
}


// var typed = new Typed('#element', {
//       strings: ['Web developer','Graphic Designer', 'Web Designer', 'Video Editor.'],
//       typeSpeed: 100,
//       backSpeed:100,
//       backDelay:100,
//       loop:true
//     });