import { vba, js, react, html, css, java } from "./Icons.js"

export const objeto = () => {
  
  return {
    nome: "Edinaldo Fernandes",
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
          name: "vba",
          svg: vba(),
        },
        {
          name: "Javascript",
          svg: vba(),
        },
        {
          name: "React",
          svg: vba(),
        },
        {
          name: "vba",
          svg: vba(),
        },
        {
          name: "Javascript",
          svg: vba(),
        },
        {
          name: "React",
          svg: vba(),
        }
      ]
    }

  }
}