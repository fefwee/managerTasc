const selectIndex = document.querySelector('.name_of_tasc');
let valueSelect = selectIndex.options[selectIndex.selectedIndex].text;
const description = document.querySelector('.description_tasc');
 export const tascOfField = document.querySelector('.tasc_of_field');

const createTascAndPost  = {
    
    createTasc: function(){
        const tascBlockCreate = `
    <li class="tasc_create_block">
            <h6>${item.value.createTime}</h6>
            <h1>${item.value.title}</h1>
            <input class="tasc_content" value = "${item.value.content}" readonly></input>
            <div class="change_buttons">
                <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>
    </li>`  
           tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
           modalIcon.classList.add('active');
        
    },

    createTascOnServer: async function(){

        const tasc = fetch('http://localhost:8080/post/create',{
         method:'POST',
         headers:{
             'Content-type':'application/json',
             'Authorization': 'Bearer ' + window.localStorage.getItem('token')
             
         },
         body:JSON.stringify({
             title:valueSelect,
             content:description.value,
         })
     })
     const response = await tasc.json();
     return tasc;
 
}

}
export const createTasc = createTascAndPost.createTasc;
export const createTascOnServer = createTascAndPost.createTascOnServer;
