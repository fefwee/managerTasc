   const modalIcon = document.querySelector('.modal_window');
   const fieldOfTasc  = document.querySelector('.field_of_tascs');
   const mainSection = document.querySelector('.main');
   const description = document.querySelector('.description_tasc');
   const tascOfField = document.querySelector('.tasc_of_field');
   const createTascBtn = document.querySelector('.create_tasc_btn');
   const closeModalIcon = document.querySelector('.close_window_icon');
   const loginBtn = document.querySelector('.theme');
   const loginWindow = document.querySelector('.login_window')


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


function createTasc(event){
    
    event.preventDefault();

    let selectIndex = document.querySelector('.name_of_tasc');
    let valueSelect = selectIndex.options[selectIndex.selectedIndex].text;
    const tascBlockCreate = `
<li class="tasc_create_block">
        <h1>${valueSelect}</h1>
        <input class="tasc_content" value = "${description.value}" readonly></input>
        <div class="change_buttons">
            <button class="done">Done</button>
        <button class="delete">Delete</button>
    </div>
</li>`  
       tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
       modalIcon.classList.add('active');
    }
   

   //create tasc block
    createTascBtn.addEventListener('click',createTasc);
  
    


    


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
   

        fetch('http://localhost:8080/user/getUser',{     
            
              headers: {
                'Authorization': 'Bearer ' + window.localStorage.getItem('token') },
        })
        .then(res=> res.json())
        .then(data=> console.log(data)) 
            


        /* async function fetchData(url,methodData){
            await fetch((url),{
                method:methodData,
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({
                    username:inputName.value,
                    password:inputPassword.value
                })
            })
            .then(res=> res.json())
            .then(data=> console.log(data)) 
                
            
        } */
   
    




     

   
   
    

       
   
      
    


    
   

