import { BiUser } from "react-icons/bi";
import { FaUserGraduate } from "react-icons/fa";
import { FaUserInjured } from "react-icons/fa";
import { FaUserSecret } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";

// --------------forImage  Start----------

// mainLogo
// import logoImg from "./img/logo.PNG";

let baseURL =
  "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/netFlixProject%2F";

let logoImg = `${baseURL}homeLogo%26Back%2Flogo.PNG?alt=media&token=065085a9-012e-477b-b342-6cbbdcb8c778`;

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
    logo: `${baseURL}The%20Dark%20Knight%2FTheDarkKnightLogo.png?alt=media&token=e4fb880e-d442-4789-b3f0-22696e63ea06`,
    poster: `${baseURL}The%20Dark%20Knight%2FTheDarkKnightPoster.jpg?alt=media&token=60902333-ce98-4533-a999-16f557c85d8a`,
    shortPoster: `${baseURL}The%20Dark%20Knight%2FTheDarkKnightShortPoster.jpg?alt=media&token=946c1ed9-ca27-4b6d-8f54-b11572a39e6e`,
    syncPara:
      "Batman raises the stakes in his war on crime. With the help of Lt. ",
    category: "Movies",
    subCategory: "CrimeMovies",
    latest: "nonTranding",
    source: `${baseURL}The%20Dark%20Knight%2FThe%20Dark%20Knight%20-%20Official%20Trailer%20%5BHD%5D.mp4?alt=media&token=491ebc87-35a2-4d9a-a04d-8d97c972d443`,
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
    logo: `${baseURL}NeverHaveEverData%20Folder%2Fnever-have-ever-logo.webp?alt=media&token=33e8c0e0-8d06-4a10-aab2-8c3ff19661e6`,
    poster: `${baseURL}NeverHaveEverData%20Folder%2Fnever-have-ever-tv-show.webp?alt=media&token=4ad62b2d-0a6b-40ec-9110-4191e87111cd`,
    shortPoster: `${baseURL}NeverHaveEverData%20Folder%2Fnever-have-ever-short%20poster.jpg?alt=media&token=c3698485-2944-43f7-8fd7-d4a235437c40`,
    syncPara: "Getting the grades? Too easy. Getting through grief? Too hard. ",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "nonTranding",
    source: `${baseURL}NeverHaveEverData%20Folder%2FNever%20Have%20I%20Ever%20-%20Official%20Trailer%20-%20Netflix_2.mp4?alt=media&token=38033032-797a-45de-9f96-9fc955053699`,
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

    logo: `${baseURL}braveheartData%20Folder%2FBraveheartLogo.png?alt=media&token=1ae0836e-2d3c-49e8-8df3-eaf8a1bb41fd`,

    poster: `${baseURL}braveheartData%20Folder%2FbraveheartPoster1.jpg?alt=media&token=3790cef1-ada6-49af-b7d0-766250f88364`,
    shortPoster: `${baseURL}braveheartData%20Folder%2FBraveheartShortPoster.jpg?alt=media&token=bec62b65-1cd4-4d5c-9e13-540dc77a53b7`,
    syncPara:
      "Enraged at the slaughter of Murron, his new bride and childhood love.",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source: `${baseURL}braveheartData%20Folder%2FOfficial%20Trailer%20Braveheart%20(1995).mp4?alt=media&token=f788ffda-8a30-4432-a2cd-aa7660187550`,
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
    logo: `${baseURL}Ozark%2FOzarkLogo.png?alt=media&token=df15ea7d-78b9-46ce-9bc8-b89e172e0b9b`,
    poster: `${baseURL}Ozark%2FOzarkPoster.webp?alt=media&token=b0c11ef7-93f6-4123-8030-88cf17a16470`,
    shortPoster: `${baseURL}Ozark%2FOzarkShortPoster.jpg?alt=media&token=078d6f2b-f490-42c1-b142-30998bfc0a66`,
    syncPara:
      "A financial adviser drags his family from Chicago to the Missouri Ozarks.",
    category: "TVShow",
    subCategory: "RomanticTVShow",
    latest: "Latest",
    source: `${baseURL}Ozark%2FOzark%20Season%203%20%20Official%20Trailer%20%20Netflix.mp4?alt=media&token=87c30bd9-b47a-441e-aecd-ff93a45f7941`,
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
    logo: `${baseURL}Troy%2FTroyLogo1.png?alt=media&token=a3408cd0-92ea-4680-b48e-c0f4607e4d76`,
    poster: `${baseURL}Troy%2FtroyPoster.jpg?alt=media&token=d3fe25e1-623c-404a-900f-d29a666a6488`,
    shortPoster: `${baseURL}Troy%2FTroyShortPoster.jpg?alt=media&token=74f55a44-2072-4aa7-aead-401a963b9343`,
    syncPara:
      "In year 1250 B.C. during the late Bronze age, two emerging nations begin to clash. ",
    category: "Movies",
    subCategory: "ActionMovies",
    latest: "Latest",
    source: `${baseURL}Troy%2FTroy%20%E2%89%A3%202004%20%E2%89%A3%20Trailer.mp4?alt=media&token=b41bca62-bd61-440e-8671-679dc2b529b5`,
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
    logo: `${baseURL}Trapms%2FTramps.png?alt=media&token=07ffcc10-72cf-4288-a8ec-93ea34b2ccce`,
    poster: `${baseURL}Trapms%2FtrapmsPoster.jpg?alt=media&token=06b3da06-f235-445e-9588-d2d436134e7b`,
    shortPoster: `${baseURL}Trapms%2FtrapmsShortPoster.jpg?alt=media&token=387cff9b-b420-4ba2-8449-7428e075e36a`,
    syncPara:
      "A young man and woman find love in an unlikely place while carrying out a shady deal.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source: `${baseURL}Trapms%2FTramps%20%20Official%20Trailer%20%5BHD%5D%20%20Netflix.mp4?alt=media&token=311e5232-c686-49a0-b3ed-6db2231b21fd`,
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
    logo: `${baseURL}Dark%2FDarkLogo.png?alt=media&token=828ea016-7fc0-4619-b06f-4a59c9018ee6`,
    poster: `${baseURL}Dark%2FDarkPoster.jpg?alt=media&token=d7cd7b2c-2063-429b-872f-9aa742910a55`,
    shortPoster: `${baseURL}Dark%2FDarkShortPoster.jpg?alt=media&token=cd7ade40-d9b5-47f7-8738-c73238b03e46`,
    syncPara:
      "A missing child causes four families to help each other for answers.",
    category: "TVShow",
    subCategory: "HollywoodTVShow",
    latest: "Latest",
    source: `${baseURL}Dark%2FDARK%20Season%201%20Official%20Trailer%20%23%202%20(2017)%20Netflix%20Mystery%20TV%20Series%20HD.mp4?alt=media&token=6a8e2aec-d6f9-4882-8e46-9801d838ed5d`,
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
    logo: `${baseURL}From%20Dusk%20Till%20Dawn%2FFrom_Dusk_Till_DawnLogo.png?alt=media&token=6d0ddfba-fcca-4f61-b658-2c545653e4de`,
    poster: `${baseURL}From%20Dusk%20Till%20Dawn%2FFrom%20Dusk%20Till%20DawnPoster.png?alt=media&token=21841556-9305-4b38-ada7-e05df149a515`,
    shortPoster: `${baseURL}From%20Dusk%20Till%20Dawn%2FFrom%20Dusk%20Till%20DawnShortPoster.jfif?alt=media&token=43fe8a98-7cf9-4c20-b9a3-0fbaacbbd46b`,
    syncPara:
      "The horror and crime thriller genres collide in this new original series from Robert Rodriguez, based on his cult grindhouse classic.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source: `${baseURL}From%20Dusk%20Till%20Dawn%2FFrom%20Dusk%20Till%20Dawn%20The%20Series%20Season%201%20Trailer%20(HD)%20%20A%20Robert%20Rodriguez%20Series.mp4?alt=media&token=4e9bf515-d823-45ff-8182-eba60d81193c`,
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
    logo: `${baseURL}The%20Haunting%20of%20Hill%20House%2FThe%20Haunting%20of%20Hill%20HouseLogo.png?alt=media&token=41fd3032-7ac6-4adb-a81a-e65b62132f9d`,
    poster: `${baseURL}The%20Haunting%20of%20Hill%20House%2FThe%20Haunting%20of%20Hill%20HousePoster.jpg?alt=media&token=c5f17fde-e64f-4088-9932-f8302e979ac7`,
    shortPoster: `${baseURL}The%20Haunting%20of%20Hill%20House%2FThe%20Haunting%20of%20Hill%20HouseShortPoster.jpg?alt=media&token=a7577baa-4efa-48d4-8bad-5526486b065b`,
    syncPara:
      "The Crains, a fractured family, confront haunting memories of their old home and the terrifying events that drove them from it.",
    category: "TVShow",
    subCategory: "HorrorTVShow",
    latest: "Latest",
    source: `${baseURL}The%20Haunting%20of%20Hill%20House%2FTHE%20HAUNTING%20OF%20HILL%20HOUSE%20Trailer%20(2018)%20Netflix.mp4?alt=media&token=6d54b001-08e4-4b5a-a78e-e466f9ebc403`,
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
    logo: `${baseURL}The%20Lucky%20One%2FThe%20Lucky%20OneLogo.png?alt=media&token=70b74151-2df3-4a17-a692-ac5d85eb0a24`,
    poster: `${baseURL}The%20Lucky%20One%2FThe%20Lucky%20OnePoster.jpg?alt=media&token=eb4a7452-06ac-439b-afd2-ac4152acc0db`,
    shortPoster: `${baseURL}The%20Lucky%20One%2FThe%20Lucky%20OneShortPoster.jpg?alt=media&token=60868c77-7e3e-49b8-bf78-80596fdfbea0`,
    syncPara:
      "U.S. Marine Sergeant Logan Thibault returns from his third tour of duty in Iraq.",
    category: "Movies",
    subCategory: "RomanticMovies",
    latest: "Latest",
    source: `${baseURL}The%20Lucky%20One%2FThe%20Lucky%20One%20-%20Trailer.mp4?alt=media&token=42f9c2b7-c08d-4358-b2e4-932fcc84597f`,
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
      "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.",
    Ans2:
      "You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!"
  },
  {
    id: 2,
    Que: "How much does Netflix cost?",
    Ans1:
      "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.",
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
      "Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.",
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

export const AnimatedCardAPI = [
  {
    id: 1,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v",
    type: "video/mp4",
    h1: "Enjoy on your TV.",
    h2:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
  },
  {
    id: 2,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    imgSource2:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png",
    videoSource: "",
    type: "",
    h1: "Download your shows to watch offline.",
    h2: "Save your favourites easily and always have something to watch."
  },
  {
    id: 3,
    imgSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png",
    videoSource:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v",
    type: "",
    h1: "Watch everywhere.",
    h2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
  },
  {
    id: 4,
    imgSource:
      "https://occ-0-4258-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVxdX2WnFSp49eXb1do0euaj-F8upNImjofE77XStKhf5kUHG94DPlTiGYqPeYNtiox-82NWEK0Ls3CnLe3WWClGdiJP.png?r=5cf",
    videoSource: "",
    type: "",
    h1: "Create profiles for children.",
    h2:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership."
  }
];

// --------------userNotification API Start----------

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

let baseURLforHomePageData =
  "https://firebasestorage.googleapis.com/v0/b/forimgsave.appspot.com/o/netFlixProject%2FforHomePageData%2F";

export const animatedCardSecApi = [
  {
    secClassName: "animatedCardSec1",
    imgSource: `${baseURLforHomePageData}tvAndRemote.png?alt=media&token=b86c55f4-d698-4edf-a658-d14ba7d9ead9`,
    imgSource2: "",
    videoSource: `${baseURLforHomePageData}firstVideoForTV.m4v?alt=media&token=b2c78087-e714-4236-97a4-0686ca9ffb56`,
    downGif: "",
    h2:
      "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    h1: "Enjoy on your TV."
  },
  {
    secClassName: "animatedCardSec2",
    imgSource: `${baseURLforHomePageData}imgForDownMobileBig.jpg?alt=media&token=8b0d2dda-f846-4986-9638-ce48c1d0cac8`,
    imgSource2: `${baseURLforHomePageData}imgForDownMobileSmall.png?alt=media&token=8678befb-8232-4a68-afb0-659ef8e2ec78`,
    videoSource: "",
    downGif: "true",
    h2: "Save your favourites easily and always have something to watch.",
    h1: "Download your shows to watch offline."
  },
  {
    secClassName: "animatedCardSec3",
    imgSource: `${baseURLforHomePageData}2tvForVideo.png?alt=media&token=44acec6d-0411-41c5-8cbf-e687671d93b5`,
    imgSource2: "",
    videoSource: `${baseURLforHomePageData}secondVideoForTV.m4v?alt=media&token=9c1640c0-8e99-4de9-84d2-0778c2058181`,
    downGif: "",
    h2:
      "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    h1: "Watch everywhere."
  },
  {
    secClassName: "animatedCardSec4",
    imgSource: `${baseURLforHomePageData}childrenIMG.png?alt=media&token=aaae6f6b-9a3f-4c22-90e1-1692ee4639ff`,
    imgSource2: "",
    videoSource: "",
    downGif: "false",
    h2:
      "Send children on adventures with their favourite characters in a space made just for them—free with your membership.",
    h1: "Create profiles for children."
  }
];

// // -------------------------------------------------------------------------------------

export { logoImg };
