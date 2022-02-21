import { objeto } from "./Infos.js";

const infos = objeto();

export function Header() {
  var nome = document.querySelector('[data-name]');
  nome.innerHTML = infos.nome;
  nome = document.querySelector('[data-name-titulo]');
  nome.innerHTML = `Olá, meu nome é ${infos.nome} e construo páginas web`;

  const socials = document.querySelector('[data-social]')

  infos.redesSociais.forEach((element) => {

    const card = document.createElement('span');
    card.classList.add('sobre__social')

    const link = document.createElement('a');
    link.classList.add('sobre__social--link');
    link.textContent = element.redeSocial;    
    link.href = element.link
    link.target = "_blank"

    const imgSeta = document.createElement('img');
    imgSeta.classList.add('sobre__social--img');
    imgSeta.src = infos.seta;

    card.appendChild(link)
    link.appendChild(imgSeta)
    socials.appendChild(card);

  })

}

 

