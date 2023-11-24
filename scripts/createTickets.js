'use strict'

import {sendData} from "./sendData.js";

export const createTickets = async() =>{
    const ticketsWrapper = document.querySelector('.tickets');
    const data = sendData();
    const tickets = data.map(ticket =>{
        `
        <div class="ticket">
            <div class="ticket__left-block">
                <div class="ticket__price">`${ticket.price}` P</div>
                <div class="ticket__companies">
                    <img src="./image/aeroflot-image.png" alt="" srcset="" class="companies--img">
                    <img src="./image/s7-image.jpg" alt="" srcset="" class="companies--img">
                </div>
            </div>
            <div class="ticket__right-block">
                <div class="toPoA">
                    <div class="PoD">
                        <h1 class="ToD">`${ticket.ToD}`</h1>
                        <p class="date">`${ticket.PoD}`,`${ticket.DoD.slice(8,9)}`</p>
                    </div>
                </div>
                <div class="toPoD">
                
                </div>
            </div>
        </div>
        `
    })
}