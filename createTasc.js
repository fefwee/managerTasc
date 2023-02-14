   

    
     async function getPost(){
        try{
            const request = await fetch('http://localhost:8080/post/getPost',{
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer '+window.localStorage.getItem('token')
                }
            })
            const response =  request.json();
            return  response
        
        }
        catch(e){
            console.error(e)
        }
    }
     
    async function auth(name,password){
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
    } 

    /*  allFetchMethods(getPostUrl,'GET')  */
     
     


    (async function getItemPost  (){
        const obj =  await getPost();
        const post = obj.posts
        let content;
        let date;
        let id;


          for(let item of post){
            id = item.id
            content = item.value.content 
            date = item.value.createTime  
            createTasc(date,content,id)     
         }   

    })()  
        

    



        function createTasc (date,content,id){
            const tascBlockCreate = `
            <li class="tasc_create_block" >
                    <h5></h5>
                    <h6>${date}</h6>
                    <input class="tasc_content" value = "${content}" readonly></input>
                    <div class="change_buttons">
                        <button class="done">Done</button>
                    <button class="delete" id = "${id}">Delete</button>
                </div>
            </li>`  
                   tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);

            }

          


            (function deleteAndDoneTAsc(){
                document.querySelector('.tasc_of_field').addEventListener('click',(event)=>{
                    if(event.target.classList.contains('delete')){
                        const id = event.target.id
                        deleteTascMethod(+id)
                    }
                    if(event.target.classList.contains('done')){
                        const parent = event.target.closest('.tasc_create_block');
                        const tascContet =  parent.querySelector('.tasc_content');  
                        tascContet.classList.toggle('done_btn');
                    }
                    
                }
                )
            })()
            
            

 