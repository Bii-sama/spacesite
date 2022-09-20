
const articles = document.getElementById('aboutTheCrew')
const div2 = document.getElementById('secondHalf')


const article1 = articles.getElementsByTagName('article')[0];
const article2 = articles.getElementsByTagName('article')[1];
const article3 = articles.getElementsByTagName('article')[2];
const article4 = articles.getElementsByTagName('article')[3];

const article1remove = articles.removeChild(article1);
const article2remove = articles.removeChild(article2);
const article3remove = articles.removeChild(article3);
const article4remove = articles.removeChild(article4);

const firstButton = document.getElementById('douglas');
const secondButton = document.getElementById('glover');
const thirdButton = document.getElementById('ansari');
const fourthButton = document.getElementById('mark');


firstButton.onclick = function(){
     div2.className= 'person1'


     if(articles.appendChild(article1remove)){
        articles.replaceChild(article1remove,article1remove);
     }

     if(articles.appendChild(article2remove)){
        articles.replaceChild(article1remove,article2remove);
     }

     if(articles.appendChild(article3remove)){
        articles.replaceChild(article1remove,article3remove);
     }

     if(articles.appendChild(article4remove)){
        articles.replaceChild(article1remove,article4remove);
     }
}

secondButton.onclick = function(){
  
     div2.className = 'person2';
     
     if(articles.appendChild(article1remove)){
        articles.replaceChild(article2remove,article1remove);
     }

     if(articles.appendChild(article2remove)){
        articles.replaceChild(article2remove,article2remove);
     }

     if(articles.appendChild(article3remove)){
        articles.replaceChild(article2remove,article3remove);
     }

     if(articles.appendChild(article4remove)){
        articles.replaceChild(article2remove,article4remove);
     }
}

thirdButton.onclick = function(){
    
    div2.className = 'person3';
    
    if(articles.appendChild(article1remove)){
        articles.replaceChild(article3remove,article1remove);
     }

     if(articles.appendChild(article2remove)){
        articles.replaceChild(article3remove,article2remove);
     }

     if(articles.appendChild(article3remove)){
        articles.replaceChild(article3remove,article3remove);
     }

     if(articles.appendChild(article4remove)){
        articles.replaceChild(article3remove,article4remove);
     }

}

fourthButton.onclick = function(){
 
    div2.className = 'person4';
    

    if(articles.appendChild(article1remove)){
        articles.replaceChild(article4remove,article1remove);
     }

     if(articles.appendChild(article2remove)){
        articles.replaceChild(article4remove,article2remove);
     }

     if(articles.appendChild(article3remove)){
        articles.replaceChild(article4remove,article3remove);
     }

     if(articles.appendChild(article4remove)){
        articles.replaceChild(article4remove,article4remove);
     }

}
