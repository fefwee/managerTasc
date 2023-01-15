   import { createTasc,createTascOnServer,tascOfField } from "./createTasc.js";
   import { regInfo,authInfo,getUser,getPost,registrationBtn,authBtn } from "./fetch_methods.js";
   import { openModalWindow,closeModal,openLoginModal,closeModalIcon,loginBtn} from "./modal_window.js";


   const fieldOfTasc  = document.querySelector('.field_of_tascs');
   const mainSection = document.querySelector('.main');
   
   const createTascBtn = document.querySelector('.create_tasc_btn');
   const form = document.querySelector('.registration_form');
   const dateNow = new Date();
   

    //CREATE POST 

   createTascBtn.addEventListener('click',createTascOnServer)
   

         //post form registr and auth

         form.addEventListener('submit',(e)=>{
            e.preventDefault()
            registrationBtn.addEventListener('click',regInfo);
            authBtn.addEventListener('click',authInfo)
        })
    
        //get name user and post 
        getUser()
   
    
      


    function deleteTasc(event){
            if(event.target.textContent == 'Delete'){
              const parent = event.target.closest('.tasc_create_block');
              parent.remove();
            }
    
    }

        function doneTasc(event){
            if(event.target.textContent == 'Done'){
                const parent = event.target.closest('.tasc_create_block');
                const tascContet =  parent.querySelector('.tasc_content');  
                tascContet.classList.toggle('done_btn');
     
    
    }
}
      //delete btn
      tascOfField.addEventListener('click',deleteTasc)
      //done btn
      tascOfField.addEventListener('click',doneTasc)


      document.querySelector('.create_tasc').addEventListener('click',openModalWindow)

      //btn close modal window
      closeModalIcon.addEventListener('click',closeModal)    

     //open sign in window
     loginBtn.addEventListener('click',openLoginModal)

    





    

   
  
        

        
     
   

   

            
    




            
   
    




     

   
   
    

       
   
      
    


    
   

