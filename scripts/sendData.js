'use strict'

import {createTickets} from "./createTickets.js";

export const sendData = () =>{
    const form = document.querySelector('.form-found');
    let ticketsObj = [];
    console.log(form)
    form.addEventListener('submit', async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const main = document.querySelector('.main');
        const tickets = document.querySelector('.tickets');
        main.style.display = 'none';
        tickets.style.display = 'block';
        tickets.style.backgroundColor = '#f3f3f3';
        document.body.style.backgroundColor = '#f3f3f3'
        const inputArrive = document.querySelector('#inputArrive');
        const newTicket = Object.fromEntries(formData)
        if (inputArrive.value === ''){
            const data = await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoA}&PoD=${newTicket.PoD}&DoD=${newTicket.DoD}`);
            // console.log(await data.json())
            ticketsObj.depart =  await data.json();
            await createTickets(ticketsObj)
        }else{
            const dataDepart = (await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoA}&PoD=${newTicket.PoD}&DoD=${newTicket.DoD}`)).json()
            const dataArrive = (await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoD}&PoD=${newTicket.PoA}&DoD=${newTicket.DoA}`)).json()
            ticketsObj.depart = await dataDepart;
            ticketsObj.arrive = await dataArrive;
            await createTickets(ticketsObj)
        }
        console.log(ticketsObj.depart)
    });



}