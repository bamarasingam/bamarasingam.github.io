/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Brandon Amarasingam",
  title: "Hello I'm Brandon",
  subTitle: emoji(
    "Data Scientist with extensive experience in machine learning, data analysis, visualization and a strong background in mathematics and statistics. I enjoy building models and keeping up with the latest advancements in AI and data science. Beyond that, I'm a digital assets enthusiast, always exploring its potential and innovations"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/bamarasingam",
  linkedin: "https://www.linkedin.com/in/brandonamarasingam/",
  gmail: "bamarasingam@gmail.com",
  medium: "https://medium.com/@bamarasingam",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Passionate data scientist with a knack for cutting-edge AI and digital assets, adept at crafting insightful models and staying ahead of industry trends",
  skills: [
    emoji("⚡ Craft advanced machine learning algorithms to unlock insights from complex datasets"),
    emoji("⚡ Develop scalable data pipelines for streamlined data processing and analysis"),
    emoji("⚡ Seamlessly integrate AI models into production environments for real-world impact"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "sql-database",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  /*{
    skillName: "C",
    fontAwesomeClassname: "fab fa-C"
  },*/
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "General Assembly",
      logo: require("./assets/images/generalassembly.png"),
      subHeader: "Data Science Immersive",
      duration: "Graduated: 11/2023",
      desc: "Completed the General Assembly Data Science Immersive program, gaining hands-on experience in data analysis, machine learning, statistical modeling, and data visualization through intensive coursework and real-world projects.",
      /*descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]*/
    },
    {
      schoolName: "Carleton University",
      logo: require("./assets/images/carletonlogo.png"),
      subHeader: "Bachelor of Mathematics - Major in Statistics",
      duration: "Graduated: 09/2020",
      desc: "Recipient of the Carleton Capital Scolarship. My education at Carleton University equipped me with a profound understanding of statistical analysis, data interpretation, and mathematical modeling techniques",
      /*descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    */
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python Ecosystem", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud Computing",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Machine Learning Engineer / Technical Advisor",
      company: "Laughpad",
      companylogo: require("./assets/images/Laughpad.png"),
      date: "Jan 2024 – Present",
      /*desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",*/
      descBullets: [
        "Developed a laughter recognition model with PyTorch, using three open-source datasets for training",
        "Tailored and fine-tuned models for diverse scenarios; optimized ResNet with Data Augmentation for improved performance in noisy environments",
        "Deployed the solution on Azure"
      ]
    },
    {
      role: "Data Science Fellow",
      company: "General Assembly",
      companylogo: require("./assets/images/generalassembly.png"),
      date: "Aug 2023 – Nov 2023",
      descBullets: [
        "Successfully completed a 480 hour rigorous data science fellowship, where expertise in machine learning techniques were further honed and refreshed",
        "Techniques: Transfer Learning, Natural Language Processing, Computer Vision, Bayesian Inference, Time Series Analysis, Unsupervised Clustering Algorithms, A/B Testing, Various Regression and Classification Machine Learning Algorithms, Deep Learning Techniques"
      ]
    },
    {
      role: "Digital Assets Investor and Trader",
      company: "Henowick Holdings",
      companylogo: require("./assets/images/hh.png"),
      date: "Aug 2021 – April 2023",
      descBullets: [ 
        "Engaged in various activities to profit from digital assets including trading, staking, yield farming",
        "Implemented effective risk management techniques to mitigate potential losses and maximize profits",
        "Tracked and analyzed market data, utilized technical analysis tools, and made informed decisions to optimize investment outcomes"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: `
  Discuss a project or just want to say hi? My Inbox is open for all: bamarasingam@gmail.com
  `,
  number: "",
  email_address: "bamarasingam@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false// Set true to display this section, defaults to false
};

const isHireable = true // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
