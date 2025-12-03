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
