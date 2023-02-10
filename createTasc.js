   

    
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

            async function deleteTascMethod(id){
                const req = await fetch('http://localhost:8080/post/delete',{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer '+ window.localStorage.getItem('token')
                },
                body:JSON.stringify({
                    id:id
                })
        
            })
                const res = await req.json()
                console.log(res)
            }

   


