import tags from "@/assets/tags.ts";

interface Project {
  title: string; // Title of the project
  url: string; // relative URL to the project page
  thumbnail: string; // thumbnail image name
  short: string; // Short description of the project
  desc: string; // Long description of the project
  note: string; // Noteable things about the project
  tech: string[]; // List of technologies used
  date: string; // Date of completion
  tags: string[]; // List of tags
  github: string; // URL to the GitHub repository
  live: string; // URL to the live version of the project
  videos: string[]; // List of YouTube video IDs
  images: string[]; // List of image names
}

const projects: Project[] = [
  //honeysea???
  {
    title: "Portfolio Website",
    url: "portfolio",
    thumbnail: "thumbnail",
    short:
      "A website to showcase my projects and skills, and to let people know how to contact me.",
    desc: "TODO",
    note: "TODO",
    tech: ["TODO"],
    date: "Continually updated",
    tags: [
      tags.FRONT,
      tags.HTML,
      tags.CSS,
      tags.TCSS,
      tags.JS,
      tags.TS,
      tags.VUE,
    ],
    github: "",
    live: "",
    videos: [],
    images: [],
  },
  {
    title: "Crossplay.tv",
    url: "crossplay",
    thumbnail: "thumbnail",
    short:
      "A virtual reality social media platform with a focus on content creation and sharing.",
    desc: "TODO",
    note: "TODO",
    tech: ["TODO"],
    date: "TODO",
    tags: [],
    github: "",
    live: "",
    videos: [],
    images: [],
  },
  {
    title: "Paypal Clone",
    url: "paypal",
    thumbnail: "thumbnail",
    short:
      "A simplified feature clone of the PayPal website, using fake money.",
    desc: "TODO",
    note: "TODO",
    tech: ["TODO"],
    date: "TODO",
    tags: [],
    github: "https://github.com/ArturStokkeland/paypal-clone",
    live: "",
    videos: ["U7WZBRvhHaQ"],
    images: ["history", "request"],
  },
  {
    title: "Puzzle Solver",
    url: "puzzle-solver",
    thumbnail: "thumbnail",
    short:
      "A collection of algorithms for solving various puzzles, optionally with a given initial state.",
    desc: "TODO",
    note: "TODO",
    tech: ["TODO"],
    date: "TODO",
    tags: [
      tags.FRONT,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.TS,
      tags.ANGULAR,
      tags.BABYLON,
    ],
    github:
      "https://github.com/ArturStokkeland/Advanced-Software-Engineering-Portfolio",
    live: "",
    videos: [],
    images: [],
  },
  {
    title: "Flowerboy",
    url: "flowerboy",
    thumbnail: "thumbnail",
    short:
      "Murakami inspired art generator for tokenized assets on the Ethereum blockchain.",
    desc: "TODO",
    note: "TODO",
    tech: ["TODO"],
    date: "TODO",
    tags: [
      tags.FRONT,
      tags.BACK,
      tags.FULL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.P5,
      tags.SOLIDITY,
    ],
    github: "",
    live: "https://www.flowerboy.art/",
    videos: ["Jc_gbrqSS3I"],
    images: [],
  },
  {
    title: "AI - Behaviour Trees",
    url: "behaviour-tree",
    thumbnail: "thumbnail",
    short:
      "An AI extension for a game engine, allowing for the creation of AI agents.",
    desc: "This project is an extension to the game development framework FXGL. The extension allows a user of the framework to create AI behaviour logic, which can then be attached to entities in the game world. The AI logic is created using behaviour trees, a tree-like structure where each node represents a conditional statement or an action that the AI will perform.",
    note: "The project heavily relies on Object Oriented Programming (OOP) concepts. In particular it makes use of abstract classes to define the structure of the behaviour tree, as well as adding the core functionality for it to run. It is however up to the user to inherit the classes and add specific functionality for their particular use case. The project also uses Java reflection to allow users to define a tree with a simple text file, which is then parsed to create the tree by loading the appropriate classes. The project also requires a understanding of game engine architecture, and makes use of the entity-component system (ECS) to attach the behaviour tree to an entity in the game world.",
    tech: [
      "Java",
      "JavaFX",
      "FXGL",
      "Kotlin",
      "Object Oriented Programming (OOP)",
      "Recursion",
      "Java Reflection",
    ],
    date: "June 2021",
    tags: [tags.APP, tags.JAVA, tags.JAVAFX, tags.FXGL, tags.KOTLIN],
    github: "https://github.com/ArturStokkeland/FXGL_Contribution",
    live: "",
    videos: ["2LcUtSr3ZrA"],
    images: ["pong", "example"],
  },
  {
    title: "Instagram clone",
    url: "instagram",
    thumbnail: "thumbnail",
    short: "A simplified feature clone of the Instagram website.",
    desc: "A simplified feature clone of the popular image sharing website, Instagram. Users can register and login using their facebook accounts. Once logged in, users can upload images to their profile. Images can be given a description, and other users can like the images, and leave comments on them. Users can also search for other users, allowing them to view their profile and the images they have posted. When viewing another user's profile, the user has the option to follow them, which enables them to see all posts made by the users they follow on their feed, sorted by most recent.",
    note: "This is a functionally complete full-stack application. The front-end is built with HTML, CSS and JavaScript, and the back-end is built with PHP, using SQL and MySQL as a server solution. The login is made using OAuth 2.0 with FaceBook as the provider. The website is also fully responsive, and will adapt to any screen size.<br><br>It has to be mentioned that the project was hosted on university servers, and is no longer available to view.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "SQL and MySQL",
      "CRUD Operations using ES6 Fetch API",
      "OAuth 2.0",
    ],
    date: "March 2021",
    tags: [
      tags.FRONT,
      tags.BACK,
      tags.FULL,
      tags.HTML,
      tags.CSS,
      tags.JS,
      tags.PHP,
      tags.SQL,
      tags.MYSQL,
    ],
    github: "https://github.com/ArturStokkeland/Delayed-Litre",
    live: "",
    videos: [],
    images: ["front", "flow", "schema"],
  },
  {
    title: "Museum search tool",
    url: "museum",
    thumbnail: "thumbnail",
    short:
      "A search tool for finding exhibits in the Victoria and Albert Museum.",
    desc: "The website allows the user to search the database of the Victoria and Albert Museum in London, allowing them to see information about the exhibits. A search will return a list of exhibits which titles match the search query. The user can then click on an exhibit to see more information about it and see a larger image if the item has one. The user can also filter away exhibits that don't have an image or a description, and the user can specify amount of items listed per page.",
    note: "The main purpose of this project was to gain experience in using API's. The old XMLHttpRequest methods were used to make the API requests, and the data was returned in JSON format. The website is also fully responsive, and will adapt to any screen size.<br><br>It has to be mentioned that the API used to create the website has been updated, and is no longer compatible, so the website is no longer functional.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "API requests using the old XMLHttpRequest methods",
    ],
    date: "March 2020",
    tags: [tags.FRONT, tags.HTML, tags.CSS, tags.JS],
    github: "https://github.com/ArturStokkeland/ci527",
    live: "https://arturstokkeland.github.io/ci527/index.html",
    videos: [],
    images: ["front", "load", "responsive"],
  },
  {
    title: "Breakout",
    url: "breakout",
    thumbnail: "thumbnail",
    short: "A replicated game based on the classic Breakout game.",
    desc: "This project is a replicated game based on the classic Breakout game, with some added individual features. The player can use the settings menu to change difficulty of the game, alter paddle movement speed and adjust the drop rate of power-ups. Difficulty replaces green blocks which require one hit to destroy, with orange and/or red blocks, which require two and three hits to destroy respectively. The three power-ups in the game do the following: Extend the width of the paddle for a short period of time, spawn an extra smaller ball that will destroy bricks, and turning the ball into a ghost, making it ignore brick hitboxes until it bounces off the ceiling. The game also features a leaderboard where the top scores are recorded.",
    note: "When creating this project, a lot of emphasis was put on good programming practices. As such the application is built using the Model-View-Controller (MVC) architecture, and uses an object oriented programming paradigm. The project is also very well documented in such a way that Javadocs can be generated from the source code.",
    tech: [
      "Java",
      "JavaFX",
      "Object Oriented Programming (OOP)",
      "Model-View-Controller (MVC) Architecture",
    ],
    date: "April 2019",
    tags: [tags.APP, tags.JAVA, tags.JAVAFX],
    github: "https://github.com/ArturStokkeland/Breakout",
    live: "",
    videos: ["2VEbafCh6dw"],
    images: ["menu", "game", "settings", "leaderboard"],
  },
];

export default projects;
