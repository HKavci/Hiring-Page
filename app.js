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
