// FETCH CONTENIDO DE LOS PROJECTOS

const llamadadata = () => {
    fetch("https://baconipsum.com/api/?type=meat-and-filler")
    .then(reciboinformacion => reciboinformacion.json()) //coge la info de la API y me la pones en formato jason
    .then(formatojason => document.querySelector('#ejercio').innerHTML = formatojason)
    // en el document query le digo que me busque en el html DONDE TIENE que poner la info que ha sacado de la API
    .catch((err) => console.log(err));

}

llamadadata();

const titlepost1 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#title-card1').innerHTML = formatojason.title)
    .catch((err) => console.log(err));

}

titlepost1();

const descriptionpost1 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#description-card1').innerHTML = formatojason.body)
    .catch((err) => console.log(err));

}

descriptionpost1();


const titlepost2= () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#title-card2').innerHTML = formatojason.title)
    .catch((err) => console.log(err));

}

titlepost2();

const descriptionpost2 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#description-card2').innerHTML = formatojason.body)
    .catch((err) => console.log(err));

}

descriptionpost2();


const titlepost3 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#title-card3').innerHTML = formatojason.title)
    .catch((err) => console.log(err));

}

titlepost3();

const descriptionpost3 = () => {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(reciboinformacion => reciboinformacion.json())
    .then(formatojason => document.querySelector('#description-card3').innerHTML = formatojason.body)
    .catch((err) => console.log(err));

}

descriptionpost3();

// FORMULARIO

let fullname = document.querySelector('.full-name-input');
let email = document.querySelector('.email-input');
let phone = document.querySelector('.phone-input');
let message = document.querySelector('.message-input');

console.log(fullname);

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();

    if (fullname.value.trim() === '') {
        throw new Error('Debe completar el campo')
    } else if (phone.value.length !== 9) {
        throw Error('Error de tipeo')
    } else if (message.value === '') {
        throw Error('Debe completar el campo')
    } else {
        const contact = {
            fullname: fullname.value,
            email: email.value,
            phone: phone.value,
            message: message.value
        }
        
        console.log(contact);
    }
    
})
