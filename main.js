   import { createTasc,tascOfField,getPost,deleteTascMethod} from "./createTasc.js";
   import { getUser,form,createTascAddToServer, auth, regisTration } from "./fetch_methods.js";
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
    })
 

   
    //authorization 

    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        authBtn.addEventListener('click', auth)
        })

    //create posts 


    formAddTasc.addEventListener('submit',(e)=>{
        e.preventDefault();
        createTascBtn.addEventListener('click',createTascAddToServer)
        }
        )

    
    
    
     
        


    function deleteTasc(event){
          if(event.target.classList.contains('delete')){    
          const parent = event.target.closest('.tasc_create_block');
              parent.remove();   

            } 
    }  

           
          
           function getId(event){
            const id =  document.querySelector('.tasc_create_block').id
            if(event.target.classList.contains('delete')){
                deleteTascMethod(+event.target.id)
            }
           }
           tascOfField.addEventListener('click',getId) 
   


        function doneTasc(event){
            if(event.target.classList.contains('done')){
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


    





    
   
  
        

        
     
   

   

            
    




            
   
    




     

   
   
    

       
   
      
    


    
   

