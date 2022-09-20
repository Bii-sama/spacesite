const buttonOne = document.getElementById('one');
const buttonTwo = document.getElementById('two');
const buttonThree = document.getElementById('three');
const description = document.getElementById('description');
const picture = document.getElementById('techPicture');

const firstArticle = document.getElementsByTagName('article')[0];
const secondArticle = document.getElementsByTagName('article')[1];
const thirdArticle = document.getElementsByTagName('article')[2];

const firstArticleOut = description.removeChild(firstArticle);
const secondArticleOut = description.removeChild(secondArticle);
const thirdArticleOut = description.removeChild(thirdArticle);


buttonOne.onclick = function(){
    picture.className = 'one'
    if(description.appendChild(firstArticleOut)){
        description.replaceChild(firstArticleOut, firstArticleOut);
    }
    if(description.appendChild(secondArticleOut)){
        description.replaceChild(firstArticleOut, secondArticleOut);
    }
    if(description.appendChild(thirdArticleOut)){
        description.replaceChild(firstArticleOut, thirdArticleOut);
    }
    /*
    buttonOne.style.backgroundColor = '#f2f2f2';
    buttonOne.style.color = 'black'
    */
}

buttonTwo.onclick = function(){
    picture.className = 'two'
    if(description.appendChild(firstArticleOut)){
        description.replaceChild(secondArticleOut, firstArticleOut);
    }
    if(description.appendChild(secondArticleOut)){
        description.replaceChild(secondArticleOut, secondArticleOut);
    }
    if(description.appendChild(thirdArticleOut)){
        description.replaceChild(secondArticleOut, thirdArticleOut);
    }
}

buttonThree.onclick = function(){
    picture.className = 'three'
    if(description.appendChild(firstArticleOut)){
        description.replaceChild(thirdArticleOut, firstArticleOut);
    }
    if(description.appendChild(secondArticleOut)){
        description.replaceChild(thirdArticleOut, secondArticleOut);
    }
    if(description.appendChild(thirdArticleOut)){
        description.replaceChild(thirdArticleOut, thirdArticleOut);
    }
}