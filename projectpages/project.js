const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const largeText = document.getElementById("large-text");
const image = document.getElementById("image");
const completionDate = document.getElementById("completed-on-2");

let url = new URL(window.location.href);
let params = new URLSearchParams(url.search);
let wantedId = params.get('id');

const endpoint =
  "https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects";

fetch(endpoint)
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok " + response.statusText);
    }
    return response.json();
  })
  .then((data) => {
    const selectedProject = data.find((i) => i.uuid == wantedId);

    const name = selectedProject.name;
    const description = selectedProject.description;
    const content = selectedProject.content;
    const bigImg = selectedProject.image;
    const date = selectedProject.completed_on;

    title.textContent = name;
    subtitle.textContent = description;
    largeText.innerHTML = content;
    image.src = bigImg;
    completionDate.textContent = date;
  });

const burguer = document.getElementById("burguer");
const burguerMenu = document.getElementById("hidden-nav");

burguer.addEventListener("click", () => {
  if (
    burguerMenu.innerHTML ===
    `<ul class="hidden-nav hidden-nav-active">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../index.html">Projects</a></li>
        <li><a href="../index.html">Services</a></li>
      </ul>`
  ) {
    burguerMenu.innerHTML = `<ul class="hidden-nav">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../index.html">Projects</a></li>
        <li><a href="../index.html">Services</a></li>
      </ul>`;

    burguer.innerHTML = `<div class="burguer-line"></div>
            <div class="burguer-line"></div>
            <div class="burguer-line"></div>`;
  } else {
    burguerMenu.innerHTML = `<ul class="hidden-nav hidden-nav-active">
        <li><a href="../index.html">Home</a></li>
        <li><a href="../index.html">Projects</a></li>
        <li><a href="../index.html">Services</a></li>
      </ul>`;

    burguer.innerHTML = `<div class="burguer-line-yellow"></div>
            <div class="burguer-line-yellow"></div>
            <div class="burguer-line-yellow"></div>`;
  }
});
