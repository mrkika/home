document.getElementById('fareForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const distance = parseInt(document.getElementById('distance').value);
  const loyalty = document.getElementById('loyalty').value.toLowerCase();

  let fare, bonus = "";
  let discountText = "", newFare;

  if (distance >= 50) {
    fare = 2000;
    bonus = "Free Snack";
  } else if (distance >= 21) {
    fare = 1000;
    bonus = "Bottle of H2O";
  } else if (distance >= 11) {
    fare = 400;
  } else {
    fare = 200;
  }

  if (loyalty === "yes") {
    let discount = 0.10;
    newFare = fare - (fare * discount);
    discountText = `You qualify for a 10% discount.<br>New Fare: <strong>${newFare} Naira</strong><br>`;
  } else {
    newFare = fare;
  }

  const result = `
    Hello <strong>${name}</strong>!<br>
    You are travelling <strong>${distance} km</strong>.<br>
    Fare: <strong>${fare} Naira</strong><br>
    ${discountText}
    ${bonus ? `Bonus: <strong>${bonus}</strong><br>` : ""}
    Thank you for choosing <strong>EDACO Transports!</strong>
  `;

  const resultBox = document.getElementById('resultBox');
  resultBox.innerHTML = result;
  resultBox.style.display = 'block';
});