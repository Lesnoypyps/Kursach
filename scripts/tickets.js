import {createHeader} from "./header.js";
import {createFooter} from "./footer.js";
import {createTickets} from "./createTickets.js";


export const initTickets = () => {
    const formContainer = document.querySelector('.form-container');
    formContainer.remove()
    createTickets()
}
init()
