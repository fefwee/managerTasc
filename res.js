class Tasc{
    _name = ' '
    сonstructor(name,selector){
        this.name = name;
        this.selector = selector
        
        this.item = document.createElement('div');
        this.spanName = document.createElement('span')
        this.addBtn = document.createElement('button')
        this.removeBtn = document.createElement('button')
        this.addBtn.textContent = 'Создать задачу'
        this.removeBtn.textContent = 'Удалить'

        this.item.classList.add('block')
        //присваиваем занчение 
        this.name = _name;
    
        this.spanName = this.name;  
        this.item.append(this.spanName)
        this.item.append(this.addBtn)
        this.item.append(this.removeBtn)
        this.selector.append(this.item)
        
        
    }
    set name(value){
        this.value = _name;
      if(value){
        //  КАКОЕ ТО УСЛОВИЕ
      }
      
    }
   
 
    }
  




   const newTasc = new Tasc(document.querySelector('.project'),'hello')
