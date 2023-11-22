import {createHeader} from "./header.js";
// import {slider} from "./slides.js";
import {createFooter} from "./footer.js";
import {slider} from "./slides.js";
import {sendData} from "./sendData.js";
import {calendarInit} from "./calendar.js";

const init = () =>{
    createHeader()
    createFooter()
    slider()
    sendData()
    calendarInit()
    console.log(new Date())
}

init()