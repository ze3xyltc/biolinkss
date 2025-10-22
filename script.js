const fadeEls = document.querySelectorAll(".fade");

function revealOnScroll() {
  const trigger = window.innerHeight * 0.85;
  fadeEls.forEach((el) => {
    const top = el.getBoundingClientRect().top;
    if (top < trigger) el.classList.add("show");
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
