import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";


export function Formacao() {
  
  const section = montarElemento('section','sobre-mim');
  section.classList.add('formacao')

  const h2 = montarElemento('h2', 'formacao__titulo');
  h2.textContent = 'Formação Acadêmica';
  h2.setAttribute('id','Formacao')

  section.appendChild(h2);

  const divContainer = montarElemento('div', 'formacao__container');
  section.appendChild(divContainer);

  infos.formacao.map((element)=>{
    const divContainerCard = montarElemento('div', 'formacao__card');
    const divContainerImg = montarElemento('div', 'formacao__container--img');
    const img = montarElemento('img', 'formacao__img');
    img.src = element.imagem;
    img.alt = element.acessibilidade;
    divContainerImg.appendChild(img);
    divContainerCard.appendChild(divContainerImg);
    const paragrafo1 = montarElemento('p', 'formacao__info');
    paragrafo1.textContent = element.nome
    const paragrafo2 = montarElemento('p', 'formacao__ano');
    paragrafo2.textContent = element.status;
    divContainerCard.appendChild(paragrafo1);
    divContainerCard.appendChild(paragrafo2);

    divContainer.appendChild(divContainerCard)
  })

  var root = document.getElementById('root')
  root.appendChild(section); 

}

/**
 * <section class="sobre-mim formacao">
    <h2 id="formacao" class="formacao__titulo">Formação Acadêmica</h2>
    <div class="formacao__container">
      <div class="formacao__card">
        <div class="formacao__container--img">
          <img class="formacao__img" src="assets/img/image 8.png" alt="">
        </div>
        <p class="formacao__info">Análise de dados</p>
        <p class="formacao__ano">2018 - UFRP</p>
      </div>
 */