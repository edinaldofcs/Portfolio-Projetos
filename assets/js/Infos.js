import { vba, js, react, html, css, java, violao, correr, leitura, programar, cantar, viajar } from "./Icons.js"

export const dataBase = (cor) => {
  // var cor = cores.primaria[cores.primaria.length-1];
  return {
    nome: "Edinaldo Fernandes",
    email: "edinaldofcs@gmail.com",
    imgPerfil:'../assets/img/me.png',
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
    formacao:[
      {
        imagem: 'assets/img/image8.png',
        nome: 'Análise de dados',
        status: '2018 - UFRP'
      },
      {
        imagem: 'assets/img/image8.png',
        nome: 'Análise',
        status: '2019 - UFPR'
      },
      {
        imagem: 'assets/img/image8.png',
        nome: 'Análise',
        status: '2019 - UFPR'
      }
    ],
    experiencia:[
      {
        imagem: 'assets/img/image8.png',
        titulo: 'Análise de dados',
        subtitulo: '2018 - UFRP'
      },
      {
        imagem: 'assets/img/image8.png',
        titulo: 'Análise de dados',
        subtitulo: '2018 - UFRP'
      }
    ]

  }
}

export const infos = dataBase();