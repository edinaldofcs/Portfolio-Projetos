import { montarElemento } from "../../Functions.js";
import { infos } from "../../Infos.js";

export function Acessibilidade() {
  var root = document.getElementById('root');
  var section = montarElemento('section', 'animation');
  section.classList.add('block');
  section.setAttribute('id','animation');
  var titulos = ['fontes', 'background-geral', 'background-titulos', 'icones', 'Botões', 'Botões-fonte']

   var conteudo = `<h3 class="animation__title block" id="toggle">ACESSIBILIDADE</h3>
   <div class="animation__texts block">
     <p class="animation__text block">fontes</p>
     <p class="animation__text block">background-geral</p>
     <p class="animation__text block">background-titulos</p>
     <p class="animation__text block">icones</p>
     <p class="animation__text block">Botões</p>
     <p class="animation__text block">Botões-fonte</p>
   </div>
   <div class="animation__color block">
     <input type="color" class="animation__item block">
     <input type="color" class="animation__item block">
     <input type="color" class="animation__item block">
     <input type="color" class="animation__item block">
     <input type="color" class="animation__item block">
     <input type="color" class="animation__item block">
   </div>` 
  
   section.innerHTML = conteudo
   root.appendChild(section);
}