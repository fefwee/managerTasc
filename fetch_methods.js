const form = document.querySelector('.registration_form');
const inputName = form.querySelector('.name_user');
const inputPassword = form.querySelector('.password_user')
export const registrationBtn = form.querySelector('.registration_btn');
export const authBtn = form.querySelector('.auth_btn')



    export async function regInfo (){
         const reg = fetch('http://localhost:8080/user/registration',{
             method:'POST',
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify({
                 username:inputName.value,
                 password:inputPassword.value
             })
         })
         return reg.json()

         .then(res=> res.json())
         .then(data=> console.log(data)) 
     
     }

     export function authInfo(){
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
        .then(data=>{

        window.localStorage.setItem('token',data.token)
        console.log(data)
     }) 
            
        inputName.value = ''
        inputPassword.value = ''
    }

    export async function getUser (){
     await fetch('http://localhost:8080/user/getUser',{     
        headers: {
          'Content-Type':'application/json',
          'Authorization': 'Bearer ' + window.localStorage.getItem('token') 
      },
  } )
  .then(res=> res.json())
  .then(data=> console.log(data)) 
    }


   export async function getPost (){

    const gettasc = await fetch('http://localhost:8080/post/getPost',{
 headers:{
     'Content-type':'application/json',
     'Authorization': 'Bearer' + window.localStorage.getItem('token') 
 }
}
)
    return gettasc.json();

}









   