import tags from "@/assets/tags.ts";

interface Project {
  title: string; // Title of the project
  url: string; // relative URL to the project page
  thumbnail: string; // thumbnail image name (without extension, but assumes png)
  short: string; // Short description of the project
  desc: string; // Long description of the project
  note: string; // Noteable things about the project
  tech: string[]; // List of technologies used
  date: string; // Date of completion
  tags: string[]; // List of tags
  github: string; // URL to the GitHub repository
  live: string; // URL to the live version of the project
  videos: string[]; // List of YouTube video IDs
  images: string[]; // List of image names (without extension, but assumes png)
}

const projects: Project[] = [
  //honeysea???
  {
    title: "Portfolio Website",
    url: "portfolio",
    thumbnail: "thumbnail",
    short:
      "A website to showcase my projects and skills, and to let people know how to contact me.",
    desc: "There isn't much to say, you are currently viewing it so have a look around! On this website you can find my portfolio showcasing some of the projects I have worked on, as well as some information about my background as a programmer and my skills, and of course a page detailing how to contact me along with links to my LinkedIn and my CV.",
    note: "The project is built with Vue.js, and uses Tailwind CSS for styling. The website is fully responsive, and will adapt to any screen size.",
    tech: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "Vue.js"],
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
    github: "https://github.com/ArturStokkeland/portfolio",
    live: "",
    videos: [],
    images: ["thumbnail", "portfolio", "filter"],
  },
  {
    title: "Crossplay.tv",
    url: "crossplay",
    thumbnail: "thumbnail",
    short:
      "A virtual reality social media platform with a focus on content creation and sharing.",
    desc: "CrossPlay Tv is a virtual reality social media platform with a focus on content creation and sharing. The project is an attempt to bridge the gap between creators and audience. It aims to provide immersive experiences for its users, and to give the tools required for Virtual Reality cotent creation and streaming. This project was conducted in partnership with Meta EU.",
    note: "The project is built using the Unity game engine. It is in theory platform agnostic, but as it relies on the Meta Avatars SDK, it is primarily targeted for the Oculus Quest 2. It uses Unity's built in XR Toolkit to handle VR interactions, and Photon Fusion along with Photon Voice to handle multiplayer interactions. The Meta Avatars SDK is used to fetch users' avatars which they created for the Oculus and displaying it in the game, making it a more personal experience. The project is still in development, and as such is not yet available to view.",
    tech: [
      "C#",
      "Unity",
      "Unity XR Toolkit",
      "Oculus Quest 2",
      "Meta Avatars SDK",
      "Photon Fusion",
      "Photon Voice",
    ],
    date: "In development",
    tags: [tags.APP, tags.CSHARP, tags.UNITY],
    github: "",
    live: "",
    videos: ["czgsmPnc4GE"],
    images: ["1", "2", "3"],
  },
  {
    title: "Paypal Clone",
    url: "paypal",
    thumbnail: "thumbnail",
    short:
      "A simplified feature clone of the PayPal website, using fake money.",
    desc: "A simplified feature clone of the PayPal website, using fake money. Users can register an account at which point they receive 1000£ (GBP) which is converted to the currency they selected upon registering. Users can send and receive money. Users can also request money and accept or decline requests. Admin users have access to an admin page where they can create admin accounts, view all registered users, and view all transactions. The app also comes with an API for converting between currencies.",
    note: "The project was build with an emphasis on security and ACID principles. For security, Django's built in security features were utilized, such as password hashing, CSRF tokens, and SQL injection protection. For ACID principles, as the project is dealing with money (albeit fake), it is important to make sure any transactions are completed properly. To handle this, all transactions lock the database while being executed, to ensure that only one transaction is happening at a time, additionally all transactions will revert any action performed on the database if the transaction fails at any point, ensuring that transactions are either completed fully, or not completed at all.",
    tech: ["Python", "Django", "Django REST Framework"],
    date: "April 2023",
    tags: [tags.FRONT, tags.BACK, tags.FULL, tags.PYTHON, tags.DJANGO],
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
    desc: "This project is a collection of algorithms for solving various puzzles. The puzzles it can solve are the N-Queens problem, a 2D polysphere puzzle on a 5x11 grid (see IQ Puzzler Pro), and a 3D polysphere puzzle shaped in a pyramid (see IQ Puzzler Pro). The website offers a user interface for each puzzle where the user can place pieces in a partial configuration, and will then solve the puzzle and show all possible solutions with the partial configuration. This is of course optional and given an empty state all possible solutions will be shown instead.",
    note: "The N-Queens problem uses a backtracking algorithm to find solutions.<br><br>The 2D Polysphere puzzle uses Knuth's Algorithm X to find solutions.<br><br>The 3D Polysphere puzzle also uses Knuth's Algorithm X to find solutions. Additionally it uses Babylon.js to create a 3D user interface for the website, this was done because it provides the best user experience for this particular problem where it is necessary to view and place puzzle pieces inside of a pyramid structure.",
    tech: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Angular",
      "Babylon.js",
      "Backtracking Algorithm",
      "Knuth's Algorithm X",
    ],
    date: "December 2022",
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
    videos: ["YMRw-Yi-OXQ"],
    images: ["thumbnail", "nqueens", "polysphere", "polysphere3d"],
  },
  {
    title: "Flowerboy",
    url: "flowerboy",
    thumbnail: "thumbnail",
    short:
      "Murakami inspired art generator for tokenized assets on the Ethereum blockchain.",
    desc: "Murakami inspired art generator for tokenized assets on the Ethereum blockchain. Users can log in with a metamask wallet. They will then be able to purchase (or mint as it is called) a unique piece of art, which is randomly generated at the time of mint. When minted it becomes a tokenized asset which will exist on the Ethereum blockchain, and specifically in the user's wallet. The art itself is stored on the IPFS network. The user can view their art on the website. The user can also trade it on third party marketplaces as it complies with the ERC-721 standard and seemlessly integrates",
    note: "The website is built using HTML, CSS and JavaScript, with a backend built using Express.js. The website is hosted on Azure and integrates a database from firebase.<br><br>A smart contract was developed using solidity and is hosted on the Ethereum blockchain. The smart contract is fully ERC-721 compliant and integrates with other decentralized services.<br><br>The art is generated using the p5.js library. The art is laid out using a poisson-disc algorithm to ensure that objects are relatively evenly distributed on the canvas.",
    tech: [
      "HTML",
      "CSS",
      "Javascript",
      "P5.js",
      "Express.js",
      "Solidity",
      "Ethereum",
      "Azure",
      "Firebase",
    ],
    date: "January 2022",
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
    images: ["1", "2", "3", "4", "5", "6"],
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
