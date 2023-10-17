'use strict'

const header = document.querySelector('.header');

const headerWrapper = document.createElement('div')
const logo = document.createElement('div');
const logoText = document.createElement('p');
const logoIcon = document.createElement('img');
const headerNav = document.createElement('div');
const navTickets = document.createElement('a');
const navContacts = document.createElement('a');
const navAbout = document.createElement('a');
const profile = document.createElement('div');
const profileIcon = document.createElement('img');

headerWrapper.classList = 'header__wrapper';
logo.classList = 'header__logo';
logoText.classList = 'logo__text';
logoIcon.classList = 'logo__icon icon';
headerNav.classList = 'header__nav';
navTickets.classList = 'nav__tickets';
navContacts.classList = 'nav__contacts';
navAbout.classList = 'nav__about';
profile.classList = 'header__profile';
profileIcon.classList = 'profile__icon icon'

logoIcon.src = '../image/logo__img.svg';
logoText.textContent = 'TicketSale';
logo.append(logoIcon);
logo.append(logoText);
navTickets.textContent = 'Билеты';
navContacts.textContent = 'Контакты';
navAbout.textContent = 'О нас';
headerNav.append(navTickets);
headerNav.append(navAbout);
headerNav.append(navContacts);
profileIcon.src = '../image/profile-icon.svg';
profile.append(profileIcon);
headerWrapper.append(logo);
headerWrapper.append(headerNav);
headerWrapper.append(profile);
header.append(headerWrapper);
