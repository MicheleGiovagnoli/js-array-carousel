//ARRAY IMMAGINI
const array = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg',
];

//Seleziono il div imahe-list
const domImageList = document.querySelector('.image-list');


//Variabile nella quale inseriro il risultato del ciclo
let containerDinamicImage = "";

//ciclo for per creare dinamicamente le immagini
for(let i = 0; i < array.length; i++) {
    const dinamicImage = `  <div class="image">
                                <img class="img" src="${array[i]}" alt="img">
                            </div>`;

     //inserisco il risultato del ciclo
     containerDinamicImage += dinamicImage;                       
}

//inserisco le immagini create dinamicamente all'interno del div image-list nell'html
domImageList.innerHTML = containerDinamicImage;

