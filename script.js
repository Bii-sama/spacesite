

// Space Website Page 2
const photos =['imagemoon.PNG','imagemars.PNG','imageeuropa.PNG','imagetitan.PNG'];
const picture = document.querySelector('#pictures')


const first = document.querySelector('#first').addEventListener('click', imageOne);

function imageOne(){
    picture.className = 'first';
}

const second = document.querySelector('#second').addEventListener('click', imageTwo);

function imageTwo(){
    picture.className = 'second';
}


const third = document.querySelector('#third').addEventListener('click', imageThree);

function imageThree(){
    picture.className = 'third';
}


const fourth = document.querySelector('#fourth').addEventListener('click', imageFour);

function imageFour(){
    picture.className = 'fourth';
}

// Space Website Page 3




