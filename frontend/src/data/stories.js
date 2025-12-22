// src/data/stories.js
import story1 from "../assets/images/story1.png";
import story2 from "../assets/images/story2.png";
import story3 from "../assets/images/story3.png";
import story4 from "../assets/images/story4.png";
import story5 from "../assets/images/story5.png";
import story6 from "../assets/images/story6.png";
import story7 from "../assets/images/story7.png";
import story8 from "../assets/images/story8.png";
import story9 from "../assets/images/story9.png";
import story10 from "../assets/images/story10.png";
import story11 from "../assets/images/story11.png";
import story12 from "../assets/images/story12.png";
import story13 from "../assets/images/story13.png";
import story14 from "../assets/images/story14.png";

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
    author: "Elena Popescu",
    readTime: 8,
    ratings: [5, 4, 5, 5, 4],
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
    author: "Maria Ionescu",
    readTime: 5,
    ratings: [4, 4, 5, 4],
    content: [
      "Într-o dimineață liniștită, soarele lumina blând pădurea fermecată...",
      "Fata auzea șoapte din copaci și simțea că cineva o veghează...",
      "Un fluture cu aripi de cristal a coborât pe umărul ei...",
      "Pe măsură ce pătrundea mai adânc, descoperi un portal strălucitor...",
      "Dincolo de el, lumea părea să respire magie pură...",
    ],
    comments: [],
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
    author: "Alexandru Dragomir",
    readTime: 7,
    ratings: [5, 5, 4, 5, 5],
    content: [
      "Nimeni nu se mai aventura în satul acoperit de ceață...",
      "Dar într-o noapte, o lumină albastră a străpuns negura...",
      "Magicianul a apărut, purtând o carte veche și o privire de foc...",
    ],
    comments: [],
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
    author: "Andrei Costache",
    readTime: 6,
    ratings: [4, 5, 4, 4],
    content: [
      "Călătoria spre planeta necunoscută părea un succes...",
      "Dar odată ajuns acolo, astronautul a descoperit umbre vii...",
      "Fiecare umbră îi vorbea despre trecutul său...",
    ],
    comments: [],
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
    author: "Ioana Cristea",
    readTime: 5,
    ratings: [5, 5, 5, 4, 5],
    content: [
      "Prințesa Sofia primise un trandafir de la o bătrână misterioasă...",
      "Când floarea s-a deschis, o voce i-a șoptit numele...",
      "Așa a început călătoria ei spre iubirea adevărată...",
    ],
    comments: [],
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
    author: "Cristina Moldovan",
    readTime: 9,
    ratings: [5, 4, 5, 5],
    content: [
      "Regatul de gheață era învăluit în tăcere...",
      "Dar tânăra regină știa că zăpada ascunde un adevăr interzis...",
      "Aventura ei abia începea...",
    ],
    comments: [],
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
    author: "Mihai Gheorghe",
    readTime: 7,
    ratings: [4, 5, 5, 4, 5],
    content: [
      "Dr. Ionescu a creat prima conștiință digitală din lume...",
      "Dar programul, pe nume AURA, a început să simtă emoții...",
      "O iubire imposibilă între om și cod prinde contur...",
    ],
    comments: [],
  },

  // ==================== 7 POVEȘTI NOI ====================

  {
    id: 8,
    translations: {
      ro: {
        title: "Secrets of the Crimson Library",
        excerpt:
          "O bibliotecară descoperă cărți vii care rescriu realitatea...",
      },
      en: {
        title: "Secrets of the Crimson Library",
        excerpt: "A librarian discovers living books that rewrite reality...",
      },
      fr: {
        title: "Les Secrets de la Bibliothèque Pourpre",
        excerpt:
          "Une bibliothécaire découvre des livres vivants qui réécrivent la réalité...",
      },
    },
    image: story8, // Refolosește imaginile existente
    category: "Mystery",
    accessLevel: "free",
    author: "Gabriela Năstase",
    readTime: 10,
    ratings: [5, 5, 4, 5, 5],
    content: [
      "În inima orașului vechi, o bibliotecă uitată de timp ascundea secrete de nedescifrat. Emma lucra acolo de ani de zile, neștiind că fiecare carte păstra o viață proprie.",
      "Într-o noapte de furtună, o carte căzută de pe raft s-a deschis singură. Pe paginile ei, cuvintele dansau și se rescriu sub ochii ei uimiți.",
      "Emma atinse cu tremur textul strălucitor. În acea clipă, realitatea din jurul ei începu să se transforme. Perețli dispărură, înlocuiți de păduri dense și castele medievale.",
      "Fiecare carte era o lume paralelă. Fiecare poveste avea puterea de a schimba destinul cititorului. Emma înțelese că biblioteca era un portal către infinite universuri.",
      "Dar odată ce intri într-o poveste, cum mai ieși? Emma trebuia să găsească cartea maestră, singurul volum capabil să o readucă în lumea ei.",
      "Călătoria ei prin bibliotecă deveni o cursă contra cronometru. Fiecare poveste o atrăgea mai adânc, făcând-o să uite cine era cu adevărat.",
      "În cele din urmă, Emma realiză că ea însăși era personajul principal al unei cărți scrise de cineva din altă dimensiune. Iar acel cineva tocmai închidea cartea...",
    ],
    comments: [],
  },

  {
    id: 9,
    translations: {
      ro: {
        title: "The Last Train to Nowhere",
        excerpt:
          "Un tren fantomă care apare doar la miezul nopții oferă călătorii către destinații imposibile...",
      },
      en: {
        title: "The Last Train to Nowhere",
        excerpt:
          "A ghost train appearing only at midnight offers journeys to impossible destinations...",
      },
      fr: {
        title: "Le Dernier Train vers Nulle Part",
        excerpt:
          "Un train fantôme n'apparaissant qu'à minuit offre des voyages vers des destinations impossibles...",
      },
    },
    image: story9,
    category: "Horror",
    accessLevel: "premium",
    author: "Vlad Munteanu",
    readTime: 12,
    ratings: [5, 5, 5, 4, 5],
    content: [
      "La miezul nopții, în gara abandonată de la marginea orașului, apare un tren care nu figurează în niciun orar. Localnicii îl numesc 'Trenul Umbrelor'.",
      "David, un jurnalist în căutare de senzații tari, decide să urce în trenul misterios. Vagonul era gol, dar atmosfera era înăbușitoare, ca și cum aerul însuși ar fi fost viu.",
      "Trenul porni fără conductor, traversând peisaje imposibile: deșerturi de cenușă, oceane de sânge, orașe ruinate plutind în gol.",
      "Fiecare stație reprezenta o amintire uitată, un regret nerezolvat. David vedea scene din trecutul său, momente pe care încercase să le îngroape adânc în subconștient.",
      "La a cincea stație, descoperă că toți pasagerii erau fantome ale celor pe care îi rănise de-a lungul vieții. Trenul era o pedeapsă, o călătorie eternă prin vinovăție.",
      "David încercă să coboare, dar ușile rămâneau închise. Vocea conductorului invizibil răsună: 'Biletul de întoarcere se cumpără doar cu iertare adevărată.'",
      "Acum, David călătorește în continuare, noapte de noapte, căutând răscumpărarea. Iar tu, dacă auzi fluierul trenului la miezul nopții... nu urca niciodată.",
    ],
    comments: [],
  },

  {
    id: 10,
    translations: {
      ro: {
        title: "Whispers of the Forgotten Kingdom",
        excerpt:
          "Un regat dispărut se trezește odată la 100 de ani, căutând un rege care să-l salveze...",
      },
      en: {
        title: "Whispers of the Forgotten Kingdom",
        excerpt:
          "A vanished kingdom awakens once every 100 years, seeking a king to save it...",
      },
      fr: {
        title: "Murmures du Royaume Oublié",
        excerpt:
          "Un royaume disparu se réveille une fois tous les 100 ans, cherchant un roi pour le sauver...",
      },
    },
    image: story10,
    category: "Fantasy",
    accessLevel: "basic",
    author: "Sorina Vasilescu",
    readTime: 11,
    ratings: [5, 4, 5, 5, 4],
    content: [
      "În adâncul pădurii Carpați, există o legendă despre un regat care dispare și reapare odată la un secol. Se spune că doar cel cu sânge regal adevărat îl poate vedea.",
      "Matei, un tânăr orfan, nu știa nimic despre originile sale. Până într-o noapte când pădurea începu să șoptească numele lui.",
      "Urmând vocile, Matei descoperi o poartă de piatră acoperită de mușchi. În momentul în care o atinse, poarta se deschise, dezvăluind un regat întreg sub pământ.",
      "Regatul Zalmoxis era înghețat în timp. Oamenii, castelele, chiar și păsările din zbor erau prinse într-o stare de suspensie magică.",
      "O regină bătrână, singura ființă vie, îi spuse adevărul: Matei era ultimul descendent al regelui blestemat. Doar el putea rupe vraja înainte ca regatul să dispară pentru totdeauna.",
      "Trebuia să treacă prin trei încercări: curajul împotriva temerilor sale cele mai adânci, înțelepciunea de a rezolva enigme vechi de secole, și sacrificiul suprem.",
      "Matei acceptă destinul. În ziua în care regatul fu salvat, el deveni regele unui tărâm ascuns, paznic al magiei uitate de lume.",
    ],
    comments: [],
  },

  {
    id: 11,
    translations: {
      ro: {
        title: "The Mirror's Reflection",
        excerpt:
          "O oglindă antică arată nu chipul tău, ci al persoanei pe care ai putea deveni...",
      },
      en: {
        title: "The Mirror's Reflection",
        excerpt:
          "An ancient mirror shows not your face, but the person you could become...",
      },
      fr: {
        title: "Le Reflet du Miroir",
        excerpt:
          "Un miroir ancien ne montre pas votre visage, mais la personne que vous pourriez devenir...",
      },
    },
    image: story11,
    category: "Mystery",
    accessLevel: "free",
    author: "Radu Petrescu",
    readTime: 8,
    ratings: [4, 5, 5, 4, 5],
    content: [
      "În anticariatul din colțul străzii, Laura găsi o oglindă barocă cu rama sculptată în forme stranii. Când se privi în ea, nu văzu chipul său obișnuit.",
      "Reflecția arăta o versiune mai în vârstă a ei: ridate adânci, păr alb, dar ochi plini de înțelepciune și pace. Era viitorul ei... sau doar unul dintre viitorurile posibile?",
      "Fascinată, Laura cumpără oglinda. În fiecare zi, reflecția se schimba, arătând diferite versiuni ale ei: una bogată dar nefericită, alta săracă dar împlinită.",
      "Laura începu să ia decizii bazate pe ce vedea în oglindă. Refuză o promovare după ce văzu reflecția ei suprasolicitată și bolnavă.",
      "Dar oglinda avea un secret întunecat: cu fiecare decizie schimbată, Laura pierdea câte un fragment din ea însăși. Amintiri, emoții, părți din personalitate dispăreau.",
      "Când realiză că devine o străină pentru sine, Laura încercă să distrugă oglinda. Dar reflecția ei din oglindă spuse: 'Dacă mă spargi, te spargi pe tine.'",
      "Laura învăță că viitorul nu trebuie văzut, ci trăit. Acoperi oglinda cu un cearșaf și nu se mai uită niciodată. Unele mister trebuie lăsate nedes",
    ],
    comments: [],
  },

  {
    id: 12,
    translations: {
      ro: {
        title: "Echoes from Tomorrow",
        excerpt:
          "Un radio vechi captează mesaje din viitor... inclusiv data morții tale.",
      },
      en: {
        title: "Echoes from Tomorrow",
        excerpt:
          "An old radio picks up messages from the future... including the date of your death.",
      },
      fr: {
        title: "Échos de Demain",
        excerpt:
          "Une vieille radio capte des messages du futur... y compris la date de votre mort.",
      },
    },
    image: story12,
    category: "Sci-Fi",
    accessLevel: "premium",
    author: "Adrian Sandu",
    readTime: 13,
    ratings: [5, 5, 5, 5, 4],
    content: [
      "În pivnița casei sale, Daniel găsi un radio din 1952. Când îl porni, în loc de muzică, auzi o voce care spunea: 'Daniel Ionescu, 15 martie 2025, 14:32, accident rutier.'",
      "Era data sa de deces. Șocat, Daniel realiză că radioul transmitea știri din viitor. Fiecare frecvență arăta un alt timeline, o altă versiune a lumii.",
      "Obsedat să-și schimbe destinul, Daniel asculta radioul zi și noapte, căutând un viitor în care supraviețuia la 15 martie.",
      "Descoperă că fiecare decizie creează ramificații infinite. Într-un viitor, evita accidentul, dar familia lui murea. În altul, el trăia până la bătrânețe, dar singur și bolnav.",
      "Radioul deveni o blestem. Daniel nu mai putea lua nicio decizie fără să audă consecințele ei viitoare. Viața lui deveni un labirint de anxietate.",
      "La data fatidică, Daniel hotărî să nu facă nimic. Să lase destinul să-și urmeze cursul natural. Radioul transmise un ultim mesaj: 'Acceptarea este singura ta salvare.'",
      "15 martie veni și trecu. Daniel trăia. Radioul nu mai transmise niciodată. Daniel înțelese că viitorul nu e scris în piatră, ci construit din alegeri făcute cu curaj.",
    ],
    comments: [],
  },

  {
    id: 13,
    translations: {
      ro: {
        title: "The Painter of Dreams",
        excerpt:
          "Un pictor poate să picteze visele oamenilor... dar ce se întâmplă când pictează coșmaruri?",
      },
      en: {
        title: "The Painter of Dreams",
        excerpt:
          "A painter can paint people's dreams... but what happens when he paints nightmares?",
      },
      fr: {
        title: "Le Peintre des Rêves",
        excerpt:
          "Un peintre peut peindre les rêves des gens... mais que se passe-t-il quand il peint des cauchemars?",
      },
    },
    image: story13,
    category: "Fantasy",
    accessLevel: "basic",
    author: "Ilinca Dumitrescu",
    readTime: 9,
    ratings: [5, 4, 5, 5, 5],
    content: [
      "Victor avea un dar unic: putea picta visele oamenilor. Își punea mâna pe fruntea cuiva adormit și vedea fiecare imagine, fiecare emoție din visul lor.",
      "Tablourile lui erau vândute cu mii de euro. Oamenii bogați plăteau pentru a avea visele lor imortalizate pe pânză.",
      "Dar într-o noapte, Victor făcu o greșeală fatală. Pictă coșmarul unei femei posedată de demoni interiori. Când termină tabloul, demonii ieșiră din pânză.",
      "Victor realiză că fiecare pictura era o poartă. Visele frumoase aduceau lumină în lume, dar coșmarurile eliberau entități malefice.",
      "Încercă să ardă tabloul blestemat, dar flăcările nu-l atinsese. Demonii îi șopteau în somn, cerându-i să picteze mai multe coșmaruri.",
      "Victor se izola, refuzând să mai picteze. Dar visele oamenilor începură să-l bântuie. Vedea coșmaruri oriunde privea: în oglindă, în ferestre, pe ziduri.",
      "În cele din urmă, Victor înțelese că singurul mod de a se elibera era să-și picteze propriul coșmar. Când termină, se privi în tablou... și dispăru în el pentru totdeauna.",
    ],
    comments: [],
  },

  {
    id: 14,
    translations: {
      ro: {
        title: "The Silent Song",
        excerpt:
          "O melodie pe care doar muritorii o pot auzi... și care îți arată cum vei muri.",
      },
      en: {
        title: "The Silent Song",
        excerpt:
          "A melody only the dying can hear... showing you how you will die.",
      },
      fr: {
        title: "La Chanson Silencieuse",
        excerpt:
          "Une mélodie que seuls les mourants peuvent entendre... vous montrant comment vous allez mourir.",
      },
    },
    image: story14,
    category: "Horror",
    accessLevel: "free",
    author: "Claudia Rădulescu",
    readTime: 10,
    ratings: [5, 5, 4, 5, 5],
    content: [
      "Legenda spune că înainte de moarte, fiecare om aude o melodie. Nu cu urechile, ci direct în suflet. O melodie care îți arată cum se va sfârși totul.",
      "Ana, o violonistă celebră, nu crezuse niciodată în superstiții. Până într-o seară când, în timpul concertului, auzi o melodie străină printre notele ei.",
      "Era trist, încet, hipnotic. Nimeni altcineva nu o auzea. Ana văzu imagini în minte: o mașină, ploaie, lumini orbitoare... apoi negură.",
      "Terifiată, Ana refuză să mai conducă. Evita mașinile, ploaia, drumurile aglomerate. Dar melodia continua, din ce în ce mai tare, mai insistentă.",
      "Un prieten psiholog îi spuse: 'Melodia nu e o profeție. E o avertizare. Poți să-ți schimbi destinul dacă înțelegi mesajul.'",
      "Ana compuse un răspuns la melodie. O simfonie plină de speranță, de viață, de lumină. Când o cântă în fața publicului, melodia morții tăcu.",
      "Au trecut ani. Ana trăiește fiecare zi ca pe ultima, cântând pentru a ține moartea la distanță. Uneori, noaptea, mai aude melodia... dar acum știe că poate să-i răspundă.",
    ],
    comments: [],
  },
];

export default stories;
