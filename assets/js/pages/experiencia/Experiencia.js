import { infos } from '../../Infos.js'
import { montarElemento } from "../../Functions.js";

export function Experiencia() {
  
  const section = montarElemento('section','experiencia');

  const h2 = montarElemento('h2', 'experiencia__titulo');
  h2.textContent = 'Experiência profissional';
  h2.setAttribute('id', 'Projetos');

  section.appendChild(h2);

  const divContainer = montarElemento('div', 'experiencia__container--geral');
  section.appendChild(divContainer);

  infos.experiencia.map((element,index)=>{
    const divContainerCard = montarElemento('div', 'experiencia__card');
    if(index % 2 == 0) divContainerCard.classList.add('reverse');
    const divContainerImg = montarElemento('div', 'experiencia__resize');
    const img = montarElemento('img', 'experiencia__img');
    img.src = element.imagem;
    img.alt = element.acessibilidade;

    divContainerImg.appendChild(img)
    divContainerCard.appendChild(divContainerImg);    

    const divExp = montarElemento('div', 'experiencia__container');
    const h3 = montarElemento('h3', 'experiencia__container--titulo');
    h3.textContent = element.titulo;
    const paragrafo = montarElemento('p', 'experiencia__container--subtitulo');
    paragrafo.textContent = element.subtitulo;
    divExp.appendChild(h3);
    divExp.appendChild(paragrafo);

    const divContainerBtn = montarElemento('div', 'experiencia__container--botao');
    const btnLight = montarElemento('a', 'experiencia__container--btn');
    btnLight.classList.add('light')
    btnLight.href = element.repositorio
    btnLight.target = '_blank'
    btnLight.textContent = "Repositório";
    const btnDark = montarElemento('a', 'experiencia__container--btn');
    btnDark.classList.add('dark')
    btnDark.href = element.demo
    btnDark.target = '_blank'
    btnDark.textContent = "Demo";

    divContainerBtn.appendChild(btnLight);
    divContainerBtn.appendChild(btnDark);

    divExp.appendChild(divContainerBtn)

    divContainerCard.appendChild(divExp); 

    divContainer.appendChild(divContainerCard)

  })

  var root = document.getElementById('root')
  root.appendChild(section); 

}

/**
 * <div class="experiencia">
      <h2 id="projetos" class="experiencia__titulo">Experiência profissional</h2>
      <div class="experiencia__container--geral">
        <div class="experiencia__card">
          <div class="experiencia__resize" ><img class="experiencia__img" src="assets/img/image 8.png" alt=""/></div>
          <div class="experiencia__container">
            <h3 class="experiencia__container--titulo">Texto</h3>
            <p class="experiencia__container--subtitulo">texto 2</p>
            <div class="experiencia__container--botao">
              <a class="experiencia__container--btn light" experiencia__container href="">Repositório</a>
              <a class="experiencia__container--btn dark" href="">Ver demo</a>
            </div>
          </div>          
        </div>
 * 
 */