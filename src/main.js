const notes = document.getElementsByClassName("notes")[0];
const form = document.getElementById("form");
const checkIcon = document.getElementById("submit");
const closeIcon = document.getElementById("close");
let i = 0;

closeIcon.addEventListener("click", () => {
  typeNote();
});

checkIcon.addEventListener("click", () => {
  creteNote();
});

function typeNote() {
  if (form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
}

function creteNote() {
  const noteText = document.getElementById("note").value
  const div = document.createElement("div");
  const h1 = document.createElement("h1");

  h1.innerHTML = noteText;
  h1.classList.add("notes-style");
  h1.style.margin = margin()
  h1.style.transform = rotates()
  h1.style.background = colors()
  div.appendChild(h1);

  notes.insertAdjacentElement("beforeend", div)
  div.addEventListener("mouseenter", ()=> {
    div.classList.add("scale-on")
  })
  div.addEventListener("mouseleave", ()=> {
    div.classList.add("scale-off")
  })
  div.addEventListener("dblclick", ()=> {
    div.remove()
  })
  document.getElementById("note").value = ''
}

function margin() {
  const randMargin = ["-5px", "5px", "2px", "10px", "15px", "20px", "-10px"];
  return randMargin[Math.floor(Math.random() * randMargin.length)];
}

function rotates() {
  const randRotate = [
    "rotate(3deg)",
    "rotate(1deg)",
    "rotate(5deg)",
    "rotate(10deg)",
    "rotate(-5deg)",
    "rotate(-10deg)",
    "rotate(-3deg)",
    "rotate(-1deg)",
  ];
  return randRotate[Math.floor(Math.random() * randRotate.length)];
}

function colors() {
  const randColor = [
    "#c2ff3d",
    "#ff3de8",
    "#3dc2ff",
    "#04ee22",
    "#bc83e6",
    "#ebb328",
  ];
  if (i > randColor.length - 1) {
    i = 0;
  }
  return randColor[i++];
}