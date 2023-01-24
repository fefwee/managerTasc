const tascOfField = document.querySelector('.tasc_of_field');
export const form = document.querySelector('.registration_form');
const inputName = document.querySelector('.name_user');
const inputPassword =document.querySelector('.password_user')
const description = document.querySelector('.description_tasc');


    export async function regisTration(){
    try{
    const reg = fetch('http://localhost:8080/user/registration',{
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
  export async function auth(){
    try{
        const send = await fetch('http://localhost:8080/user/auth',{
            method:'POST',
            headers:{
                'Content-type':'application/json', 
            },
            body:JSON.stringify({
                username:inputName.value,
                password:inputPassword.value
            })
        })
        const response = await send.json()
        window.localStorage.setItem('token',response.token)
        console.log(response)
    } catch(e){
        console.error(e)
    }
  }
  export async function getUser(){
    try{
        const getusers = await fetch('http://localhost:8080/user/getUser',{
            headers:{
                'Authorization':'Bearer '+window.localStorage.getItem('token')
            }
        });
        const requestUser = await getusers.json()
        console.log(requestUser)
    } catch(e){
        console.error(e)
    }
  }

  export async function createTascAddToServer(){
    try{
        const create = await fetch('http://localhost:8080/post/create',{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+window.localStorage.getItem('token')
            },
            body:JSON.stringify({
                title:inputName.value,
                content:description.value
            })
        })
        const requestCreate  = await create.json();
        console.log(requestCreate)
    } catch(e){
        console.error(e)
    }
  } 


   


 












   