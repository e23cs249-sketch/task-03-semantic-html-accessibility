const modal = document.getElementById("confirmation-modal");
const openButton = document.getElementById("open-confirmation");

if (modal && openButton) {
  openButton.addEventListener("click", () => {
    modal.showModal();
  });
}