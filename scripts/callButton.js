const nationalHotline = document.getElementById("call-button-National");
const policeHotline = document.getElementById("call-button-police");

function clickCallButton(button) {
  button.addEventListener("click", function () {
    const totalCoinNumber = document.getElementById("total-coin-no");

    const now = new Date();
const time = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit',second:'2-digit' });

    if (parseInt(totalCoinNumber.innerText) < 20) {
      alert("Insufficient balance to make a call.");
    } else {
      alert(
        "Calling " +
          button.parentElement.parentElement.querySelector("h2").innerText +
          " at " +
          button.parentElement.parentElement.querySelector("p").innerText
      );
      totalCoinNumber.innerText = parseInt(totalCoinNumber.innerText) - 20;


      const historyContainer = document.getElementById("history-container");
      // const newHistoryEntry = document.createElement("div");
      // newHistoryEntry.classList.add("history-entry", "mb-2", "p-2", "bg-white", "rounded-lg", "shadow-md");
      historyContainer .innerHTML = `   <div>  <h1 class="font-semibold text-[18px]">${ button.parentElement.parentElement.querySelector("h1").innerText }</h1>
              <p>${button.parentElement.parentElement.querySelector("h2").innerText}</p>
            </div>
            <div>${time}</div>`  
          
          
          historyContainer.appendChild(newHistoryEntry);}
  });


}

clickCallButton(nationalHotline);
clickCallButton(policeHotline);