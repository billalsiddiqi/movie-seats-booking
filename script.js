const container = document.querySelector('.container');
const seats = document.querySelectorAll('.single-seat');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('select');

let ticketPrice = +movieSelect.value;

function countSelectedSeats() {
    const selectedSeats = document.querySelectorAll('.single-seat.select');

    count.innerHTML = selectedSeats.length
    total.innerHTML = selectedSeats.length * ticketPrice;
}

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    countSelectedSeats();
})

container.addEventListener('click', (e) => {
    if(e.target.classList.contains('single-seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('select');

        countSelectedSeats()
    }
})