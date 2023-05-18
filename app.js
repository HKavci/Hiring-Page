// created for restarting the page by clicking the rotate icon
const rotateIcon = document.getElementById("rotate-icon");

rotateIcon.addEventListener("click", () => {
  window.location.reload();
});

// created for opening and closing modal by clicking the "?" icon. There is a toggle logic here.
const modal = document.getElementById("announcement-modal");
const modalIcon = document.getElementById("modal-icon");
let modalOpen = false;

modalIcon.addEventListener("click", () => {
  if (!modalOpen) {
    modalOpen = true;
    modal.style.display = "block";
  } else {
    modalOpen = false;
    modal.style.display = "none";
  }
});

// When the expandIcon is clicked, Waiting List table expands, all the list can be seen, arrow icon rotates and innerText ("Show" to "Hide") changes. There is toggle logic here too.
const expandIcon = document.getElementById("arrow-icon");
const tableWrapp = document.querySelector(".players-table-wrapper");
const otherInfo = document.querySelector(".other-info");
let tableOpen = false;

expandIcon.addEventListener("click", () => {
  if (!tableOpen) {
    tableOpen = true;
    tableWrapp.style.height = "380px";
    expandIcon.style.transform = "rotate(180deg)";
    otherInfo.innerText = "Hide other info";
  } else {
    tableOpen = false;
    tableWrapp.style.height = "210px";
    expandIcon.style.transform = "rotate(360deg)";
    otherInfo.innerText = "Show other info";
  }
});
