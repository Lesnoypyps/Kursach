'use strict'


export const createTickets = async(data) =>{
    const ticketsWrapper = document.querySelector('.tickets');

    let options = {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
    };
    console.log(data)
    if (data.arrive){
        ticketsWrapper.innerHTML = '';
        for(let ticketD in data.depart){
            for(let ticketA in data.arrive){
                if(data.depart[ticketD].PoD === data.arrive[ticketA].PoA && data.depart[ticketD].Companies === data.arrive[ticketA].Companies){
                    const PoDD = new Date(data.depart[ticketD].DoD).toLocaleString('ru', options);
                    const PoDA = new Date(data.depart[ticketD].DoA).toLocaleString('ru', options);
                    const PoAD = new Date(data.arrive[ticketA].DoD).toLocaleString('ru', options);
                    const PoAA = new Date(data.arrive[ticketA].DoA).toLocaleString('ru', options);
                    const getTimeOfTravel = (ToD , ToA) =>{
                        let firstDateDepart = ToD;
                        let secondDateDepart = ToA;
                        let getDate = (str) =>{
                            return new Date(0, 0, 0, str.split(':')[0],str.split(':')[1]);
                        }
                        console.log(secondDateDepart)

                        let diff = (getDate(secondDateDepart) - getDate(firstDateDepart));
                        let diffRes, hours, minutes ;
                        if (diff > 0){
                            diffRes = diff;
                            hours = Math.floor((diffRes % 86400000) / 3600000);
                            minutes = Math.round(((diffRes % 86400000) % 3600000) / 60000)
                        }else{
                            diffRes = Math.abs((getDate(firstDateDepart) - getDate(secondDateDepart)));
                            hours = Math.floor(24 - (diffRes % 86400000) / 3600000);
                            minutes = Math.round(60 - ((diffRes % 86400000) % 3600000) / 60000)
                        }

                        return hours + ':' + minutes;
                    }
                    const tickets =
                        `<div class="ticket">
                        <div class="ticket__left-block">
                            <div class="ticket__price">${Number(data.depart[ticketD].Price) + Number(data.arrive[ticketA].Price)}</div>
                            <div class="ticket__companies">
                                <p class="companies__heading">Авиакомпании:</p>
                                <img src="./image/${data.depart[ticketD].Companies}-image.png" alt="" srcset="" class="companies--img">
                            </div>
                            <button class="choose-btn btn">Выбрать билет</button>
                        </div>
                        <div class="ticket__right-block">
                            <div class="toPoA">
                                <div class="PoD">
                                    <h3 class="ToD">${data.depart[ticketD].ToD}</h3>
                                    <p class="DoD">${data.depart[ticketD].PoD}, ${PoDD.slice(3,6).trim()} ${PoDD.slice(6,11).trim()}, ${PoDD.slice(0,2).trim()}</p>
                                </div>
                                <div class="travel">
                                    <p class="travel__time">В пути: ${getTimeOfTravel(data.depart[ticketD].ToD,data.depart[ticketD].ToA).slice(0,1)} ч ${getTimeOfTravel(data.depart[ticketD].ToD,data.depart[ticketD].ToA).slice(2)} минут</p>
                                    <img src="./image/arrow-travel.svg" alt="" srcset="" class="travelTime--arrow">
                                </div>
                                <div class="PoA">
                                    <h3 class="ToA">${data.depart[ticketD].ToA}</h3>
                                    <p class="DoA">${data.depart[ticketD].PoA}, ${PoDA.slice(4,6).trim()} ${PoDA.slice(6,11).trim()}, ${PoDA.slice(0,2).trim()}</p>
                                </div>
                            </div>
                            <div class="toPoD">
                                <div class="PoD">
                                    <h3 class="ToD">${data.arrive[ticketA].ToD}</h3>
                                    <p class="DoD">${data.arrive[ticketA].PoD}, ${PoAD.slice(3,6).trim()} ${PoAD.slice(6,11).trim()}, ${PoAD.slice(0,2).trim()}</p>
                                </div>
                                <div class="travel">
                                    <p class="travel__time">В пути: ${getTimeOfTravel(data.arrive[ticketA].ToD, data.arrive[ticketA].ToA).slice(0,1)}ч ${getTimeOfTravel(data.arrive[ticketA].ToD,data.arrive[ticketA].ToA).slice(2)} минут</p>
                                    <img src="./image/arrow-travel.svg" alt="" srcset="" class="travelTime--arrow">
                                </div>
                                <div class="PoA">
                                    <h3 class="ToA">${data.arrive[ticketA].ToA}</h3>
                                    <p class="DoA">${data.arrive[ticketA].PoA}, ${PoAA.slice(3,6).trim()} ${PoAA.slice(6,11).trim()}, ${PoAA.slice(0,2).trim()}</p>
                                </div>
                            </div>
                        </div>
                    </div>`
                    ticketsWrapper.insertAdjacentHTML('beforeend', tickets)
                }
            }
        }
    }else{
        ticketsWrapper.innerHTML = '';
        for( let ticketId in data.depart){
            console.log()
            const PoDD = new Date(data.depart[ticketId].DoD).toLocaleString('ru', options);
            console.log(PoDD)
            const PoDA = new Date(data.depart[ticketId].DoA).toLocaleString('ru', options);
            const ticketsWrapper = document.querySelector('.tickets');
            const getTimeOfTravel = (ToD , ToA) =>{
                let firstDateDepart = ToD;
                let secondDateDepart = ToA;
                let getDate = (str) =>{
                    return new Date(0, 0, 0, str.split(':')[0],str.split(':')[1]);
                }
                console.log(secondDateDepart)

                let diff = (getDate(secondDateDepart) - getDate(firstDateDepart));
                let diffRes, hours, minutes ;
                if (diff > 0){
                    diffRes = diff;
                    hours = Math.floor((diffRes % 86400000) / 3600000);
                    minutes = Math.round(((diffRes % 86400000) % 3600000) / 60000)
                }else{
                    diffRes = Math.abs((getDate(firstDateDepart) - getDate(secondDateDepart)));
                    hours = Math.floor(24 - (diffRes % 86400000) / 3600000);
                    minutes = Math.round(60 - ((diffRes % 86400000) % 3600000) / 60000)
                }

                return hours + ':' + minutes;
            }

            const tickets =
                `<div class="ticket">
                <div class="ticket__left-block">
                    <div class="ticket__price">${Number(data.depart[ticketId].Price)}</div>
                    <div class="ticket__companies">
                        <p class="companies__heading">Авиакомпании:</p>
                        <img src="./image/${data.depart[ticketId].Companies}-image.png" alt="" srcset="" class="companies--img">
                    </div>
                    <button class="choose-btn btn">Выбрать билет</button>
                </div>
                <div class="ticket__right-block">
                    <div class="toPoA">
                        <div class="PoD">
                            <h3 class="ToD">${data.depart[ticketId].ToD}</h3>
                            <p class="DoD">${data.depart[ticketId].PoD}, ${PoDD.slice(4,6)} ${PoDD.slice(7,12)}, ${PoDD.slice(0,2)}</p>
                        </div>
                        <div class="travel">
                            <p class="travel__time">В пути: ${getTimeOfTravel(data.depart[ticketId].ToD,data.depart[ticketId].ToA).slice(0,1)} ч ${getTimeOfTravel(data.depart[ticketId].ToD,data.depart[ticketId].ToA).slice(2)} минут</p>
                            <img src="./image/arrow-travel.svg" alt="" srcset="" class="travelTime--arrow">
                        </div>
                        <div class="PoA">
                            <h3 class="ToA">${data.depart[ticketId].ToA}</h3>
                            <p class="DoA">${data.depart[ticketId].PoA}, ${PoDA.slice(4,6)} ${PoDA.slice(7,12)}, ${PoDA.slice(0,2)}</p>
                        </div>
                    </div>
                    
                </div>
            </div>`
            ticketsWrapper.insertAdjacentHTML('beforeend',tickets);

        }
    }
    if (data.depart.length === 0){
        ticketsWrapper.innerHTML = '';
        ticketsWrapper.insertAdjacentHTML('beforeend', `
            <div class="tickets__empty">
                <h2 class="heading__empty heading">Билетов с такими данными не существует</h2>
                <a href="index.html" class="backToMain" style="text-decoration: none;color: black;">Вернуться на главную</a>
            </div>
        `)
    }
}
