document.addEventListener("DOMContentLoaded", function () {
  const navbar = document.querySelector(".navbar");
  const splitText = document.querySelector(".split-text");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 0) {
      navbar.classList.add("scroll");
      splitText.classList.add("scroll");
    } else {
      navbar.classList.remove("scroll");
      splitText.classList.remove("scroll");
    }
  });
});
