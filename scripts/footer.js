export const createFooter = () =>{
    const footer = document.querySelector('.footer');

    footer.insertAdjacentHTML('beforeend',
        `<div class="footer__wrapper">
            <div class="footer__logo">
                <a href="#" class="logo__link">
                    <img class="logo__icon icon" src="./image/logo__img.svg" alt="Logo">
<!--                    <p class="logo__text">TicketSale</p>-->
                </a>
            </div>
            <div class="footer__slogan">
                <p class="slogan">Наша компания не продаёт билеты, а только предоставляет их выбор, 
                чтобы вы не переплачивали, 
                Ваш TicketSale©
                </p>
            </div>
            <div class="footer__nav">
                <p class="nav-item">Email:tslink@test.com</p>
                <p class="nav-item">Адрес: Москва, ул.Пушкина, д.3</p>
                <p class="nav-item">Тел:8(909)565-46-30</p>    
            </div>
          </div> 
`)
}