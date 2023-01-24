
const selectIndex = document.querySelector('.name_of_tasc');
let valueSelect = selectIndex.options[selectIndex.selectedIndex].value;
export const tascOfField = document.querySelector('.tasc_of_field');
const modalIcon = document.querySelector('.modal_window');

    
   
    export async function getPost(){
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
        const obj =  await getPost();
        const post = obj.posts;
        let content;
        let date;
        let id;


          for(let item of post){
            id = item.id
            console.log(id)
            content = item.value.content 
            date = item.value.createTime  
            createTasc()     
         } 



        export  function createTasc (){
            const tascBlockCreate = `
            <li class="tasc_create_block" id= "${id}">
                    <h5>${date}</h5>
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

            export async function deleteTascMethod(id){
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

   


