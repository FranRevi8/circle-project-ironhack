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
