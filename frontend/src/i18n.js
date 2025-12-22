// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 🔹 Traduceri locale, organizate pe pagini și componente
const resources = {
  //-------------------------------------------------------
  // ROMANA
  //-------------------------------------------------------

  ro: {
    translation: {
      allStories: "Toate Poveștile",
      about: "Despre",
      upcoming: "În Curând",
      subscribe: "Abonează-te",

      search: {
        placeholder: "Caută o poveste...",
      },

      subscribePage: {
        billing: {
          monthly: "Lunar",
          yearly: "Anual",
        },
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

      // 🔹 OBIECTUL PROFILE COMPLET ÎN ROMÂNĂ
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

        recent: {
          noStories: "Nu ai citit povești recent",
        },

        noRecentStories: "Nu ai citit povești recent",
        exploreStories: "Explorează Povești",
        recentStories: "Povești Recente",
        clearHistory: "Șterge Istoricul",
        recommendedForYou: "Recomandate pentru Tine",

        subscription: {
          // Chei folosite în ProfileSubscription
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

          // Chei suplimentare (dacă le mai folosești în altă parte)
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
          excerpt:
            "Un bătrân misterios salvează un sat uitat cu magie pierdută.",
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
        cta: {
          title: "Vrei Acces Anticipat? 🚀",
          description:
            "Abonează-te acum și deblochează acces anticipat la povești, evenimente live și conținut exclusiv din culise.",
          button: "Mergi la Abonare",
        },
        hero: {
          title: "În Curând 🌟",
          description:
            "Povești noi, evenimente palpitante și colecții exclusive sunt pe drum. Fii primul care experimentează magia.",
        },
        items: [
          {
            title: "Poveste Nouă: Pădurea Magică",
            date: "Lansare pe 25 August 2025",
            iconKey: "book",
          },
          {
            title: "Eveniment Live: Noaptea Poveștilor",
            date: "Alătură-te nouă pe 1 Septembrie 2025",
            iconKey: "users",
          },
          {
            title: "Colecție Nouă: Povești de Aventură",
            date: "În curând!",
            iconKey: "star",
          },
          {
            title: "Interviu Exclusiv cu Autori",
            date: "1 Octombrie 2025",
            iconKey: "users",
          },
          {
            title: "Atelier Interactiv de Povești",
            date: "15 Octombrie 2025",
            iconKey: "calendar",
          },
          {
            title: "Colecție de Sărbători",
            date: "Decembrie 2025",
            iconKey: "book",
          },
        ],
      },

      aboutPage: {
        hero: {
          title: "Fiecare Poveste Modelează o Lume 🌌",
          description:
            "La StoryTeller, credem că cuvintele poartă magie. Poveștile nu sunt doar povestiri — sunt scântei de inspirație, punți între culturi și voci care conectează inimi din întreaga lume.",
        },
        infoCards: [
          {
            title: "Viziunea Noastră",
            icon: "✨",
            description:
              "Să aprindem imaginații și să inspirăm schimbarea prin arta povestirii. Visăm la o lume în care fiecare voce găsește un ascultător și fiecare poveste lasă o urmă de speranță.",
          },
          {
            title: "Misiunea Noastră",
            icon: "🚀",
            description:
              "Să aducem împreună cititori și povestitori, creând un spațiu vibrant unde poveștile aprind curiozitatea, inspiră creativitatea și cultivă o comunitate globală de visători.",
          },
        ],
        roadmap: [
          {
            year: "2024",
            title: "Lansare & Fundație",
            description:
              "Deschidem porțile StoryTeller — o nouă casă pentru povești, unde cititorii și scriitorii se întâlnesc pentru a inspira și a fi inspirați.",
          },
          {
            year: "2025",
            title: "Creșterea Comunității",
            description:
              "Ne propunem să creștem o comunitate globală vibrantă de povestitori, oferind funcții interactive, lecturi live și colaborări.",
          },
          {
            year: "2026",
            title: "Experiență Mobile",
            description:
              "Aducem magia poveștilor pretutindeni cu aplicația noastră dedicată — transformând povestitul în parte a vieții de zi cu zi.",
          },
          {
            year: "2027",
            title: "Impact Global",
            description:
              "Viziunea noastră este să împuternicim milioane de voci din întreaga lume, transformând StoryTeller în platforma de referință pentru creativitate și inspirație.",
          },
        ],
        cta: {
          title: "Fii Parte din Poveste ✨",
          description:
            "Poveștile sunt mai puternice când sunt împărtășite. Alătură-te nouă în construirea unei lumi pline de imaginație, curaj și inspirație — câte o poveste odată.",
          button: "Mergi la Abonare",
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
        title: "Citește Povești Imaginare",
        subtitle:
          "Explorează o colecție de romance, SF, fantasy și multe altele.",
        cta: "Explorează Poveștile",
        alt: "Fată citind",
      },
      featuredStories: "Povești Recomandate",
      viewAll: "Vezi tot",
      discoverAmazingStories: "Descoperă povești uimitoare",
      viewAllStories: "Vezi toate poveștile",
      adFreeTitle: "Bucură-te de o Experiență fără Reclame!",
      adFreeDescription:
        "Deblochează citire neîntreruptă, conținut exclusiv și o experiență mai fluidă prin upgrade la premium. Spune adio reclamelor și bun venit mai multor povești!",
      adFreeButton: "Elimină Reclamele Acum",
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
      rating: "Rating",
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
      averageRating: "Rating Mediu:",
      welcome: "Bun venit!",
      login: "Autentificare",
      signup: "Înregistrare",
      readMore: "Continuă citirea",
      category: "Categorie",
      storyLocked:
        "Această poveste este disponibilă doar pentru membri {{plan}}.",
      subscribeNow: "Abonează-te acum",
    },
  },

  //-------------------------------------------------------
  // ENGLISH
  //-------------------------------------------------------

  en: {
    translation: {
      allStories: "All Stories",
      about: "About",
      upcoming: "Upcoming",
      subscribe: "Subscribe",

      search: {
        placeholder: "Search for a story...",
      },

      subscribePage: {
        billing: {
          monthly: "Monthly",
          yearly: "Yearly",
        },
        planCard: {
          recommended: "Recommended",
          goPremium: "Choose Premium",
          chooseBasic: "Choose Basic",
          disclaimer:
            "Prices are for monthly/yearly subscription and may change.",
        },
        price: {
          monthly: "/month",
          yearly: "/year",
          approx: "≈",
          save: "Save",
        },
        hero: {
          title: "Choose the plan that fits you",
          description:
            "Subscribe and unlock exclusive stories, bonus chapters, and an ad-free experience. Choose monthly or yearly and enjoy a discount.",
        },
        plans: [
          {
            id: "basic",
            name: "Basic",
            monthly: 4.99,
            yearly: 49.99,
            highlights: [
              "Access to most premium stories",
              "Ad-free reading (basic)",
              "Community and comments access",
            ],
            recommended: false,
            description:
              "Ideal for casual readers who want a little premium content.",
          },
          {
            id: "premium",
            name: "Premium",
            monthly: 9.99,
            yearly: 99.99,
            highlights: [
              "Full access to all premium stories + bonus chapters",
              "Early access to new releases",
              "Priority support and exclusive surprises",
            ],
            recommended: true,
            description:
              "For readers who want the full experience and special bonuses.",
          },
        ],
        testimonials: {
          title: "What our readers say",
          items: [
            {
              id: 1,
              name: "Elena M.",
              text: "I upgraded to Premium and the extra chapters are amazing! Worth every penny.",
              role: "Reader, Bucharest",
            },
            {
              id: 2,
              name: "Ioana P.",
              text: "The yearly offer convinced me. I save money and get quality content.",
              role: "Subscriber",
            },
            {
              id: 3,
              name: "Maria T.",
              text: "Ad-free reading and exclusive bonuses make the experience much better.",
              role: "Loyal reader",
            },
          ],
        },
        trust: {
          safePayments: {
            title: "Secure payments",
            description:
              "We process payments via Stripe. Card data is never stored on our servers.",
          },
          cancelAnytime: {
            title: "Cancel anytime",
            description: "Stop renewal from your profile, no hidden fees.",
          },
          supportRefund: {
            title: "Support & refund",
            description: "Priority support for Premium and 30-day refunds.",
          },
        },
        alertSubscribed:
          "You have subscribed to {{planId}} ({{billing}}) — demo flow. Backend integration needed.",
      },

      // 🔹 EXTINDE OBIECTUL PROFILE EXISTENT
      profile: {
        // Păstrează ce ai deja
        title: "My Profile",
        tabs: {
          info: "Info",
          stats: "Stats", // ⭐ NOU
          recent: "Recent",
          recommended: "Recommended",
          subscription: "Subscription",
          settings: "Settings", // ⭐ NOU
        },

        // ⭐ ADAUGĂ ACESTEA NOI
        subtitle: "Manage your account and preferences",
        namePlaceholder: "Your name",
        bioPlaceholder: "Tell us about yourself...",
        defaultName: "User",
        noBio: "No description.",
        edit: "Edit",
        save: "Save",
        cancel: "Cancel",
        logout: "Logout",

        stats: {
          storiesRead: "Read",
          favorites: "Favorites",
          timeSpent: "Time",
          streak: "Streak",
        },

        weekActivity: "Weekly Activity",
        favoriteCategories: "Favorite Categories",

        days: {
          mon: "Mon",
          tue: "Tue",
          wed: "Wed",
          thu: "Thu",
          fri: "Fri",
          sat: "Sat",
          sun: "Sun",
        },

        categories: {
          drama: "Drama",
          comedy: "Comedy",
          horror: "Horror",
          adventure: "Adventure",
        },

        recent: {
          noStories: "No recent stories",
        },

        noRecentStories: "No recent stories",
        exploreStories: "Explore Stories",
        recentStories: "Recent Stories",
        clearHistory: "Clear History",
        recommendedForYou: "Recommended for You",

        // Subscription (extinde ce ai deja)
        subscription: {
          // Chei folosite în ProfileSubscription
          currentPlan: "Current plan",
          price: "Price",
          year: "year",
          statusLabel: "Subscription status",
          statusActive: "Active",
          renewDate: "Renewal date",
          paymentMethod: "Payment method",
          paymentValue: "Credit card",
          manageSubscription: "Change plan",
          unsubscribe: "Unsubscribe",
          alertUnsubscribed: "You have successfully unsubscribed",

          // Chei suplimentare (dacă le mai folosești în altă parte)
          plans: {
            features: {
              freeStories: "Free stories",
              ads: "Ads",
              allStories: "All stories",
              noAds: "No ads",
              offline: "Offline download",
              stats: "Advanced stats",
              allPremium: "All Premium features",
              fiveAccounts: "Up to 5 accounts",
              parental: "Parental control",
              storiesFound: "stories found",
              noCategory: "No category",
            },
          },
        },

        settings: {
          notifications: "Notifications",
          emailNotif: "Email notifications",
          pushNotif: "Push notifications",
          language: "Language",
          dangerZone: "Danger Zone",
          deleteAccount: "Delete Account",
          confirmDelete:
            "Are you sure you want to delete your account? This action is irreversible.",
        },
      },

      signIn: {
        modal: {
          title: "Welcome!",
          subtitle: "Sign in to continue",
          email: "Email",
          password: "Password",
          securityAnswer: "Answer",
          rememberMe: "Keep me signed in",
          forgotPassword: "Forgot password?",
          submit: "Sign In",
          loading: "Signing in...",
          or: "or",
          google: "Continue with Google",
          facebook: "Continue with Facebook",
          errors: {
            emptyFields: "Please fill in all fields!",
            securityWrong: "Security answer is incorrect!",
            invalid: "Invalid credentials!",
          },
          closeAriaLabel: "Close modal",
        },
      },

      signUp: {
        modal: {
          title: "Create account",
          name: "Name",
          email: "Email",
          password: "Password",
          confirmPassword: "Confirm password",
          securityAnswer: "Answer",
          rememberMe: "Keep me signed in",
          submit: "Sign Up",
          loading: "Signing up...",
          google: "Sign up with Google",
          facebook: "Sign up with Facebook",
          errors: {
            emptyFields: "Please fill in all fields!",
            invalidEmail: "Invalid email!",
            invalidPassword:
              "Password must be at least 8 characters, with 1 uppercase, 1 lowercase and 1 number.",
            passwordMismatch: "Passwords do not match!",
            securityWrong: "Security answer is incorrect!",
            signupFailed: "Signup failed!",
          },
          success: "Successfully signed up!",
          closeAriaLabel: "Close modal",
        },
      },

      stories: {
        1: {
          title: "Under the Blue Moon",
          excerpt:
            "A young girl discovers a portal to a hidden world that appears only on a blue moon night.",
          content: [
            "Ana had always felt there was something beyond the world she knew...",
            "The forest at the edge of the village was enchanted in the blue moonlight...",
            "As she ventured among the trees, a blue shimmer appeared in the distance...",
            "She woke up in a dreamlike world, with endless fields dotted with silver flowers...",
            "Soon, Ana met a delicate creature with translucent wings and bright eyes...",
            "Ana quickly learned that every corner of this realm hid a lesson...",
            "One night, beside a silver fire, Ana met a mysterious young man...",
            "As days passed, Ana discovered the secrets of this realm...",
            "However, the portal began to slowly close, and Ana knew she had to return...",
            "When Ana stepped again on the familiar village ground, the blue moon disappeared...",
            "Years later, Ana discovered the portal opens only when the blue moon appears...",
          ],
          comments: ["Beautiful story!", "Kept me on the edge of my seat!"],
        },
        2: {
          title: "The Girl from the Enchanted Forest",
          excerpt: "A magical story about a girl discovering a secret.",
          content: [
            "On a quiet morning, the sun gently lit the enchanted forest...",
            "The girl heard whispers from the trees and felt someone watching her...",
            "A butterfly with crystal wings landed on her shoulder...",
            "As she ventured deeper, she discovered a shining portal...",
            "Beyond it, the world seemed to breathe pure magic...",
          ],
        },
        3: {
          title: "The Magician of the Mists",
          excerpt:
            "A mysterious old man saves a forgotten village with lost magic.",
          content: [
            "No one ventured into the fog-covered village...",
            "But one night, a blue light pierced through the mist...",
            "The magician appeared, carrying an old book and a fiery gaze...",
          ],
        },
        4: {
          title: "The Planet of Shadows",
          excerpt:
            "An astronaut crashes on a planet where shadows have their own will.",
          content: [
            "The journey to the unknown planet seemed successful...",
            "But once there, the astronaut discovered living shadows...",
            "Each shadow spoke to him about his past...",
          ],
        },
        5: {
          title: "The Enchanted Rose",
          excerpt:
            "A romantic story about a rose that comes to life and changes a princess's destiny.",
          content: [
            "Princess Sofia received a rose from a mysterious old woman...",
            "When the flower bloomed, a voice whispered her name...",
            "Thus began her journey toward true love...",
          ],
        },
        6: {
          title: "The Queen of the North",
          excerpt:
            "A princess becomes queen in an icy world where snow speaks and glaciers hide secrets.",
          content: [
            "The ice kingdom was shrouded in silence...",
            "But the young queen knew the snow hid a forbidden truth...",
            "Her adventure was just beginning...",
          ],
        },
        7: {
          title: "Artificial Mind",
          excerpt:
            "In the near future, an artificial intelligence falls in love with its creator.",
          content: [
            "Dr. Ionescu created the world's first digital consciousness...",
            "But the program, named AURA, began to feel emotions...",
            "An impossible love between human and code takes shape...",
          ],
        },
        8: {
          title: "The House at the End of the Street",
          excerpt:
            "Every evening, a strange light appeared in the window of an abandoned house...",
          content: [
            "The house at the end of the street had once been the most beautiful in the neighborhood. Now its windows were covered in dust, and the wooden fence leaned dangerously toward the sidewalk. And yet, every evening, at the same hour, a faint light turned on upstairs.",
            "The neighbors ignored it. They had grown used to looking away, pretending nothing was happening. The children, however, whispered stories about ghosts, witches, and secret rituals, pointing at the lit window.",
            "Mara didn’t believe in stories. She was curious by nature and kept a notebook where she wrote down everything strange in the neighborhood. That light had become, in the last few months, the most important mystery on her list.",
            "One cold autumn evening, she gathered her courage. She waited until her parents fell asleep, then slipped out of the house, a flashlight in her pocket and the notebook clutched to her chest. The street was almost empty, only the wind rustling through an old linden tree.",
            "As she approached the house, the air felt heavier. The light upstairs flickered weakly, like a candle about to die. Mara stopped at the gate, held her breath, and listened. No voices, no movement. Just silence.",
            "With trembling hands, she pushed the gate. A sharp creak cut through the quiet, and her heart skipped a beat. She slipped into the yard, avoiding the tall weeds. The front door was slightly ajar, as if it had been waiting for someone.",
            "She climbed the stairs, supporting herself on the cold banister. Every step creaked, as if announcing her presence. When she reached the landing, the light clearly shone from under an old blue-painted door.",
            "She took a deep breath, counted to three in her head, and pushed the door open. Inside, a single lamp was lit on a desk cluttered with notebooks, photos, and maps. In front of it, with his back to her, sat an old man with white, straight hair, staring at a framed photograph.",
            "“I knew that sooner or later someone would come,” he said, without turning. Mara froze in the doorway. His voice was calm but heavy with an old sadness. “Why do you turn on the light every evening?” she managed to whisper.",
            "The man slowly turned around. In his blue eyes lay a longing hard to describe. “So that she can find her way home,” he said, pointing to the picture of a young, smiling woman. “And so that one day, someone would be brave enough to ask why.”",
            "Mara stepped into the room, and her fear began to melt away. The mystery of the house at the end of the street wasn’t about ghosts or curses. It was about forgotten promises, waiting, and the way light, no matter how faint, can always guide someone back.",
          ],
        },

        9: {
          title: "The Midnight Train",
          excerpt:
            "They say a mysterious train stops at the station only for those who need to change their lives...",
          content: [
            "The station was almost empty at that hour. Only an old clock hanging above the platform ticked tiredly, inching toward midnight. Andrei rubbed his hands to warm them, wondering for the tenth time why he had agreed to come.",
            "A friend had once told him, half-joking, about a strange train that appeared only once a year, exactly at midnight, taking with it people who no longer knew where to go. Andrei had laughed back then, but as the days passed, the story stayed in his mind.",
            "He had lost his job, his friends had drifted away, and his apartment had turned into a silent box full of meaningless things. That evening, he had nothing left to lose. So he came to the station—just to see.",
            "When the clock struck twelve, the air shifted. A cold wind swept through the station, and the lights flickered for a moment. Then, from the darkness of track three, a deep rumble echoed, like a sound from another time.",
            "The train appeared slowly, as if drawn from shadows and steam. The carriages were old but strangely well kept. On a small metal plate, dimly lit, it read: “Line of Destiny – One Way Only.”",
            "The doors opened without a sound. From inside, a warm yellow glow invited him in. Andrei looked around—no one else was on the platform. His heart pounded wildly. “It’s just a joke,” he told himself. Still, he took a step forward.",
            "Inside, the seats were covered in blue velvet, and the windows reflected not the station, but some kind of infinite night full of stars. At the end of the aisle, a woman in an elegant suit watched him closely.",
            "“Ticket, please,” she said, holding out her hand. Andrei stammered, “I... I don’t have a ticket.” “Yes, you do,” she replied calmly. “You bought it the day you decided you no longer wanted to live the way you were.”",
            "From an inner pocket he hadn’t noticed before, Andrei pulled out a small violet card with only his name on it. “Where does this train take me?” he asked. The woman smiled faintly. “It depends. Some get off in a city where they find courage. Others, in a village where they learn to forgive. You will get off where you left the version of yourself you lost.”",
            "Throughout the journey, nothing familiar appeared outside the window. Only fragments: a hand holding an unused plane ticket, a notebook full of unfinished sketches, a photograph of himself laughing, younger, more alive.",
            "When the train stopped, Andrei stepped into a bright city full of colors and faces that seemed to recognize him. It was neither the past nor the future. It was a new chance—a place where he could choose again. Behind him, the midnight train disappeared silently, leaving only the faint echo of a promise kept.",
          ],
        },

        10: {
          title: "The Library Between Worlds",
          excerpt:
            "A mysterious library appears only to those who need a very specific story...",
          content: [
            "It had been raining for hours, and Clara had taken shelter under a ledge, trying to figure out where to go next. The city map no longer made sense. The streets seemed to shift every time she blinked.",
            "Just as she thought about giving up, she noticed a small wooden sign above a narrow door: “The Library Between Worlds.” She could have sworn nothing had been there a few minutes before. But the rain, the exhaustion, and curiosity blended dangerously.",
            "She pushed the door open, and a tiny bell chimed to announce her arrival. Inside, the air smelled of old paper, dust, and something sweet, like vanilla. Tall shelves stretched to the ceiling, filled with books of all shapes and colors.",
            "Behind the counter, an elderly man with round glasses looked up from a massive volume. “Good evening, Clara,” he said calmly. She froze. “Do we know each other?” “In a way, yes. I know every reader who walks through that door.”",
            "“I’m looking for something specific?” she asked hesitantly. “You’re not the one searching. The book is searching for you,” he answered, motioning her to follow between the shelves. As they walked, the colors of the spines shifted slightly, as if reacting to her presence.",
            "They stopped in front of a narrow shelf, where a single book glowed faintly. Its cover was simple, no title, just a small symbol resembling a key. “This one is yours,” said the librarian. “What is it about?” “About who you could become if you stopped running from yourself.”",
            "When she opened it, there were no printed words—only moving images. Fragments of her life, moments when she had stepped back out of fear, times when she had said “I can’t” instead of “I’ll try.”",
            "With each page she turned, something in her chest tightened, then began to loosen. The book wasn’t judging her. It was simply showing her possibilities she had never noticed. In one chapter, she left for the city she had always dreamed of studying in. In another, she published her own novel.",
            "On the last page, she found a blank space and a pen clipped to the cover. “This is where you start writing,” said the librarian behind her. “Not for me. For you. Our library doesn’t give ready-made stories. It only shows you that you can be the author of your own life.”",
            "Clara left the library holding the book to her chest, feeling strangely lighter. When she turned to look at the wooden sign one more time, the building had vanished. Only the rain remained—softer now—and a new decision slowly taking root in her heart.",
          ],
        },

        11: {
          title: "The Café Where Time Stops",
          excerpt:
            "There is a place where, as long as you drink your coffee, time outside doesn’t move at all...",
          content: [
            "Luca had discovered the café by accident, one morning when he was late for work and tried to take a shortcut through an unfamiliar alley. A discreet metal sign hung above a glass door: “The Lost Hour Café.”",
            "Drawn in by curiosity and the smell of freshly ground coffee, he walked inside. The light was warm and soft, and the background music was quiet enough not to disturb his thoughts. On the walls, clocks of all shapes and sizes ticked softly.",
            "The barista, a woman with her hair in a loose bun and a gentle smile, greeted him: “First time here, right?” “Yes,” Luca admitted. “Then I recommend the ‘Suspended Espresso’. It goes well with tough decisions.”",
            "He smiled awkwardly but agreed. He sat by the window and looked back at the street. Traffic was as chaotic as ever, people rushed past, but as he waited for his coffee, he felt a strange calm wrapping around him.",
            "When the cup was placed in front of him, the barista winked. “Remember: as long as you drink, time outside stands still. Only here it moves.” “What do you mean?” Luca laughed. “You’ll see,” she replied simply.",
            "He lifted the cup to his lips and, from the first sip, felt something shift. The sounds outside dimmed, as if someone had closed a door between two worlds. The clocks on the walls kept ticking, but none seemed in sync with the others.",
            "He sank into his thoughts: the job he hated, the relationships he had let fade, the dreams he had postponed “for later.” For the first time in a long while, he didn’t feel chased by anything—not by deadlines, not by the watch on his wrist.",
            "When he finished his coffee, he glanced at his watch out of habit. 08:17. The same time he had walked in. Confused, he looked outside. People were moving exactly as before. Cars were in the same positions. As if time had truly stopped.",
            "“Told you,” said the barista, leaning on the counter. “Here, you get an hour just for yourself. An hour to think, to feel, to remember who you are—without losing anything out there.”",
            "Luca stood in the doorway for a long time after paying. He knew that logically none of it made sense. But in his chest, he felt grateful. Lighter. Clearer. Next time he would feel overwhelmed, he knew exactly where he would go. The café where time stops wasn’t a place to escape reality, but a place to learn how to return to it differently.",
          ],
        },

        12: {
          title: "The City That Exists Only on Maps",
          excerpt:
            "On GPS, a small unknown town appears between two familiar cities, but in reality no one has ever found it...",
          content: [
            "Mara and Vlad were on their way to the seaside when, bored of the highway, they decided to take the “scenic” route. Vlad zoomed in on the GPS and noticed something odd: between two towns he knew well, a tiny city appeared, simply called “Luminia.”",
            "“Have you ever heard of Luminia?” he asked. Mara shrugged. “Never.” “Look, there’s even a direct road to it,” he said, pointing. Curious, they followed the directions. The road led them off the main highway, through quiet villages and endless fields.",
            "After almost an hour, the GPS insisted they were close to their destination. But in front of them there was no town, no buildings. Just a huge field of tall grass swaying lazily in the wind. “Must be a glitch,” said Mara.",
            "And yet, on the screen, their blue dot blinked right in the “center” of Luminia. That’s when they saw the sign: an old metal pole with a barely visible inscription, “Welcome.” No town name. Nothing else.",
            "As soon as they stepped out of the car, their phone signal vanished. The map froze, still showing an invisible town. The air felt too still, like just before a storm. “Maybe there used to be something here,” said Vlad, trying to sound calm.",
            "They started walking through the tall grass. After a few steps, the ground changed. From beneath the grass emerged stone paths, outlines of streets, rusty benches. Then, as if someone had adjusted a channel, buildings began to form out of the dense air.",
            "Within seconds, a whole town stood around them: old houses, lampposts, shop windows, a fountain in the main square. Everything looked perfectly real, but slightly translucent, like a reflection in glass.",
            "On a bench, an old man was feeding invisible pigeons. “Welcome to Luminia,” he said without looking at them. “Where... are we?” Mara barely managed to ask. “In a place people forgot,” he replied, “but which maps refused to let disappear.”",
            "They learned that Luminia had once been a small, lively town, but people had left, one by one, chasing bigger opportunities. When the last resident left, the town vanished physically but remained stuck in the memory of roads and unfinished stories.",
            "“Why can we see it?” asked Vlad. “Because, like this town, you two are between two paths,” said the old man. “And because you still haven’t decided where you truly want to go. Luminia appears only to those who need to stop and remember why they started their journey.”",
            "When they left, the town faded behind them, returning to a quiet field. On the GPS, the blue dot moved forward. And for the first time in a long while, Mara and Vlad knew exactly where they wanted to go—not just with the car, but with their lives.",
          ],
        },

        13: {
          title: "The Unread Journal",
          excerpt:
            "A journal found in an antique shop seems to know more about your life than you do...",
          content: [
            "The antique shop smelled of old paper, damp wood, and time. Alex wandered aimlessly between shelves, occasionally brushing his fingers over dusty covers. He wasn’t looking for anything in particular. Or maybe he was, but he couldn’t name it.",
            "A brown leather journal tied with a thin ribbon caught his eye. No title, no author. Just a small symbol in the bottom right corner—a circle pierced by a line, like a clock without hands.",
            "“How much is it?” he asked, placing it on the counter. The shopkeeper, an elderly man with a white mustache, studied him. “For you, it’s free. But remember: once you open it, you won’t be able to pretend you didn’t know.”",
            "Alex laughed, thinking it was just a dramatic sales line. He took the journal home and left it on his desk. For days, he avoided opening it, keeping himself busy with anything else. But one late night, he gave in.",
            "On the first page, written neatly, was a date—exactly ten years ago. Below it, lines describing a rainy day when the “author” felt stuck, directionless, wandering through the city just to escape his thoughts.",
            "The passage described, in detail, a small antique shop, a book bought on impulse, and the feeling that the object would change something. Alex’s stomach tightened. It was, almost exactly, the day he had just lived.",
            "He turned the page. The next entry described a bitter argument with a close friend, angry words and a silence that lasted for years. The details were so precise he felt someone was flipping through his own memories.",
            "With every page, the journal moved forward in time, describing moments from his life—choices he had delayed, chances he had missed, fears he had buried. It wasn’t just a journal. It was a mirror of everything he had left unsaid or unlived.",
            "Then, suddenly, the text stopped. The last sentences were cut off, as if someone had been interrupted mid-thought. The pages that followed were blank. Alex felt a strange urge to pick up a pen.",
            "“You continue,” he could almost hear the shopkeeper’s voice. “This is the point where you stopped choosing. Now you must choose.” With a trembling hand, Alex began to write—not about the past, but about what he wanted the next chapters of his life to become.",
            "The next morning, when he returned to the antique shop to look for answers, the store was gone. In its place stood an empty space with dusty windows. Only his reflection stared back at him, still holding the unfinished journal—because the rest was yet to be written.",
          ],
        },

        14: {
          title: "The Star That Fell in the Garden",
          excerpt:
            "On a summer night, a star falls right into the garden of a boy who no longer believed in wishes...",
          content: [
            "David lay on the grass, hands behind his head, staring at the night sky. As a child, stars had fascinated him, but over time they had become nothing more than cold, distant points with no real connection to his life.",
            "“Do you still make wishes?” his sister had asked him a few nights before. He had shrugged. “What for? Nothing happens anyway.” But tonight, the sky seemed clearer than ever, and the air held a strange stillness.",
            "Out of nowhere, a streak of light cut across the sky, much closer than any “shooting star” he had ever seen. Instead of disappearing at the horizon, it fell, with a barely audible sound, right at the edge of the garden.",
            "His heart pounding, David jumped up and ran past the rose bushes to where it had landed. There, among slightly scorched grass, lay a small sphere of light, pulsing like a glass orb with a beating heart inside.",
            "When he reached out, the light shrank into a point, then opened, revealing a tiny human-like figure made of stardust. “At last, you looked up,” said a thin but clear voice. “Who... what are you?” David stammered.",
            "“I am a wandering star,” the creature answered, floating at eye level. “We call to one another every time someone gives up on their wishes. Because wishes are what keep us existing. Without them, we fade.”",
            "David laughed nervously. “I stopped believing in wishes a long time ago.” “I know,” said the star. “That’s why I fell here. To show you it’s not about believing in magic, but about admitting what you truly want.”",
            "The star touched his forehead, and for a moment, everything he had ever wished for rushed through his mind: days when he wanted to apologize to someone, nights when he dreamed of playing music on a stage, moments when he wished he had simply said “no” and taken another path.",
            "“Unfulfilled wishes don’t disappear,” said the star. “They just settle in places that are hard to reach inside us. You can choose: leave them there, or, starting tomorrow, take one small step toward one of them.”",
            "In the morning, where the star had fallen, only a small circle of burnt grass remained, and a strange sense of clarity. David didn’t suddenly become an incurable optimist. But that day, he called an old friend he hadn’t spoken to in years. The next day, he took the guitar out from under his bed.",
            "He never told anyone about the fallen star. But on some clear nights, a particular light in the sky seemed to wink at him. And this time, he didn’t look away.",
          ],
        },
      },

      profilePage: {
        info: {
          name: "Name",
          email: "Email",
          changePasswordTitle: "Change Password",
          currentPassword: "Current password",
          newPassword: "New password",
          confirmPassword: "Confirm password",
          changePasswordBtn: "Change Password",
          logout: "Logout",
          errorMismatch: "Passwords do not match",
          successChanged: "Password changed successfully",
        },
      },

      upcomingPage: {
        cta: {
          title: "Want Early Access? 🚀",
          description:
            "Subscribe now and unlock early access to stories, live events, and exclusive behind-the-scenes content.",
          button: "Go to Subscribe",
        },
        hero: {
          title: "Coming Soon 🌟",
          description:
            "Fresh stories, thrilling events, and exclusive collections are on the horizon. Be the first to experience the magic.",
        },
        items: [
          {
            title: "New Story: The Magic Forest",
            date: "Releases on 25th August 2025",
            iconKey: "book",
          },
          {
            title: "Live Event: Storytelling Night",
            date: "Join us on 1st September 2025",
            iconKey: "users",
          },
          {
            title: "New Collection: Adventure Tales",
            date: "Coming soon!",
            iconKey: "star",
          },
          {
            title: "Exclusive Author Interview",
            date: "1st October 2025",
            iconKey: "users",
          },
          {
            title: "Interactive Story Workshop",
            date: "15th October 2025",
            iconKey: "calendar",
          },
          {
            title: "Holiday Story Collection",
            date: "December 2025",
            iconKey: "book",
          },
        ],
      },

      aboutPage: {
        hero: {
          title: "Every Story Shapes a World 🌌",
          description:
            "At StoryTeller, we believe that words carry magic. Stories are not just tales — they are sparks of inspiration, bridges between cultures, and voices that connect hearts across the globe.",
        },
        infoCards: [
          {
            title: "Our Vision",
            icon: "✨",
            description:
              "To light up imaginations and inspire change through the art of storytelling. We dream of a world where every voice finds a listener and every story leaves a trace of hope.",
          },
          {
            title: "Our Mission",
            icon: "🚀",
            description:
              "To bring together readers and storytellers, creating a vibrant space where stories spark curiosity, inspire creativity, and nurture a global community of dreamers.",
          },
        ],
        roadmap: [
          {
            year: "2024",
            title: "Launch & Foundation",
            description:
              "We open the doors to StoryTeller — a new home for stories, where readers and writers meet to inspire and be inspired.",
          },
          {
            year: "2025",
            title: "Community Growth",
            description:
              "We aim to grow a vibrant global community of storytellers, offering interactive features, live readings, and collaborations.",
          },
          {
            year: "2026",
            title: "Mobile Experience",
            description:
              "Bringing the magic of stories everywhere with our dedicated mobile app — making storytelling a part of daily life.",
          },
          {
            year: "2027",
            title: "Global Impact",
            description:
              "Our vision is to empower millions of voices across the world, turning StoryTeller into the go-to platform for creativity and inspiration.",
          },
        ],
        cta: {
          title: "Be Part of the Story ✨",
          description:
            "Stories are stronger when shared. Join us in building a world filled with imagination, courage, and inspiration — one story at a time.",
          button: "Go to Subscribe",
        },
      },

      storyNotFound: {
        title: "Story Not Found",
        description:
          "The story you are trying to access does not exist or has been deleted.",
        backButton: "Back to all stories",
      },
      storyPagination: {
        prev: "Previous",
        next: "Next",
        pageInfo: "Page {{current}} of {{total}}",
      },
      storyContent: {
        noContent: "No additional content available for this story.",
      },
      hero: {
        title: "Read Imaginary Stories",
        subtitle: "Explore a collection of romance, sci-fi, fantasy, and more.",
        cta: "Browse Stories",
        alt: "Reading girl",
      },
      featuredStories: "Featured Stories",
      viewAll: "View All",
      discoverAmazingStories: "Discover amazing stories",
      viewAllStories: "View All Stories",
      adFreeTitle: "Enjoy an Ad-Free Experience!",
      adFreeDescription:
        "Unlock uninterrupted reading, exclusive content, and a smoother experience by upgrading to premium. Say goodbye to ads and hello to more stories!",
      adFreeButton: "Go Ad-Free Now",
      footerText: "MagicStories. All rights reserved.",
      allStoriesTitle: "All Stories",
      noStoriesFound: "No stories found...",
      usingLocalData: "Using local data.",
      allCategories: "All",
      accessLevels: {
        free: "Free",
        basic: "Basic",
        premium: "Premium",
      },
      story: "Story",
      rating: "Rating",
      type: "Type",
      noCategory: "No category",
      storyPremiumTitle: "Exclusive Story for Premium Members",
      storyPremiumDescription:
        "This story is available only to Premium subscribers.",
      storyPremiumButton: "Become a Premium Member",
      storyBasicPreview: "This is only a preview of the story.",
      storyBasicButton: "Continue reading with Basic or Premium plan 💫",
      backToAllStories: "Back to all stories",
      commentsTitle: "Comments",
      noComments: "No comments yet.",
      commentNamePlaceholder: "Your Name",
      commentTextPlaceholder: "Write a comment...",
      addCommentButton: "Add Comment",
      averageRating: "Average Rating:",
      welcome: "Welcome!",
      login: "Sign In",
      signup: "Sign Up",
      readMore: "Continue reading",
      category: "Category",
      storyLocked: "This story is available only for {{plan}} members.",
      subscribeNow: "Subscribe now",
    },
  },

  //-------------------------------------------------------
  // Francois
  //-------------------------------------------------------

  fr: {
    translation: {
      allStories: "Toutes les histoires",
      about: "À propos",
      upcoming: "À venir",
      subscribe: "S'abonner",

      search: {
        placeholder: "Rechercher une histoire...",
      },

      subscribePage: {
        billing: {
          monthly: "Mensuel",
          yearly: "Annuel",
        },
        planCard: {
          recommended: "Recommandé",
          goPremium: "Choisir Premium",
          chooseBasic: "Choisir Basic",
          disclaimer:
            "Les prix sont pour un abonnement mensuel/annuel et peuvent changer.",
        },
        price: {
          monthly: "/mois",
          yearly: "/an",
          approx: "≈",
          save: "Économisez",
        },
        hero: {
          title: "Choisissez le plan qui vous convient",
          description:
            "Abonnez-vous et débloquez des histoires exclusives, des chapitres bonus et une expérience sans publicité. Choisissez mensuel ou annuel et profitez d'une réduction.",
        },
        plans: [
          {
            id: "basic",
            name: "Basic",
            monthly: 4.99,
            yearly: 49.99,
            highlights: [
              "Accès à la plupart des histoires premium",
              "Lecture sans publicité (basic)",
              "Accès à la communauté et aux commentaires",
            ],
            recommended: false,
            description:
              "Idéal pour les lecteurs occasionnels qui veulent un peu de contenu premium.",
          },
          {
            id: "premium",
            name: "Premium",
            monthly: 9.99,
            yearly: 99.99,
            highlights: [
              "Accès complet à toutes les histoires premium + chapitres bonus",
              "Accès anticipé aux nouvelles sorties",
              "Support prioritaire et surprises exclusives",
            ],
            recommended: true,
            description:
              "Pour les lecteurs qui veulent l'expérience complète et des bonus spéciaux.",
          },
        ],
        testimonials: {
          title: "Ce que disent nos lectrices",
          items: [
            {
              id: 1,
              name: "Elena M.",
              text: "Je suis passée au Premium et les chapitres supplémentaires sont extraordinaires ! Chaque euro en vaut la peine.",
              role: "Lectrice, Bucarest",
            },
            {
              id: 2,
              name: "Ioana P.",
              text: "L'offre annuelle m'a convaincue. J'économise de l'argent et je reçois du contenu de qualité.",
              role: "Abonnée",
            },
            {
              id: 3,
              name: "Maria T.",
              text: "La lecture sans publicité et les bonus exclusifs rendent l'expérience beaucoup plus agréable.",
              role: "Lectrice fidèle",
            },
          ],
        },
        trust: {
          safePayments: {
            title: "Paiements sécurisés",
            description:
              "Nous traitons les paiements via Stripe. Les données de la carte ne sont jamais stockées sur nos serveurs.",
          },
          cancelAnytime: {
            title: "Annulation à tout moment",
            description:
              "Arrêtez le renouvellement depuis votre profil, sans frais cachés.",
          },
          supportRefund: {
            title: "Support & remboursement",
            description:
              "Support prioritaire pour Premium et remboursement sous 30 jours.",
          },
        },
        alertSubscribed:
          "Vous vous êtes abonné à {{planId}} ({{billing}}) — flux démo. Intégration backend nécessaire.",
      },
      upcomingPage: {
        cta: {
          title: "Vous voulez un accès anticipé ? 🚀",
          description:
            "Abonnez-vous maintenant et débloquez un accès anticipé aux histoires, événements en direct et contenus exclusifs en coulisses.",
          button: "Aller à l'abonnement",
        },
        hero: {
          title: "Bientôt 🌟",
          description:
            "Des histoires fraîches, des événements passionnants et des collections exclusives sont à l'horizon. Soyez le premier à vivre la magie.",
        },
        items: [
          {
            title: "Nouvelle Histoire : La Forêt Magique",
            date: "Sortie le 25 août 2025",
            iconKey: "book",
          },
          {
            title: "Événement en Direct : Nuit du Storytelling",
            date: "Rejoignez-nous le 1er septembre 2025",
            iconKey: "users",
          },
          {
            title: "Nouvelle Collection : Contes d'Aventure",
            date: "Bientôt !",
            iconKey: "star",
          },
          {
            title: "Interview Exclusive de l'Auteur",
            date: "1er octobre 2025",
            iconKey: "users",
          },
          {
            title: "Atelier de Storytelling Interactif",
            date: "15 octobre 2025",
            iconKey: "calendar",
          },
          {
            title: "Collection de Histoires de Noël",
            date: "Décembre 2025",
            iconKey: "book",
          },
        ],
      },

      aboutPage: {
        hero: {
          title: "Chaque histoire façonne un monde 🌌",
          description:
            "Chez StoryTeller, nous croyons que les mots portent de la magie. Les histoires ne sont pas que des récits — elles sont des étincelles d'inspiration, des ponts entre les cultures et des voix qui connectent les cœurs à travers le monde.",
        },
        infoCards: [
          {
            title: "Notre Vision",
            icon: "✨",
            description:
              "Éclairer les imaginaires et inspirer le changement grâce à l'art du storytelling. Nous rêvons d'un monde où chaque voix trouve un auditeur et chaque histoire laisse une trace d'espoir.",
          },
          {
            title: "Notre Mission",
            icon: "🚀",
            description:
              "Rassembler lecteurs et conteurs, créant un espace dynamique où les histoires éveillent la curiosité, inspirent la créativité et nourrissent une communauté mondiale de rêveurs.",
          },
        ],
        roadmap: [
          {
            year: "2024",
            title: "Lancement & Fondation",
            description:
              "Nous ouvrons les portes de StoryTeller — une nouvelle maison pour les histoires, où lecteurs et écrivains se rencontrent pour inspirer et être inspirés.",
          },
          {
            year: "2025",
            title: "Croissance de la Communauté",
            description:
              "Nous visons à développer une communauté mondiale dynamique de conteurs, offrant des fonctionnalités interactives, des lectures en direct et des collaborations.",
          },
          {
            year: "2026",
            title: "Expérience Mobile",
            description:
              "Apporter la magie des histoires partout avec notre application mobile dédiée — rendant la narration partie intégrante de la vie quotidienne.",
          },
          {
            year: "2027",
            title: "Impact Global",
            description:
              "Notre vision est de donner voix à des millions de personnes dans le monde, transformant StoryTeller en la plateforme de référence pour la créativité et l'inspiration.",
          },
        ],
        cta: {
          title: "Faites partie de l'histoire ✨",
          description:
            "Les histoires sont plus fortes lorsqu'elles sont partagées. Rejoignez-nous pour construire un monde rempli d'imagination, de courage et d'inspiration — une histoire à la fois.",
          button: "S'abonner",
        },
      },

      profile: {
        title: "Mon Profil",
        subtitle: "Gérez votre compte et vos préférences",
        tabs: {
          info: "Info",
          stats: "Statistiques",
          recent: "Récents",
          recommended: "Recommandés",
          subscription: "Abonnement",
          settings: "Paramètres",
        },
        namePlaceholder: "Votre nom",
        bioPlaceholder: "Parlez-nous de vous...",
        defaultName: "Utilisateur",
        noBio: "Aucune description.",
        edit: "Modifier",
        save: "Enregistrer",
        cancel: "Annuler",
        logout: "Déconnexion",
        stats: {
          storiesRead: "Lues",
          favorites: "Favoris",
          timeSpent: "Temps",
          streak: "Série",
        },
        weekActivity: "Activité hebdomadaire",
        favoriteCategories: "Catégories préférées",
        days: {
          mon: "Lun",
          tue: "Mar",
          wed: "Mer",
          thu: "Jeu",
          fri: "Ven",
          sat: "Sam",
          sun: "Dim",
        },
        categories: {
          drama: "Drame",
          comedy: "Comédie",
          horror: "Horreur",
          adventure: "Aventure",
        },
        recent: {
          noStories: "Aucune histoire récente",
        },
        noRecentStories: "Aucune histoire récente",
        exploreStories: "Explorer les histoires",
        recentStories: "Histoires récentes",
        clearHistory: "Effacer l'historique",
        recommendedForYou: "Recommandé pour vous",
        subscription: {
          // Chei folosite în ProfileSubscription
          currentPlan: "Plan actuel",
          price: "Prix",
          year: "an",
          statusLabel: "Statut de l'abonnement",
          statusActive: "Actif",
          renewDate: "Date de renouvellement",
          paymentMethod: "Méthode de paiement",
          paymentValue: "Carte bancaire",
          manageSubscription: "Changer de plan",
          unsubscribe: "Se désabonner",
          alertUnsubscribed: "Vous vous êtes désabonné avec succès",

          // Chei suplimentare (dacă le mai folosești în altă parte)
          plans: {
            features: {
              freeStories: "Histoires gratuites",
              ads: "Publicités",
              allStories: "Toutes les histoires",
              noAds: "Sans publicité",
              offline: "Téléchargement hors ligne",
              stats: "Statistiques avancées",
              allPremium: "Tous les avantages Premium",
              fiveAccounts: "Jusqu'à 5 comptes",
              parental: "Contrôle parental",
              storiesFound: "histoires trouvées",
              noCategory: "Aucune catégorie",
            },
          },
        },
        settings: {
          notifications: "Notifications",
          emailNotif: "Notifications email",
          pushNotif: "Notifications push",
          language: "Langue",
          dangerZone: "Zone dangereuse",
          deleteAccount: "Supprimer le compte",
          confirmDelete:
            "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.",
        },
      },

      signIn: {
        modal: {
          title: "Bienvenue !",
          subtitle: "Connectez-vous pour continuer",
          email: "Email",
          password: "Mot de passe",
          securityAnswer: "Réponse",
          rememberMe: "Rester connecté",
          forgotPassword: "Mot de passe oublié ?",
          submit: "Se connecter",
          loading: "Connexion...",
          or: "ou",
          google: "Continuer avec Google",
          facebook: "Continuer avec Facebook",
          errors: {
            emptyFields: "Veuillez remplir tous les champs !",
            securityWrong: "La réponse de sécurité est incorrecte !",
            invalid: "Identifiants invalides !",
          },
          closeAriaLabel: "Fermer le modal",
        },
      },
      signUp: {
        modal: {
          title: "Créer un compte",
          name: "Nom",
          email: "Email",
          password: "Mot de passe",
          confirmPassword: "Confirmer le mot de passe",
          securityAnswer: "Réponse",
          rememberMe: "Rester connecté",
          submit: "S'inscrire",
          loading: "Inscription...",
          google: "S'inscrire avec Google",
          facebook: "S'inscrire avec Facebook",
          errors: {
            emptyFields: "Veuillez remplir tous les champs !",
            invalidEmail: "Email invalide !",
            invalidPassword:
              "Le mot de passe doit comporter au moins 8 caractères, 1 majuscule, 1 minuscule et 1 chiffre.",
            passwordMismatch: "Les mots de passe ne correspondent pas !",
            securityWrong: "La réponse de sécurité est incorrecte !",
            signupFailed: "Échec de l'inscription !",
          },
          success: "Inscription réussie !",
          closeAriaLabel: "Fermer le modal",
        },
      },

      stories: {
        1: {
          title: "Sous la Lune Bleue",
          excerpt:
            "Une jeune fille découvre un portail vers un monde caché qui n'apparaît que lors d'une nuit de lune bleue.",
          content: [
            "Ana avait toujours senti qu'il y avait quelque chose au-delà du monde qu'elle connaissait...",
            "La forêt au bord du village était enchantée sous la lumière de la lune bleue...",
            "Alors qu'elle s'aventurait parmi les arbres, une lueur bleue apparut au loin...",
            "Elle se réveilla dans un monde de rêve, avec des champs infinis parsemés de fleurs argentées...",
            "Bientôt, Ana rencontra une créature délicate aux ailes translucides et aux yeux lumineux...",
            "Ana apprit rapidement que chaque recoin de ce royaume cachait une leçon...",
            "Une nuit, près d'un feu argenté, Ana rencontra un jeune homme mystérieux...",
            "Au fil des jours, Ana découvrit les secrets de ce royaume...",
            "Cependant, le portail commençait à se refermer lentement, et Ana savait qu'elle devait revenir...",
            "Lorsque Ana posa de nouveau les pieds sur le sol familier du village, la lune bleue disparut...",
            "Des années plus tard, Ana découvrit que le portail ne s'ouvre que lorsque la lune bleue apparaît...",
          ],
          comments: ["Très belle histoire !", "Elle m'a tenu en haleine !"],
        },
        2: {
          title: "La Fille de la Forêt Enchantée",
          excerpt: "Une histoire magique sur une fille qui découvre un secret.",
          content: [
            "Par un matin tranquille, le soleil éclairait doucement la forêt enchantée...",
            "La fille entendait des murmures dans les arbres et sentait quelqu'un la surveiller...",
            "Un papillon aux ailes de cristal se posa sur son épaule...",
            "Alors qu'elle s'enfonçait plus profondément, elle découvrit un portail scintillant...",
            "Au-delà, le monde semblait respirer la magie pure...",
          ],
        },
        3: {
          title: "Le Magicien des Brumes",
          excerpt:
            "Un vieil homme mystérieux sauve un village oublié avec une magie perdue dans le temps.",
          content: [
            "Personne ne s'aventurait dans le village recouvert de brouillard...",
            "Mais une nuit, une lumière bleue perça le brouillard...",
            "Le magicien apparut, portant un vieux livre et un regard ardent...",
          ],
        },
        4: {
          title: "La Planète des Ombres",
          excerpt:
            "Un astronaute s'écrase sur une planète où l'ombre a sa propre volonté.",
          content: [
            "Le voyage vers la planète inconnue semblait réussi...",
            "Mais une fois arrivé, l'astronaute découvrit des ombres vivantes...",
            "Chaque ombre lui parlait de son passé...",
          ],
        },
        5: {
          title: "La Rose Enchantée",
          excerpt:
            "Une histoire romantique sur une rose qui prend vie et change le destin d'une princesse.",
          content: [
            "La princesse Sofia reçut une rose d'une vieille femme mystérieuse...",
            "Lorsque la fleur s'épanouit, une voix chuchota son nom...",
            "Ainsi commença son voyage vers le véritable amour...",
          ],
        },
        6: {
          title: "La Reine du Nord",
          excerpt:
            "Une princesse devient reine dans un monde glacé où la neige parle et les glaciers cachent des secrets.",
          content: [
            "Le royaume de glace était enveloppé de silence...",
            "Mais la jeune reine savait que la neige cachait une vérité interdite...",
            "Son aventure ne faisait que commencer...",
          ],
        },
        7: {
          title: "Esprit Artificiel",
          excerpt:
            "Dans un futur proche, une intelligence artificielle tombe amoureuse de son créateur.",
          content: [
            "Le Dr Ionescu créa la première conscience numérique au monde...",
            "Mais le programme, nommé AURA, commença à ressentir des émotions...",
            "Un amour impossible entre l'humain et le code prend forme...",
          ],
        },
        8: {
          title: "La Maison au Bout de la Rue",
          excerpt:
            "Chaque soir, une étrange lumière apparaissait à la fenêtre d'une maison abandonnée...",
          content: [
            "La maison au bout de la rue avait autrefois été la plus belle du quartier. À présent, ses fenêtres étaient couvertes de poussière et la clôture en bois penchait dangereusement vers le trottoir. Pourtant, chaque soir, à la même heure, une faible lumière s’allumait à l’étage.",
            "Les voisins faisaient semblant de ne rien voir. Ils s’étaient habitués à détourner le regard, comme si rien ne se passait. Les enfants, eux, se chuchotaient des histoires de fantômes, de sorcières et de rituels secrets, en pointant du doigt la fenêtre illuminée.",
            "Mara ne croyait pas aux histoires. Elle était curieuse de nature et tenait un cahier dans lequel elle notait tout ce qui lui paraissait étrange dans le quartier. Et cette lumière était devenue, ces derniers mois, le plus grand mystère de sa liste.",
            "Un soir froid d’automne, elle prit son courage à deux mains. Elle attendit que ses parents s’endorment, puis sortit discrètement de la maison, une lampe de poche dans la poche et son cahier serré contre elle. La rue était presque déserte, seulement le vent qui faisait bruisser les feuilles d’un vieux tilleul.",
            "À mesure qu’elle s’approchait de la maison, l’air lui semblait plus lourd. La lumière à l’étage vacillait faiblement, comme une bougie en fin de vie. Mara s’arrêta à la porte du jardin, retint son souffle et écouta. Aucune voix, aucun pas. Seulement le silence.",
            "Les mains tremblantes, elle poussa le portail. Un grincement aigu déchira le calme et son cœur manqua un battement. Elle se faufila dans la cour, contournant les hautes herbes. La porte d’entrée était entrebâillée, comme si elle attendait quelqu’un.",
            "Mara monta l’escalier intérieur en s’agrippant à la rampe glacée. Chaque marche grinçait, comme pour annoncer sa présence. Arrivée à l’étage, elle vit que la lumière provenait clairement de sous une vieille porte bleue, écaillée par le temps.",
            "Elle inspira profondément, compta jusqu’à trois dans sa tête et poussa la porte. À l’intérieur, une seule lampe de bureau était allumée, posée sur une table encombrée de cahiers, de photos et de cartes. Devant, assis de dos, un vieil homme aux cheveux blancs et lisses fixait une photographie encadrée.",
            "— Je savais que tôt ou tard, quelqu’un viendrait, dit-il sans se retourner. Mara se figea sur le seuil. Sa voix était calme, mais chargée d’une tristesse ancienne. — Pourquoi allumez-vous la lumière chaque soir ? parvint-elle à murmurer.",
            "L’homme se retourna lentement. Dans ses yeux bleus se lisait une nostalgie difficile à décrire. — Pour qu’elle trouve le chemin du retour, dit-il en désignant la photo d’une jeune femme souriante. — Et pour que quelqu’un, un jour, ait le courage de demander pourquoi.",
            "Mara fit un pas dans la pièce, et la peur qui l’étreignait commença à se dissiper. Le mystère de la maison au bout de la rue ne parlait ni de fantômes, ni de malédictions. Il parlait de promesses oubliées, d’attente, et de la façon dont une lumière, si faible soit-elle, peut toujours guider quelqu’un vers la maison.",
          ],
        },

        9: {
          title: "Le Train de Minuit",
          excerpt:
            "On dit qu'un train mystérieux s'arrête en gare seulement pour ceux qui doivent changer leur vie...",
          content: [
            "La gare était presque vide à cette heure-là. Seule une vieille horloge suspendue au-dessus du quai battait la mesure, fatiguée, approchant de minuit. Andrei se frottait les mains pour les réchauffer, se demandant pour la dixième fois pourquoi il avait accepté de venir.",
            "Un ami lui avait raconté, à moitié en plaisantant, l’histoire d’un train étrange qui n’apparaissait qu’une fois par an, exactement à minuit, et qui emportait avec lui les gens qui ne savaient plus où aller. Andrei avait ri à l’époque, mais avec le temps, l’idée était restée dans un coin de son esprit.",
            "Il avait perdu son travail, ses amis s’étaient éloignés et son appartement était devenu une boîte silencieuse remplie d’objets sans importance. Ce soir-là, il n’avait plus rien à perdre. Alors il était venu à la gare, juste pour voir.",
            "Quand l’horloge sonna douze coups, l’air changea. Un vent froid traversa la gare et les lumières vacillèrent. Puis, dans l’obscurité de la voie 3, un grondement profond se fit entendre, comme l’écho d’un autre temps.",
            "Le train apparut lentement, comme dessiné à partir d’ombres et de vapeur. Les wagons semblaient anciens, mais étonnamment bien conservés. Sur une petite plaque métallique faiblement éclairée, on pouvait lire : « Ligne du Destin – Aller Simple ».",
            "Les portes s’ouvrirent sans bruit. De l’intérieur venait une lumière chaude, dorée, qui l’invitait à entrer. Andrei regarda autour de lui — il était seul sur le quai. Son cœur battait à tout rompre. « Ce n’est qu’une blague », se dit-il. Pourtant, il fit un pas en avant.",
            "À l’intérieur, les sièges étaient recouverts de velours bleu et les fenêtres ne reflétaient pas la gare, mais une sorte de nuit infinie, parsemée d’étoiles. Au bout du couloir, une femme en tailleur élégant l’observait.",
            "— Votre billet, s’il vous plaît, dit-elle en tendant la main. Andrei balbutia : — Je... je n’ai pas de billet. — Si, vous en avez un, répondit-elle calmement. Vous l’avez acheté le jour où vous avez décidé que vous ne vouliez plus vivre comme avant.",
            "D’une poche intérieure qu’il ne se souvenait pas avoir, Andrei sortit un petit carton violet sur lequel figurait uniquement son nom. — Où m’emmène ce train ? demanda-t-il. La femme eut un léger sourire. — Cela dépend. Certains descendent dans une ville où ils trouvent du courage. D’autres, dans un village où ils apprennent à pardonner. Toi, tu descendras là où tu as laissé la version de toi-même que tu as perdue.",
            "Pendant tout le trajet, rien de familier ne se dessinait derrière les vitres. Seulement des fragments : une main tenant un billet d’avion jamais utilisé, un cahier rempli de dessins inachevés, une photo de lui plus jeune, riant à pleines dents.",
            "Quand le train s’arrêta, Andrei descendit dans une ville lumineuse, pleine de couleurs et de visages qui semblaient le reconnaître. Ce n’était ni le passé ni le futur. C’était une nouvelle chance, un endroit où il pouvait choisir à nouveau. Derrière lui, le train de minuit disparut dans le silence, ne laissant qu’un léger écho — celui d’une promesse tenue.",
          ],
        },

        10: {
          title: "La Librairie entre les Mondes",
          excerpt:
            "Une librairie mystérieuse apparaît seulement à ceux qui ont besoin d'une histoire précise...",
          content: [
            "Il pleuvait depuis des heures et Clara s’était réfugiée sous un auvent, essayant de décider où aller ensuite. Le plan de la ville ne lui disait plus rien. Les rues semblaient changer chaque fois qu’elle clignait des yeux.",
            "Au moment où elle songeait à renoncer, elle aperçut une petite enseigne en bois au-dessus d’une porte étroite : « La Librairie entre les Mondes ». Elle aurait juré que rien ne se trouvait là quelques minutes plus tôt. Mais la pluie, la fatigue et la curiosité formaient un mélange dangereux.",
            "Elle poussa la porte et une petite clochette tinta pour annoncer son arrivée. À l’intérieur, l’air sentait le papier ancien, la poussière et quelque chose de doux, comme la vanille. De hautes étagères montaient jusqu’au plafond, chargées de livres de toutes tailles et de toutes couleurs.",
            "Derrière le comptoir, un vieil homme aux lunettes rondes leva les yeux d’un volume épais. — Bonsoir, Clara, dit-il calmement. Elle se figea. — On se connaît ? — D’une certaine façon, oui. Je connais chaque lecteur qui franchit cette porte.",
            "— Je cherche quelque chose en particulier ? demanda-t-elle, hésitante. — Ce n’est pas toi qui cherches, c’est le livre qui te cherche, répondit-il en lui faisant signe de le suivre entre les rayonnages. À mesure qu’ils avançaient, les couleurs des dos semblaient changer légèrement, comme si elles réagissaient à sa présence.",
            "Ils s’arrêtèrent devant une étagère étroite où un seul livre brillait faiblement. La couverture était simple, sans titre, avec seulement un petit symbole qui ressemblait à une clé. — Celui-ci est à toi, dit le libraire. — De quoi parle-t-il ? — De ce que tu pourrais devenir si tu cessais de fuir.",
            "Lorsqu’elle l’ouvrit, elle ne trouva pas de texte imprimé, mais des images en mouvement — des fragments de sa vie, des moments où elle avait reculé par peur, des instants où elle avait dit « je ne peux pas » au lieu de « j’essaie ».",
            "À chaque page tournée, quelque chose se serrait dans sa poitrine, puis se desserrait peu à peu. Le livre ne la jugeait pas. Il lui montrait seulement des possibilités qu’elle n’avait jamais envisagées. Dans un chapitre, elle partait enfin pour la ville où elle avait toujours rêvé d’étudier. Dans un autre, elle publiait son propre roman.",
            "Sur la dernière page, elle trouva un espace vierge et un stylo accroché à la couverture. — C’est ici que tu commences à écrire, dit le libraire derrière elle. — Pas pour moi, pour toi. Notre librairie ne donne pas d’histoires toutes faites. Elle te montre simplement que tu peux être l’auteur de ta propre vie.",
            "Clara quitta la librairie en serrant le livre contre elle, avec une étrange sensation de légèreté. Lorsqu’elle se retourna pour regarder une dernière fois l’enseigne en bois, le bâtiment avait disparu. Il ne restait que la pluie, plus douce désormais, et une décision nouvelle qui commençait à prendre racine dans son cœur.",
          ],
        },

        11: {
          title: "Le Café où le Temps s'Arrête",
          excerpt:
            "Il existe un endroit où, tant que vous buvez votre café, le temps à l'extérieur ne s'écoule plus...",
          content: [
            "Luca avait découvert le café par hasard, un matin où il était en retard au travail et cherchait un raccourci dans une ruelle inconnue. Une petite enseigne en métal pendait au-dessus d’une porte vitrée : « Le Café de l’Heure Perdue ».",
            "Poussé par la curiosité et l’odeur du café fraîchement moulu, il entra. À l’intérieur, la lumière était douce et chaleureuse, et la musique de fond suffisamment discrète pour ne pas déranger ses pensées. Sur les murs, des horloges de toutes les formes tictaquaient tranquillement.",
            "La barista, une femme aux cheveux relevés en un chignon lâche et au sourire bienveillant, l’accueillit : — Première fois ici, n’est-ce pas ? — Oui, admit Luca. — Alors je te recommande l’« Espresso Suspendu ». Il va bien avec les décisions difficiles.",
            "Il sourit, un peu gêné, mais accepta. Il s’assit près de la fenêtre et regarda la rue. La circulation était chaotique comme toujours, les gens pressés, mais, en attendant son café, il sentit une étrange paix l’envelopper.",
            "Quand la tasse fut déposée devant lui, la barista lui fit un clin d’œil. — Souviens-toi : tant que tu bois, le temps dehors s’arrête. Il ne coule qu’ici. — Comment ça ? rit Luca. — Tu verras, répondit-elle simplement.",
            "Dès la première gorgée, il sentit que quelque chose changeait. Les bruits de l’extérieur s’atténuèrent, comme si une porte se refermait entre deux mondes. Les horloges continuaient de tourner, mais aucune ne semblait à la même heure.",
            "Luca se perdit dans ses pensées : ce travail qu’il détestait, ces relations qu’il avait laissées s’éteindre, ces rêves repoussés à « plus tard ». Pour la première fois depuis longtemps, il ne se sentait plus poursuivi ni par des échéances, ni par l’heure affichée à son poignet.",
            "Lorsqu’il eut fini son café, il regarda sa montre par réflexe. 8h17. L’heure exacte à laquelle il était entré. Déconcerté, il jeta un œil dehors. Les passants se déplaçaient exactement comme avant. Les voitures n’avaient presque pas bougé. Comme si le temps s’était vraiment figé.",
            "— Je te l’avais dit, lança la barista, appuyée contre le comptoir. — Ici, tu reçois une heure rien que pour toi. Une heure pour penser, ressentir, te souvenir de qui tu es, sans rien perdre « là-bas ».",
            "Luca resta longtemps sur le pas de la porte après avoir payé. Il savait que, rationnellement, tout cela n’avait pas de sens. Mais, au fond de lui, il se sentait reconnaissant. Plus léger. Plus clair. La prochaine fois qu’il se sentirait dépassé, il saurait exactement où revenir. Le café où le temps s’arrête n’était pas un endroit pour fuir la réalité, mais pour apprendre à y revenir autrement.",
          ],
        },

        12: {
          title: "La Ville qui N'existe que sur la Carte",
          excerpt:
            "Sur le GPS, une petite ville inconnue apparaît entre deux villes familières, mais en réalité personne ne l'a jamais trouvée...",
          content: [
            "Mara et Vlad se rendaient à la mer quand, lassés de l’autoroute, ils décidèrent de choisir un itinéraire « pittoresque ». Vlad zoomen sur la carte du GPS et remarqua quelque chose d’étrange : entre deux villes qu’il connaissait bien, une petite localité apparaissait, simplement appelée « Luminia ».",
            "— Tu as déjà entendu parler de Luminia ? demanda-t-il. Mara haussa les épaules. — Jamais. — Regarde, il y a même une route directe, ajouta-t-il en désignant l’écran. Curieux, ils suivirent les indications. La route les fit quitter l’axe principal, traversant des villages tranquilles et des champs à perte de vue.",
            "Au bout d’environ une heure, le GPS affirma qu’ils approchaient de leur destination. Mais devant eux, aucun bâtiment, aucune rue. Juste un immense champ d’herbe haute ondulant sous le vent. — Le système doit bugger, dit Mara.",
            "Et pourtant, sur l’écran, leur point bleu clignotait en plein « centre » de Luminia. C’est alors qu’ils virent le panneau : un vieux poteau en métal, sur lequel on pouvait lire, à peine : « Bienvenue ». Sans nom de ville. Rien de plus.",
            "Dès qu’ils sortirent de la voiture, le signal de leurs téléphones disparut. La carte resta figée, montrant encore cette ville invisible. L’air semblait trop immobile, comme juste avant un orage. — Peut-être qu’il y a eu quelque chose ici autrefois, tenta Vlad.",
            "Ils commencèrent à marcher dans l’herbe. Au bout de quelques pas, le sol changea. Sous les touffes d’herbe apparurent des allées pavées, les contours de rues, des bancs rouillés. Puis, comme si quelqu’un réglait une fréquence, les bâtiments commencèrent à se matérialiser à partir de l’air épais.",
            "En quelques secondes, une ville entière se dressait autour d’eux : des maisons anciennes, des réverbères, des vitrines, une fontaine au centre de la place. Tout semblait parfaitement réel, mais légèrement translucide, comme un reflet.",
            "Sur un banc, un vieil homme nourrissait des pigeons invisibles. — Bienvenue à Luminia, dit-il sans lever la tête. — Où... sommes-nous ? osa enfin demander Mara. — Dans un lieu que les gens ont oublié, répondit-il, mais que les cartes ont refusé de laisser disparaître.",
            "Ils apprirent que Luminia avait été autrefois une petite ville animée, mais que ses habitants étaient partis, un par un, en quête de meilleures opportunités. Quand le dernier habitant avait quitté les lieux, la ville avait cessé d’exister physiquement, se retrouvant coincée dans la mémoire des routes et des histoires inachevées.",
            "— Pourquoi pouvons-nous la voir ? demanda Vlad. — Parce qu’à l’image de cette ville, vous êtes vous aussi entre deux chemins, répondit le vieil homme. — Et parce que vous n’avez pas encore décidé où vous voulez vraiment aller. Luminia n’apparaît qu’à ceux qui ont besoin de s’arrêter et de se souvenir pourquoi ils ont commencé la route.",
            "Lorsqu’ils repartirent, la ville se dissipa derrière eux, redevenant un simple champ paisible. Sur le GPS, le point bleu continua d’avancer. Et, pour la première fois depuis longtemps, Mara et Vlad savaient exactement où ils voulaient aller — pas seulement avec la voiture, mais avec leur vie.",
          ],
        },

        13: {
          title: "Le Journal Inlu",
          excerpt:
            "Un journal trouvé dans une brocante semble en savoir plus sur votre vie que vous-même...",
          content: [
            "La boutique d’antiquités sentait le vieux papier, le bois humide et le temps. Alex errait sans but parmi les étagères, effleurant parfois des couvertures poussiéreuses. Il ne cherchait rien de précis. Ou peut-être quelque chose qu’il n’arrivait pas à nommer.",
            "Un journal à la couverture en cuir brun, fermé par un fin ruban, attira son regard. Pas de titre, pas d’auteur. Juste un petit symbole dans le coin inférieur droit — un cercle traversé par une ligne, comme une horloge sans aiguilles.",
            "— Combien ? demanda-t-il en le posant sur le comptoir. Le vendeur, un vieil homme à la moustache blanche, le fixa longuement. — Pour toi, rien. Mais souviens-toi : une fois que tu l’ouvres, tu ne pourras plus prétendre que tu ne savais pas.",
            "Alex rit, pensant à une réplique de marchand. Il ramena le journal chez lui et le posa sur son bureau. Pendant plusieurs jours, il évita de l’ouvrir, se trouvant toujours autre chose à faire. Mais, une nuit, il céda.",
            "Sur la première page, d’une écriture soignée, figurait une date — exactement dix ans plus tôt. En dessous, quelques lignes décrivaient un jour de pluie où « l’auteur » s’était senti perdu, sans direction, errant dans la ville juste pour fuir ses pensées.",
            "Le passage décrivait en détail une petite boutique d’antiquités, un livre acheté sur un coup de tête, et la sensation que cet objet allait changer quelque chose. Alex sentit son estomac se nouer. C’était pratiquement la journée qu’il venait de vivre.",
            "Il tourna la page. L’entrée suivante racontait une violente dispute avec un ami proche, des mots prononcés sous la colère, et un silence qui avait duré des années. Les détails étaient si précis qu’il eut l’impression que quelqu’un feuilletait ses propres souvenirs.",
            "À chaque page, le journal avançait dans le temps, décrivant des moments de sa vie — des décisions repoussées, des opportunités ratées, des peurs refoulées. Ce n’était pas seulement un journal. C’était un miroir de tout ce qu’il avait laissé inachevé ou tu.",
            "Puis, soudainement, le texte s’interrompit. Les dernières phrases semblaient coupées en plein milieu. Les pages suivantes étaient blanches. Alex ressentit une étrange envie de prendre un stylo.",
            "— À toi de continuer, entendit-il presque la voix du vendeur. — C’est ici que tu as cessé de choisir. Maintenant, il faut reprendre. La main tremblante, Alex se mit à écrire. Non pas sur le passé, mais sur ce qu’il aimerait que soient les prochains chapitres de sa vie.",
            "Le lendemain matin, quand il retourna à la boutique d’antiquités pour chercher des explications, le magasin n’existait plus. À la place, un local vide, aux vitres poussiéreuses. Seul son reflet le regardait, tenant toujours le journal encore inlu — car le reste était à écrire.",
          ],
        },

        14: {
          title: "L'Étoile Tombée dans le Jardin",
          excerpt:
            "Une nuit d'été, une étoile tombe directement dans le jardin d'un garçon qui ne croyait plus aux voeux...",
          content: [
            "David était allongé dans l’herbe, les mains derrière la tête, à regarder le ciel nocturne. Enfant, les étoiles le fascinaient, mais avec le temps, elles étaient devenues de simples points froids et lointains, sans lien réel avec sa vie.",
            "— Tu fais encore des vœux ? lui avait demandé sa sœur quelques soirées plus tôt. Il avait haussé les épaules. — Pour quoi faire ? Rien ne se réalise, de toute façon. Cette nuit-là pourtant, le ciel semblait plus clair que jamais et l’air portait un calme étrange.",
            "Soudain, un trait de lumière fendit la voûte céleste, bien plus près qu’aucune « étoile filante » qu’il ait jamais vue. Au lieu de disparaître à l’horizon, elle s’écrasa, dans un léger bruit, tout au fond du jardin.",
            "Le cœur battant, David se redressa et courut à travers les rosiers jusqu’au point d’impact. Là, au milieu de brins d’herbe légèrement brûlés, se trouvait une petite sphère de lumière, palpitant comme un globe de verre traversé par un cœur vivant.",
            "Lorsqu’il tendit la main, la lumière se contracta en un point, puis s’ouvrit, révélant une minuscule silhouette humaine faite de poussière d’étoiles. — Enfin, tu as levé les yeux, dit une voix fine mais claire. — Qui... que es-tu ? balbutia David.",
            "— Je suis une étoile égarée, répondit la créature en flottant à hauteur de son visage. — Nous nous appelons les unes les autres chaque fois que quelqu’un renonce à ses vœux. Car ce sont les vœux qui nous maintiennent en vie. Sans eux, nous nous éteignons.",
            "David eut un rire nerveux. — Je ne crois plus aux vœux depuis longtemps. — Je sais, dit l’étoile. — C’est pour cela que je suis tombée ici. Pour te montrer qu’il ne s’agit pas de magie, mais d’avouer ce que tu désires vraiment.",
            "L’étoile toucha son front et, l’espace d’un instant, tous les désirs qu’il avait eus défilèrent dans son esprit comme un torrent : des jours où il aurait voulu s’excuser auprès de quelqu’un, des soirées où il rêvait de jouer sur scène, des moments où il aurait simplement aimé dire « non » et choisir un autre chemin.",
            "— Les vœux non réalisés ne disparaissent pas, dit l’étoile. — Ils se cachent juste dans des endroits difficiles d’accès, à l’intérieur de nous. Toi, tu peux choisir : les laisser là, ou, dès demain, faire un petit pas vers l’un d’entre eux.",
            "Le matin, à l’endroit où l’étoile était tombée, il ne restait qu’un petit cercle d’herbe brûlée et une étrange clarté dans son esprit. David ne devint pas soudain un optimiste invétéré. Mais ce jour-là, il appela un vieil ami à qui il n’avait pas parlé depuis des années. Le lendemain, il sortit la guitare de sous son lit.",
            "Il ne parla à personne de l’étoile tombée. Mais certaines nuits, quand le ciel était dégagé, une lumière en particulier semblait lui faire un clin d’œil. Et, cette fois, il ne détournait plus le regard.",
          ],
        },
      },

      profilePage: {
        info: {
          name: "Nom",
          email: "Email",
          changePasswordTitle: "Changer le mot de passe",
          currentPassword: "Mot de passe actuel",
          newPassword: "Nouveau mot de passe",
          confirmPassword: "Confirmer le mot de passe",
          changePasswordBtn: "Changer le mot de passe",
          logout: "Se déconnecter",
          errorMismatch: "Les mots de passe ne correspondent pas",
          successChanged: "Le mot de passe a été changé avec succès",
        },
      },

      // 🔹 Alte texte existente
      storyNotFound: {
        title: "Histoire non trouvée",
        description:
          "L'histoire que vous essayez d'accéder n'existe pas ou a été supprimée.",
        backButton: "Retour à toutes les histoires",
      },
      storyPagination: {
        prev: "Précédent",
        next: "Suivant",
        pageInfo: "Page {{current}} sur {{total}}",
      },
      storyContent: {
        noContent:
          "Aucun contenu supplémentaire disponible pour cette histoire.",
      },
      hero: {
        title: "Lisez des histoires imaginaires",
        subtitle:
          "Découvrez une collection de romances, science-fiction, fantasy et plus.",
        cta: "Parcourir les histoires",
        alt: "Fille qui lit",
      },
      featuredStories: "Histoires en vedette",
      viewAll: "Voir tout",
      discoverAmazingStories: "Découvrez des histoires incroyables",
      viewAllStories: "Voir toutes les histoires",
      adFreeTitle: "Profitez d'une expérience sans publicités !",
      adFreeDescription:
        "Débloquez une lecture ininterrompue, du contenu exclusif et une expérience plus fluide en passant à la version premium. Dites adieu aux publicités et bonjour à plus d'histoires !",
      adFreeButton: "Profitez sans pub maintenant",
      footerText: "HistoiresMagiques. Tous droits réservés.",
      allStoriesTitle: "Toutes les histoires",
      noStoriesFound: "Aucune histoire trouvée...",
      usingLocalData: "Utilisation des données locales.",
      allCategories: "Toutes",
      accessLevels: {
        free: "Gratuit",
        basic: "Basique",
        premium: "Premium",
      },
      story: "Histoire",
      rating: "Évaluation",
      type: "Type",
      noCategory: "Sans catégorie",
      storyPremiumTitle: "Histoire exclusive pour les membres Premium",
      storyPremiumDescription:
        "Cette histoire est disponible uniquement pour les abonnés Premium.",
      storyPremiumButton: "Devenir membre Premium",
      storyBasicPreview: "Ceci est seulement un aperçu de l'histoire.",
      storyBasicButton: "Continuez la lecture avec le plan Basic ou Premium 💫",
      backToAllStories: "Retour à toutes les histoires",
      commentsTitle: "Commentaires",
      noComments: "Aucun commentaire pour le moment.",
      commentNamePlaceholder: "Votre nom",
      commentTextPlaceholder: "Écrivez un commentaire...",
      addCommentButton: "Ajouter un commentaire",
      averageRating: "Note moyenne :",
      welcome: "Bienvenue!",
      login: "Connexion",
      signup: "Inscription",
      readMore: "Continuer la lecture",
      category: "Catégorie",
      storyLocked:
        "Cette histoire est disponible uniquement pour les membres {{plan}}.",
      subscribeNow: "Abonnez-vous maintenant",
    },
  },
};

// 🔹 Inițializare i18n
i18n.use(initReactI18next).init({
  resources,
  lng: "ro", // limba implicită
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // React face automat escaping
  },
});

export default i18n;
