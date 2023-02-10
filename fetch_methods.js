const tascOfField = document.querySelector('.tasc_of_field');
/* const form = document.querySelector('.registration_form');
const inputName = document.querySelector('.name_user');
const inputPassword =document.querySelector('.password_user')
const description = document.querySelector('.description_tasc'); */


    async function regisTration(){
    try{
    const reg = await fetch('http://localhost:8080/user/registration',{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({
            username:inputName.value,
            password:inputPassword.value
        })
    
    })

    const responseReg = await reg.json()
    console.log(responseReg)
    inputName.value= '';
    inputPassword.value = ''
} catch(e){
    console.error(e)
}
} 

    async function auth(name,password){
    try{
        const send = await fetch('http://localhost:8080/user/auth',{
            method:'POST',
            headers:{
                'Content-type':'application/json', 
            },
            body:JSON.stringify({
                username:name.value,
                password:password.value
            })
        })
        const response = await send.json()
        window.localStorage.setItem('token',response.token)
        console.log(response)
    } catch(e){
        console.error(e)
    }
}
  
   async function getUser(){
    try{
        const getusers = await fetch('http://localhost:8080/user/getUser',{
            headers:{
                'Authorization':'Bearer '+window.localStorage.getItem('token')
            }
        });
        const requestUser = await getusers.json()
        
        console.log(requestUser)
        return requestUser

    } catch(e){
        console.error(e)
    }
  }

   async function createTascAddToServer(contentOfTasc){
    try{
        const create = await fetch('http://localhost:8080/post/create',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+window.localStorage.getItem('token')
            },
            body:JSON.stringify({
                title:'',
                content:contentOfTasc.value
            })
        })
        const requestCreate  = await create.json();
        console.log(requestCreate)
    } catch(e){
        console.error(e)
    }
  } 

  



  /*    export async function allFetchMethods(url,methodSend,body){
         try{
            const fetchUrl  = await fetch(url,{
            method:methodSend,
            headers:{
                'Content-type':'application/json',
                

            },
            body:JSON.stringify({
                username:inputName.value,
                password:inputPassword.value
            })
        })
        const response  = await fetchUrl.json();
        console.log(response)
            }   
    catch(e){
        console.error('какая то ошибка: ' + e)
            }

    } */
 
   


 
   










   