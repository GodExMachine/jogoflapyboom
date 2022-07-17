
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const clouds = document.querySelector('.clouds');
const pontofinal = document.querySelector('.pontofinal');
const contador = document.querySelector('.contador');


var counterVal = 0;

const placarfinal = 0;


//--- função que faz pular
const jump = () =>{
    mario.classList.add('jump');
    setTimeout(() =>{
        
     mario.classList.remove('jump');
     

    }, 500);



}


//--- função que soma e atuliza o contador
function conta(){
    counterVal= ++counterVal;
    document.getElementById("counter-label").innerHTML = counterVal;
    
}






// --- loop de teste se perdeu
const loop = setInterval(() =>{
    

    const pipePosition = pipe.offsetLeft;

    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudsPosition =  clouds.offsetLeft;   

    const placarfinal = counterVal;
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80 ){
        pipe.style.animation= 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation= 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = './IMAGENS/game-over.png';
        mario.style.width = '80px';
        mario.style.marginLeft = '50px';

        clouds.style.animation= 'none';
        clouds.style.left = `${cloudsPosition}px`;

        document.getElementById("counter-final").innerHTML ="Placar: &ensp;"+placarfinal;

        pontofinal.style.width = '220px';
        pontofinal.style.height = '120px';
        pontofinal.style.color = 'black';
        pontofinal.style.Position = 'relative';
        pontofinal.style.background = 'rgb(231, 208, 1)';
        pontofinal.style.border = '5px solid black'

        contador.style.color ='transparent';
        contador.style.background ='transparent';
        contador.style.border ='transparent';


        clearInterval(loop);
        

    }
    
}, 10);

document.addEventListener("keydown", conta);
document.addEventListener('click', conta);
document.addEventListener("keydown", jump);
document.addEventListener('click', jump);

//----- botão de reinciar
 const reloadtButton = document.querySelector("#reload");
 const button = document.querySelector('button');

  button.addEventListener("click", reload);
      
    function reload() {
    reload = location.reload();
     }

    reloadtButton.addEventListener("click", reload, false);
//----
  





