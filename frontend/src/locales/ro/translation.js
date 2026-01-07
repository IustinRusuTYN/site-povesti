// src/locales/ro/translation.js
const ro = {
  translation: {
    // NAV
    allStories: "Toate Poveștile",
    about: "Despre",
    upcoming: "În Curând",
    subscribe: "Abonează-te",

    search: {
      placeholder: "Caută o poveste...",
    },

    // RATING (nou, organizat)
    rating: {
      averageLabel: "Rating mediu:",
      votesLabel: "{{count}} voturi",
      loading: "Se încarcă rating-ul...",
      loginToVote: "Autentifică-te ca să poți vota.",
      oneVoteOnly: "Poți vota o singură dată.",
      alreadyRated: "Ai votat deja această poveste.",
      yourVoteSaved: "Ai votat: {{value}}/5 (salvat)",
      errorSave: "Eroare la salvarea rating-ului",
    },

    // COMMENTS (nou, organizat)
    comments: {
      title: "Comentarii",
      none: "Nu există comentarii încă.",
      placeholder: "Scrie un comentariu...",
      submit: "Trimite",
      sending: "Se trimite...",
      loading: "Se încarcă comentariile...",
      mustBeLoggedIn: "Trebuie să fii autentificat pentru a comenta",
      confirmDelete: "Sigur vrei să ștergi comentariul?",
      delete: "Șterge",
      errorAdd: "Eroare la adăugarea comentariului",
      errorDelete: "Eroare la ștergerea comentariului",
    },

    // (Păstrez cheile tale vechi — nu le ating)
    subscribePage: {
      billing: { monthly: "Lunar", yearly: "Anual" },
      planCard: {
        recommended: "Recomandat",
        goPremium: "Alege Premium",
        chooseBasic: "Alege Basic",
        disclaimer:
          "Prețurile sunt pentru abonament lunar/anual și pot fi modificate.",
      },
      price: {
        monthly: "/lună",
        yearly: "/an",
        approx: "≈",
        save: "Economisești",
      },
      hero: {
        title: "Alege planul potrivit pentru tine",
        description:
          "Abonează-te și deblochează povești exclusive, capitole bonus și o experiență fără reclame. Alege abonament lunar sau anual și bucură-te de reduceri.",
      },
      plans: [
        {
          id: "basic",
          name: "Basic",
          monthly: 4.99,
          yearly: 49.99,
          highlights: [
            "Acces la majoritatea poveștilor premium",
            "Citire fără reclame (basic)",
            "Acces la comunitate și comentarii",
          ],
          recommended: false,
          description:
            "Ideal pentru cititori ocazionali care doresc puțin conținut premium.",
        },
        {
          id: "premium",
          name: "Premium",
          monthly: 9.99,
          yearly: 99.99,
          highlights: [
            "Acces complet la toate poveștile premium + capitole bonus",
            "Acces anticipat la lansări noi",
            "Suport prioritar și surprize exclusive",
          ],
          recommended: true,
          description:
            "Pentru cititori care doresc experiența completă și bonusuri speciale.",
        },
      ],
      testimonials: {
        title: "Ce spun cititorii noștri",
        items: [
          {
            id: 1,
            name: "Elena M.",
            text: "Am trecut la Premium și capitolele suplimentare sunt uimitoare! Merită fiecare ban.",
            role: "Cititor, București",
          },
          {
            id: 2,
            name: "Ioana P.",
            text: "Oferta anuală m-a convins. Economisesc bani și primesc conținut de calitate.",
            role: "Abonat",
          },
          {
            id: 3,
            name: "Maria T.",
            text: "Citirea fără reclame și bonusurile exclusive fac experiența mult mai plăcută.",
            role: "Cititor fidel",
          },
        ],
      },
      trust: {
        safePayments: {
          title: "Plăți securizate",
          description:
            "Procesăm plățile prin Stripe. Datele cardului nu sunt niciodată stocate pe serverele noastre.",
        },
        cancelAnytime: {
          title: "Anulează oricând",
          description:
            "Oprește reînnoirea din profilul tău, fără taxe ascunse.",
        },
        supportRefund: {
          title: "Suport & rambursare",
          description:
            "Suport prioritar pentru Premium și rambursări în 30 de zile.",
        },
      },
      alertSubscribed:
        "Te-ai abonat la {{planId}} ({{billing}}) — flux demo. Este necesară integrarea backend.",
    },

    profile: {
      title: "Profilul Meu",
      subtitle: "Gestionează-ți contul și preferințele",
      tabs: {
        info: "Informații",
        stats: "Statistici",
        recent: "Recente",
        recommended: "Recomandate",
        subscription: "Abonament",
        settings: "Setări",
      },
      namePlaceholder: "Numele tău",
      bioPlaceholder: "Spune ceva despre tine...",
      defaultName: "Utilizator",
      noBio: "Nicio descriere adăugată.",
      edit: "Editează",
      save: "Salvează",
      cancel: "Anulează",
      logout: "Deconectare",
      stats: {
        storiesRead: "Citite",
        favorites: "Favorite",
        timeSpent: "Timp",
        streak: "Streak",
      },
      weekActivity: "Activitate săptămânală",
      favoriteCategories: "Categorii preferate",
      days: {
        mon: "Lun",
        tue: "Mar",
        wed: "Mie",
        thu: "Joi",
        fri: "Vin",
        sat: "Sâm",
        sun: "Dum",
      },
      categories: {
        drama: "Dramă",
        comedy: "Comedie",
        horror: "Horror",
        adventure: "Aventură",
      },
      recent: { noStories: "Nu ai citit povești recent" },
      noRecentStories: "Nu ai citit povești recent",
      exploreStories: "Explorează Povești",
      recentStories: "Povești Recente",
      clearHistory: "Șterge Istoricul",
      recommendedForYou: "Recomandate pentru Tine",
      subscription: {
        currentPlan: "Plan curent",
        price: "Preț",
        year: "an",
        statusLabel: "Status abonament",
        statusActive: "Activ",
        renewDate: "Data reînnoirii",
        paymentMethod: "Metodă de plată",
        paymentValue: "Card bancar",
        manageSubscription: "Schimbă planul",
        unsubscribe: "Dezabonare",
        alertUnsubscribed: "Te-ai dezabonat cu succes",
        plans: {
          features: {
            freeStories: "Povești gratuite",
            ads: "Reclame",
            allStories: "Toate poveștile",
            noAds: "Fără reclame",
            offline: "Descărcare offline",
            stats: "Statistici avansate",
            allPremium: "Toate beneficiile Premium",
            fiveAccounts: "Până la 5 conturi",
            parental: "Control parental",
            storiesFound: "povești găsite",
            noCategory: "Fără categorie",
          },
        },
      },
      settings: {
        notifications: "Notificări",
        emailNotif: "Notificări email",
        pushNotif: "Notificări push",
        language: "Limbă",
        dangerZone: "Zonă Periculoasă",
        deleteAccount: "Șterge Contul",
        confirmDelete:
          "Ești sigur că vrei să ștergi contul? Această acțiune este ireversibilă.",
      },
    },

    signIn: {
      modal: {
        title: "Bun venit!",
        subtitle: "Autentifică-te pentru a continua",
        email: "Email",
        password: "Parolă",
        securityAnswer: "Răspuns",
        rememberMe: "Ține-mă conectat",
        forgotPassword: "Ai uitat parola?",
        submit: "Autentificare",
        loading: "Se autentifică...",
        or: "sau",
        google: "Continuă cu Google",
        facebook: "Continuă cu Facebook",
        errors: {
          emptyFields: "Te rugăm să completezi toate câmpurile!",
          securityWrong: "Răspunsul de securitate este incorect!",
          invalid: "Credențiale invalide!",
        },
        closeAriaLabel: "Închide modal",
      },
    },

    signUp: {
      modal: {
        title: "Crează cont",
        name: "Nume",
        email: "Email",
        password: "Parolă",
        confirmPassword: "Confirmă parola",
        securityAnswer: "Răspuns",
        rememberMe: "Ține-mă conectat",
        submit: "Înregistrare",
        loading: "Se înregistrează...",
        google: "Înregistrează-te cu Google",
        facebook: "Înregistrează-te cu Facebook",
        errors: {
          emptyFields: "Te rugăm să completezi toate câmpurile!",
          invalidEmail: "Email invalid!",
          invalidPassword:
            "Parola trebuie să aibă cel puțin 8 caractere, cu 1 majusculă, 1 minusculă și 1 cifră.",
          passwordMismatch: "Parolele nu se potrivesc!",
          securityWrong: "Răspunsul de securitate este incorect!",
          signupFailed: "Înregistrarea a eșuat!",
        },
        success: "Înregistrare cu succes!",
        closeAriaLabel: "Închide modal",
      },
    },

    stories: {
      1: {
        title: "Sub Luna Albastră",
        excerpt:
          "O tânără descoperă un portal spre o lume ascunsă care apare doar în nopțile de lună albastră.",
        content: [
          "Ana simțise mereu că există ceva dincolo de lumea pe care o cunoștea...",
          "Pădurea de la marginea satului era fermecată în lumina lunii albastre...",
          "Pe măsură ce se aventura printre copaci, o strălucire albastră apăru în depărtare...",
          "Se trezi într-o lume de vis, cu câmpii nesfârșite presărate cu flori argintii...",
          "Curând, Ana întâlni o creatură delicată cu aripi translucide și ochi luminoși...",
          "Ana învăță repede că fiecare colț al acestui tărâm ascundea o lecție...",
          "Într-o noapte, lângă un foc argintiu, Ana întâlni un tânăr misterios...",
          "Pe măsură ce zilele treceau, Ana descoperi secretele acestui tărâm...",
          "Totuși, portalul începu să se închidă încet, și Ana știa că trebuie să se întoarcă...",
          "Când Ana păși din nou pe pământul familiar al satului, luna albastră dispăru...",
          "Ani mai târziu, Ana descoperi că portalul se deschide doar când luna albastră apare...",
        ],
        comments: ["Poveste frumoasă!", "M-a ținut în suspans!"],
      },
      2: {
        title: "Fata din Pădurea Fermecată",
        excerpt: "O poveste magică despre o fată care descoperă un secret.",
        content: [
          "Într-o dimineață liniștită, soarele lumina blând pădurea fermecată...",
          "Fata auzi șoapte din copaci și simți că cineva o privește...",
          "Un fluture cu aripi de cristal ateriza pe umărul ei...",
          "Pe măsură ce se aventura mai adânc, descoperi un portal strălucitor...",
          "Dincolo de el, lumea părea să respire magie pură...",
        ],
      },
      3: {
        title: "Magicianul Ceturilor",
        excerpt: "Un bătrân misterios salvează un sat uitat cu magie pierdută.",
        content: [
          "Nimeni nu se aventura în satul acoperit de ceață...",
          "Dar într-o noapte, o lumină albastră străpunse ceața...",
          "Magicianul apăru, purtând o carte veche și o privire arzătoare...",
        ],
      },
      4: {
        title: "Planeta Umbrelor",
        excerpt:
          "Un astronaut se prăbușește pe o planetă unde umbrele au voință proprie.",
        content: [
          "Călătoria spre planeta necunoscută părea de succes...",
          "Dar odată ajuns acolo, astronautul descoperi umbre vii...",
          "Fiecare umbră îi vorbea despre trecutul său...",
        ],
      },
      5: {
        title: "Trandafirul Fermecat",
        excerpt:
          "O poveste romantică despre un trandafir care prinde viață și schimbă destinul unei prințese.",
        content: [
          "Prințesa Sofia primi un trandafir de la o bătrână misterioasă...",
          "Când floarea înflori, o voce îi șopti numele...",
          "Astfel începu călătoria ei spre iubirea adevărată...",
        ],
      },
      6: {
        title: "Regina Nordului",
        excerpt:
          "O prințesă devine regină într-o lume înghețată unde zăpada vorbește și ghețarii ascund secrete.",
        content: [
          "Regatul de gheață era învăluit în tăcere...",
          "Dar tânăra regină știa că zăpada ascunde un adevăr interzis...",
          "Aventura ei abia începea...",
        ],
      },
      7: {
        title: "Mintea Artificială",
        excerpt:
          "În viitorul apropiat, o inteligență artificială se îndrăgostește de creatorul său.",
        content: [
          "Dr. Ionescu crea prima conștiință digitală din lume...",
          "Dar programul, numit AURA, începu să simtă emotions...",
          "O iubire imposibilă între om și cod ia formă...",
        ],
      },
      8: {
        title: "Casa de la capătul străzii",
        excerpt:
          "În fiecare seară, o lumină ciudată se aprindea la fereastra unei case abandonate...",
        content: [
          "Casa de la capătul străzii fusese, odinioară, cea mai frumoasă din cartier. Acum, ferestrele ei erau acoperite de praf, iar gardul de lemn se înclina periculos spre trotuar. Cu toate astea, în fiecare seară, la aceeași oră, o lumină slabă se aprindea la etaj.",
          "Vecinii o ignorau. Se obișnuiseră să întoarcă privirea, prefăcându-se că nimic nu se întâmplă. Copiii, însă, își șopteau unii altora povești despre fantome, vrăjitoare și ritualuri secrete, arătând cu degetul spre fereastra luminată.",
          "Mara nu credea în povești. Era curioasă din fire și avea un caiet în care nota tot ce i se părea ciudat în cartier. Iar lumina aceea devenise, în ultimele luni, cel mai important mister din lista ei.",
          "Într-o seară rece de toamnă, și-a luat inima în dinți. A așteptat ca părinții să adoarmă, apoi a ieșit tiptil din casă, cu lanterna în buzunar și cu caietul bine strâns la piept. Strada era aproape goală, doar vântul foșnea într-un tei bătrân.",
          "Pe măsură ce se apropia de casă, simțea cum aerul devenea mai greu. Lumina de la etaj pâlpâia slab, ca o lumânare pe sfârșite. Mara s-a oprit la poartă, și-a ținut respirația și a ascultat. Nicio voce, niciun foșnet. Doar tăcere.",
          "Cu mâinile tremurând, a împins poarta. Un scârțâit ascuțit a tăiat liniștea, iar inima i s-a oprit pentru o clipă. S-a strecurat în curte, ocolind buruienile înalte. Ușa de la intrare era întredeschisă, ca și cum ar fi așteptat pe cineva.",
          "Mara a urcat scările interioare, sprijinindu-se de balustrada rece. Fiecare treaptă scârțâia, de parcă anunța prezența ei. Când a ajuns la etaj, lumina venea clar de sub o ușă veche, vopsită cândva în albastru.",
          "A respirat adânc, a numărat în gând până la trei și a împins ușa. Înăuntru, o singură veioză stătea aprinsă pe un birou plin de caiete, fotografii și hărți. Iar în fața biroului, cu spatele la ea, stătea un bărbat în vârstă, cu părul alb și drept, privind fix o fotografie înrămată.",
          "— Știam că, mai devreme sau mai târziu, cineva va veni, a spus el, fără să se întoarcă. Mara a înghețat în prag. Vocea lui era calmă, dar încărcată de o tristețe veche. — De ce aprindeți lumina în fiecare seară? a reușit ea să șoptească.",
          "Bărbatul s-a întors încet. În ochii lui albaștri se citea un dor greu de descris. — Pentru ca ea să găsească drumul înapoi acasă, a spus el, arătând spre fotografia cu o femeie tânără, zâmbitoare. — Și pentru ca cineva, într-o zi, să aibă curajul să întrebe de ce.",
          "Mara a pășit înăuntru, iar senzația de teamă a început să se topească. Misterul casei de la capătul străzii nu era despre fantome sau blesteme. Era despre promisiuni uitate, despre așteptare și despre felul în care lumina, oricât de slabă, poate ghida mereu pe cineva înapoi.",
        ],
      },

      9: {
        title: "Trenul de la miezul nopții",
        excerpt:
          "Se spune că un tren misterios oprește în gară doar pentru cei care au ceva de schimbat în viața lor...",
        content: [
          "Gara era aproape pustie la acea oră. Doar un ceas vechi, atârnat deasupra peronului, ticăia obosit, apropiindu-se de miezul nopții. Andrei își freca mâinile pentru a le încălzi, întrebându-se pentru a zecea oară de ce acceptase să vină.",
          "Un prieten îi povestise, în glumă, despre un tren straniu care apărea doar o dată pe an, exact la miezul nopții, și care lua cu el oamenii care nu mai știau încotro să meargă. Andrei râsese atunci, dar, pe măsură ce zilele treceau, gândul îi rămăsese în minte.",
          "Își pierduse jobul, prietenii se îndepărtaseră, iar apartamentul lui se transformase într-o cutie tăcută, plină de lucruri fără sens. În seara aceea, nu mai avea nimic de pierdut. Așa că venise la gară, doar ca să vadă.",
          "Când ceasul bătu de douăsprezece ori, aerul se schimbă. Un vânt rece trecu prin gară, iar luminile pâlpâiră pentru o clipă. Apoi, din întunericul traseului 3, se auzi un huruit profund, ca un ecou venit din alt timp.",
          "Trenul apăru încet, ca și cum ar fi fost desenat din umbre și abur. Vagoanele erau vechi, dar straniu de bine păstrate. Pe o placă de metal, luminată slab, scria: „Linia Destinului – Numai Dus”.",
          "Ușile se deschiseră fără zgomot. Dinăuntru, o lumină caldă, gălbuie, îl invita să pășească. Andrei privi în jur – nu era nimeni altcineva pe peron. Inima îi bătea nebunește. — E doar o glumă, își spuse. Și totuși, făcu un pas înainte.",
          "În vagon, scaunele erau din catifea albastră, iar ferestrele reflectau nu gara, ci un fel de noapte infinită, presărată cu stele. În capătul culoarului, o femeie îmbrăcată într-un costum elegant îl privea atent.",
          "— Biletul, te rog, zise ea, întinzând mâna. Andrei se bâlbâi: — Eu... nu am bilet. — Ba da, ai, îi răspunse ea calm. L-ai cumpărat în ziua în care ai decis că nu mai vrei să trăiești așa cum o făceai până acum.",
          "Dintr-un buzunar de la piept, pe care nu-l observase înainte, Andrei scoase un carton mic, violet, pe care scria doar numele lui. — Unde mă duce trenul ăsta? întrebă el. Femeia zâmbi ușor: — Depinde. Unii coboară într-un oraș unde își găsesc curajul. Alții, într-un sat unde învață să ierte. Tu vei coborî acolo unde ți-ai lăsat versiunea pe care ai pierdut-o.",
          "Pe tot parcursul călătoriei, prin geam nu se vedea nimic cunoscut. Doar frânturi: o mână care ținea un bilet de avion nefolosit, un caiet plin de desene neterminate, o fotografie cu el râzând, mai tânăr, mai viu.",
          "Când trenul opri, Andrei coborî într-un oraș luminat, plin de culori și persoane care păreau să-l cunoască. Nu era nici trecutul și nici viitorul. Era o nouă șansă, un loc în care putea alege din nou. În spatele lui, trenul de la miezul nopții dispăru în tăcere, lăsând în urmă doar sunetul vag al unei promisiuni împlinite.",
        ],
      },

      10: {
        title: "Librăria dintre lumi",
        excerpt:
          "O librărie misterioasă apare doar celor care au nevoie de o poveste anume...",
        content: [
          "Ploua de ore întregi, iar Clara se adăpostise sub o streașină, încercând să-și dea seama încotro să meargă. Harta orașului nu-i mai spunea nimic. Străzile păreau să se schimbe de fiecare dată când clipea.",
          "Când deja se gândea să renunțe, văzu o firmă mică, de lemn, atârnată deasupra unei uși înguste: „Librăria dintre lumi”. Jurase că, în urmă cu câteva minute, acolo nu fusese nimic. Dar ploaia, oboseala și curiozitatea se împleteau periculos.",
          "A împins ușa și un clopoțel discret a anunțat intrarea ei. Înăuntru, aerul mirosea a hârtie veche, praf și ceva dulce, ca vanilia. Rafturi înalte până la tavan erau pline de cărți de toate culorile și mărimile.",
          "La tejghea, un bărbat în vârstă, cu ochelari rotunzi, ridică privirea dintr-un volum masiv. — Bună seara, Clara, spuse el calm. Ea se opri în loc. — Ne cunoaștem? — Într-un fel, da. Știu fiecare cititor care ne trece pragul.",
          "— Caut ceva anume? întrebă ezitantă. — Nu tu cauți, ci cartea te caută pe tine, răspunse el, făcându-i semn să-l urmeze printre rafturi. Pe măsură ce mergea, culorile cotoarelor păreau să se schimbe ușor, ca și cum ar fi reacționat la prezența ei.",
          "Se opri în fața unui raft îngust, unde o singură carte strălucea slab. Coperta era simplă, fără titlu, doar cu un simbol mic, asemănător cu o cheie. — Aceasta e a ta, spuse librarul. — Despre ce e? — Despre ceea ce ai putea fi, dacă ai înceta să fugi de tine.",
          "Când o deschise, nu găsi pagini tipărite, ci imagini în mișcare – fragmente din viața ei, momente în care făcuse un pas înapoi de teamă, clipe în care spusese „nu pot” în loc de „voi încerca”.",
          "Cu fiecare filă întoarsă, ceva în pieptul ei se strângea, apoi începea să se elibereze. Cartea nu o judeca, ci doar îi arăta posibilități pe care nu le văzuse. Într-un capitol, pleca în orașul în care visase mereu să studieze. În altul, își publica propriul roman.",
          "Când ajunse la ultima pagină, găsi un spațiu gol și un stilou prins de copertă. — Aici începi tu să scrii, spuse librarul din spatele ei. — Nu pentru mine, ci pentru tine. Librăria noastră nu dă povești gata scrise. Ea doar îți arată că poți fi autorul propriei vieți.",
          "Clara a ieșit din librărie cu cartea la piept și cu o senzație ciudată de ușurință. Când s-a întors să mai privească încă o dată firma de lemn, clădirea dispăruse. Rămăsese doar ploaia, mai blândă acum, și o decizie nouă care începea să prindă rădăcini în inima ei.",
        ],
      },

      11: {
        title: "Cafeneaua în care timpul se oprește",
        excerpt:
          "Există un loc unde, cât timp bei o cafea, timpul din afară nu trece deloc...",
        content: [
          "Luca descoperise cafeneaua din greșeală, într-o dimineață în care întârziase la muncă și încerca să scurteze drumul printr-o alee necunoscută. O firmă discretă, din metal, atârna deasupra unei uși de sticlă: „Cafeneaua Orei Pierdute”.",
          "Împins de curiozitate și de mirosul de cafea proaspăt măcinată, a intrat. În interior, lumina era caldă, plăcută, iar muzica de fundal era suficient de încetă pentru a nu deranja gândurile. Pe pereți, ceasuri de toate formele ticăiau liniștit.",
          "Barista, o femeie cu părul prins într-un coc lejer și cu un zâmbet blând, l-a întâmpinat cu un simplu: — Prima dată aici, nu-i așa? — Da, recunoscu Luca. — Atunci, îți recomand „Espresso Suspendat”. Merge bine cu deciziile grele.",
          "A zâmbit încurcat, dar a acceptat. S-a așezat la o masă lângă fereastră și a privit înapoi spre drum. Traficul era haotic ca de obicei, oamenii grăbiți, dar, pe măsură ce își aștepta cafeaua, simțea cum o liniște ciudată îl învăluie.",
          "Când ceșcuța a fost așezată în fața lui, barista i-a făcut cu ochiul: — Ține minte: cât timp bei, timpul de afară se oprește. Doar aici curge. — Cum adică? a râs Luca. — O să vezi, a răspuns ea simplu.",
          "A ridicat ceșcuța la buze și, din primul sorb, a simțit cum ceva se schimbă. Sunetele de afară se estompaseră, ca și cum cineva ar fi închis ușa între două lumi. Ceasurile de pe pereți continuau să ticăie, dar niciunul nu părea sincronizat cu altul.",
          "S-a cufundat în gânduri: la jobul pe care îl ura, la relațiile pe care le lăsase să se stingă, la visele puse „pe mai târziu”. Pentru prima dată după mult timp, nu se simțea alergat de nimic. Nici de termene limită, nici de ceasul de la încheietură.",
          "Când a terminat cafeaua, a privit instinctiv la ceasul de la mână. 08:17. Ora la care intrase în cafenea. Confuz, s-a uitat pe geam. Oamenii de afară se mișcau exact ca înainte. Mașinile erau în aceleași poziții. Ca și cum timpul ar fi stat pe loc.",
          "— Ți-am spus, spuse barista, sprijinindu-se de tejghea. — La noi, primești o oră doar pentru tine. O oră în care să gândești, să simți, să-ți amintești cine ești, fără să pierzi nimic „acolo afară”.",
          "Luca a rămas mult timp în prag, după ce a plătit. Știa că, din punct de vedere logic, totul era imposibil. Dar, în piept, simțea recunoștință. Se simțea mai ușor, mai clar. Data viitoare când se va simți copleșit, știa exact unde va veni. Cafeneaua în care timpul se oprește nu era un loc de fugit din realitate, ci unul unde să înveți cum să te întorci în ea altfel.",
        ],
      },

      12: {
        title: "Orașul care apare doar pe hartă",
        excerpt:
          "Pe GPS, un orășel necunoscut apărea între două localități familiare, dar în realitate nimeni nu îl găsise vreodată...",
        content: [
          "Mara și Vlad erau în drum spre mare când, plictisiți de autostradă, au decis să aleagă ruta „scenică”. Vlad a mărit harta pe GPS și a observat ceva ciudat: între două orașe pe care le cunoștea bine, apărea un orășel mic, numit simplu „Luminia”.",
          "— Ai auzit vreodată de Luminia? a întrebat el. Mara a ridicat din umeri. — Niciodată. — Uite, există și drum direct până acolo, spuse el, arătând cu degetul. Curioși, au urmat indicațiile. Drumul i-a scos de pe șoseaua principală, prin sate liniștite și câmpuri nesfârșite.",
          "După aproape o oră, GPS-ul insista că se apropiau de destinație. Dar în fața lor nu era niciun oraș, nicio clădire. Doar un câmp imens, cu iarbă înaltă, mișcându-se leneș în bătaia vântului. — Cred că sistemul are o eroare, zise Mara.",
          "Și totuși, pe ecran, un punct albastru clipitoare era exact „în centrul” orașului Luminia. Atunci au văzut indicatorul: un stâlp vechi de metal, pe care scria, abia vizibil, „Bine ați venit”. Fără nume de localitate, fără altceva.",
          "Cum au coborât din mașină, semnalul la telefon a dispărut. Harta a rămas înghețată, cu aceeași imagine a unui oraș invizibil. Aerul avea o liniște prea densă, ca înaintea unei furtuni. — Poate e doar un câmp cu fundații vechi, zise Vlad, încercând să pară calm.",
          "Au început să meargă printre ierburile înalte. După câțiva pași, pământul s-a schimbat. Din iarbă au început să răsară alei de piatră, contururi de străzi, bănci ruginite. Apoi, ca și cum cineva ar fi reglat un canal, clădirile au început să se contureze din aerul dens.",
          "În câteva secunde, în jurul lor se înălța un oraș complet: clădiri vechi, felinare, vitrine de magazine, o fântână în piața centrală. Totul părea perfect real, dar ușor translucid, ca o reflexie într-un geam.",
          "Pe o bancă, un bătrân hrănea porumbei invizibili. — Bun venit în Luminia, spuse, fără să-i privească. — Unde... suntem? abia reuși Mara să întrebe. — Într-un loc pe care oamenii l-au uitat, dar pe care hărțile nu l-au lăsat să dispară.",
          "Au aflat că Luminia fusese, cândva, un oraș mic, plin de viață, dar oamenii plecaseră, rând pe rând, în căutarea unor oportunități mai mari. Când ultimul locuitor a părăsit orașul, acesta a încetat să mai existe pe hartă fizic, dar a rămas prins în memoria drumurilor și a poveștilor neterminate.",
          "— De ce putem noi să-l vedem? a întrebat Vlad. — Pentru că, la fel ca orașul acesta, și voi sunteți între două drumuri, răspunse bătrânul. — Și pentru că încă nu v-ați hotărât încotro să mergeți cu adevărat. Luminia apare doar celor care au nevoie să se oprească și să-și amintească de ce au pornit la drum.",
          "Când au plecat, orașul s-a estompat în spatele lor, revenind la forma de câmp liniștit. Pe GPS, punctul albastru continua să înainteze. Iar, pentru prima dată după mult timp, Mara și Vlad știau exact unde voiau să ajungă – nu doar cu mașina, ci și cu viețile lor.",
        ],
      },

      13: {
        title: "Jurnalul necitit",
        excerpt:
          "Un jurnal găsit într-un anticariat pare să știe mai multe despre viața ta decât tu însuți...",
        content: [
          "Anticariatul mirosea a hârtie veche, lemn umed și timp. Alex rătăcea fără țintă printre rafturi, atingând din când în când coperțile prăfuite. Nu căuta nimic anume. Sau poate căuta ceva ce nu știa numi.",
          "Un jurnal cu copertă de piele maro, legat cu o panglică subțire, i-a atras privirea. Nu avea titlu, nici autor. Doar un mic simbol în colțul din dreapta jos – un cerc străpuns de o linie, ca un fel de ceas fără limbi.",
          "— Cât costă? a întrebat, ducând jurnalul la tejghea. Vânzătorul, un dom bătrân cu mustață albă, l-a privit lung. — Pentru tine, nimic. Dar ține minte: odată ce îl deschizi, nu vei mai putea pretinde că nu ai știut.",
          "Alex a râs, crezând că e doar o replică de anticariat. A luat jurnalul acasă și l-a așezat pe birou. Câteva zile a evitat să-l deschidă, ocupându-se de orice altceva. Dar, într-o seară târzie, a cedat.",
          "Pe prima pagină, cu un scris ordonat, era notată o dată: cu exact zece ani în urmă. Sub ea, rânduri de text descriau o zi ploioasă în care „autorul” se simțise blocat, fără direcție, plimbându-se prin oraș doar ca să scape de propriile gânduri.",
          "Pasajul descria, în detaliu, un anticariat mic, o carte cumpărată din impuls și senzația că acel obiect avea să schimbe ceva. Alex simți cum i se strânge stomacul. Fusese, practic, aceeași zi prin care trecuse el acum.",
          "A întors pagina. Următoarea însemnare descria o ceartă violentă cu un prieten apropiat, cuvinte spuse la nervi și tăceri care au durat ani. Detaliile erau atât de precise, încât Alex simți că cineva îi răsfoiește propriile amintiri.",
          "Cu fiecare pagină, jurnalul părea să înainteze în timp, descriind momente din viața lui – decizii pe care le amânase, oportunități ratate, frici neadresate. Nu era doar un jurnal. Era o oglindă a tuturor lucrurilor pe care le lăsese nespuse sau netrăite.",
          "La un moment dat, textul se opri brusc. Ultimele rânduri păreau incomplete, ca și cum cineva ar fi fost întrerupt la mijlocul unei fraze. Apoi, paginile următoare erau complet albe. Alex a simțit un impuls ciudat de a lua un pix.",
          "— Continuă tu, parcă auzea vocea vânzătorului. — Acesta e punctul în care nu ai mai ales. Acum trebuie să o faci. Cu mâna tremurândă, Alex a început să scrie. Nu despre trecut, ci despre ce ar vrea să devină următoarele capitole ale vieții lui.",
          "Dimineața, când s-a întors la anticariat să caute explicații, magazinul nu mai era. În locul lui era un spațiu gol, cu geamuri acoperite de praf. Doar reflexia lui în sticlă îl privea înapoi, ținând încă jurnalul necitit complet – pentru că restul urma să fie scris.",
        ],
      },

      14: {
        title: "Steaua căzută în grădină",
        excerpt:
          "Într-o noapte de vară, o stea cade direct în grădina unui băiat care nu mai credea în dorințe...",
        content: [
          "David stătea întins pe iarbă, cu mâinile sub cap, privind cerul nopții. Stelele îl fascinaseră când era mic, dar, cu timpul, deveniseră doar puncte reci, departe, fără nicio legătură reală cu viața lui.",
          "— Îți mai pui dorințe? îl întrebase sora lui, cu câteva seri în urmă. El ridicase din umeri. — Pentru ce? Nu se întâmplă oricum nimic. De data asta, însă, cerul părea mai clar ca niciodată, iar aerul avea o liniște aparte.",
          "De nicăieri, o dârză de lumină tăie bolta, mult mai aproape decât orice „stea căzătoare” văzută vreodată. În loc să dispară la orizont, se prăbuși, cu un sunet abia auzit, chiar în capătul grădinii.",
          "David se ridică deodată, cu inima bătându-i în piept. Alergă printre tufele de trandafiri până la locul impactului. Acolo, printre firele de iarbă arse ușor, se afla o sferă mică de lumină, palpitând ca un glob de sticlă în care pulsează o inimă.",
          "Când întinse mâna, lumina se strânse într-un punct, apoi se deschise, dezvăluind o formă umană minusculă, alcătuită din praf de stele. — În sfârșit, ai privit în sus, spuse o voce subțire, dar clară. — Cine... ce ești? bâigui David.",
          "— Sunt o stea rătăcită, răspunse creatura, plutind la nivelul ochilor lui. — Ne chemăm unii pe alții de fiecare dată când cineva renunță la dorințe. Pentru că dorințele ne cer să existăm. Fără ele, ne stingem.",
          "David râse nervos. — Eu nu mai cred în dorințe de mult timp. — Știu, zise steaua. — De aceea am căzut aici. Ca să-ți arăt că nu e vorba despre a crede în magie, ci despre a-ți recunoaște ceea ce îți dorești cu adevărat.",
          "Steaua îi atinse fruntea și, pentru o clipă, tot ceea ce își dorise vreodată trecu prin mintea lui ca un șuvoi: zile în care voia să-și ceară scuze cuiva, seri în care visa să cânte pe o scenă, momente în care ar fi vrut doar să spună „nu” și să aleagă alt drum.",
          "— Dorințele neîmplinite nu dispar, spuse steaua. — Ele doar se adună în locuri greu de atins în noi. Tu poți alege: să le lași acolo sau să faci, începând de mâine, un pas mic spre una dintre ele.",
          "Dimineața, în locul unde căzuse steaua, rămăsese doar un mic cerc de iarbă arsă și un sentiment ciudat de claritate. David nu a devenit brusc un optimist convins. Dar, în ziua aceea, și-a sunat un vechi prieten cu care nu mai vorbise de ani. A doua zi, a scos chitara de sub pat.",
          "Nu a spus nimănui despre steaua căzută. Dar, în unele nopți, când cerul era senin, o lumină anume părea să-i facă cu ochiul. Iar el, de data asta, nu mai privea în altă parte.",
        ],
      },
    },

    profilePage: {
      info: {
        name: "Nume",
        email: "Email",
        changePasswordTitle: "Schimbă Parola",
        currentPassword: "Parola curentă",
        newPassword: "Parolă nouă",
        confirmPassword: "Confirmă parola",
        changePasswordBtn: "Schimbă Parola",
        logout: "Deconectare",
        errorMismatch: "Parolele nu se potrivesc",
        successChanged: "Parola a fost schimbată cu succes",
      },
    },

    upcomingPage: {
      hero: {
        badge: "În Curând",
        title: "Evoluția Platformei Noastre",
        description:
          "Descoperă îmbunătățirile planificate care vor face experiența ta de lectură și mai plăcută, pas cu pas.",
        button: "Vezi Planurile Noastre",
      },
      featuresTitle: "Funcționalități Viitoare ✨",
      features: [
        {
          icon: "🔔",
          title: "Sistem de Notificări",
          date: "T2 2026",
          description:
            "Primește alerte personalizate pentru articole noi din categoriile tale preferate, direct în browser.",
        },
        {
          icon: "⭐",
          title: "Articole Favorite",
          date: "T3 2026",
          description:
            "Salvează și organizează articolele preferate în colecții personalizate pentru acces rapid.",
        },
        {
          icon: "📊",
          title: "Statistici de Lectură",
          date: "T4 2026",
          description:
            "Urmărește-ți progresul de lectură, timpul petrecut și articolele citite într-un dashboard personalizat.",
        },
        {
          icon: "🎨",
          title: "Teme Personalizabile",
          date: "T1 2027",
          description:
            "Alege din multiple teme de culori și stiluri de font pentru o experiență de lectură personalizată.",
        },
        {
          icon: "💾",
          title: "Mod Offline",
          date: "T2 2027",
          description:
            "Descarcă articolele pentru a le citi offline, perfect pentru călătorii sau zone fără internet.",
        },
        {
          icon: "🔍",
          title: "Căutare Avansată",
          date: "T3 2027",
          description:
            "Filtrare inteligentă după categorie, dată, autor și cuvinte cheie pentru găsirea rapidă a conținutului.",
        },
      ],
      timelineTitle: "Planul Nostru de Dezvoltare 🗺️",
      timeline: [
        {
          year: "2026",
          quarter: "T1",
          title: "Îmbunătățiri UI/UX",
          description:
            "Optimizare continuă a interfeței cu feedback de la comunitate, animații mai fluide și navigare mai intuitivă.",
          status: "inProgress",
        },
        {
          year: "2026",
          quarter: "T2",
          title: "Sistem de Notificări Push",
          description:
            "Implementare notificări în browser pentru articole noi și actualizări importante din categoriile tale preferate.",
          status: "upcoming",
        },
        {
          year: "2026",
          quarter: "T3",
          title: "Funcție Favorite și Colecții",
          description:
            "Salvează articolele preferate și organizează-le în colecții personalizate cu taguri și note.",
          status: "planned",
        },
        {
          year: "2026",
          quarter: "T4",
          title: "Dashboard Statistici Personale",
          description:
            "Vizualizează statistici despre activitatea ta: articole citite, timp de lectură și categorii preferate.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T1",
          title: "Teme și Personalizare",
          description:
            "Multiple teme de culori, stiluri de font și opțiuni de layout pentru personalizarea experienței de lectură.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T2",
          title: "Mod Offline și PWA",
          description:
            "Transformare în Progressive Web App cu posibilitatea de a salva articole pentru lectură offline.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T3",
          title: "Căutare și Filtrare Avansată",
          description:
            "Motor de căutare îmbunătățit cu filtre multiple, sugestii automate și rezultate relevante instantanee.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T4",
          title: "Comentarii și Interacțiune",
          description:
            "Sistem de comentarii moderat, aprecieri și posibilitatea de a interacționa cu autorii articolelor.",
          status: "planned",
        },
      ],
      cta: {
        title: "Susține Dezvoltarea Platformei",
        description:
          "Abonează-te și ajută-ne să implementăm aceste funcționalități mai repede. Fiecare abonament susține dezvoltarea continuă a platformei.",
        button: "Abonează-te Acum",
      },
    },

    aboutPage: {
      hero: {
        badge: "Despre Noi",
        title: "Descoperă Povestea Noastră",
        description:
          "O platformă dedicată pasionaților de lectură, construită cu grijă pentru a oferi conținut de calitate și o experiență plăcută.",
        primaryButton: "Începe Acum",
        secondaryButton: "Află Mai Mult",
      },
      infoCardsTitle: "De Ce Să Ne Alegi",
      infoCards: [
        {
          icon: "📚",
          title: "Conținut Selectat cu Grijă",
          description:
            "Articole atent alese și verificate, care acoperă subiecte relevante din tehnologie, știință, cultură și societate.",
        },
        {
          icon: "🎯",
          title: "Focus pe Calitate",
          description:
            "Prioritizăm calitatea în locul cantității, oferind conținut care merită cu adevărat timpul tău.",
        },
        {
          icon: "💡",
          title: "Dezvoltare Continuă",
          description:
            "Platformă în evoluție constantă, îmbunătățită pas cu pas bazat pe feedback-ul comunității.",
        },
        {
          icon: "🤝",
          title: "Comunitate Autentică",
          description:
            "O comunitate în creștere de cititori care apreciază jurnalismul de calitate și dezbaterile constructive.",
        },
      ],
      roadmapTitle: "Călătoria Noastră 🚀",
      roadmap: [
        {
          year: "2026",
          title: "Lansarea Platformei",
          description:
            "Am creat o platformă simplă și funcțională, dedicată distribuției de conținut de calitate, cu accent pe experiență de utilizare plăcută.",
        },
        {
          year: "2027",
          title: "Îmbunătățiri Continue",
          description:
            "Dezvoltăm noi funcționalități bazate pe feedback-ul comunității: sistem de notificări, favorite și statistici personale.",
        },
        {
          year: "2028",
          title: "Extindere și Personalizare",
          description:
            "Introducem teme personalizabile, mod offline și căutare avansată pentru o experiență optimizată.",
        },
        {
          year: "2029",
          title: "Comunitate Activă",
          description:
            "Construim un spațiu de interacțiune prin sistem de comentarii moderat și funcții sociale responsabile.",
        },
        {
          year: "2030",
          title: "Maturizare și Stabilitate",
          description:
            "Consolidăm platforma cu funcționalități mature, menținând un echilibru între inovație și stabilitate.",
        },
      ],
      cta: {
        title: "Alătură-te Călătoriei Noastre",
        description:
          "Fii parte din comunitatea noastră și primește actualizări regulate, conținut exclusiv și acces la noile funcționalități pe măsură ce le dezvoltăm.",
        button: "Abonează-te Acum",
        secondaryButton: "Contactează-ne",
      },
    },

    storyNotFound: {
      title: "Poveste Negăsită",
      description:
        "Povestea pe care încerci să o accesezi nu există sau a fost ștearsă.",
      backButton: "Înapoi la toate poveștile",
    },
    storyPagination: {
      prev: "Anterior",
      next: "Următorul",
      pageInfo: "Pagina {{current}} din {{total}}",
    },
    storyContent: {
      noContent:
        "Niciun conținut suplimentar disponibil pentru această poveste.",
    },

    hero: {
      badge: "Descoperă Povești",
      title: "Descoperă Povești care Te Inspiră",
      subtitle:
        "Explorează o colecție curată de povești captivante din diverse genuri și categorii. Găsește următoarea ta lectură favorită.",
      alt: "Fată citind o carte",
      cta: "Explorează Poveștile",
      secondaryCta: "Află Mai Mult",
    },
    adFree: {
      badge: "100% Fără Reclame",
      title: "Citește Fără Distrageri. Focalizează-te pe Povești.",
      description:
        "Bucură-te de o experiență de lectură pură, fără reclame intruzive, pop-up-uri sau întreruperi. Doar tu și poveștile tale preferate.",
      benefits: ["Zero reclame", "Viteză maximă", "Privacy garantat"],
      button: "Înregistrează-te Acum",
      trust: "✓ Plată securizată 100% • Anulare oricând",
    },

    featuredBadge: "Povești Recomandate",
    featuredStories: "Descoperă Povești Captivante",
    discoverAmazingStories:
      "Explorează colecția noastră curată de povești extraordinare",
    viewAllStories: "Vezi Toate Poveștile",

    footerText: "MagicStories. Toate drepturile rezervate.",
    allStoriesTitle: "Toate Poveștile",
    noStoriesFound: "Nicio poveste găsită...",
    usingLocalData: "Se folosesc date locale.",
    allCategories: "Toate",
    accessLevels: {
      free: "Gratuit",
      basic: "Basic",
      premium: "Premium",
    },
    story: "Poveste",

    type: "Tip",
    noCategory: "Fără categorie",
    storyPremiumTitle: "Poveste Exclusivă pentru Membri Premium",
    storyPremiumDescription:
      "Această poveste este disponibilă doar pentru abonații Premium.",
    storyPremiumButton: "Devino Membru Premium",
    storyBasicPreview: "Aceasta este doar o previzualizare a poveștii.",
    storyBasicButton: "Continuă citirea cu planul Basic sau Premium 💫",
    backToAllStories: "Înapoi la toate poveștile",
    commentsTitle: "Comentarii",
    noComments: "Niciun comentariu încă.",
    commentNamePlaceholder: "Numele Tău",
    commentTextPlaceholder: "Scrie un comentariu...",
    addCommentButton: "Adaugă Comentariu",
    welcome: "Bun venit!",
    login: "Autentificare",
    signup: "Înregistrare",
    readMore: "Continuă citirea",
    category: "Categorie",
    storyLocked:
      "Această poveste este disponibilă doar pentru membri {{plan}}.",
    subscribeNow: "Abonează-te acum",
  },
};
// IMPORTANT: păstrează obiectul stories, hero, aboutPage, upcomingPage etc.
// (poți muta stories ulterior în fișiere separate dacă vrei)

export default ro;
