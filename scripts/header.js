'use strict'

export const createHeader = () =>{
    const header = document.querySelector('.header');

    header.insertAdjacentHTML('beforeend',
        `<div class="header__wrapper">
                <div class="header__logo">
                    <a href="#" class="logo__link">
                        <img class="logo__icon icon" src="./image/logo__img.svg" alt="Logo">
                        <p class="logo__text">TicketSale</p>
                    </a>
            </div>
            <div class="header__nav">
                <a class="nav__tickets">Билеты</a>
                <a class="nav__about">О нас</a>
                <a class="nav__contacts">Контакты</a>
            </div>
            <div class="header__profile">
                <img class="profile__icon icon" src="./image/profile-icon.svg" style="width: 30px" alt="profile">
                <div class="burger-menu">
                    <div class="burger-menu-line">
                    
                    </div>
                </div>
            </div>
            
          </div>
          <div class="form-container container">
            <div class="ticket-found">
                <div class="ticket-found__text">
                    <h1 class="ticket-found__heading">Быстрый поиск билетов</h1>
                </div>
                <div class="ticket-found__input">
                    <form action="" method="post" class="form-found">
                        <input type="text" class="from fast-found" placeholder="Откуда"><input type="text" class=" fast-found" placeholder="Куда">
                        <input type="text" class="text fast-found" placeholder="Отправление"><input type="text" class="text fast-found" placeholder="Прибытие">
                        <div class="fast-found f-f-block">
                            <p class="flight-class">Эконом</p>
                            <p class="fast-found__passenger">1 пассажир</p>
                        </div>
                        <input type="submit" value="Найти билеты" class="submit">
                    </form>
                </div>
            </div>
          </div>  
          </div>  
`)
}

