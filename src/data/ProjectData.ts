export interface Project {
  title: string;
  text: {
    summary: string;
    detailed: string;
    technicalDetails: string;
    test: string;
  };
  img: { img: string; alt: string }[];
  links: {
    demo: string;
    code: string;
    more: string;
  };
}
export const projectData: Project[] = [
  {
    title: "Twitch Matchmaker",
    text: {
      summary:
        "A Tinder-esque application that allows Twitch livestreamers to easily find fellow livestreamers to collaborate with.",
      detailed:
        "Networking and collaborating with other livestreamers is one of the most efficient ways to grow your audience, but finding a like-minded co-streamer can often be a slow and stressful process. \nTwitch Matchmaker attempts to take a Tinder-esque approach to solving this issue by allowing you to easily find and get in touch with your ideal co-streamer.",
      technicalDetails:
        "Built using React and Express, connected to a Mysql database. Websockets allow for realtime chatting and notifications.",
      test: "I have added some dummy users for testing purposes, do keep in mind that adding a lot of required tags may very well cause you to not find any matches. \nTesting requires a free Twitch.tv account.\nIt may take 30 seconds for the server to wake up when loading the page for the first time.",
    },
    img: [
      {
        img: "../images/twitch-mm-landing.png",
        alt: "Landing page of twitch matchmaker",
      },
      {
        img: "../images/twitch-mm-chat.png",
        alt: "Chat window of twitch matchmaker",
      },
      {
        img: "../images/twitch-mm-match.png",
        alt: "Finding a match on twitch matchmaker",
      },
      {
        img: "../images/twitch-mm-profile.png",
        alt: "Profile on twitch matchmaker",
      },
    ],
    links: {
      demo: "https://twitch-matchmaker.herokuapp.com/",
      code: "https://github.com/tahmdev/twitch-collab-matchmaker",
      more: "Twitch-Matchmaker",
    },
  },
  {
    title: "Insta jisho",
    text: {
      summary:
        "A japanese dictionary with a focus on making lookups as quick and easy as possible.",
      detailed:
        "Studying a language means doing a lot of reading, and doing a lot of reading in an unfamiliar language will inevitably lead to a lot of dictionary lookups, and yet a lot of dictionaries seem to put very little effort into letting their users get back to what they were doing as soon as possible. \nThis is where Insta Jisho comes in: automatic lookups, replacing pagination with a scrollable result list, using Google's handwriting recognition, allowing one-handed navigation.",
      technicalDetails:
        "Built using React and Express. Handwriting recognition by Google.",
      test: "Here are a few words to look up: 辞書、固唾、飲食.\nRadical lookup allows you to search for Kanji by their building blocks.\nGoogle's handwriting recognition is as close to mind reading as we have gotten, it will find what you are looking for even if you write it in a single stroke with your eyes closed. \nIt may take 30 seconds for the server to wake up when loading the page for the first time.",
    },
    img: [
      {
        img: "../images/instant-jisho.png",
        alt: "Search result page for '辞書'",
      },
      {
        img: "../images/instant-jisho-handwriting.png",
        alt: "Handwriting lookup",
      },
      { img: "../images/instant-jisho-radical.png", alt: "Radical lookup" },
      {
        img: "../images/instant-jisho-light.png",
        alt: "Search result page for '辞書' in lightmode",
      },
    ],
    links: {
      demo: "https://tahmdev.github.io/insta-jisho/",
      code: "https://github.com/tahmdev/insta-jisho",
      more: "Insta-Jisho",
    },
  },
  {
    title: "E-commerce Homepage",
    text: {
      summary:
        "A fully responsive and accessible copy of a popular electronics retailer's landing page.",
      detailed:
        "I primarily intended for this to be CSS practice, but I also ended up learning a lot about accessibility, responsiveness, and code reusability.\nI ended up spending a lot of time having to go back and fix CSS I wrote earlier which caused me to restructure my workflow to focus on building functionality first and style afterwards, instead of doing them simultaneously.\nI also learned how to use a screen reader in order to make the site as accessible as I could.",
      technicalDetails: "Built entirely in React and vanilla CSS3.",
      test: "I have not added any other routes. All the links lead back to the site itself.",
    },
    img: [
      {
        img: "../images/e-commerce-1.png",
        alt: "Example image of top of e-commerce site",
      },
      {
        img: "../images/e-commerce-2.png",
        alt: "Example image of middle of e-commerce site",
      },
      {
        img: "../images/e-commerce-3.png",
        alt: "Example image of bottom of e-commerce site",
      },
    ],
    links: {
      demo: "https://tahmdev.github.io/e-commerce/",
      code: "https://github.com/tahmdev/e-commerce",
      more: "E-commerce-Homepage",
    },
  },
  {
    title: "Kanjitori",
    text: {
      summary: "An app to play Shiritori with friends, but with a twist.",
      detailed:
        "Shiritori is a popular japanese word game where players try to chain together words, each starting with the last sound of the previous word. Kanjitori puts a little spin on it by making players chain the words based on Kanji instead. \nThere are multiple modes including classic Shiritori.",
      technicalDetails: "Built in React and Express.",
      test: 'Here are some word chains to try out: \n"Type しりとり": りかい、いみ、みらい、いく、くたい\n"Type 漢字取": 字面、面識、識別、別人、人生、生気\nIt may take 30 seconds for the server to wake up when loading the page for the first time.',
    },
    img: [
      {
        img: "../images/shiritori-ingame.png",
        alt: "Shiritori Team vs Team mode",
      },
      {
        img: "../images/shiritori-lobby.png",
        alt: "Shiritori lobby",
      },
      {
        img: "../images/shiritori-lobby-browser.png",
        alt: "Shiritori lobby browser",
      },
    ],
    links: {
      demo: "https://kanjitori.com/",
      code: "https://github.com/tahmdev/japanese-stairs",
      more: "Kanjitori",
    },
  },
  {
    title: "Portfolio v2",
    text: {
      summary:
        "The site you are currently on, and the second portfolio I built.",
      detailed:
        "I decided to rebuild my portfolio because I was no longer content with the design. Scalability had also become an issue as I had more projects I wanted to display than my old portfolio allowed me to.\nI spent a day looking at other portfolios and taking notes on their designs to come up with this one, and I'm pretty happy with how it turned out. ",
      technicalDetails: "Built using React.",
      test: "",
    },
    img: [
      {
        img: "../images/portfolio-v2-about.png",
        alt: "About me page of this website",
      },
      {
        img: "../images/portfolio-v2-projects.png",
        alt: "Projects page of this website",
      },
      {
        img: "../images/portfolio-v2-contact.png",
        alt: "Projects page of this website",
      },
    ],
    links: {
      demo: "https://tomschuelke.dev/",
      code: "https://github.com/tahmdev/portfolio-v2",
      more: "Portfolio-V2",
    },
  },
];
