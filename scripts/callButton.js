const nationalHotlin = document.getElementById("call-button-National");
const policeHotline = document.getElementById("call-button-police");
const fireHotline = document.getElementById("call-button-fire");
const ambulanceHotline = document.getElementById("call-button-ambulance");
const womenHotline = document.getElementById("call-button-woman");
const antiHotline = document.getElementById("call-button-anti");

function clickCallButton(button) {
  button.addEventListener("click", function () {
    const totalCoinNumber = document.getElementById("total-coin-no");

    const now = new Date();
    const time = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    if (parseInt(totalCoinNumber.innerText) < 20) {
      alert("Insufficient balance to make a call.");
    } else {
      alert(
        "Calling " +
          button.parentElement.parentElement.querySelector("h2").innerText +
          " at " +
          button.parentElement.parentElement.querySelector("p").innerText
      );
      totalCoinNumber.innerText =
        parseInt(totalCoinNumber.innerText) - 20;

      const historyContainer = document.getElementById("history-container");

      // ✅ Create a new history entry
      const newHistoryEntry = document.createElement("div");
      newHistoryEntry.classList.add(
        "history-entry",
        "mb-2",
        "p-2",
        "bg-white",
        "rounded-lg",
        "shadow-md",
        "flex",
        "justify-between",
        "w-full"
      );

      newHistoryEntry.innerHTML = `
        <div>
          <h1 class="font-semibold text-[18px]">
            ${button.parentElement.parentElement.querySelector("h1").innerText}
          </h1>
          <p>${button.parentElement.parentElement.querySelector("h2").innerText}</p>
        </div>
        <div>${time}</div>
      `;

      // ✅ Append instead of overwrite
      historyContainer.appendChild(newHistoryEntry);
    }
  });
}



clickCallButton(nationalHotlin);
clickCallButton(policeHotline);
clickCallButton(fireHotline);
clickCallButton(ambulanceHotline);
clickCallButton(womenHotline);
clickCallButton(antiHotline);
