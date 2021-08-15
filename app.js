var purchase_price = document.querySelector("#purchase-price");
var quantity = document.querySelector("#quantity");
var current_price = document.querySelector("#current-price");
var show = document.querySelector("#show");
var button = document.querySelector("button");

button.addEventListener("click", checkProfitOrLoss);

function checkProfitOrLoss() {
  validateInputs();

  if (current_price.value > purchase_price.value) {
    var profit = (current_price.value - purchase_price.value) * quantity.value;
    var profit_percentage = (profit / purchase_price.value) * 100;

    if (profit_percentage > 50) {
      document.body.style.background = "green";
    }
    // profit
    show.innerText = `you are at a profit of ${profit} and profit percentage is ${profit_percentage}%`;
  } else if (current_price.value < purchase_price.value) {
    //loss
    var loss = (purchase_price.value - current_price.value) * quantity.value;
    var loss_percentage = (loss / purchase_price.value) * 100;
    show.innerText = `you are at a loss of ${loss} and loss percentage is ${loss_percentage}%`;
    if (profit_percentage > 50) {
      document.body.style.background = "red";
    }
  } else {
    // no change
    console.log("no change");
  }
}

function validateInputs() {
  if (current_price.value === "" || purchase_price.value === "") {
    show.innerText = `Fields can not be empty`;
  }
}
