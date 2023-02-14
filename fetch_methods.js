const tascOfField = document.querySelector('.tasc_of_field');
const getUserUrl = 'http://localhost:8080/user/getUser';
const createTascUrl = 'http://localhost:8080/post/create';
const registrationUrl = 'http://localhost:8080/user/registration';
const authUrl = 'http://localhost:8080/user/auth';
const deleteUrl = 'http://localhost:8080/post/delete';
const getPostUrl = 'http://localhost:8080/post/getPost';
const token = window.localStorage.getItem('token');



  

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
    return response


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



    



  
    

 

  
  


  



 
   


 
   










   