import { vba, js, react, html, css, java, violao, correr, leitura, programar, cantar, viajar, contato } from "./Icons.js"

export const dataBase = (cor) => {
  return {
    nome: "Edinaldo Fernandes",
    email: "edinaldofcs@gmail.com",
    imgPerfil: 'assets/img/me.png',
    redesSociais: [{
      redeSocial: "Github ",
      link: "https://github.com/Edinaldofcs",
    },
    {
      redeSocial: "Linkedin ",
      link: "https://www.linkedin.com/in/edinaldofcs-dev/",
    },
    {
      redeSocial: "Instagram ",
      link: "https://www.instagram.com/naldofcs/",
    },
    {
      redeSocial: "Curriculo ",
      link: "https://drive.google.com/file/d/1ox5y_WcpomuqG0ONaU4oDeyj7ZwM3Qvp/view?usp=sharing",
    }],
    seta: "assets/img/seta.png",
    cards: {
      skills: [
        {
          name: "Javascript",
          svg: js(),
        },
        {
          name: "React",
          svg: react(),
        },
        {
          name: "Html",
          svg: html(),
        },
        {
          name: "Css",
          svg: css(),
        },
        {
          name: "Java",
          svg: java(),
        },
        {
          name: "Vba",
          svg: vba(),
        }
      ],
      hobbies: [
        {
          name: "Música",
          svg: violao(),
        },
        {
          name: "Esportes",
          svg: correr(),
        },
        {
          name: "Leitura",
          svg: leitura(),
        },
        {
          name: "Programar",
          svg: programar(),
        },
        {
          name: "Cantar",
          svg: cantar(),
        },
        {
          name: "Viajar",
          svg: viajar(),
        }
      ]
    },
    formacao: [
      {
        imagem: 'https://no.descomplica.com.br/hubfs/logos-descomplica-2018/png/01-Desc-Marca-Principal.png',
        nome: 'Ciência da Computação',
        status: '2022 - Descomplica (em andamento)',
        acessibilidade: 'Texto com a palavra: Descomplica! Descomplica é uma faculdade digital.'
      },
      {
        imagem: 'https://i.ibb.co/6bttMLK/front-end.jpg',
        nome: 'Front-End',
        status: '2021 - Danki Code',
        acessibilidade: 'Imagem de um certificado de conclusão de curso da instituição, Danki Code.'
      },
      {
        imagem: 'https://i.ibb.co/CtVH6GM/alura01.jpg',
        nome: 'Front-End',
        status: '2022 - Alura',
        acessibilidade: 'Imagem de um certificado de conclusão de curso da instituição Alura.'
      }
    ],
    experiencia: [
      {
        imagem: 'https://i.ibb.co/Lk1M78c/acessibilidade.png',
        titulo: 'Projeto Acessibilidade',
        subtitulo: 'Propriedade intelectual',
        demo: "https://edinaldofcs.github.io/projeto-acessibilidade",
        repositorio: "https://github.com/edinaldofcs/projeto-acessibilidade",
        acessibilidade: 'Imagem de uma tela com um teclado virtual, com o ponteiro do mouse controlado por webcam'
      },
      {
        imagem: 'https://i.ibb.co/w0pfS0T/aluracord.png',
        titulo: 'AluraCord-Ninja',
        subtitulo: 'Imersão Alura',
        demo: "https://aluracord-ninja.vercel.app/",
        repositorio: "https://github.com/edinaldofcs/aluracord",
        acessibilidade: 'Uma tela de login, como plano de fundo do Guy Sansei - do Anime, Naruto - em posição de luta.'
      },
      {
        imagem: 'https://i.ibb.co/dLsf2tD/alurageek.png',
        titulo: 'AluraGeek',
        subtitulo: 'Alura-Geek',
        demo: "https://edinaldofcs.github.io/AluraGeek/",
        repositorio: "https://github.com/edinaldofcs/AluraGeek",
        acessibilidade: 'Página de venda de produtos'
      },
      {
        imagem: 'https://i.ibb.co/fkHfXJD/pokedex.png',
        titulo: 'Pokedex',
        subtitulo: 'Pokedex_API',
        demo: "https://edinaldofcs.github.io/Pokedex_API_JS/",
        repositorio: "https://github.com/edinaldofcs/Pokedex_API_JS",
        acessibilidade: 'Imagem de animais fictícios do desenho pokémon.'
      },
      {
        imagem: 'https://i.ibb.co/58jFTrr/le-catering.png',
        titulo: 'Le Catering',
        subtitulo: 'HTML, CSS, JS',
        demo: "https://edinaldofcs.github.io/Portifolio-HTML-CSS-JS/projeto01/",
        repositorio: "https://github.com/edinaldofcs/Portifolio-HTML-CSS-JS",
        acessibilidade: 'Imagem de dois pratos de sobremesas à frente e um hamburguer artesanal, ao fundo.'
      }

    ],
    contact: {
      imagem: contato(),
      titulo: 'Contato',
      texto1: 'Quer entrar em contato comigo?',
      texto2: 'Preencha o formulário abaixo. Entrarei em contato o mais breve possível.'
    }

  }
}

export const infos = dataBase();
