const burguer = document.getElementById("burguer");
const burguerMenu = document.getElementById("hidden-nav");

burguer.addEventListener("click", () => {
  if (
    burguerMenu.innerHTML ===
    `<ul class="hidden-nav hidden-nav-active">
    <li><a href="./home.html">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#services">Services</a></li>
  </ul>`
  ) {
    burguerMenu.innerHTML = `<ul class="hidden-nav">
    <li><a href="./home.html">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#services">Services</a></li>
  </ul>`;

    burguer.innerHTML = `<div class="burguer-line"></div>
        <div class="burguer-line"></div>
        <div class="burguer-line"></div>`;
  } else {
    burguerMenu.innerHTML = `<ul class="hidden-nav hidden-nav-active">
    <li><a href="./home.html">Home</a></li>
    <li><a href="#projects">Projects</a></li>
    <li><a href="#services">Services</a></li>
  </ul>`;

    burguer.innerHTML = `<div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>`;
  }
});

const returnToTop = document.getElementById("return-top");

window.addEventListener("scroll", () => {
  let contentHeight = document.documentElement.scrollHeight;
  let scrollPosition = window.innerHeight + window.pageYOffset;

  if (scrollPosition > contentHeight / 2) {
    returnToTop.style.display = "block";
  } else {
    returnToTop.style.display = "none";
  }
});

function topScroll() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
