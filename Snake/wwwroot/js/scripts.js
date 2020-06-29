document.addEventListener('keydown', function (event) {
    if (event.code == 'ArrowDown') {
        muveDown();
    }
    if (event.code == 'ArrowUp') {
        muveUp();
    }
    if (event.code == 'ArrowLeft') {
        muveLeft();
    }
    if (event.code == 'ArrowRight') {
        muveRight();
    }
});


let height = 280;
let width = 350; 
let score = 0;

let snake = [];
let snakeLenth = 0;
let waySnake;
snake[0] = document.querySelector('.ash');

document.body.querySelector('.ash').style.left = width + 'px';
document.body.querySelector('.ash').style.top = height + 'px';

function muveDown() {    
    if (waySnake != 'up') waySnake = 'down';
}

function muveUp() {
    if (waySnake != 'down') waySnake = 'up';
}

function muveLeft() {
    if (waySnake != 'right') waySnake = 'left';
}

function muveRight() {
    if (waySnake != 'left') waySnake = 'right';
}


function muveSnake() {   
    
    for (let i = snake.length - 1; i >= 1; i--) {
        if (snake[i].style.top == parseInt(snake[i - 1].style.top) + 70 + 'px' && snake[i].style.left == snake[i - 1].style.left) {
            snake[i].style.top = parseInt(snake[i].style.top) - 70 + 'px';
        }
        else if (snake[i].style.top == parseInt(snake[i - 1].style.top) - 70 + 'px' && snake[i].style.left == snake[i - 1].style.left) {
            snake[i].style.top = parseInt(snake[i].style.top) + 70 + 'px';
        }
        else if (snake[i].style.left == parseInt(snake[i - 1].style.left) + 70 + 'px' && snake[i].style.top == snake[i - 1].style.top) {
            snake[i].style.left = parseInt(snake[i].style.left) - 70 + 'px';
        }
        else if (snake[i].style.left == parseInt(snake[i - 1].style.left) - 70 + 'px' && snake[i].style.top == snake[i - 1].style.top) {
            snake[i].style.left = parseInt(snake[i].style.left) + 70 + 'px';
        }
        
    }
    
    switch (waySnake) {
        case 'left': {
            if (width <= 0) {
                //clearInterval(game);
                alert('Ты проиграл.');
            }

            for (let i = 0; i < snake.length; i++) {
                snake[i].classList.remove('right');
                snake[i].classList.remove('top');
                snake[i].classList.remove('bottom');

                snake[i].classList.add('left');
            }            

            if (width > 0) width -= 70;            
            snake[0].style.left = width + 'px';             
            break;
        }
        case 'right': {
            if (width >= 630) {
               
                alert('Ты проиграл.');
            }

            for (let i = 0; i < snake.length; i++) {
                snake[i].classList.remove('left');
                snake[i].classList.remove('top');
                snake[i].classList.remove('bottom');

                snake[i].classList.add('right');
            } 

            if (width <= 560) width += 70;      
            snake[0].style.left = width + 'px';            
            break;
        }
        case 'up': {
            if (height <= 0) {
                
                alert('Ты проиграл.');
            }

            for (let i = 0; i < snake.length; i++) {
                snake[i].classList.remove('right');
                snake[i].classList.remove('left');
                snake[i].classList.remove('bottom');

                snake[i].classList.add('top');
            } 

            if (height > 0) height -= 70;           
            snake[0].style.top = height + 'px';          
            break;
        }
        case 'down': {
            if (height >= 630) {
                
                alert('Ты проиграл.');
            }

            for (let i = 0; i < snake.length; i++) {
                snake[i].classList.remove('right');
                snake[i].classList.remove('top');
                snake[i].classList.remove('left');

                snake[i].classList.add('bottom');
            } 

            if (height <= 560) height += 70;           
            snake[0].style.top = height + 'px';       
            break;
        }
    }    

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].style.left == snake[0].style.left && snake[i].style.top == snake[0].style.top) {            
            alert('Ты проиграл.');
        }
    }

}

var downBottom = document.body.querySelector('.bDown');
downBottom.setAttribute('onclick', 'muveDown()');

var upBottom = document.body.querySelector('.bUp');
upBottom.setAttribute('onclick', 'muveUp()');

var leftBottom = document.body.querySelector('.bLeft');
leftBottom.setAttribute('onclick', 'muveLeft()');

var rightBottom = document.body.querySelector('.bRight');
rightBottom.setAttribute('onclick', 'muveRight()');


function randPokemon() {
    let pokemon = document.createElement('img');
    pokemon.classList.add('pokemon');


    let randImg = Math.floor(Math.random() * 13) + 1;
    if (randImg < 10)
        pokemon.src = 'img/pokemons/00' + randImg + '.png';
    else
        pokemon.src = 'img/pokemons/0' + randImg + '.png';
    //console.log(pokemon.src);

    let x = Math.floor(Math.random() * 10) * 70;
    let y = Math.floor(Math.random() * 10) * 70;

    pokemon.style.left = x + 'px';
    pokemon.style.top = y + 'px';

    document.querySelector('#field').append(pokemon);
}

randPokemon();

function eatPokemon() {
    let pokemon = document.querySelector('.pokemon');

    if ((width + 'px') == pokemon.style.left && (height + 'px') == pokemon.style.top) {

        document.body.querySelector('.ash').classList.add('eat');
        let eatEnd = setTimeout(()=>
            document.body.querySelector('.ash').classList.remove('eat')
        ,500)


        snake[++snakeLenth] = pokemon;  
        pokemon.classList.remove('pokemon'); 
        
        randPokemon();
        document.querySelector('#score').value = ++score;
    }
    
}


function gameTick() {
    let i;
    clearTimeout(i);

    muveSnake();
    eatPokemon();  

    fps = document.body.querySelector('#interval').value;   
    i = setTimeout(gameTick, fps)
}

gameTick();
  


