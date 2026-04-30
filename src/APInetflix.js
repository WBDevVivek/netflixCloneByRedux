import { BiUser } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

// --------------forImage  Start----------

let logoImg = `/img/logo.PNG`;

// --------------forImage  End----------

export const regE = /\S+@\S+\.\S+/;

export const regP = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{6,16}$/;

let i = 400;

// for slick-carousel
export const carouselProperties = {
  dots: true,
  speed: 500,
  accessibility: false,
  infinite: false,
  slidesToShow: 3,
  slidesToScroll: 3,

  responsive: [
    {
      breakpoint: 569,
      settings: {
        centerMode: false,
        slidesToScroll: 1,
        slidesToShow: 1
      }
    },
    {
      breakpoint: 869,
      settings: {
        centerMode: false,
        slidesToScroll: 2,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 1025,
      settings: {
        centerMode: false,
        slidesToScroll: 3,
        slidesToShow: 3
      }
    }
  ]
};

export const navMenuData = ["Home", "TVShow", "Movies", "Latest", "MyList"];

export const userLastData = [
  {
    linkName: "Account",
    linkUrl: "editAccountData",
    goToLink: "/signup"
  },
  {
    linkName: "HelpCenter",
    linkUrl: "backToHome",
    goToLink: "/"
  },
  {
    linkName: "SignOut Netflix",
    linkUrl: "goToLoggedOut",
    goToLink: "/signout"
  }
];


export const Category = [
  {
    id: 401,
    logo: `/img/TheDarkKnight/TheDarkKnightLogoNew1.png`,
    poster: `/img/TheDarkKnight/TheDarkKnightPoster.jpg`,
    shortPoster: `/img/TheDarkKnight/TheDarkKnightShortPoster.jpg`,
    syncPara: "Batman raises the stakes in his war on crime. With the help of Lt. ",
    category: "Movies",
    subCategory: "CrimeMovies",
    latest: "nonTranding",
    source: `/img/TheDarkKnight/TheDarkKnightOfficialTrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "The Dark Knight",
    videoRate: "13+",
    seasonCount: "",
    videoGenere1: "#Crime",
    videoGenere2: "#Action",
    videoGenere3: "#Adventure"
  },
  {
    id: 402,
    logo: `/img/NeverHaveEver/neverhaveeverlogo.webp`,
    poster: `/img/NeverHaveEver/neverhaveevertvshow.webp`,
    shortPoster: `/img/NeverHaveEver/neverhaveevershortposter.jpg`,
    syncPara: "Getting the grades? Too easy. Getting through grief? Too hard. ",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "nonTranding",
    source: `/img/NeverHaveEver/NeverHaveEver.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Never Have I Ever",
    videoRate: "18+",
    seasonCount: "3 Season",
    videoGenere1: "#Nudeity",
    videoGenere2: "Romance",
    videoGenere3: "#Love"
  },
  {
    id: 403,

    logo: `/img/braveheart/BraveheartLogo.png`,
    poster: `/img/braveheart/braveheartPoster1.jpg`,
    shortPoster: `/img/braveheart/BraveheartShortPoster.jpg`,
    syncPara: "Enraged at the slaughter of Murron, his new bride and childhood love.",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source: `/img/braveheart/OfficialTrailerBraveheart.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Braveheart",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Action",
    videoGenere2: "#Adventure",
    videoGenere3: "#Drama"
  },
  {
    id: 404,
    logo: `/img/Ozark/OzarkLogo.png`,
    poster: `/img/Ozark/OzarkPoster.webp`,
    shortPoster: `/img/Ozark/OzarkShortPoster.jpg`,
    syncPara: "A financial adviser drags his family from Chicago to the Missouri Ozarks.",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "Latest",
    source: `/img/Ozark/OzarkSeason_3OfficialTrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Ozark",
    videoRate: " 18+ (R)",
    seasonCount: "4 Season",
    videoGenere1: "#Drama",
    videoGenere2: "#Mystery",
    videoGenere3: ""
  },
  {
    id: 405,
    logo: `/img/Troy/TroyLogo1.png`,
    poster: `/img/Troy/troyPoster.jpg`,
    shortPoster: `/img/Troy/TroyShortPoster.jpg`,
    syncPara: "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. ",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source: `/img/Troy/Troy2004Trailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Troy",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Action",
    videoGenere2: "#Adventure",
    videoGenere3: "#Drama"
  },
  {
    id: 406,
    logo: `/img/Trapms/TrampsLogo.png`,
    poster: `/img/Trapms/trapmsPoster.jpg`,
    shortPoster: `/img/Trapms/trapmsShortPoster.jpg`,
    syncPara: "A young man and woman find love in an unlikely place while carrying out a shady deal.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source: `/img/Trapms/TrampsOfficialTrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Tramps",
    videoRate: "18+",
    seasonCount: "",
    videoGenere1: "#Romance",
    videoGenere2: "Comedy",
    videoGenere3: ""
  },
  {
    id: 407,
    logo: `/img/Dark/DarkLogo.png`,
    poster: `/img/Dark/DarkPoster.jpg`,
    shortPoster: `/img/Dark/DarkShortPoster.jpg`,
    syncPara: "A missing child causes four families to help each other for answers.",
    category: "TVShow",
    subCategory: "HollywoodTVShow",
    latest: "Latest",
    source: `/img/Dark/DARKSeason_1_OfficialTrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "Dark",
    videoRate: "18+",
    seasonCount: "3 Season",
    videoGenere1: "#Mystery",
    videoGenere2: "#Drama ",
    videoGenere3: ""
  },
  {
    id: 408,
    logo: `/img/FromDuskTillDawn/From_Dusk_Till_DawnLogo.png`,
    poster: `/img/FromDuskTillDawn/FromDuskTillDawnPoster.png`,
    shortPoster: `/img/FromDuskTillDawn/FromDuskTillDawnShortPoster.jfif`,
    syncPara: "The horror and crime thriller genres collide in this new original series from Robert Rodriguez, based on his cult grindhouse classic.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source: `/img/FromDuskTillDawn/FromDuskTillDawnTheSeriesSeason_1.mp4`,
    type: "video/mp4",
    videoDescriptionH: "From Dusk Till Dawn",
    videoRate: "14+",
    seasonCount: "1 Season",
    videoGenere1: "#Horror",
    videoGenere2: "#Action",
    videoGenere3: "#Adventure"
  },
  {
    id: 409,
    logo: `/img/TheHauntingOfHillHouse/TheHauntingofHillHouseLogo.png`,
    poster: `/img/TheHauntingOfHillHouse/TheHauntingofHillHousePoster.jpg`,
    shortPoster: `/img/TheHauntingOfHillHouse/TheHauntingofHillHouseShortPoster.jpg`,
    syncPara: "The Crains, a fractured family, confront haunting memories of their old home and the terrifying events that drove them from it.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source: `/img/TheHauntingOfHillHouse/THEHAUNTINGOFHILLHOUSETrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "The Haunting of Hill House",
    videoRate: "18+",
    seasonCount: "2 Season",
    videoGenere1: "#Horror",
    videoGenere2: "#Drama",
    videoGenere3: ""
  },
  {
    id: 410,
    logo: `/img/TheLuckyOne/TheLuckyOneLogo.png`,
    poster: `/img/TheLuckyOne/TheLuckyOnePoster.jpg`,
    shortPoster: `/img/TheLuckyOne/TheLuckyOneShortPoster.jpg`,
    syncPara: "U.S. Marine Sergeant Logan Thibault returns from his third tour of duty in Iraq.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source: `/img/TheLuckyOne/TheLuckyOneTrailer.mp4`,
    type: "video/mp4",
    videoDescriptionH: "The Lucky One",
    videoRate: "13+",
    seasonCount: "",
    videoGenere1: "#Romance",
    videoGenere2: "#Drama",
    videoGenere3: "#"
  }
];



export const QueAnsData = [
  {
    id: 1,
    Que: "What is Netflix?",
    Ans1:
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more â€“ on thousands of internet-connected devices.",
    Ans2:
      "You can watch as much as you want, whenever you want, without a single ad â€“ all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    id: 2,
    Que: "How much does Netflix cost?",
    Ans1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from â‚¹ 149 to â‚¹ 649 a month. No extra costs, no contracts.",
    Ans2: ""
  },
  {
    id: 3,
    Que: "Where can I watch?",
    Ans1:
      "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.",
    Ans2:
      "You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
  },
  {
    id: 4,
    Que: "How do I cancel?",
    Ans1:
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees â€“ start or stop your account anytime.",
    Ans2: ""
  },
  {
    id: 5,
    Que: "What can I watch on Netflix?",
    Ans1:
      "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.",
    Ans2: ""
  },
  {
    id: 6,
    Que: "Is Netflix good for kids?",
    Ans1:
      "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.",
    Ans2: ""
  }
];

export const FooterLinksAPI = [
  {
    id: 1,
    linkName: "FAQ",
    linkURL: "https://help.netflix.com/support/412"
  },
  {
    id: 2,
    linkName: "Help Centre",
    linkURL: "https://help.netflix.com/"
  },
  {
    id: 3,
    linkName: "Account",
    linkURL: "https://www.netflix.com/youraccount"
  },
  {
    id: 4,
    linkName: "Media Centre",
    linkURL: "https://media.netflix.com/"
  },
  {
    id: 5,
    linkName: "Investor Relations",
    linkURL: "http://ir.netflix.com/"
  },
  {
    id: 6,
    linkName: "Jobs",
    linkURL: "https://jobs.netflix.com/jobs"
  },
  {
    id: 7,
    linkName: "Ways to Watch",
    linkURL: "https://www.netflix.com/watch"
  },
  {
    id: 8,
    linkName: "Terms of Use",
    linkURL: "https://help.netflix.com/legal/termsofuse"
  },
  {
    id: 9,
    linkName: "Privacy",
    linkURL: "https://help.netflix.com/legal/privacy"
  },
  {
    id: 10,
    linkName: "Cookie Preferences",
    linkURL: "https://www.netflix.com/in/#"
  },
  {
    id: 11,
    linkName: "Corporate Information",
    linkURL: "https://help.netflix.com/legal/corpinfo"
  },
  {
    id: 12,
    linkName: "Contact Us",
    linkURL: "https://help.netflix.com/contactus"
  },
  {
    id: 13,
    linkName: "Speed Test",
    linkURL: "https://fast.com/"
  },
  {
    id: 14,
    linkName: "Legal Notices",
    linkURL: "https://help.netflix.com/legal/notices"
  },
  {
    id: 15,
    linkName: "Only on Netflix",
    linkURL: "https://www.netflix.com/in/browse/genre/839338"
  }
];


export const userNot2 = [
  { name: "1User", icon: <BiUser className="UserIcon" /> },
  { name: "2User", icon: <FaUserGraduate className="UserIcon" /> },
  { name: "3User", icon: <FaUserInjured className="UserIcon" /> },
  { name: "4User", icon: <FaUserSecret className="UserIcon" /> },
  { name: "5User", icon: <FaUserCircle className="UserIcon" /> }
];

// --------------userNotification API End----------

// // -------------------------------------------------------------------------------------

// ---------------------forHomePage-------------------------



export const animatedCardSecApi = [
  {
    secClassName: "animatedCardSec1",
    imgSource: `/img/forHomePageData/tvAndRemote.png`,
    imgSource2: "",
    videoSource: `/img/forHomePageData/firstVideoForTV.m4v`,
    downGif: "",
    h2:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    h1: "Enjoy on your TV."
  },
  {
    secClassName: "animatedCardSec2",
    imgSource: `/img/forHomePageData/imgForDownMobileBig.jpg`,
    imgSource2: `/img/forHomePageData/imgForDownMobileSmall.png`,
    videoSource: "",
    downGif: "true",
    h2: "Save your favourites easily and always have something to watch.",
    h1: "Download your shows to watch offline."
  },
  {
    secClassName: "animatedCardSec3",
    imgSource: `/img/forHomePageData/2tvForVideo.png`,
    imgSource2: "",
    videoSource: `/img/forHomePageData/secondVideoForTV.m4v`,
    downGif: "",
    h2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    h1: "Watch everywhere."
  },
  {
    secClassName: "animatedCardSec4",
    imgSource: `/img/forHomePageData/childrenIMG.png`,
    imgSource2: "",
    videoSource: "",
    downGif: "false",
    h2:
      "Send children on adventures with their favourite characters in a space made just for themâ€”free with your membership.",
    h1: "Create profiles for children."
  }
];

// // -------------------------------------------------------------------------------------






// // -------------------------------------------------------------------------------------


export { logoImg };
