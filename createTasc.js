const selectIndex = document.querySelector('.name_of_tasc');
let valueSelect = selectIndex.options[selectIndex.selectedIndex].text;
const description = document.querySelector('.description_tasc');
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
            const response = await request.json();
            return await response
          
        }
        catch(e){
            console.error(e)
        }
    }
        const obj =  await getPost();
        const post = obj.posts;

        console.log(post)
         for(let item of post){
            createTasc()
         }

        export  function createTasc (){
            const tascBlockCreate = `
            <li class="tasc_create_block">
                    <h6>${valueSelect}</h6>
                    <h4>${post[0].value.createTime}</h4>
                    <input class="tasc_content" value = "${post[0].value.title}" readonly></input>
                    <div class="change_buttons">
                        <button class="done">Done</button>
                    <button class="delete">Delete</button>
                </div>
            </li>`  
                   tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
                   modalIcon.classList.add('active');
                
            }
        

   


