// Navbar active link highlight
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll(".navbar a").forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});