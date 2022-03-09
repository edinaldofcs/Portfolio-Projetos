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
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1zZMYtaUtUZAj2h4xN8u8q-BL9_9A-Fnx',
        nome: 'Front-End',
        status: '2021 - Danki Code'
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1wwnslpmpk12h8fHA1_TVl9hmGbV3G1VU',
        nome: 'Front-End',
        status: '2022 - Alura'
      }
    ],
    experiencia: [
      {
        imagem: 'https://drive.google.com/uc?export=view&id=11j9AxWtFZfmGWofml5VhH0oBNlL3_j_z',
        titulo: 'AluraCord-Ninja',
        subtitulo: '2022 - Imersão Alura',
        demo: "https://aluracord-ninja.vercel.app/",
        repositorio: "https://github.com/edinaldofcs/aluracord"
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1TWxpIF8tj6SIgjes5bCytDm3AAApm07A',
        titulo: 'Pokedex',
        subtitulo: '2022 - Pokedex_API',
        demo: "https://edinaldofcs.github.io/Pokedex_API_JS/",
        repositorio: "https://github.com/edinaldofcs/Pokedex_API_JS"
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1Dr0b6zuUA62n85QwWBfplsei8hNF1KEc',
        titulo: 'Jogo da forca',
        subtitulo: '2022 - Alura',
        demo: "https://edinaldofcs.github.io/Jogo-Da-Forca-Alura/",
        repositorio: "https://github.com/edinaldofcs/Jogo-Da-Forca-Alura"
      },
      {
        imagem: 'https://drive.google.com/uc?export=view&id=1CFT3sc0COXqcgJTYEim9SVEgKh3kniuQ',
        titulo: 'Le Catering',
        subtitulo: '2022 - HTML, CSS, JS',
        demo: "https://edinaldofcs.github.io/Portifolio-HTML-CSS-JS/projeto01/",
        repositorio: "https://github.com/edinaldofcs/Portifolio-HTML-CSS-JS"
      },
      {
        imagem: 'https://user-images.githubusercontent.com/61365646/150241954-46b922d7-ec33-46f7-808e-6b631cb44167.JPG',
        titulo: 'Código secreto',
        subtitulo: '2022 - Alura',
        demo: "https://edinaldofcs.github.io/Challenge-01-Alura/",
        repositorio: "https://github.com/edinaldofcs/Challenge-01-Alura"
      },
      {
        imagem: 'https://user-images.githubusercontent.com/61365646/156079643-07c92a7b-5f36-4513-a0df-8cf52c486715.png',
        titulo: 'Campeonato pontos corridos',
        subtitulo: '2021 - Excel e VBA',
        demo: "https://github.com/edinaldofcs/Excel-e-VBA",
        repositorio: "https://github.com/edinaldofcs/Excel-e-VBA"
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
