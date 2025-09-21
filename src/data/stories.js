import story1 from "../assets/images/story1.png";
import story2 from "../assets/images/story2.png";
import story3 from "../assets/images/story3.png";
import story4 from "../assets/images/story4.png";
import story5 from "../assets/images/story5.png";
import story6 from "../assets/images/story6.png";
import story7 from "../assets/images/story7.png";

const stories = [
  {
    id: 1,
    title: "Sub Luna Albastră",
    excerpt:
      "O tânără descoperă un portal spre o lume ascunsă care apare doar într-o noapte cu lună albastră.",
    image: story1,
    category: "Fantasy", // poți adăuga o categorie dacă vrei
    content: [
      "Ana întotdeauna simțise că există ceva dincolo de lumea pe care o cunoștea. Într-o noapte de vară, cerul era senin și luna avea o nuanță rară de albastru, luminând delicat grădinile și cărările satului. O atracție misterioasă o îndemna să iasă din casă și să urmeze calea luminii.",

      "Pădurea de la marginea satului era fermecată în lumina lunii albastre. Fiecare frunză părea să strălucească, iar aerul era plin de un parfum dulce și proaspăt, ca un amestec de flori sălbatice și rouă. Ana simți cum inima îi bate mai repede, dar curiozitatea o împinse înainte.",

      "Pe măsură ce se aventura printre copaci, o licărire albastră apăruse în depărtare. Era un portal strălucitor, pulsând ușor în ritmul propriei lumini. Ana simți un fior de emoție și teamă amestecate și, fără să stea pe gânduri, păși prin el.",

      "Se trezi într-o lume de vis, cu câmpii infinite presărate cu flori argintii și copaci care străluceau în nuanțe de albastru și violet. Cerul era o oglindă magică, iar stelele păreau să danseze pe ritmul unei muzici nevăzute. Era un loc unde timpul și realitatea se contopeau cu fantezia.",

      "În curând, Ana întâlni o creatură delicată, cu aripi translucide și ochi luminoși, care îi vorbi într-un șoaptă melodioasă. Aceasta o călăuzi către un lac strălucitor, unde reflexia lunii albastre făcea apa să pară ca un smarald lichid. Creatura îi explică că această lume se deschide doar celor care caută adevărata frumusețe a inimii lor.",

      "Ana învăță repede că fiecare colț al acestui tărâm ascundea o lecție: curajul, răbdarea, iubirea și compasiunea. Fiecare provocare era frumos încadrată de magie: un copac care șoptea sfaturi, un vânt care aducea mesaje din trecut, și fluturi care luminau calea ei în întuneric.",

      "Într-o noapte, lângă un foc argintiu, Ana întâlni un tânăr misterios. Ochii lui păreau să reflecte însăși lumina lunii albastre, iar prezența lui îi făcea inima să tresară. Fiecare conversație era plină de mister și chemare, iar între ei se lega o legătură care depășea cuvintele și timpul.",

      "Pe măsură ce zilele treceau, Ana descoperi secretele acestui tărâm: grădini cu flori care rosteau povești, oglinzi care arătau dorințele ascunse și creaturi magice care își ofereau înțelepciunea doar celor curajoși. Fiecare pas era o revelație, iar lumea reală părea tot mai îndepărtată.",

      "Totuși, portalul începea să se închidă încet, iar Ana știa că trebuie să se întoarcă în sat. Inima îi era plină de amintiri și emoții, dar și de dorința arzătoare de a reveni în această lume magică. Tânărul misterios îi făcu un semn discret și îi spuse că legătura lor nu va fi pierdută niciodată.",

      "Când Ana păși din nou pe pământul familiar al satului, luna albăstruie dispăru, iar satul părea la fel ca înainte. Dar inima ei rămase plină de magie, iar privirea către cer îi aminti mereu că există lumi ascunse, pline de iubire, aventură și mister, care așteaptă să fie descoperite.",

      "Ani mai târziu, Ana descoperi că portalul se deschide doar când luna albăstruie apare, iar fiecare vizită era o călătorie mai profundă în sufletul ei. Aventurile ei deveniseră povești care o inspirau și îi umpleau viața de culoare, dragoste și speranță, și știa că magia nu se termină niciodată.",
    ],
    comments: [
      { user: "Ana", text: "Foarte frumoasă poveste!" },
      { user: "Maria", text: "M-a ținut cu sufletul la gură!" },
    ],
    rating: 0, // rating mediu
    votes: 0, // număr voturi
  },
  {
    id: 2,
    category: "Sci-Fi",
    title: "Fata din pădurea fermecată",
    excerpt: "O poveste magică despre o fată care descoperă un secret.",
    image: story2,
  },
  {
    id: 3,
    category: "Horror",
    title: "Magicianul din Cețuri",
    excerpt:
      "Un bătrân misterios salvează un sat uitat cu o magie uitată de timp.",
    image: story3,
  },
  {
    id: 4,
    category: "Romance",
    title: "Planeta Umbrelor",
    excerpt:
      "Un astronaut naufragiază pe o planetă unde umbra are voință proprie.",
    image: story4,
  },
  {
    id: 5,
    category: "Romance",
    title: "Trandafirul Fermecat",
    excerpt:
      "O poveste romantică despre un trandafir ce prinde viață și schimbă destinul unei prințese.",
    image: story5,
  },
  {
    id: 6,
    ategory: "Adventure",
    title: "Regina din Nord",
    excerpt:
      "O prințesă devine regină într-o lume înghețată unde zăpada vorbește și ghețarii ascund secrete.",
    image: story6,
  },
  {
    id: 7,
    ategory: "Adventure",
    title: "Mintea Artificială",
    excerpt:
      "Într-un viitor apropiat, o inteligență artificială se îndrăgostește de creatorul său.",
    image: story7,
  },
];

export default stories;
