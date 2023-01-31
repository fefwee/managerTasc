

function createModalIcon(){

    const modalIcon= `
    <form class="formAddTasc">
    <div class="modal_window active">
        <div class="wrapper_window">
            <div class="content_window">
                    <select type="text" placeholder="Название" class="name_of_tasc">
                    <option value="">важно</option>
                    <option value="">В первую очередь</option>
                    <option value="">может подождать</option>
                <textarea   placeholder="Описание" class="description_tasc" ></textarea>
                <button class="create_tasc_btn">Создать</button>

                
                <img src="images/close_btn.png" alt="close window" class="close_window_icon">
                </div>
                
        </div>
    </div>

    </form>
    `
    modalIconPlace.insertAdjacentHTML('beforeend',modalIcon)

}

signInBtn.addEventListener('click',createModalIcon)


