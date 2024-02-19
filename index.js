function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

function checkSelectedBtn() {
  var selectedElements = document.querySelectorAll('.selected');
  var count = selectedElements.length;
  return count;
}

function updatePrice() {
  const pricePerSeat = 550; 
  const selectedSeatsCount = checkSelectedBtn();
  const totalPriceElement = document.getElementById('totalPrice');
  const grandTotalElement = document.getElementById('grandTotal');
  const total = selectedSeatsCount * pricePerSeat;
  grandTotalElement.innerText = `BDT ${total}`;
  totalPriceElement.innerText = `BDT ${total}`;

}

function addSeatToList(seatId) {
  const seatListDiv = document.getElementById('seatList');
  const seatDiv = document.createElement('div');
  seatDiv.classList.add('flex', 'items-center', 'justify-between', 'mt-2');
  seatDiv.innerHTML = `
    <p>${seatId}</p>
    <p>Economy</p>
    <p>BDT 550</p>
  `;
  seatListDiv.appendChild(seatDiv);
}

function removeSeatFromList(seatId) {
  const seatListDiv = document.getElementById('seatList');
  let seatDiv = Array.from(seatListDiv.children).find(div => div.textContent.includes(seatId));
  if (seatDiv) {
    seatListDiv.removeChild(seatDiv);
  }
}



function toggleClass(button) {
  const maxSeats = 4;
  let selectedSeats = checkSelectedBtn();
  const seatId = button.innerText.trim();

  if (selectedSeats < maxSeats) {
    button.classList.toggle('selected');

    if (button.classList.contains('selected')) {
      addSeatToList(seatId);
    } else {
      removeSeatFromList(seatId);
      
    }
    updateRemainingSeats();
    updatePrice();
  } else {
    alert("You can't buy more than 4 tickets!");
  }
}

function updateNextButtonState() {
  const nextButton = document.getElementById('nextButton');
  const phoneNumberValue = document.getElementById('phoneNumber').value;
  const selectedSeats = checkSelectedBtn();

  if (selectedSeats > 0 && phoneNumberValue) {
    nextButton.disabled = false;
  } else {
    nextButton.disabled = true;
  }
}

function updateRemainingSeats() {
  const totalSeats = 40; 
  const selectedSeatsCount = checkSelectedBtn();
  const remainingSeatsElement = document.getElementById('remainingSeats');
  const remainingSeats = totalSeats - selectedSeatsCount;
  remainingSeatsElement.innerText = remainingSeats;
}

document.querySelectorAll('.seatBtn').forEach(button => {
  button.addEventListener('click', () => toggleClass(button));
});

function showNext() {
	const main = document.getElementById('mainTag');
	main.classList.add("hidden");
	const image = document.getElementById('nextImg');
	image.classList.remove("hidden");

}
document.addEventListener('DOMContentLoaded', updatePrice);
document.getElementById('phoneNumber').addEventListener('input', updateNextButtonState);
document.getElementById('nextButton').addEventListener('click', showNext);







