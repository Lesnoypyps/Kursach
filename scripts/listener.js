'use strict'

export const noTicketsRedirect = () =>{
    const closeModal = (modal) =>{
        modal.classList.remove('visible');
        modal.remove();
    }

    window.addEventListener('click', ({target}) =>{
        if (window.innerWidth <= 425){
            if (target.closest('.ticket')){

                const body = document.body
                const modal = `
                 <div class="modal visible">
                    <div class="modal__wrapper">
                        <div class="modal__content" style="background-color: white">
                            <h2 class="modal__header">Переход на страницу с покупкой билета в данный момент не доступен</h2>
                            <h2 class="modal__smile">:(</h2>
                        </div>
                    </div>
                </div>
            `;

                body.insertAdjacentHTML('beforeend', modal);
                const modalHTML = document.querySelector('.modal');
                setTimeout(()=>{
                    closeModal(modalHTML)
                },1500)
            }
        }else if (target.classList.contains('choose-btn')){

            const body = document.body
            const modal = `
                 <div class="modal visible">
                    <div class="modal__wrapper">
                        <div class="modal__content" style="background-color: white">
                            <h2 class="modal__header">Переход на страницу с покупкой билета в данный момент не доступен</h2>
                            <h2 class="modal__smile">:(</h2>
                        </div>
                    </div>
                </div>
            `;

            body.insertAdjacentHTML('beforeend', modal);
            const modalHTML = document.querySelector('.modal');
            setTimeout(()=>{
                closeModal(modalHTML)
            },1500)
        }
    })

}
