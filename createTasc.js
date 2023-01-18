const selectIndex = document.querySelector('.name_of_tasc');
let valueSelect = selectIndex.options[selectIndex.selectedIndex].text;
const description = document.querySelector('.description_tasc');
export const tascOfField = document.querySelector('.tasc_of_field');

    
   export  function createTasc (){
    const tascBlockCreate = `
    <li class="tasc_create_block">
            <h6></h6>
            <h1>${item.posts}</h1>
            <input class="tasc_content" value = "${item.posts}" readonly></input>
            <div class="change_buttons">
                <button class="done">Done</button>
            <button class="delete">Delete</button>
        </div>
    </li>`  
           tascOfField.insertAdjacentHTML("beforeend",tascBlockCreate);
           modalIcon.classList.add('active');
        
    }

   


