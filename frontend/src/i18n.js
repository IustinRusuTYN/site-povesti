// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 🔹 Traduceri locale, organizate pe pagini și componente
const resources = {
  ro: {
    translation: {
      // 🔹 Navbar & linkuri navigație
      allStories: "Toate poveștile",
      about: "Despre",
      upcoming: "Viitoare",
      subscribe: "Abonare",

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
          title: "Alege planul care ți se potrivește",
          description:
            "Abonează-te și deblochează povești exclusive, capitole bonus și o experiență fără reclame. Alege lunar sau anual și bucură-te de reducere.",
        },
        plans: [
          {
            id: "basic",
            name: "Basic",
            monthly: 4.99,
            yearly: 49.99,
            highlights: [
              "Access la majoritatea poveștilor premium",
              "Lectură fără reclame (basic)",
              "Acces la comunitate și comentarii",
            ],
            recommended: false,
            description:
              "Ideal pentru cititorii ocazionali care vor puțin conținut premium.",
          },
          {
            id: "premium",
            name: "Premium",
            monthly: 9.99,
            yearly: 99.99,
            highlights: [
              "Acces complet la toate poveștile premium + capitole bonus",
              "Acces anticipat la noile lansări",
              "Suport prioritar și surprize exclusive",
            ],
            recommended: true,
            description:
              "Pentru cititorii care doresc experiența completă și bonusuri speciale.",
          },
        ],
        testimonials: {
          title: "Ce spun cititoarele",
          items: [
            {
              id: 1,
              name: "Elena M.",
              text: "Am trecut la Premium și capitolele extra sunt extraordinare! Merită fiecare leu.",
              role: "Cititoare, București",
            },
            {
              id: 2,
              name: "Ioana P.",
              text: "Oferta anuală m-a convins. Economisesc bani și primesc conținut de calitate.",
              role: "Subscriber",
            },
            {
              id: 3,
              name: "Maria T.",
              text: "Lectura fără reclame și bonusurile exclusive fac experiența mult mai plăcută.",
              role: "Cititoare fidelă",
            },
          ],
        },
        trust: {
          safePayments: {
            title: "Plăți sigure",
            description:
              "Procesăm plățile prin Stripe. Datele cardului nu sunt stocate niciodată pe serverele noastre.",
          },
          cancelAnytime: {
            title: "Anulezi oricând",
            description: "Oprești reînnoirea din profil, fără taxe ascunse.",
          },
          supportRefund: {
            title: "Suport și refund",
            description:
              "Suport prioritar pentru Premium și refund în 30 de zile.",
          },
        },
        alertSubscribed:
          "Te-ai abonat la {{planId}} ({{billing}}) — demo flux. Integrare backend necesară.",
      },
      upcomingPage: {
        cta: {
          title: "Vrei Acces Înaintea Tuturor? 🚀",
          description:
            "Abonează-te acum și deblochează acces timpuriu la povești, evenimente live și conținut exclusiv din culise.",
          button: "Mergi la Abonare",
        },
        hero: {
          title: "În curând 🌟",
          description:
            "Povești proaspete, evenimente captivante și colecții exclusive sunt la orizont. Fii primul care experimentează magia.",
        },
        items: [
          {
            title: "Nouă Poveste: Pădurea Magică",
            date: "Lansare pe 25 August 2025",
            iconKey: "book",
          },
          {
            title: "Eveniment Live: Noaptea Povestirilor",
            date: "Alătură-te pe 1 Septembrie 2025",
            iconKey: "users",
          },
          {
            title: "Noua Colecție: Povești de Aventură",
            date: "În curând!",
            iconKey: "star",
          },
          {
            title: "Interviu Exclusiv cu Autorul",
            date: "1 Octombrie 2025",
            iconKey: "users",
          },
          {
            title: "Atelier de Povestiri Interactive",
            date: "15 Octombrie 2025",
            iconKey: "calendar",
          },
          {
            title: "Colecție de Povestiri de Sărbători",
            date: "Decembrie 2025",
            iconKey: "book",
          },
        ],
      },

      // 🔹 About Page
      aboutPage: {
        hero: {
          title: "Fiecare poveste conturează o lume 🌌",
          description:
            "La StoryTeller, credem că cuvintele poartă magie. Poveștile nu sunt doar povești — ele sunt scântei de inspirație, punți între culturi și voci care conectează inimile în întreaga lume.",
        },
        infoCards: [
          {
            title: "Viziunea Noastră",
            icon: "✨",
            description:
              "Să aprindem imaginația și să inspirăm schimbarea prin arta povestirii. Visăm la o lume unde fiecare voce găsește un ascultător și fiecare poveste lasă o urmă de speranță.",
          },
          {
            title: "Misiunea Noastră",
            icon: "🚀",
            description:
              "Să aducem împreună cititori și povestitori, creând un spațiu vibrant unde poveștile stârnesc curiozitate, inspiră creativitate și cultivă o comunitate globală de visători.",
          },
        ],
        roadmap: [
          {
            year: "2024",
            title: "Lansare & Fundamentare",
            description:
              "Deschidem porțile StoryTeller — un nou cămin pentru povești, unde cititorii și scriitorii se întâlnesc pentru a inspira și a fi inspirați.",
          },
          {
            year: "2025",
            title: "Creșterea Comunității",
            description:
              "Ne propunem să creștem o comunitate globală vibrantă de povestitori, oferind funcții interactive, lecturi live și colaborări.",
          },
          {
            year: "2026",
            title: "Experiența Mobilă",
            description:
              "Aducem magia poveștilor peste tot cu aplicația noastră mobilă dedicată — făcând povestirea parte din viața de zi cu zi.",
          },
          {
            year: "2027",
            title: "Impact Global",
            description:
              "Viziunea noastră este să oferim voce milioane de oameni din întreaga lume, transformând StoryTeller în platforma principală pentru creativitate și inspirație.",
          },
        ],
        cta: {
          title: "Fii parte din poveste ✨",
          description:
            "Poveștile sunt mai puternice atunci când sunt împărtășite. Alătură-te nouă pentru a construi o lume plină de imaginație, curaj și inspirație — o poveste la un moment dat.",
          button: "Abonează-te",
        },
      },

      // 🔹 Alte texte existente (păstrate)
      storyNotFound: {
        title: "Povestea nu a fost găsită",
        description:
          "Povestea pe care încerci să o accesezi nu există sau a fost ștearsă.",
        backButton: "Înapoi la toate poveștile",
      },
      storyPagination: {
        prev: "Anterior",
        next: "Următoare",
        pageInfo: "Pagina {{current}} din {{total}}",
      },
      storyContent: {
        noContent: "Nu există conținut suplimentar pentru această poveste.",
      },
      hero: {
        title: "Citește Povești Imaginare",
        subtitle:
          "Explorează o colecție de romance, sci-fi, fantasy și altele.",
        cta: "Vezi Poveștile",
        alt: "Fată care citește",
      },
      featuredStories: "Povești Recomandate",
      adFreeTitle: "Bucură-te de o experiență fără reclame!",
      adFreeDescription:
        "Deblochează lectură neîntreruptă, conținut exclusiv și o experiență mai lină prin upgrade la premium. Spune adio reclamelor și bun venit mai multor povești!",
      adFreeButton: "Go Ad-Free acum",
      footerText: "PovestiMagice. Toate drepturile rezervate.",
      allStoriesTitle: "Toate poveștile",
      noStoriesFound: "Nicio poveste găsită...",
      usingLocalData: "Se folosesc date locale.",
      allCategories: "Toate",
      accessLevels: {
        free: "Gratuit",
        basic: "Basic",
        premium: "Premium",
      },
      story: "Poveste",
      rating: "Evaluare",
      type: "Tip",
      noCategory: "Fără categorie",
      storyPremiumTitle: "Poveste exclusivă pentru membri Premium",
      storyPremiumDescription:
        "Această poveste este disponibilă doar pentru abonații Premium.",
      storyPremiumButton: "Devino membru Premium",
      storyBasicPreview: "Aceasta este doar o previzualizare a poveștii.",
      storyBasicButton: "Continuă citirea cu planul Basic sau Premium 💫",
      backToAllStories: "Înapoi la toate poveștile",
      commentsTitle: "Comentarii",
      noComments: "Nu există comentarii încă.",
      commentNamePlaceholder: "Numele tău",
      commentTextPlaceholder: "Scrie un comentariu...",
      addCommentButton: "Adaugă comentariu",
      averageRating: "Rating mediu:",
      welcome: "Bun venit!",
      login: "Autentificare",
      signup: "Înregistrare",
      readMore: "Continuă citirea",
      category: "Categorie",
      storyLocked:
        "Această poveste este disponibilă doar pentru membrii {{plan}}.",
      subscribeNow: "Abonează-te acum",
    },
  },

  en: {
    translation: {
      allStories: "All Stories",
      about: "About",
      upcoming: "Upcoming",
      subscribe: "Subscribe",

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

      // 🔹 Alte texte existente
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

  fr: {
    translation: {
      allStories: "Toutes les histoires",
      about: "À propos",
      upcoming: "À venir",
      subscribe: "S'abonner",

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
