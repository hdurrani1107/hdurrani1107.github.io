// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'hdurrani1107', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [''], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Polychaete Worm Model',
          description:
            'Designed and Prototped mechanically compliant parapodia for polychaete worm model. Utilizing PLA and PETG to leverage different material properties to achieve high durability and build quality.',
          imageUrl:
            'https://drive.google.com/file/d/1UzE2v3b4YxqzbJJxnduuHhzqveqq6e7y/view?usp=sharing',
          link: 'https://drive.google.com/file/d/1k_fPoyDxbmbfYmr4VABVprc5BJozVBGk/view?usp=sharing',
        },
        {
          title: 'Senior Design: Inline-4 Motorcycle Engine',
          description:
            'Led a team of 10 students to prototype a fully-functioning Inline 4 Cyclinder Motorcycle. Worked on both thermodynamics and CAD design of the engine. Developed comprehensive Bill of Materials and manufacturing processes to fully manufacture engine and sell in the United States. (Status: Complete)',
          imageUrl:
            'https://drive.google.com/file/d/1R9pN_NC9Q2rqiYV6LLuheMeY6jJkBTtT/view?usp=sharing',
          link: 'https://drive.google.com/file/d/1O6pltWA2agbYY9n4lLr_g6botiDCFGPJ/view?usp=sharing',
        },
        {
          title: 'DeWalt Innovation Project',
          description:
            'Led a group of 4 interns to create a new product innovation on existing DeWalt storage products. Developed a concept CAD model and theoretical electrical work to show proof of concept. Pitched product and its release plan to VP-level executives. Placed 4th out of 18 teams. (Status: Complete)',
          imageUrl:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/DeWalt_Logo.svg/1200px-DeWalt_Logo.svg.png',
          //link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Humzah Durrani',
    description: 'Aspiring Electro-Mechanical Engineer. Looking to develop products from cradle to grave. Take a look at my portfolio website and enjoy!',
    imageURL: 'https://drive.google.com/file/d/1SVLEhfhKqTM2BIjIRThksqu2i6h4HZqN/view?usp=sharing',
  },
  social: {
    linkedin: 'www.linkedin.com/humzahdurrani',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'https://hdurrani.com',
    phone: '',
    email: 'durranihumzah@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1p-YlISNB_N8xuas1WN9XYt_DvUwVnTm2/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Python',
    'HTML',
    'Certified Solidworks Professional',
    'Microsoft Suite',
    'Prototyping,
  ],
  experiences: [
    {
      company: 'Stanley Black and Decker',
      position: 'Manufacturing Engineering Intern',
      from: 'June 2023',
      to: 'August 2023',
      companyLink: 'https://www.stanleyblackanddecker.com/',
    },
    {
      company: 'NMG Aerospace',
      position: 'Manufacturing Engineering Intern',
      from: 'January 2022',
      to: 'August 2022',
      companyLink: 'https://www.nmgaerospace.com/',
    },
  ],
  certifications: [
    {
      name: 'Certified Solidworks Professional',
      body: '',
      year: 'December 2023',
      link: 'https://example.com',
    },
  ],
  educations: [
    {
      institution: 'Boston University',
      degree: 'M.S. Robotics and Autonomous Systems',
      from: 'September 2024',
      to: 'Tentative: May 2025',
    },
    {
      institution: 'Case Western Reserve University',
      degree: 'B.S. Mechanical Engineering',
      from: '2019',
      to: '2024',
    },
  ],
  publications: [
    {
      //title: 'Publication Title',
      //conferenceName: '',
      //journalName: 'Journal Name',
      //authors: 'John Doe, Jane Smith',
      //link: 'https://example.com',
      //description:
      //'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      //title: 'Publication Title',
      //conferenceName: 'Conference Name',
      //journalName: '',
      //authors: 'John Doe, Jane Smith',
      //link: 'https://example.com',
      //description:
      //'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    //source: 'dev', // medium | dev
    //username: 'arifszn', // to hide blog section, keep it empty
    //limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
