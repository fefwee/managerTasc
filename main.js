   import { createTasc,tascOfField,getPost,deleteTascMethod,id,post} from "./createTasc.js";
   import { regisTration,auth,getUser,form,createTascAddToServer } from "./fetch_methods.js";
   import { openModalWindow,closeModal,openLoginModal,closeModalIcon,loginBtn} from "./modal_window.js";


   const  formAddTasc = document.querySelector('.formAddTasc')
   const fieldOfTasc  = document.querySelector('.field_of_tascs');
   const mainSection = document.querySelector('.main');
   const registrationBtn = document.querySelector('.registration_btn');
   const authBtn = document.querySelector('.auth_btn')
   const createTascBtn = document.querySelector('.create_tasc_btn');
   
   
    //registration 

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        registrationBtn.addEventListener('click',regisTration)
        console.log('click')
    })
   
    //authorization

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        authBtn.addEventListener('click',auth)
        })
    //create posts 

    formAddTasc.addEventListener('submit',(e)=>{
        e.preventDefault();
        createTascBtn.addEventListener('click',createTascAddToServer)
        })

        getPost()

        getUser()
    
      


    function deleteTasc(event){
        const tasc = event.target;
            if(tasc.textContent === 'Delete'){
              const parent = event.target.closest('.tasc_create_block');
              parent.remove();  
            deleteTascMethod()
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

    





    

   
  
        

        
     
   

   

            
    




            
   
    




     

   
   
    

       
   
      
    


    
   

