const burguer = document.getElementById("burguer");
const burguerMenu = document.getElementById("hidden-nav");

burguer.addEventListener("click", () => {
  if (
    burguerMenu.innerHTML ===
    `<ul class="hidden-nav hidden-nav-active">
    <li><a href="../homepage/index.html">Home</a></li>
    <li><a href="../homepage/index.html">Projects</a></li>
    <li><a href="../homepage/index.html">Services</a></li>
  </ul>`
  ) {
    burguerMenu.innerHTML = `<ul class="hidden-nav">
    <li><a href="../homepage/index.html">Home</a></li>
    <li><a href="../homepage/index.html">Projects</a></li>
    <li><a href="../homepage/index.html">Services</a></li>
  </ul>`;

    burguer.innerHTML = `<div class="burguer-line"></div>
        <div class="burguer-line"></div>
        <div class="burguer-line"></div>`;
  } else {
    burguerMenu.innerHTML = `<ul class="hidden-nav hidden-nav-active">
    <li><a href="../homepage/index.html">Home</a></li>
    <li><a href="../homepage/index.html">Projects</a></li>
    <li><a href="../homepage/index.html">Services</a></li>
  </ul>`;

    burguer.innerHTML = `<div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>
        <div class="burguer-line-yellow"></div>`;
  }
});

const submit = document.getElementById("submit-btn");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("message");

submit.addEventListener("click", (click) => {
  click.preventDefault();
  console.log(`
  Client's name: ${name.value}
  Client's email: ${email.value}
  Client's phone: ${phone.value}
  Client's message: ${message.value}`);
});
