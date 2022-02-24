// <!-- <h3 class="card__titulo">Skills</h3>
//       <div class="card__container">
//         <div class="card__cards">
//           <img class="cards__img" src="assets/img/seta.png" alt="seta">
//           <p class="cards__info">Html 5</p>
//         </div>        
//       </div> -->

import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


export function SkillsAndHobbies(text) {  
  var obj;

  if(text.toLocaleLowerCase() == 'skills'){
    obj = infos.cards.skills
  }  

  if(text.toLocaleLowerCase() == 'hobbies'){
    obj = infos.cards.hobbies
  }  
  
  var section = montarElemento('section','card');
  const h3 = montarElemento('h3','card__titulo');  
  h3.innerHTML = text;  
  h3.setAttribute('id', text)

  section.appendChild(h3);

  const divContainer = montarElemento('div','card__container');
  section.appendChild(divContainer)

  obj.forEach((element) => {    

    const cardContainer = montarElemento('div','card__cards');
    cardContainer.innerHTML = element.svg;

    cardContainer.firstElementChild.classList.add('cards__img')

    const paragrafo = montarElemento('p','cards__info');
    paragrafo.innerHTML = element.name;

    divContainer.appendChild(cardContainer)
    cardContainer.appendChild(paragrafo);

  });

  section.appendChild(divContainer);

  var root = document.getElementById('root')
  root.appendChild(section);

}
