 const  logoBtn = document.querySelector('.logo')
 const  modalPlace = document.querySelector('.modal_place')
 const  modalPlaceCreate = document.querySelector('.modal_place_create')
 const createBtn = document.querySelector('.create_tasc');
 const signInBtn = document.querySelector('.theme')
 

 const createTascModal = `
 <form class="formAddTasc form">
 <div class="modal_window ">
     <div class="wrapper_window">
         <div class="content_window">
             <textarea   placeholder="Описание" class="description_tasc" >hello</textarea>
             <button class="create_tasc_btn">Создать</button>
             <img src="images/close_btn.png" alt="close window" class="close_window_icon">
             </div>
             
     </div>
 </div>
 </form>
        `
        const LoginAndPasswordModal = 
        `
        <form  class="registration_form form">
        <div class=" modal_window login_window">
            <div class="wrapper_window">
            <div class="content_window">
               <input type="text" class="name_user">
               <input type="current-password"  class="password_user">
               <button class = "registration_btn" type="submit">Регистрация</button>
               <button type="submit" class="auth_btn">Войти</button>
               <img src="images/close_btn.png" alt="close window" class="close_window_icon">
               </div>
            </div>
                    </div>
                    
            </div>
        </div>
        </form>`


               const modal = (html) =>({
                        close: ()=>{ 
                                        document.querySelector('.close_window_icon').addEventListener('click',()=>{
                                                document.querySelector('.form').remove();  
                                        })
                        },
                        open: (html)=>{
                                
                                modalPlaceCreate.insertAdjacentHTML('beforeend',html);
                                const form =  document.querySelector('.form');
                                form.addEventListener('click',(event)=>{
                                        event.preventDefault();

                                         if((event.target.classList.contains("create_tasc_btn"))){                    
                                                         openCreateTasc(); 
                                                    
                                                         
                                         }
                                          if((event.target.classList.contains("auth_btn"))){
                                                        openAuth()                         
                                        }     
                                          if((event.target.classList.contains("registration_btn"))){
                                                        openRegistration()                       
                                        }     
                                          
                                }
                                )                  
                        }
                     
                })

                const md = modal();


                function openCreateTasc(){
                        const contentOfTasc = document.querySelector('.description_tasc');
                        createTascAddToServer(contentOfTasc) 
                        
                     
                }

                function openAuth(){
                        const nameUser = document.querySelector('.name_user')
                        const passwordUser = document.querySelector('.password_user');
                        const obj = {
                                username:nameUser.value,
                                password:passwordUser.value
                        }
                        allFetchMethods(authUrl,'POST',token,obj)
               /*          auth(nameUser,passwordUser)    */
                }
                function openRegistration(){
                        const nameUser = document.querySelector('.name_user')
                        const passwordUser = document.querySelector('.password_user');
                        regisTration(nameUser,passwordUser)   
                }


                createBtn.addEventListener('click',()=>{
                        md.open(createTascModal)
                })


                signInBtn.addEventListener('click',()=>{
                        md.open(LoginAndPasswordModal)
                })


                modalPlaceCreate.addEventListener('click',(event)=>{
                        if(event.target.classList.contains('close_window_icon')){
                                md.close();
                        }
                })








                

              


               
                
                


                

                



             
              
        


                

          





              



        

       


