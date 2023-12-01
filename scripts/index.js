import {createHeader} from "./header.js";
import {createFooter} from "./footer.js";
import {slider} from "./slides.js";
import {sendData} from "./sendData.js";
import {calendarInit} from "./calendar.js";
import {debug} from "./debug.js";
import {noTicketsRedirect} from "./listener.js";


const init = () =>{

    noTicketsRedirect()
    createHeader()
    createFooter()
    slider()
    calendarInit()
    sendData()
    debug()

}

init()