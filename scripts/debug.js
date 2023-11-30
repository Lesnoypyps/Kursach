'use strict'

export const debug = async ()=>{
    const data = await fetch(`https://cold-mica-jump.glitch.me/tickets/1`)
    var options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    const ticket = await data.json();
    console.log((new Date(ticket.DoD)).toLocaleString('ru', options))
}