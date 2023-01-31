export const header = document.querySelector('.header')
export const logoBtn = document.querySelector('.logo')


export function createLogoUser(){

    const logoUser = `
        <div class="logo_block btn">
            <h1></h1>
            <p>Количество тасков </p>
            <button>Выход</button>
        </div>
        `
        console.log('click')
        header.insertAdjacentHTML('beforeend',logoUser)
        
         
       
}



