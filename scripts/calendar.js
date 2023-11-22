'use strict'
// import VanillaCalendar from './vanilla-calendar.min.js'

export const calendarInit = () =>{
    const options = {
        input: true,
        type: 'multiple',
        settings: {
            range: {
                disablePast: true,
            },
            selection: {
                day: 'multiple-ranged',
            },
            visibility: {
                daysOutside: false,
            },
        },
        actions: {
            changeToInput(e, calendar, dates, time, hours, minutes, keeping) {
                if (dates[1]) {
                    dates.sort((a, b) => +new Date(a) - +new Date(b));
                    calendar.HTMLInputElement.value = `${dates[0]} — ${dates[dates.length - 1]}`;
                } else if (dates[0]) {
                    calendar.HTMLInputElement.value = dates[0];
                } else {
                    calendar.HTMLInputElement.value = '';
                }
            },
        },
    }

    const calendar = new VanillaCalendar('#inputDep', options);
    calendar.init();
}