// Select all copy buttons
const copyButtons = document.querySelectorAll(".copy-btn");

for (let i = 0; i < copyButtons.length; i++) {
  copyButtons[i].addEventListener("click", function () {
   
    const hotlineNumber = copyButtons[i]
      .closest(".bg-white") 
      .querySelector("h2").innerText;

   
    navigator.clipboard
      .writeText(hotlineNumber)
      .then(() => {
        alert("Copied: " + hotlineNumber);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  
    const copyCountElement = document.getElementById("copy-count");
    copyCountElement.innerText = parseInt(copyCountElement.innerText) + 1;
    });
}
