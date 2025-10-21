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
    category: "Fantasy",
    accessLevel: "free", // poveste gratuită complet
    content: [
      "Ana întotdeauna simțise că există ceva dincolo de lumea pe care o cunoștea...",
      "Pădurea de la marginea satului era fermecată în lumina lunii albastre...",
      "Pe măsură ce se aventura printre copaci, o licărire albastră apăruse în depărtare...",
      "Se trezi într-o lume de vis, cu câmpii infinite presărate cu flori argintii...",
      "În curând, Ana întâlni o creatură delicată, cu aripi translucide și ochi luminoși...",
      "Ana învăță repede că fiecare colț al acestui tărâm ascundea o lecție...",
      "Într-o noapte, lângă un foc argintiu, Ana întâlni un tânăr misterios...",
      "Pe măsură ce zilele treceau, Ana descoperi secretele acestui tărâm...",
      "Totuși, portalul începea să se închidă încet, iar Ana știa că trebuie să se întoarcă...",
      "Când Ana păși din nou pe pământul familiar al satului, luna albăstruie dispăru...",
      "Ani mai târziu, Ana descoperi că portalul se deschide doar când luna albăstruie apare...",
    ],
    comments: [
      { user: "Ana", text: "Foarte frumoasă poveste!" },
      { user: "Maria", text: "M-a ținut cu sufletul la gură!" },
    ],
    rating: 0,
    votes: 0,
  },
  {
    id: 2,
    title: "Fata din pădurea fermecată",
    excerpt: "O poveste magică despre o fată care descoperă un secret.",
    image: story2,
    category: "Fantasy",
    accessLevel: "basic", // vizibilă doar prima pagină pentru user Free
    content: [
      "Într-o dimineață liniștită, soarele lumina blând pădurea fermecată...",
      "Fata auzea șoapte din copaci și simțea că cineva o veghează...",
      "Un fluture cu aripi de cristal a coborât pe umărul ei...",
      "Pe măsură ce pătrundea mai adânc, descoperi un portal strălucitor...",
      "Dincolo de el, lumea părea să respire magie pură...",
    ],
  },
  {
    id: 3,
    title: "Magicianul din Cețuri",
    excerpt:
      "Un bătrân misterios salvează un sat uitat cu o magie pierdută în timp.",
    image: story3,
    category: "Horror",
    accessLevel: "premium", // blocată complet pentru user Free
    content: [
      "Nimeni nu se mai aventura în satul acoperit de ceață...",
      "Dar într-o noapte, o lumină albastră a străpuns negura...",
      "Magicianul a apărut, purtând o carte veche și o privire de foc...",
    ],
  },
  {
    id: 4,
    title: "Planeta Umbrelor",
    excerpt:
      "Un astronaut naufragiază pe o planetă unde umbra are voință proprie.",
    image: story4,
    category: "Sci-Fi",
    accessLevel: "basic",
    content: [
      "Călătoria spre planeta necunoscută părea un succes...",
      "Dar odată ajuns acolo, astronautul a descoperit umbre vii...",
      "Fiecare umbră îi vorbea despre trecutul său...",
    ],
  },
  {
    id: 5,
    title: "Trandafirul Fermecat",
    excerpt:
      "O poveste romantică despre un trandafir ce prinde viață și schimbă destinul unei prințese.",
    image: story5,
    category: "Romance",
    accessLevel: "free",
    content: [
      "Prințesa Sofia primise un trandafir de la o bătrână misterioasă...",
      "Când floarea s-a deschis, o voce i-a șoptit numele...",
      "Așa a început călătoria ei spre iubirea adevărată...",
    ],
  },
  {
    id: 6,
    title: "Regina din Nord",
    excerpt:
      "O prințesă devine regină într-o lume înghețată unde zăpada vorbește și ghețarii ascund secrete.",
    image: story6,
    category: "Adventure",
    accessLevel: "premium",
    content: [
      "Regatul de gheață era învăluit în tăcere...",
      "Dar tânăra regină știa că zăpada ascunde un adevăr interzis...",
      "Aventura ei abia începea...",
    ],
  },
  {
    id: 7,
    title: "Mintea Artificială",
    excerpt:
      "Într-un viitor apropiat, o inteligență artificială se îndrăgostește de creatorul său.",
    image: story7,
    category: "Sci-Fi",
    accessLevel: "basic",
    content: [
      "Dr. Ionescu a creat prima conștiință digitală din lume...",
      "Dar programul, pe nume AURA, a început să simtă emoții...",
      "O iubire imposibilă între om și cod prinde contur...",
    ],
  },
];

export default stories;
