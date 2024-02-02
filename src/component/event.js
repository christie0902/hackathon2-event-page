export class Event {

    constructor({name, date, description, image_url,id}) {
        this.element = null
        this.name = name;
        this.date = date;
        this.description = description;
        this.image = image_url;
        this.id = id;
        


       this.createElements()
    }

    


    createElements() {
        this.button = document.createElement('button')
        this.button.textContent = 'Register'
        this.button.setAttribute('id', `${this.id}`)

        this.eventName = document.createElement('h3')
        this.eventDate = document.createElement('h6')
        this.evenetDescription = document.createElement('p')
        this.imageDiv = document.createElement('div')

        this.eventName.textContent = this.name
        this.eventDate.textContent = this.date
        this.evenetDescription.textContent = this.description
        this.imageDiv.innerHTML =  `<img src="${this.image}" alt="">`
        
        this.element = document.createElement('div')
        
        this.element.appendChild(this.eventName)
        this.element.appendChild(this.eventDate)
        this.element.appendChild(this.evenetDescription)
        this.element.appendChild(this.imageDiv)
        this.element.appendChild(this.button)
        console.log(this.button);

        
    }
}


