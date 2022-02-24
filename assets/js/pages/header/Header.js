/* <header class="header">
    <div class="sobre">
      <h1 id="sobre" class="sobre__titulo" data-name-titulo>
        <!--Alimentado via js-->
      </h1>
      <p class="sobre__infos">Faço faculdade de Ciência da Computação na faculdade Descomplica e atualmente estou
        participando de um curso da Awari e do projeto Oracle ONE na Alura</p>
      <div class="sobre__links" data-social>
        <!-- Alimentado via js -->
      </div>
    </div>
    <div class="sobre__avatar">
      <img class="sobre__avatar--img" src="https://github.com/edinaldofcs.png" alt="Imagem de Edinaldo" />
    </div>
  </header> */

  import { infos } from '../../Infos.js'
  import { montarElemento } from "../../Functions.js"; 

  // import img from '../../../assets/img/seta'
    
  export function Header() {
    
    const section = montarElemento('header','header');
  
    const divSobre = montarElemento('div', 'sobre');
    const h1 = montarElemento('h1', 'sobre__titulo');
    h1.textContent = `Olá, meu nome é ${infos.nome} e construo páginas web`;

    const paragrafo = montarElemento('p', 'sobre__infos');
    paragrafo.textContent = `Faço faculdade de Ciência da Computação na faculdade Descomplica e atualmente estou participando de um curso da Awari e do projeto Oracle ONE na Alura`;

    section.appendChild(divSobre);
    divSobre.appendChild(h1)
    divSobre.appendChild(paragrafo)
    

    const divLinks = montarElemento('div', 'sobre__links'); 

    infos.redesSociais.forEach((element) => {
      
      const containerSpan = montarElemento('span', 'sobre__social');
      const link = montarElemento('a', 'sobre__social--link');
      link.href= element.link
      link.target="_blank"
      link.textContent=element.redeSocial
  
      const imgLink = montarElemento('img', 'sobre__social--img');
      imgLink.src =  `assets/img/seta.png`
  
      divLinks.appendChild(containerSpan)
      containerSpan.appendChild(link)
      link.appendChild(imgLink)
    }) 
    divSobre.appendChild(divLinks)
    
    const divAvatar = montarElemento('div', 'sobre__avatar');
    const imgAvatar = montarElemento('img', 'sobre__avatar--img');
    imgAvatar.src =  infos.imgPerfil;
    
    section.appendChild(divAvatar)
    divAvatar.appendChild(imgAvatar)
    
    var root = document.getElementById('root')
    root.appendChild(section);

  }
  
   
  
  