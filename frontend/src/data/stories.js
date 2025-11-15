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
    translations: {
      ro: {
        title: "Sub Luna Albastră",
        excerpt: "O tânără descoperă un portal spre o lume ascunsă...",
      },
      en: {
        title: "Under the Blue Moon",
        excerpt: "A young girl discovers a portal to a hidden world...",
      },
      fr: {
        title: "Sous la Lune Bleue",
        excerpt: "Une jeune fille découvre un portail vers un monde caché...",
      },
    },
    image: story1,
    category: "Fantasy",
    accessLevel: "free",
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
    translations: {
      ro: {
        title: "Fata din pădurea fermecată",
        excerpt: "O poveste magică despre o fată care descoperă un secret.",
      },
      en: {
        title: "The Girl in the Enchanted Forest",
        excerpt: "A magical story about a girl who discovers a secret.",
      },
      fr: {
        title: "La Fille de la Forêt Enchantée",
        excerpt: "Une histoire magique sur une fille qui découvre un secret.",
      },
    },
    image: story2,
    category: "Fantasy",
    accessLevel: "basic",
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
    translations: {
      ro: {
        title: "Magicianul din Cețuri",
        excerpt:
          "Un bătrân misterios salvează un sat uitat cu o magie pierdută în timp.",
      },
      en: {
        title: "The Magician in the Mists",
        excerpt:
          "A mysterious old man saves a forgotten village with magic lost in time.",
      },
      fr: {
        title: "Le Magicien des Brumes",
        excerpt:
          "Un vieil homme mystérieux sauve un village oublié avec une magie perdue dans le temps.",
      },
    },
    image: story3,
    category: "Horror",
    accessLevel: "premium",
    content: [
      "Nimeni nu se mai aventura în satul acoperit de ceață...",
      "Dar într-o noapte, o lumină albastră a străpuns negura...",
      "Magicianul a apărut, purtând o carte veche și o privire de foc...",
    ],
  },
  {
    id: 4,
    translations: {
      ro: {
        title: "Planeta Umbrelor",
        excerpt:
          "Un astronaut naufragiază pe o planetă unde umbra are voință proprie.",
      },
      en: {
        title: "The Planet of Shadows",
        excerpt:
          "An astronaut crashes on a planet where shadows have their own will.",
      },
      fr: {
        title: "La Planète des Ombres",
        excerpt:
          "Un astronaute s'écrase sur une planète où les ombres ont leur propre volonté.",
      },
    },
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
    translations: {
      ro: {
        title: "Trandafirul Fermecat",
        excerpt:
          "O poveste romantică despre un trandafir ce prinde viață și schimbă destinul unei prințese.",
      },
      en: {
        title: "The Enchanted Rose",
        excerpt:
          "A romantic story about a rose that comes to life and changes a princess's destiny.",
      },
      fr: {
        title: "La Rose Enchantée",
        excerpt:
          "Une histoire romantique sur une rose qui prend vie et change le destin d'une princesse.",
      },
    },
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
    translations: {
      ro: {
        title: "Regina din Nord",
        excerpt:
          "O prințesă devine regină într-o lume înghețată unde zăpada vorbește și ghețarii ascund secrete.",
      },
      en: {
        title: "The Queen of the North",
        excerpt:
          "A princess becomes queen in an icy world where snow talks and glaciers hide secrets.",
      },
      fr: {
        title: "La Reine du Nord",
        excerpt:
          "Une princesse devient reine dans un monde glacé où la neige parle et les glaciers cachent des secrets.",
      },
    },
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
    translations: {
      ro: {
        title: "Mintea Artificială",
        excerpt:
          "Într-un viitor apropiat, o inteligență artificială se îndrăgostește de creatorul său.",
      },
      en: {
        title: "The Artificial Mind",
        excerpt:
          "In the near future, an artificial intelligence falls in love with its creator.",
      },
      fr: {
        title: "L'Esprit Artificiel",
        excerpt:
          "Dans un futur proche, une intelligence artificielle tombe amoureuse de son créateur.",
      },
    },
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
