import "./styles.css";

const content = "Helloy";

document
  .getElementById("app")
  .insertAdjacentHTML("beforebegin", `<span>${content}</span>`);

const remove = document.getElementById("custom");
document.getElementById("app").removeChild(remove);
