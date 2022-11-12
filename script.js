const textos1 = [
    'La energia me destroza no quiero ser el procer sino el pajaro que en su estatua posa.',
    'Nos condenaron a echar raices en tierra y no en cielo.',
    'Me ensenaron a ser sincero para que me crean cuando salga el lobo.',
    'Nunca habra revolucion sin evolucion de conciencia, depende de ti la diferencia.',
    'Debes amar sin miedo a ser traicionado, aunque sin dar prioridad a quien no te la ha dado.',
    'Cuida tu rumbo sin juzgar el que elegi, y antes de cambiar al mundo prmero cambiate a ti.',
    'Vivo con el miedo de hacer lo correcto con la persona equivocada, o hacer lo equivocado con la persona correcta.',
];
const textos2 = [
  'Checks over stripes, that is what i like, that is what we like.',
  'Sun is down freezing cold, thats how we already know winter is here.',
  'Friends wanna be friends when you doing de most, how you tell me youre my friend then you went out and told.',
];
const NIV = [textos1,textos2];

let FRASES = ['','',''];
let palabras = [];
let palabraIndice = 0;
let startTime = Date.now();

const textoElement = document.getElementById('quote');
const messageElement = document.getElementById('message');
const typedValueElement = document.getElementById('texto-tipeado');
const ierror = document.getElementById('ierror');
const idiom = document.getElementById('idiom');
const JUEGO = document.getElementById('juego');
const seleccion = document.getElementById('idioma');
JUEGO.style.display='none';
ierror.style.display='none';

document.getElementById('idiom').addEventListener('click', ()=>{
  const IDIOMA = document.getElementById('select').value;
  let lengua = 0;
  if(IDIOMA<1 || IDIOMA>2){
  ierror.style.display='block';
  }
  else{
      seleccion.style.display='none';
      ierror.style.display='none';
      JUEGO.style.display='block';
      lengua=IDIOMA-1;
      let ejecucion = NIV[lengua];
      let i;
      for (i=0 ; i<ejecucion.length; i++){
          FRASES[i]=ejecucion[i];
      }  
  }
})

document.getElementById('inicio').addEventListener('click', () => {
    const textoIndice = Math.floor(Math.random() * FRASES.length);
    const texto = FRASES[textoIndice];
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
