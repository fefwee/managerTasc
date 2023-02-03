 const logoBtn = document.querySelector('.logo')
 const  modalPlace = document.querySelector('.modal_place')


 const createTascModal = `
 <form class="formAddTasc">
 <div class="modal_window active">
     <div class="wrapper_window">
         <div class="content_window">
                 <select type="text" placeholder="Название" class="name_of_tasc">
                 <option value="">важно</option>
                 <option value="">В первую очередь</option>
                 <option value="">может подождать</option>
             <textarea   placeholder="Описание" class="description_tasc" ></textarea>
             <button class="create_tasc_btn">Создать</button>

             
             <img src="images/close_btn.png" alt="close window" class="close_window_icon">
             </div>
             
     </div>
 </div>

 </form>
        `
        const LoginAndPasswordModal = 
        `
        <form  class="registration_form">
        <div class="login_window active">
            <div class="wrapper_window">
               <input type="text" class="name_user">
               <input type="current-password"  class="password_user">
               <button class = "registration_btn" type="submit">Регистрация</button>
               <button type="submit" class="auth_btn">Войти</button>
               <img src="images/close_btn.png" alt="close window" class="close_window_icon">
            </div>
                    </div>
                    
            </div>
        </div>
    
        </form>`


        
                const modal = (html) =>({
                        close: ()=>{
                                document.querySelector('.modal').classList.add('close')
                        },
                        open: ()=>{
                                modalPlace.insertAdjacentHTML('beforeend',html)
                        }
                })






              



        

       


