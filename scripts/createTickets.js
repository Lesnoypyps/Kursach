'use strict'

export const createTickets = async() =>{
    const ticketsUrl = 'https://cold-mica-jump.glitch.me/tickets'
    const ticketsDB = await fetch(ticketsUrl);
    const data = await ticketsDB.json();
    const tickets = data.map(ticket =>{
        `
        <div class="ticket">
                <div class="ticket__left-block">
                    <div class="ticket__price">`${ticket.price}`</div>
                    <div class="ticket__companies">
                        
                    </div>
                </div>
                <div class="ticket__right-block">
                    <div class="toPoA">
                        <div class="PoD">
                            
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}