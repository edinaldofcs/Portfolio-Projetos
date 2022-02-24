import { dataBase } from "./Infos.js";
import { montarElemento } from "./SkillsAndHobbies.js";

const infos = dataBase();

export function Header2() {
  var nome = document.querySelector('[data-name]'); 
  nome.innerHTML = infos.nome;
  nome = document.querySelector('[data-name-titulo]');
  nome.innerHTML = `Olá, meu nome é ${infos.nome} e construo páginas web`;

  const socials = document.querySelector('[data-social]')

  infos.redesSociais.forEach((element) => {
    const card = montarElemento('span', 'sobre__social');
    const link = montarElemento('a','sobre__social--link');
    link.textContent = element.redeSocial;    
    link.href = element.link;
    link.target = "_blank";

    const imgSeta = montarElemento('img', 'sobre__social--img');
    imgSeta.src = infos.seta;

    card.appendChild(link);
    link.appendChild(imgSeta);
    socials.appendChild(card);
  })

}

 
/*
 <header class="header">    
    <div class="sobre">
      <h1 class="sobre__titulo" data-name-titulo="">texto</h1>
      <p class="sobre__infos">texto</p>
        <div class="sobre__links" data-social="">
          <span class="sobre__social"><a class="sobre__social--link" href="https://github.com/Edinaldofcs" target="_blank">Github <img class="sobre__social--img" src="assets/img/seta.png"></a></span></div>
        </div>
        <div class="sobre__avatar">
          <img class="sobre__avatar--img" src="https://github.com/edinaldofcs.png" alt="Imagem de Edinaldo">
        </div>
  </header>
  
 */
