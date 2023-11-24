'use strict'

export const sendData = () =>{
    const form = document.querySelector('.form-found');
    let ticketsArr = [];
    console.log(form)
    form.addEventListener('submit', async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const main = document.querySelector('.main');
        const tickets = document.querySelector('.tickets');
        main.style.display = 'none';
        tickets.style.display = 'block';
        const dateInput = document.querySelector('#inputDep');
        const newTicket = Object.fromEntries(formData)
        dateInput.addEventListener('input', ()=>{
            console.log()
        })


        ;
        console.log(new Date(dateInput.value));

        const data = await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoA}&PoD=${newTicket.PoD}&DoD=${newTicket.DoD}`);
        console.log(await data.json())
        ticketsArr =  await data.json()
        console.log(ticketsArr);
    })
    return ticketsArr;



}