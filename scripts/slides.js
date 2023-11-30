import {Swiper} from './cdn.jsdelivr.net_npm_swiper@11_swiper-bundle.min.js'
export const slider = () =>{
    const slides = document.querySelectorAll('.swiper-slide');

    let datasetSlides = [
        'image/fiji-island.jpg',
        'image/saint-petersburg.jpg',
        'image/moscow.jpg',
        'image/new-york.jpg',
        'image/paris.jpg',
        'image/Tel-Aviv.jpg',
    ];
    let dataSetSlidesText = [
        {
            city:'Острова Фиджи',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
        },
        {
            city:'Санкт-Петербург',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
        },
        {
            city:'Москва',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
        },
        {
            city:'Нью-Йорк',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
        },
        {
            city:'Париж',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
                'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?',
        },
        {
            city:'Тель-Авив',
            description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. ' +
            'Dolore excepturi iusto nulla. ' +
                'Distinctio doloremque exercitationem explicabo harum impedit in iste magnam, modi neque nesciunt nihil repudiandae sint sit unde ut?'
        },


    ]

    for (let i = 0; i < slides.length; i++) {
        slides[i].dataset.id = i;
        slides[i].style.backgroundImage = `url(${datasetSlides[i]})`;
        const capital = slides[i].querySelector('.capital-name');
        const country = slides[i].querySelector('.capital-description');
        capital.textContent = dataSetSlidesText[i].city;
        if(dataSetSlidesText[i].description.length >= 50){
            dataSetSlidesText[i].description = dataSetSlidesText[i].description.slice(0,50);
            country.textContent = dataSetSlidesText[i].description + '...'
        }
    }
    const swiperInit = new Swiper('.swiper',{
        direction:'horizontal',
        loop:true,

        navigation:{
            prevEl:'.swiper-button-prev',
            nextEl:'.swiper-button-next'
        },
        breakpoints:{
            425:{
                slidesPerView:1
            },
            426:{
                slidesPerView:3
            }
        },
        range:{

            max:'2023-12-10'
        },

        spaceBetween:'10px',

    })



}

