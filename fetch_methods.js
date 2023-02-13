const tascOfField = document.querySelector('.tasc_of_field');
const getUserUrl = 'http://localhost:8080/user/getUser';
const createTascUrl = 'http://localhost:8080/post/create';
const registrationUrl = 'http://localhost:8080/user/registration';
const authUrl = 'http://localhost:8080/user/auth';
const deleteUrl = 'http://localhost:8080/post/delete';
const token = window.localStorage.getItem('token');



   /*  async function regisTration(nameUser,passwordUser){
    try{
    const reg = await fetch(registrationUrl,{
        method:'POST',
        headers:{
            'Content-type':'application/json',
        },
        body:JSON.stringify({
            username:nameUser.value,
            password:passwordUser.value
        })
    
    })

    const responseReg = await reg.json()
    console.log(responseReg)
    inputName.value= '';
    inputPassword.value = ''
} catch(e){
    console.error(e)
}
}  */

   /*  async function auth(name,password){
    try{
        const send = await fetch(authUrl,{
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
}  */
  
  /*  async function getUser(){
    try{
        const getusers = await fetch(getUserUrl,{
            headers:{
                'Authorization':'Bearer '+token
            }
        });
        const requestUser = await getusers.json()
        
        console.log(requestUser)
        return requestUser

    } catch(e){
        console.error(e)
    }
  } */

   /* async function createTascAddToServer(contentOfTasc){
    try{
        const create = await fetch(createTascUrl,{
            method:'POST',
            headers:{
                'Content-type':'application/json',
                'Authorization':'Bearer '+token
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
  }  */

    async function deleteTascMethod(id){
        const req = await fetch(deleteUrl,{
        method:'DELETE',
        headers:{
            'Content-type':'application/json',
            'Authorization':'Bearer '+ token
        },
        body:JSON.stringify({
            id:id
        })

    })
    const res = await req.json()
    console.log(res)
}

    function options (){
    let headers = {
        'content-type':'application/json'
    }


     const token = checkToken();

    if(token){
        headers = {
            'content-type':'application/json',
            'Authorization':'Bearer '+token
        }
    }
    return headers
} 

   


  async function allFetchMethods(url,method,obj){
    
    try { 
    const request = await fetch((url),{
        method:method,
        headers:
             options()
        ,
        body:JSON.stringify(
            obj
        )
     
    })
    const response = await request.json();
    console.log(response)


    } catch (error) {
        console.log(error)
        
    }
}

//get user
 allFetchMethods(getUserUrl,'GET')


   
    
     function checkToken(){
        try{
        const havetoken =  window.localStorage.getItem('token');
        if(havetoken){
            console.log(true)
        }
        else{
         console.log(false)
        }

        return havetoken;

    } catch(error){
        console.log(error)
    }
    }



    



  
    

 

  
  


  



 
   


 
   










   