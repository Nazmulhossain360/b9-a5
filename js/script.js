
// utility script start


function  getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    console.log(value)
    return value;
}

function setTextElementValueById(elementId, value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function totalPrice(elementId,value){
    const totalPrice = document.getElementById(elementId).innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    const sum = convertedTotalPrice + parseInt(value);

    setTextElementValueById('total-price', sum)
}

function updateGrandTotalPrice(){
    const totalPrice = document.getElementById('total-price').innerText;
    const convertedTotalPrice = parseInt(totalPrice);
    document.getElementById('grand-total').innerText = convertedTotalPrice;
   
}

function updateGrandTotalPrice(status){
    if(status == undefined){
        const totalPrice = document.getElementById('total-price').innerText;
        const convertedTotalPrice = parseInt(totalPrice);
        document.getElementById('grand-total').innerText=convertedTotalPrice;
    }else{
        const couponCode = document.getElementById('coupon-code').value;
        const selectedSeat = parseInt(document.getElementById('selected-seat').innerText);

        if(selectedSeat < 4){
            alert('please select 4 seat to get discount.');

        }else if(selectedSeat===4 && couponCode == "NEW15"){
            const totalPrice = document.getElementById('total-price').innerText;
            const convertedTotalPrice = parseInt(totalPrice);
            const afterDiscountPrice = convertedTotalPrice*.85;
            document.getElementById('grand-total').innerText=afterDiscountPrice;
            console.log(afterDiscountPrice)
        }else if(selectedSeat===4 && couponCode == "couple20"){
            const totalPrice = document.getElementById('total-price').innerText;
            const convertedTotalPrice = parseInt(totalPrice);
            const afterDiscountPrice = convertedTotalPrice*.80;
            document.getElementById('grand-total').innerText=afterDiscountPrice;
            console.log(afterDiscountPrice)
        }else if(couponCode == ""){
            const totalPrice = document.getElementById('total-price').innerText;
            const convertedTotalPrice = parseInt(totalPrice);
            document.getElementById('grand-total').innerText=convertedTotalPrice;
        } else{
            alert('please enter valid coupon code.');
        }             
    }                
}


// utility script End



// ---------------------------

function selectSeat(seatId) {
    const seatButton = document.getElementById(seatId);
    // const seatClass = document.getElementById('seat-name');
    // const seatClass = document.getElementById(' ');

// -------
const seats = getTextElementValueById('available-seats');
    const availableSeats  = seats - 1;
    setTextElementValueById('available-seats', availableSeats);
    console.log(availableSeats);
    const selected = getTextElementValueById('selected-seat');
    const selectedSeat = selected + 1;
    setTextElementValueById('selected-seat',selectedSeat);

// --------

    if (seatButton.classList.contains('text-gray-500')) {
        // Check if maximum seats selected
        // let selectedSeats = document.getElementById('selected-seat');
        let selectedSeatsQuantity = getTextElementValueById('selected-seat')

        if (selectedSeatsQuantity > 4) {
            alert('Seat selection limit exceeded. Maximum 4 seats allowed.');
            return;
              
        }
        
        seatButton.classList.remove('text-gray-500');
        seatButton.classList.add('bg-green-400', 'text-white');

        // Append selected seat to seat-class div
        const seatClassName = 'Economy'
        const seatPrice = 550;
        // seatClass.innerHTML += seatId + ', ';
        const selectedTicketDetails = document.getElementById('selected-ticket-details');

        const li = document.createElement('li');
        const p = document.createElement('p');
        p.innerText += seatId ;
        const p1 = document.createElement('p');
        p1.innerText=seatClassName;
        const p2 = document.createElement('p');
        p2.innerText=seatPrice;

        li.appendChild(p);
        li.appendChild(p1);
        li.appendChild(p2);      
        selectedTicketDetails.appendChild(li);


        totalPrice('total-price', seatPrice);
        updateGrandTotalPrice();

        // updateGrandTotalPrice('apply-btn');
       
     
      

  // Disable other seat buttons if four seats are selected
  const seatButtons = document.querySelectorAll('add-seat');
  seatButtons.forEach(button => {
    if (!selectedSeats.includes(button.seatId)) {
      button.disabled = selectedSeats.length === 4;
    }
  });



    } else {
        
        seatButton.classList.remove('bg-green-400', 'text-white');
        seatButton.classList.add('text-gray-500');

        // Remove unselected seat from seat-class div
        const selectedSeats = seatClass.innerHTML;
        selectedSeats = selectedSeats.replace(seatId + 'Economy ', '550');
        seatClass.innerHTML = selectedSeats;
    }
}




