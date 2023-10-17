'use strict'

const header = document.querySelector('.header');

header.insertAdjacentHTML('beforeend',
    `<div class="header__wrapper">
            <div class="header__logo">
                <a href="#" class="logo__link">
                    <img class="logo__icon icon" src="../image/logo__img.svg">
                    <p class="logo__text">TicketSale</p>
                </a>
            </div>
            <div class="header__nav">
                <a class="nav__tickets">Билеты</a>
                <a class="nav__about">О нас</a>
                <a class="nav__contacts">Контакты</a>
            </div>
            <div class="header__profile">
                <img class="profile__icon icon" src="../image/profile-icon.svg" style="width: 30px">
            </div>
            
          </div>
          <div class="ticket-found">
            <div class="ticket-found__text">
                <h1 class="ticket-found__heading">Быстрый поиск билетов</h1>
            </div>
            <div class="ticket-found__input">
                <form action="" method="post" class="form-found">
                    <input type="text" class="from fast-found" placeholder="Откуда"><input type="text" class=" fast-found" placeholder="Куда">
                    <input type="text" class="text fast-found" placeholder="Отправление"><input type="text" class="text fast-found" placeholder="Прибытие"><input type="text" class="text fast-found" placeholder="">
                    <input type="submit" value="Найти билеты" class="submit">
                </form>
            </div>  
          </div>  
`)
