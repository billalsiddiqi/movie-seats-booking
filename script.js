const container = document.querySelector('.container');
const seats = document.querySelectorAll('.single-seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('select');

populateUI();

let ticketPrice = +movieSelect.value;


function setMovieData(movieIndex, moviePrice){
    localStorage.setItem('movieIndex', movieIndex);
    localStorage.setItem('moviePrice', moviePrice)
}

function countSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.single-seat.select');
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));

    localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

    count.innerHTML = selectedSeats.length
    total.innerHTML = selectedSeats.length * ticketPrice;
}

function populateUI() {
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));


    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('select');
            }
        })
    }

    const selectedMovieIndex = localStorage.getItem('movieIndex');


    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex;
    }
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;

    setMovieData(e.target.selectedIndex, e.target.value);
    countSelectedSeats();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('single-seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('select');

        countSelectedSeats()
    }
})

countSelectedSeats();