const buttons = document.querySelectorAll('.show-model');

const model = document.querySelector('.model');
const overlay = document.querySelector('.overlay');
const closeModel = document.querySelector('.close-model');

const makeModelVisible = function(){

    // model.style.display = 'block'
    // overlay.style.display = 'block';
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const makeModelInvisible = function(){
    // model.style.display = 'none';
    // overlay.style.display = 'none';
    model.classList.add('hidden');
    overlay.classList.add('hidden');
};

for (let i = 0; i < buttons.length; i++) 
    buttons[i].addEventListener('click',makeModelVisible);

closeModel.addEventListener('click',makeModelInvisible);

overlay.addEventListener('click',makeModelInvisible);

document.addEventListener('keydown',function(e){

    if(e.key == 'Escape'){
        if(!model.classList.contains('hidden')){
            makeModelInvisible();
        }
    }

});
