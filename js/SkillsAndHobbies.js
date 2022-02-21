import { objeto } from "./Infos.js";

const infos = objeto();

function montarElemento(tag,classe){
  let element = document.createElement(tag);
  element.classList.add(classe)
  return element;
}


export function SkillsAndHobbies(text) {  
  var obj;

  if(text.toLocaleLowerCase() == 'skills'){
    obj = infos.cards.skills
  }  

  if(text.toLocaleLowerCase() == 'hobbies'){
    obj = infos.cards.hobbies
  }  

  const card = montarElemento('h3','card__titulo');
  card.innerHTML = text

  var cardSection = document.querySelector('[data-card]');
  cardSection.appendChild(card);

  const container = montarElemento('div','card__container');
  cardSection.appendChild(container)

  obj.forEach((element) => {    

    const cardContainer = montarElemento('div','card__cards');
    cardContainer.innerHTML = element.svg;
    cardContainer.firstElementChild.classList.add('cards__img')

    const paragrafo = montarElemento('p','cards__info');
    paragrafo.innerHTML = element.name;

    container.appendChild(cardContainer)
    cardContainer.appendChild(paragrafo);

  })

}
