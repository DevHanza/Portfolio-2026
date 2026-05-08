import placeholderImage from "../assets/ProjectThumbs/project-placeholder.png";
import habitzy from "../assets/ProjectThumbs/Habitzy.png";
import telegramYTDLBot from "../assets/ProjectThumbs/TelegramYTDLBot.png";
import cafesy from "../assets/ProjectThumbs/Cafesy.png";
import schoolNotes from "../assets/ProjectThumbs/SchoolNotes.png";

export const projects = {
  personal: [
    {
      title: "Habitzy",
      desc: "a simple habit tracking app that lets users see their progress over time.",
      stack: ["React", "Node.js", "MongoDB", "Express.js", "Docker"],
      image: habitzy,
      url: "https://github.com/DevHanza/habitzy",
    },
    {
      title: "SchoolNotes",
      desc: "Note taking app that lets users manage their class/school notes in a simple digital interface.",
      stack: ["Angular", "Node.js", "MongoDB", "Express.js"],
      image: schoolNotes,
      url: "https://github.com/DevHanza/SchoolNotes",
    },

    // {
    //   title: "ResponsiveShot",
    //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus.",
    //   stack: ["Python"],
    //   image: placeholderImage,
    //   url: "/",
    // },
    {
      title: "Cafesy",
      desc: "An online store for a coffee shop where you can buy products, contact, email newsletter, and more.",
      stack: ["JavaScript", "Express.js", "Node.js", "SASS"],
      image: cafesy,
      url: "https://github.com/DevHanza/cafesy",
    },
    {
      title: "TelegramYTDLBot",
      desc: "A Telegram bot that lets users download YouTube videos directly through Telegram.",
      stack: ["Python", "Docker"],
      image: telegramYTDLBot,
      url: "https://github.com/DevHanza/TelegramYTDLBot",
    },
  ],
  commercial: [
    {
      title: "Hanzas  —  Web Agency Website",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, minus.",
      image: placeholderImage,
      url: "/",
    },
  ],
};
