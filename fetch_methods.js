const tascOfField = document.querySelector('.tasc_of_field');
export const form = document.querySelector('.registration_form');
const inputName = form.querySelector('.name_user');
const inputPassword = form.querySelector('.password_user')
const modalIcon = document.querySelector('.modal_window');




export async function getPost(){
    try{
        const request = await fetch('http://localhost:8080/post/getPost',{
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzM4MTA3NjAsImV4cCI6MTY3NDQxNTU2MH0.2G5zKn2TYyQ6pd9B53pNSILjiWTt_ju8smR2CFDkEwE'
            }
        })
        const response = await request.json();
        const obj = response;
      
    }
    catch(e){
        console.error(e)
    }
}
let obj = []
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
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzM5ODQ3MDYsImV4cCI6MTY3NDU4OTUwNn0.yG9ZSh7kQHqBm-PHVZ4iKLEG0IGf2Rgtyvnn7XEBkeo'
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
                'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzM4MTA3NjAsImV4cCI6MTY3NDQxNTU2MH0.2G5zKn2TYyQ6pd9B53pNSILjiWTt_ju8smR2CFDkEwE'
            },
            body:JSON.stringify({
                title:inputName.value,
                content:inputPassword.value
            })
        })
        const requestCreate  = await create.json();
        console.log(requestCreate)
    } catch(e){
        console.error(e)
    }
  }











   