const textos = [
    'La energia me destroza no quiero ser el procer sino el pajaro que en su estatua posa.',
    'Nos condenaron a echar raices en tierra y no en cielo.',
    'Me enseñaron a ser sincero para que me crean cuando salga el lobo.',
    'Nunca habra revolucion sin evolucion de conciencia, depende de ti la diferencia.',
    'Debes amar sin miedo a ser traicionado, aunque sin dar prioridad a quien no te la ha dado.',
    'Cuida tu rumbo sin juzgar el que elegi, y antes de cambiar al mundo prmero cambiate a ti.',
    'Vivo con el miedo de hacer lo correcto con la persona equivocada, o hacer lo equivocado con la persona correcta.',
];

let palabras = [];
let palabraIndice = 0;
let startTime = Date.now();

const textoElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('texto-tipeado');

document.getElementById('inicio').addEventListener('click', () => {
    const textoIndice = Math.floor(Math.random() * textos.length);
    const texto = textos[textoIndice];
    palabras = texto.split(' ');
   
    palabraIndice = 0;
  
    const spanPalabras = palabras.map(function(palabra) { return `<span>${palabra} </span>`});

    textoElement.innerHTML = spanPalabras.join('');
    textoElement.childNodes[0].className = 'highlight';
    messageElement.innerText = '';
    typedValueElement.value = '';
    typedValueElement.focus();

    startTime = new Date().getTime();
  });


typedValueElement.addEventListener('input', () => {

    const currentWord = palabras[palabraIndice];
    const typedValue = typedValueElement.value;

    if (typedValue === currentWord && palabraIndice === palabras.length - 1) {

      const elapsedTime = new Date().getTime() - startTime;
      const message = `FELICIDADES! Terminaste en ${elapsedTime / 1000} seg.`;
      messageElement.innerText = message;

    } else if (typedValue.endsWith(' ') && typedValue.trim() === currentWord) {

      typedValueElement.value = '';
      palabraIndice++;
  
      for (const palabraElement of textoElement.childNodes) {
        palabraElement.className = '';
      }

      textoElement.childNodes[palabraIndice].className = 'highlight';

    } else if (currentWord.startsWith(typedValue)) {

      typedValueElement.className = '';

    } else {
      typedValueElement.className = 'error';
    }
  });
