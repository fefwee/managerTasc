   const modalIcon = document.querySelector('.modal_window');
   const fieldOfTasc  = document.querySelector('.field_of_tascs');
   const mainSection = document.querySelector('.main');
   const description = document.querySelector('.description_tasc');
   const tascOfField = document.querySelector('.tasc_of_field');
   const createTascBtn = document.querySelector('.create_tasc_btn');
   const closeModalIcon = document.querySelector('.close_window_icon');
   const loginBtn = document.querySelector('.theme');
   const loginWindow = document.querySelector('.login_window')
   const selectIndex = document.querySelector('.name_of_tasc');
   let valueSelect = selectIndex.options[selectIndex.selectedIndex].text;
   const dateNow = new Date();
   
   


   function closeModal (){
    closeModalIcon.addEventListener('click',()=>{
    modalIcon.classList.add('active')
})};

    closeModalIcon.addEventListener('click',closeModal)    

 function openModalWindow(){
    document.querySelector('.create_tasc').addEventListener('click',()=>{
        modalIcon.classList.remove('active')
})}

    document.querySelector('.create_tasc').addEventListener('click',openModalWindow)

    function openLoginModal(){
        loginBtn.addEventListener('click',()=>{
            loginWindow.classList.remove('active')
    })} 
    
    loginBtn.addEventListener('click',openLoginModal)

    //delete btn
    tascOfField.addEventListener('click',deleteTasc)
    //done btn
    tascOfField.addEventListener('click',doneTasc)



    //SERVER


    //CREATE POST 


    async function createTascOnServer () {
       const tasc = fetch('http://localhost:8080/post/create',{
        method:'POST',
        headers:{
            'Content-type':'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzMxMTI2MzMsImV4cCI6MTY3MzcxNzQzM30.jBEMowUAwCarlxETSg-bkmkSMOeeVeTEvZiH8e8bYpU'
            
        },
        body:JSON.stringify({
            title:valueSelect,
            content:description.value,
        })
    })
    const response = await tasc.json();
    return tasc;
}
    

   createTascBtn.addEventListener('click',createTascOnServer)
   

     async function getPost() {

           const gettasc = await fetch('http://localhost:8080/post/getPost',{
        headers:{
            'Content-type':'application/json',
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzMxMTI2MzMsImV4cCI6MTY3MzcxNzQzM30.jBEMowUAwCarlxETSg-bkmkSMOeeVeTEvZiH8e8bYpU'

        }
    }
    )
       return gettasc.json();

    }

        let item;

     async function posts (){

        const response = await getPost();
        const contentPosts = response.posts;
        console.log(contentPosts)
        for(item of contentPosts){
            createTasc()
        }

        
     }
     posts()

      
   


    function createTasc(){
       
             const tascBlockCreate = `
         <li class="tasc_create_block">
                 <h6>${item.value.createTime}</h6>
                 <h1>${item.value.title}</h1>
                 <input class="tasc_content" value = "${item.value.content}" readonly></input>
                 <div class="change_buttons">
                     <button class="done">Done</button>
                 <button class="delete">Delete</button>
             </div>
         </li>`  
                tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
                modalIcon.classList.add('active');
             } 
    



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





    const form = document.querySelector('.registration_form');
    const inputName = form.querySelector('.name_user');
    const inputPassword = form.querySelector('.password_user')
    const registrationBtn = form.querySelector('.registration_btn');
    const authBtn = form.querySelector('.auth_btn')
    const formAddTasc = document.querySelector('.formAddTasc')

  
  
        form.addEventListener('submit',(e)=>{
            e.preventDefault()
            registrationBtn.addEventListener('click',regInfo);
            authBtn.addEventListener('click',authInfo)
        })
        

        
     
    function regInfo(){
       fetch('http://localhost:8080/user/registration',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:inputName.value,
                password:inputPassword.value
            })
        })
        .then(res=> res.json())
        .then(data=> console.log(data)) 
    
    }

    function authInfo(){
        fetch('http://localhost:8080/user/auth',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username:inputName.value,
                password:inputPassword.value
            })
        })
        .then(res=> res.json())
        .then(data=> window.localStorage.setItem('token',data.token)) 
            
        inputName.value = ''
        inputPassword.value = ''
    }
   

       /*  fetch('http://localhost:8080/user/getUser',{     
              headers: {
                'Content-Type':'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token') 
            },
        } )
        .then(res=> res.json())
        .then(data=> console.log(data)) */ 
            
    




            
   
    




     

   
   
    

       
   
      
    


    
   

