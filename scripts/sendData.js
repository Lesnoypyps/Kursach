'use strict'

export const sendData = () =>{
    const form = document.querySelector('.form-found');
    console.log(form)
    form.addEventListener('submit', (e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const main = document.querySelector('.main');
        const tickets = document.querySelector('.tickets');
        main.style.display = 'none';
        tickets.style.display = 'block';


        console.log(formData);
        const newTicket = Object.fromEntries(formData);
        fetch('https://cold-mica-jump.glitch.me/tickets?')
    })



}