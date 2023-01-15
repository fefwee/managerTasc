export const modalIcon = document.querySelector('.modal_window');
export const closeModalIcon = document.querySelector('.close_window_icon');
export const loginBtn = document.querySelector('.theme');
export const loginWindow = document.querySelector('.login_window')
export const formAddTasc = document.querySelector('.formAddTasc')



const modalWindowMethods = {
    closeModal: function(){
            closeModalIcon.addEventListener('click',()=>{
            modalIcon.classList.add('active')
        });
    },
    openModalWindow: function(){
            document.querySelector('.create_tasc').addEventListener('click',()=>{
                modalIcon.classList.remove('active')
        })
    },
    openLoginModal: function(){
            loginBtn.addEventListener('click',()=>{
                loginWindow.classList.remove('active')
        })
    }
}


export const closeModal = modalWindowMethods.closeModal;
export const openModalWindow = modalWindowMethods.openModalWindow;
export const openLoginModal= modalWindowMethods.openLoginModal;

