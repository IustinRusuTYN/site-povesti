const fr = {
  translation: {
    allStories: "Toutes les histoires",
    about: "À propos",
    upcoming: "À venir",
    subscribe: "S'abonner",

    search: {
      placeholder: "Rechercher une histoire...",
    },
    common: {
      na: "N/A",
      dark: "Sombre",
      light: "Clair",
      minutesShort: "min",
      story: "Histoire",
    },

    rating: {
      averageLabel: "Note moyenne :",
      votesLabel: "{{count}} votes",
      loading: "Chargement de la note...",
      loginToVote: "Connectez-vous pour voter.",
      oneVoteOnly: "Vous ne pouvez voter qu'une seule fois.",
      alreadyRated: "Vous avez déjà noté cette histoire.",
      yourVoteSaved: "Votre note : {{value}}/5 (enregistrée)",
      errorSave: "Échec de l'enregistrement de la note",
    },
    comments: {
      title: "Commentaires",
      none: "Aucun commentaire pour l’instant.",
      placeholder: "Écrire un commentaire...",
      submit: "Envoyer",
      sending: "Envoi...",
      loading: "Chargement des commentaires...",
      mustBeLoggedIn: "Vous devez être connecté pour commenter",
      confirmDelete: "Voulez-vous vraiment supprimer ce commentaire ?",
      delete: "Supprimer",
      errorAdd: "Impossible d’ajouter le commentaire",
      errorDelete: "Impossible de supprimer le commentaire",
    },

    subscribePage: {
      alreadyOnPlan: "Vous avez déjà ce forfait.",
      billing: {
        monthly: "Mensuel",
        yearly: "Annuel",
      },
      planCard: {
        recommended: "Recommandé",
        goPremium: "Choisir Premium",
        chooseBasic: "Choisir Basic",
        currentPlan: "Forfait actuel",
        upgrade: "Passer à Premium",
        downgrade: "Rétrograder",
        manage: "Gérer",
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
          title: "Paiement sécurisé avec Stripe",
          description:
            "Paiements chiffrés, conforme PCI. Nous ne stockons pas et n’avons jamais accès aux données de votre carte.",
        },
        cancelAnytime: {
          title: "Annulez à tout moment, sans prise de tête",
          description:
            "Arrêtez le renouvellement depuis votre compte en quelques secondes. Aucun frais caché, aucune question.",
        },
        supportRefund: {
          title: "Support rapide & garantie de satisfaction",
          description:
            "Le Premium bénéficie d’un support prioritaire. Si ce n’est pas pour vous, des options de remboursement sont disponibles selon notre politique.",
        },
      },
      alertSubscribed:
        "Vous vous êtes abonné à {{planId}} ({{billing}}) — flux démo. Intégration backend nécessaire.",
    },

    upcomingPage: {
      hero: {
        badge: "Prochainement",
        title: "L'Évolution de Notre Plateforme",
        description:
          "Découvrez les améliorations planifiées qui rendront votre expérience de lecture encore meilleure, étape par étape.",
        button: "Voir Nos Plans",
      },
      featuresTitle: "Fonctionnalités à Venir ✨",
      features: [
        {
          icon: "🔔",
          title: "Système de Notifications",
          date: "T2 2026",
          description:
            "Recevez des alertes personnalisées pour les nouveaux articles de vos catégories préférées, directement dans votre navigateur.",
        },
        {
          icon: "⭐",
          title: "Articles Favoris",
          date: "T3 2026",
          description:
            "Enregistrez et organisez vos articles préférés dans des collections personnalisées pour un accès rapide.",
        },
        {
          icon: "📊",
          title: "Statistiques de Lecture",
          date: "T4 2026",
          description:
            "Suivez votre progression de lecture, le temps passé et les articles lus dans un tableau de bord personnalisé.",
        },
        {
          icon: "🎨",
          title: "Thèmes Personnalisables",
          date: "T1 2027",
          description:
            "Choisissez parmi plusieurs thèmes de couleurs et styles de police pour une expérience de lecture personnalisée.",
        },
        {
          icon: "💾",
          title: "Mode Hors Ligne",
          date: "T2 2027",
          description:
            "Téléchargez des articles pour les lire hors ligne, parfait pour les voyages ou les zones sans internet.",
        },
        {
          icon: "🔍",
          title: "Recherche & filtres avancés",
          date: "T3 2027",
          description:
            "Trouvez rapidement ce dont vous avez envie : par genre, ambiance, tropes, longueur, niveau d’intensité et type de fin (heureuse/tragique/twist).",
        },
      ],
      timelineTitle: "Notre Feuille de Route de Développement 🗺️",
      timeline: [
        {
          year: "2026",
          quarter: "T1",
          title: "Améliorations UI/UX",
          description:
            "Optimisation continue de l'interface avec retours de la communauté, animations plus fluides et navigation plus intuitive.",
          status: "inProgress",
        },
        {
          year: "2026",
          quarter: "T2",
          title: "Système de Notifications Push",
          description:
            "Implémentation de notifications dans le navigateur pour nouveaux articles et mises à jour importantes de vos catégories préférées.",
          status: "upcoming",
        },
        {
          year: "2026",
          quarter: "T3",
          title: "Favoris et Collections",
          description:
            "Enregistrez vos articles favoris et organisez-les dans des collections personnalisées avec tags et notes.",
          status: "planned",
        },
        {
          year: "2026",
          quarter: "T4",
          title: "Tableau de Bord Statistiques",
          description:
            "Visualisez les statistiques de votre activité : articles lus, temps de lecture et catégories préférées.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T1",
          title: "Thèmes et Personnalisation",
          description:
            "Plusieurs thèmes de couleurs, styles de police et options de mise en page pour personnaliser votre expérience de lecture.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T2",
          title: "Mode Hors Ligne et PWA",
          description:
            "Transformation en Progressive Web App avec possibilité d'enregistrer des articles pour lecture hors ligne.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T3",
          title: "Recherche et Filtrage Avancés",
          description:
            "Moteur de recherche amélioré avec filtres multiples, suggestions automatiques et résultats pertinents instantanés.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "T4",
          title: "Commentaires et Interaction",
          description:
            "Système de commentaires modéré, j'aime et possibilité d'interagir avec les auteurs des articles.",
          status: "planned",
        },
      ],
      cta: {
        title: "Soutenez le Développement de la Plateforme",
        description:
          "Abonnez-vous et aidez-nous à implémenter ces fonctionnalités plus rapidement. Chaque abonnement soutient le développement continu de la plateforme.",
        button: "S'abonner Maintenant",
      },
    },

    aboutPage: {
      hero: {
        badge: "À Propos de Nous",
        title: "Découvrez Notre Histoire",
        description:
          "Une plateforme dédiée aux passionnés de lecture, construite avec soin pour offrir du contenu de qualité et une expérience agréable.",
        primaryButton: "Commencer",
        secondaryButton: "En Savoir Plus",
      },
      infoCardsTitle: "Pourquoi Nous Choisir",
      infoCards: [
        {
          icon: "📚",
          title: "Histoires sélectionnées avec soin",
          description:
            "Nous publions de la fiction sélectionnée avec soin et révisée pour la cohérence, le rythme et l’impact émotionnel.",
        },
        {
          icon: "🎯",
          title: "Focus sur la Qualité",
          description:
            "Nous priorisons la qualité plutôt que la quantité, offrant du contenu qui mérite vraiment votre temps.",
        },
        {
          icon: "💡",
          title: "Développement Continu",
          description:
            "Une plateforme en évolution constante, améliorée étape par étape basée sur les retours de la communauté.",
        },
        {
          icon: "🤝",
          title: "Communauté Authentique",
          description:
            "Une communauté croissante de lecteurs qui apprécient le journalisme de qualité et les débats constructifs.",
        },
      ],
      roadmapTitle: "Notre Parcours 🚀",
      roadmap: [
        {
          year: "2026",
          title: "Lancement de la Plateforme",
          description:
            "Nous avons créé une plateforme simple et fonctionnelle, dédiée à la distribution de contenu de qualité, avec accent sur l'expérience utilisateur agréable.",
        },
        {
          year: "2027",
          title: "Améliorations Continues",
          description:
            "Nous développons de nouvelles fonctionnalités basées sur les retours de la communauté : système de notifications, favoris et statistiques personnelles.",
        },
        {
          year: "2028",
          title: "Extension et Personnalisation",
          description:
            "Nous introduisons des thèmes personnalisables, mode hors ligne et recherche avancée pour une expérience optimisée.",
        },
        {
          year: "2029",
          title: "Communauté Active",
          description:
            "Nous construisons un espace d'interaction grâce à un système de commentaires modéré et des fonctionnalités sociales responsables.",
        },
        {
          year: "2030",
          title: "Maturité et Stabilité",
          description:
            "Nous consolidons la plateforme avec des fonctionnalités matures, maintenant un équilibre entre innovation et stabilité.",
        },
      ],
      cta: {
        title: "Rejoignez Notre Voyage",
        description:
          "Faites partie de notre communauté et recevez des mises à jour régulières, du contenu exclusif et l'accès aux nouvelles fonctionnalités au fur et à mesure que nous les développons.",
        button: "S'abonner Maintenant",
        secondaryButton: "Nous Contacter",
      },
    },

    contact: {
      title: "Contact",
      authRequiredTitle: "Connexion requise",
      authRequiredBody:
        "Pour nous envoyer un message, veuillez vous connecter ou créer un compte.",
      signIn: "Se connecter",
      signUp: "Créer un compte",
      sending: "Envoi en cours...",
      sentOk:
        "Votre message a été envoyé. Nous vous répondrons dès que possible.",
      sentError:
        "Impossible d’envoyer le message. Réessayez ou envoyez-nous un email.",
      subtitle:
        "Une question, un problème ou un retour ? Écris-nous et nous répondrons dès que possible.",
      emailLabel: "Email support",
      formTitle: "Envoyer un message",
      send: "Envoyer",
      emailSubject: "Nouveau message",
      note18:
        "Note : ce site contient du contenu 18+. Si vous signalez un problème, merci d’inclure des détails utiles (lien, titre, capture).",
      form: {
        name: "Nom",
        email: "Email",
        message: "Message",
        namePlaceholder: "Votre nom",
        emailPlaceholder: "nom@exemple.com",
        messagePlaceholder: "Écrivez votre message ici...",
      },
    },
    terms: {
      title: "Conditions d’utilisation",
      subtitle:
        "Ces conditions décrivent les règles d’utilisation de VelvetTales.",
      sections: [
        {
          title: "1) Éligibilité (18+)",
          body: "La plateforme est destinée uniquement aux personnes âgées de 18 ans ou plus.",
          bullets: [
            "En utilisant le site, vous confirmez avoir 18+.",
            "Si vous avez moins de 18 ans, merci de quitter le site.",
          ],
        },
        {
          title: "2) Comptes et accès",
          body: "Certaines fonctionnalités peuvent nécessiter un compte et/ou un abonnement.",
          bullets: [
            "Vous êtes responsable de la sécurité de votre compte.",
            "Nous pouvons restreindre l’accès en cas d’abus ou de violation.",
          ],
        },
        {
          title: "3) Contenu et utilisation acceptable",
          body: "Toutes les histoires sont fictives. Il est interdit d’utiliser le site pour du spam, des attaques ou des activités illégales.",
          bullets: [
            "Ne publiez pas de données personnelles dans les commentaires.",
            "Respectez les règles de la communauté.",
          ],
        },
        {
          title: "4) Abonnements, paiements et résiliation",
          body: "Si vous choisissez un plan payant, les paiements sont traités par des prestataires tiers et la résiliation est disponible depuis votre compte.",
          bullets: [
            "Les avantages des plans peuvent évoluer.",
            "Tout remboursement suit la politique publiée sur le site.",
          ],
        },
        {
          title: "5) Commentaires et notes",
          body: "Les commentaires et les notes doivent respecter les règles de la plateforme et la loi applicable.",
          bullets: [
            "Nous nous réservons le droit de modérer.",
            "Un contenu abusif peut entraîner une suspension.",
          ],
        },
        {
          title: "6) Limitation de responsabilité",
          body: "Vous utilisez le site à vos risques. Nous ne garantissons pas une disponibilité continue ni l’absence d’erreurs.",
          bullets: [],
        },
        {
          title: "7) Contact",
          body: "Pour toute question, utilisez la page Contact.",
          bullets: [],
        },
      ],
    },
    privacy: {
      title: "Politique de confidentialité",
      subtitle:
        "Voici un résumé clair des données collectées et de leur utilisation.",
      sections: [
        {
          title: "1) Données collectées",
          body: "Nous pouvons collecter des données de compte et des données techniques nécessaires au fonctionnement.",
          bullets: [
            "Email et profil (si vous créez un compte).",
            "Données d’usage (préférences, progression, interactions).",
          ],
        },
        {
          title: "2) Utilisation des données",
          body: "Nous utilisons les données pour l’authentification, la personnalisation, le support et l’amélioration du service.",
          bullets: [
            "Pour fournir l’accès aux fonctionnalités et abonnements.",
            "Pour prévenir la fraude et les abus.",
          ],
        },
        {
          title: "3) Prestataires tiers",
          body: "Nous pouvons utiliser des prestataires tiers pour les paiements et l’infrastructure.",
          bullets: [
            "Paiements : Stripe (si vous utilisez des abonnements).",
            "Infrastructure : services d’hébergement / base de données.",
          ],
        },
        {
          title: "4) Vos droits",
          body: "Vous pouvez demander l’accès, la correction ou la suppression de vos données, dans les limites légales.",
          bullets: [
            "Contactez-nous pour toute demande liée aux données.",
            "Certaines données peuvent être conservées pour des obligations légales.",
          ],
        },
      ],
    },
    cookies: {
      title: "Politique de cookies",
      subtitle:
        "Nous utilisons des cookies pour les fonctionnalités, l’analyse et une meilleure expérience.",
      sections: [
        {
          title: "1) Qu’est-ce qu’un cookie",
          body: "Les cookies sont de petits fichiers stockés dans votre navigateur pour mémoriser des préférences.",
          bullets: [],
        },
        {
          title: "2) Types de cookies",
          body: "Nous pouvons utiliser des cookies essentiels, de préférences et d’analyse.",
          bullets: [
            "Essentiels : connexion, réglages.",
            "Préférences : thème dark/light, langue.",
            "Analyse : statistiques anonymisées (si activées).",
          ],
        },
        {
          title: "3) Les contrôler",
          body: "Vous pouvez gérer les cookies dans les paramètres de votre navigateur.",
          bullets: [
            "Vous pouvez supprimer les cookies.",
            "Vous pouvez bloquer les cookies (certaines fonctions peuvent être affectées).",
          ],
        },
      ],
    },
    legal: {
      templateNote:
        "Note : ce texte est un modèle informatif et ne constitue pas un avis juridique.",
    },

    profile: {
      title: "Mon profil",

      // ProfileInfo extra keys
      fullName: "Nom complet",
      bio: "Bio",
      saving: "Enregistrement...",
      editProfile: "Modifier le profil",
      changeAvatar: "Changer la photo",

      memberSince: "Membre depuis",
      admin: "Administrateur",
      user: "Utilisateur",

      accountDetails: "Détails du compte",
      preferences: "Préférences",
      language: "Langue",
      subscriptionLabel: "Abonnement",
      theme: "Thème",
      notifications: "Notifications",
      enabled: "Activé",

      nameRequired: "Le nom est obligatoire",
      updateError: "Impossible de mettre à jour le profil",
      updateSuccess: "Profil mis à jour avec succès !",

      accountInfo: "Informations du compte",
      readingProgress: "Progrès de lecture",
      totalProgress: "Total d'histoires lues",
      goal: "Objectif : {{count}} histoires",
      weekActivityTooltip: "{{count}} histoires lues",

      startReading: "Commencez à lire des histoires pour les voir ici",
      storiesCount: "{{count}} histoires",
      progress: "Progression",
      completed: "Terminée",

      noRecommendations: "Aucune recommandation disponible",
      untitledStory: "Histoire sans titre",
      noDescription: "Aucune description disponible",
      unknownAuthor: "Inconnu",

      plan: {
        free: "Gratuit",
        basic: "Basique",
        premium: "Premium",
      },

      tabs: {
        info: "Infos",
        stats: "Statistiques",
        recent: "Récents",
        recommended: "Recommandés",
        subscription: "Abonnement",
        settings: "Paramètres",
      },

      subtitle: "Gérez votre compte et vos préférences",
      namePlaceholder: "Votre nom",
      bioPlaceholder: "Parlez-nous de vous...",
      defaultName: "Utilisateur",
      noBio: "Aucune description.",
      edit: "Modifier",
      save: "Enregistrer",
      cancel: "Annuler",
      logout: "Déconnexion",

      stats: {
        comments: "Commentaires",
        ratings: "Évaluations",
        storiesRead: "Lus",
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
      recommendedForYou: "Recommandées pour vous",

      subscription: {
        month: "mois",
        statusCanceled: "Annulé",
        statusInactive: "Inactif",
        currentPlan: "Forfait actuel",
        price: "Prix",
        year: "an",
        statusLabel: "Statut de l'abonnement",
        statusActive: "Actif",
        renewDate: "Date de renouvellement",
        paymentMethod: "Moyen de paiement",
        paymentValue: "Carte bancaire",
        manageSubscription: "Changer de forfait",
        unsubscribe: "Se désabonner",
        alertUnsubscribed: "Désabonnement effectué avec succès",

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
            noCategory: "Sans catégorie",
          },
        },
      },

      settings: {
        notifications: "Notifications",
        emailNotif: "Notifications par e-mail",
        pushNotif: "Notifications push",
        language: "Langue",
        dangerZone: "Zone dangereuse",
        deleteAccount: "Supprimer le compte",
        confirmDelete:
          "Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.",
        toggleEmail: "Activer/désactiver les notifications e-mail",
        togglePush: "Activer/désactiver les notifications push",
        deleteNotImplemented:
          "La suppression du compte n'est pas encore implémentée",
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
      noContent: "Aucun contenu supplémentaire disponible pour cette histoire.",
    },

    hero: {
      badge: "Découvrez des Histoires",
      title: "Découvrez des Histoires qui Vous Inspirent",
      subtitle:
        "Explorez une collection soignée d'histoires captivantes de divers genres et catégories. Trouvez votre prochaine lecture favorite.",
      alt: "Fille lisant un livre",
      cta: "Explorer les Histoires",
      secondaryCta: "En Savoir Plus",
    },
    adFree: {
      badge: "100% Sans Publicité",
      title: "Lisez Sans Distractions. Concentrez-vous sur les Histoires.",
      description:
        "Profitez d'une expérience de lecture pure, sans publicités intrusives, pop-ups ou interruptions. Juste vous et vos histoires préférées.",
      benefits: [
        "Zéro publicité",
        "Vitesse maximale",
        "Confidentialité garantie",
      ],
      button: "S'inscrire Maintenant",
      trust: "✓ Paiement 100% Sécurisé • Annulation à tout moment",
    },

    featuredBadge: "Histoires en Vedette",
    featuredStories: "Découvrez des Histoires Captivantes",
    discoverAmazingStories:
      "Explorez notre collection soignée d'histoires extraordinaires",
    viewAllStories: "Voir Toutes les Histoires",

    footerText: "VelvetTales. Tous droits réservés.",
    footerDisclaimer: "Contenu 18+. Toutes les histoires sont fictives.",
    footerLinksTitle: "Liens",
    footerAllStories: "Toutes les histoires",
    footerPlans: "Offres",
    footerContact: "Contact",
    footerLegalTitle: "Légal",
    footerTerms: "Conditions",
    footerPrivacy: "Confidentialité",
    footerCookies: "Cookies",
    footerFollow: "Suivez-nous",
    footerContactLink: "Nous contacter",
    footerRights: "Tous droits réservés.",
    footerMadeForReaders: "Pensé pour les vrais lecteurs.",
    reading: "Lecture",
    chapter: "Chapitre",
    chapterShort: "Ch",
    upcomingChapter: "Chapitre à venir",
    upcomingChapterTitle: "Chapitre à venir",
    upcomingChapterDesc:
      "Ce chapitre sera ajouté bientôt. Revenez pour la suite.",

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

    welcome: "Bienvenue!",
    login: "Connexion",
    signup: "Inscription",
    readMore: "Continuer la lecture",
    category: "Catégorie",
    storyLocked:
      "Cette histoire est disponible uniquement pour les membres {{plan}}.",
    subscribeNow: "Abonnez-vous maintenant",
  },
};

// IMPORTANT: păstrează obiectul stories, hero, aboutPage, upcomingPage etc.
// (poți muta stories ulterior în fișiere separate dacă vrei)

export default fr;
