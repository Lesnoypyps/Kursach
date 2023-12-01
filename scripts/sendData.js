'use strict'

import {createTickets} from "./createTickets.js";

export const sendData = () =>{
    const regCheck = (input) =>{
        let value = input.value;
        const regEx = /[^\s]/

        if (value.trim() === '' || !regEx.test(value)) {
            input.style.outline = 'none';
            input.style.borderColor = '#ec0033';
            input.value = '';
            input.placeholder = 'Поле не может быть пустым'
        }else{
            value = value.trim();
            input.style.border = '2px solid rgb(118,118,118)';
        }
    }
    const form = document.querySelector('.form-found');
    let ticketsObj = {};



    const inputFrom = document.querySelector('#inputFrom');
    const inputWhere = document.querySelector('#inputWhere');
    const inputDep = document.querySelector('#inputDep');
    const inputArrive = document.querySelector('#inputArrive');
    inputArrive.addEventListener('input', ()=>{
        let value = inputArrive.value;
        if (value.trim() ===''){
            inputArrive.value = '';

        }
    });
    inputDep.addEventListener('input', ()=>{
        let value = inputDep.value;
        if (value.trim() === ''){
            inputDep.style.outline = 'none';
            inputDep.style.borderColor = '#ec0033';
            inputDep.value = '';
            inputDep.placeholder = 'Поле не может быть пустым'
        }
    })
    inputFrom.addEventListener('input',()=>{
        regCheck(inputFrom)
    })
    inputWhere.addEventListener('input', ()=>{
        regCheck(inputWhere)
    })
    form.addEventListener('submit', async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.target);
        const main = document.querySelector('.main');
        const tickets = document.querySelector('.tickets');
        main.style.display = 'none';
        tickets.style.display = 'block';
        tickets.style.backgroundColor = '#f3f3f3';
        document.body.style.backgroundColor = '#f3f3f3';
        const inputArrive = document.querySelector('#inputArrive');
        const newTicket = Object.fromEntries(formData);
        if (!(inputArrive.value === '')){
            const dataDepart = (await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoA}&PoD=${newTicket.PoD}&DoD=${newTicket.DoD}`)).json()
            const dataArrive = (await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoD}&PoD=${newTicket.PoA}&DoD=${newTicket.DoA}`)).json()
            ticketsObj.depart = await dataDepart;
            ticketsObj.arrive = await dataArrive;
            console.log(ticketsObj.arrive)
            await createTickets(ticketsObj)
            ticketsObj = {}
        }else{
            const data = await fetch(`https://cold-mica-jump.glitch.me/tickets?PoA=${newTicket.PoA}&PoD=${newTicket.PoD}&DoD=${newTicket.DoD}`);
            ticketsObj.depart =  await data.json();
            console.log(ticketsObj.depart);
            await createTickets(ticketsObj)
            ticketsObj = {}
        }

    });



}