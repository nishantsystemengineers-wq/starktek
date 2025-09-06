// -----------------------------
// Navbar active link highlight
// -----------------------------
document.querySelectorAll(".navbar a").forEach(link => {
  link.addEventListener("click", function() {
    document.querySelectorAll(".navbar a").forEach(el => el.classList.remove("active"));
    this.classList.add("active");
  });
});

// -----------------------------
// Smooth scroll
// -----------------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// -----------------------------
// Builder.io Integration
// -----------------------------
builder.init("3b38a1fe73364d888ae3f353ed22b6c0");  // 👈 Paste your Public API Key here

builder.get('page', { url: window.location.pathname }).promise().then(content => {
  const container = document.getElementById('builder-content');  // 👈 Placeholder in HTML

  if (content && container) {
    container.innerHTML = '';
    builder.renderInto(content, container);
  } else {
    console.log("No Builder.io content found for this page");
  }
});
