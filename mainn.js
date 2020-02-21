let sections = document.querySelectorAll("section");
let links = document.querySelectorAll("nav a");

let colors = ["", "darkgrey", "", "skyblue", "silver"];

for (let i = 0; i < sections.length; i++) {
  const element = sections[i];
  element.style.backgroundColor = colors[i];
}

for (let i = 0; i < links.length; i++) {
  const element = links[i];

  element.addEventListener("click", function(e) {
    e.preventDefault();
    console.log(e);

    const blockID = element.getAttribute("href");

    console.log(blockID);

    if (element.getAttribute("href") === "#") {
      document.querySelector("body").scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    } else {
      document.querySelector("" + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
}
