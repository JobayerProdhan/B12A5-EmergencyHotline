const clearBtn = document.getElementById("clear-btn");

clearBtn.addEventListener("click", function() {
  const historyContainer = document.getElementById("history-container");
  historyContainer.innerHTML = "";
});