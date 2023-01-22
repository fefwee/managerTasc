const selectIndex = document.querySelector('.name_of_tasc');
let valueSelect = selectIndex.options[selectIndex.selectedIndex].value;
export const tascOfField = document.querySelector('.tasc_of_field');
const modalIcon = document.querySelector('.modal_window');

    
   
    export async function getPost(){
        try{
            const request = await fetch('http://localhost:8080/post/getPost',{
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzM4MTA3NjAsImV4cCI6MTY3NDQxNTU2MH0.2G5zKn2TYyQ6pd9B53pNSILjiWTt_ju8smR2CFDkEwE'
                }
            })
            const response =  request.json();
            return  response
          
        }
        catch(e){
            console.error(e)
        }
    }
        const obj =  await getPost();
        export const post = obj.posts;
        let content;
        export let id;
        let date;


        console.log(post)
         for(let item of post){
            id = item.id;
            console.log(id)
            content = item.value.content 
            date = item.value.createTime  
            createTasc()     
         }
       

         
         
     
         
    

        

        export  function createTasc (){
            const tascBlockCreate = `
            <li class="tasc_create_block">
                    <h5>${date}</h5>
                    <h3 class = 'id'>${id}</h3>
                    <h6>${valueSelect}</h6>
                    <input class="tasc_content" value = "${content}" readonly></input>
                    <div class="change_buttons">
                        <button class="done">Done</button>
                    <button class="delete">Delete</button>
                </div>
            </li>`  
                   tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
                   modalIcon.classList.add('active');
                
            }

            export async function deleteTascMethod(event){
                const req = await fetch('http://localhost:8080/post/delete',{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json',
                    'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ItCw0L3RgtC-0L0iLCJpYXQiOjE2NzM4MTA3NjAsImV4cCI6MTY3NDQxNTU2MH0.2G5zKn2TYyQ6pd9B53pNSILjiWTt_ju8smR2CFDkEwE'
                },
                body:JSON.stringify({
                    id:id
                })
        
            })
                const res = await req.json()
                console.log(res)
            }

   


