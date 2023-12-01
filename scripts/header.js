'use strict'

export const createHeader = () =>{
    const header = document.querySelector('.header');

    header.insertAdjacentHTML('beforeend',
        `<div class="header__wrapper">
                <div class="header__logo">
                    <a href="../index.html" class="logo__link">
                        <img class="logo__icon icon" src="./image/logo__img.svg" alt="Logo">
                        <p class="logo__text">TicketSale</p>
                    </a>
            </div>
            <nav class="header__nav">
                <a class="nav__tickets">Билеты</a>
                <a class="nav__about">О нас</a>
                <a class="nav__contacts">Контакты</a>
            </nav>
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
                    <form action="../tickets.html" method="post" class="form-found">
                        <input type="text" class="from fast-found" id="inputFrom" placeholder="Откуда" name="PoD" required><input type="text" class="fast-found" id="inputWhere" placeholder="Куда" name="PoA" required>
                        <input type="text" class="text fast-found" id="inputDep" name="DoD" placeholder="Туда" required> <input type="text" class="text fast-found" id="inputArrive" name="DoA" placeholder="Обратно">
                        <div class="fast-found f-f-block">
                            <p class="flight-class">Эконом</p>
                            <p class="fast-found__passenger">1 пассажир</p>
                        </div>
                        <input type="submit" value="Найти билеты" class="btn found-btn">
                    </form>
                </div>
            </div>
          </div>  
          </div>  
`)
}

