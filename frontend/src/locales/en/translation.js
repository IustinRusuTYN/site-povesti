const en = {
  translation: {
    allStories: "All Stories",
    about: "About",
    upcoming: "Upcoming",
    subscribe: "Subscribe",

    search: {
      placeholder: "Search for a story...",
    },
    common: {
      na: "N/A",
      dark: "Dark",
      light: "Light",
      minutesShort: "min",
      story: "Story",
    },

    rating: {
      averageLabel: "Average rating:",
      votesLabel: "{{count}} votes",
      loading: "Loading rating...",
      loginToVote: "Sign in to rate.",
      oneVoteOnly: "You can vote only once.",
      alreadyRated: "You already rated this story.",
      yourVoteSaved: "Your rating: {{value}}/5 (saved)",
      errorSave: "Failed to save rating",
    },
    comments: {
      title: "Comments",
      none: "No comments yet.",
      placeholder: "Write a comment...",
      submit: "Submit",
      sending: "Sending...",
      loading: "Loading comments...",
      mustBeLoggedIn: "You must be signed in to comment",
      confirmDelete: "Are you sure you want to delete this comment?",
      delete: "Delete",
      errorAdd: "Failed to add comment",
      errorDelete: "Failed to delete comment",
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
      // ProfileInfo extra keys
      fullName: "Full Name",
      bio: "Bio",
      saving: "Saving...",
      editProfile: "Edit Profile",
      changeAvatar: "Change photo",

      memberSince: "Member since",
      admin: "Administrator",
      user: "User",

      accountDetails: "Account Details",
      preferences: "Preferences",
      language: "Language",
      subscriptionLabel: "Subscription",
      theme: "Theme",
      notifications: "Notifications",
      enabled: "Enabled",

      nameRequired: "Name is required",
      updateError: "Failed to update profile",
      updateSuccess: "Profile updated successfully!",

      accountInfo: "Account Information",
      readingProgress: "Reading Progress",
      totalProgress: "Total Stories Read",
      goal: "Goal: {{count}} stories",
      weekActivityTooltip: "{{count}} stories read",

      startReading: "Start reading stories to see them here",
      storiesCount: "{{count}} stories",
      progress: "Progress",
      completed: "Completed",

      noRecommendations: "No recommendations available",
      untitledStory: "Untitled Story",
      noDescription: "No description available",
      unknownAuthor: "Unknown",

      // plan badge texts
      plan: {
        free: "Free",
        basic: "Basic",
        premium: "Premium",
      },
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
        comments: "Comments",
        ratings: "Ratings",
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
        month: "month",
        statusCanceled: "Canceled",
        statusInactive: "Inactive",
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
        toggleEmail: "Toggle email notifications",
        togglePush: "Toggle push notifications",
        deleteNotImplemented: "Delete account is not implemented yet",
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
      hero: {
        badge: "Coming Soon",
        title: "Our Platform Evolution",
        description:
          "Discover the planned improvements that will make your reading experience even better, step by step.",
        button: "View Our Plans",
      },
      featuresTitle: "Upcoming Features ✨",
      features: [
        {
          icon: "🔔",
          title: "Notification System",
          date: "Q2 2026",
          description:
            "Receive personalized alerts for new articles from your favorite categories, directly in your browser.",
        },
        {
          icon: "⭐",
          title: "Favorite Articles",
          date: "Q3 2026",
          description:
            "Save and organize your favorite articles in custom collections for quick access.",
        },
        {
          icon: "📊",
          title: "Reading Statistics",
          date: "Q4 2026",
          description:
            "Track your reading progress, time spent and articles read in a personalized dashboard.",
        },
        {
          icon: "🎨",
          title: "Customizable Themes",
          date: "Q1 2027",
          description:
            "Choose from multiple color themes and font styles for a personalized reading experience.",
        },
        {
          icon: "💾",
          title: "Offline Mode",
          date: "Q2 2027",
          description:
            "Download articles to read offline, perfect for travel or areas without internet.",
        },
        {
          icon: "🔍",
          title: "Advanced Search",
          date: "Q3 2027",
          description:
            "Smart filtering by category, date, author and keywords for quick content discovery.",
        },
      ],
      timelineTitle: "Our Development Roadmap 🗺️",
      timeline: [
        {
          year: "2026",
          quarter: "Q1",
          title: "UI/UX Improvements",
          description:
            "Continuous interface optimization with community feedback, smoother animations and more intuitive navigation.",
          status: "inProgress",
        },
        {
          year: "2026",
          quarter: "Q2",
          title: "Push Notification System",
          description:
            "Implementation of browser notifications for new articles and important updates from your favorite categories.",
          status: "upcoming",
        },
        {
          year: "2026",
          quarter: "Q3",
          title: "Favorites and Collections",
          description:
            "Save favorite articles and organize them in custom collections with tags and notes.",
          status: "planned",
        },
        {
          year: "2026",
          quarter: "Q4",
          title: "Personal Statistics Dashboard",
          description:
            "Visualize statistics about your activity: articles read, reading time and favorite categories.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "Q1",
          title: "Themes and Customization",
          description:
            "Multiple color themes, font styles and layout options to personalize your reading experience.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "Q2",
          title: "Offline Mode and PWA",
          description:
            "Transform into Progressive Web App with ability to save articles for offline reading.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "Q3",
          title: "Advanced Search and Filtering",
          description:
            "Enhanced search engine with multiple filters, auto-suggestions and instant relevant results.",
          status: "planned",
        },
        {
          year: "2027",
          quarter: "Q4",
          title: "Comments and Interaction",
          description:
            "Moderated comment system, likes and ability to interact with article authors.",
          status: "planned",
        },
      ],
      cta: {
        title: "Support Platform Development",
        description:
          "Subscribe and help us implement these features faster. Every subscription supports the continuous development of the platform.",
        button: "Subscribe Now",
      },
    },

    aboutPage: {
      hero: {
        badge: "About Us",
        title: "Discover Our Story",
        description:
          "A platform dedicated to reading enthusiasts, carefully built to deliver quality content and a pleasant experience.",
        primaryButton: "Get Started",
        secondaryButton: "Learn More",
      },
      infoCardsTitle: "Why Choose Us",
      infoCards: [
        {
          icon: "📚",
          title: "Carefully Selected Content",
          description:
            "Thoughtfully chosen and verified articles covering relevant topics in technology, science, culture and society.",
        },
        {
          icon: "🎯",
          title: "Focus on Quality",
          description:
            "We prioritize quality over quantity, offering content that truly deserves your time.",
        },
        {
          icon: "💡",
          title: "Continuous Development",
          description:
            "A platform in constant evolution, improved step by step based on community feedback.",
        },
        {
          icon: "🤝",
          title: "Authentic Community",
          description:
            "A growing community of readers who appreciate quality journalism and constructive debates.",
        },
      ],
      roadmapTitle: "Our Journey 🚀",
      roadmap: [
        {
          year: "2026",
          title: "Platform Launch",
          description:
            "We created a simple and functional platform dedicated to quality content distribution, with focus on pleasant user experience.",
        },
        {
          year: "2027",
          title: "Continuous Improvements",
          description:
            "We develop new features based on community feedback: notification system, favorites and personal statistics.",
        },
        {
          year: "2028",
          title: "Expansion and Customization",
          description:
            "We introduce customizable themes, offline mode and advanced search for an optimized experience.",
        },
        {
          year: "2029",
          title: "Active Community",
          description:
            "We build an interaction space through moderated comment system and responsible social features.",
        },
        {
          year: "2030",
          title: "Maturity and Stability",
          description:
            "We consolidate the platform with mature features, maintaining a balance between innovation and stability.",
        },
      ],
      cta: {
        title: "Join Our Journey",
        description:
          "Be part of our community and receive regular updates, exclusive content and access to new features as we develop them.",
        button: "Subscribe Now",
        secondaryButton: "Contact Us",
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
      badge: "Discover Stories",
      title: "Discover Stories that Inspire You",
      subtitle:
        "Explore a curated collection of captivating stories from diverse genres and categories. Find your next favorite read.",
      alt: "Girl reading a book",
      cta: "Explore Stories",
      secondaryCta: "Learn More",
    },
    adFree: {
      badge: "100% Ad-Free",
      title: "Read Without Distractions. Focus on Stories.",
      description:
        "Enjoy a pure reading experience with no intrusive ads, pop-ups, or interruptions. Just you and your favorite stories.",
      benefits: ["Zero ads", "Maximum speed", "Privacy guaranteed"],
      button: "Sign Up Now",
      trust: "✓ 100% Secure Payment • Cancel anytime",
    },

    featuredBadge: "Featured Stories",
    featuredStories: "Discover Captivating Stories",
    discoverAmazingStories:
      "Explore our curated collection of extraordinary stories",
    viewAllStories: "View All Stories",

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
    welcome: "Welcome!",
    login: "Sign In",
    signup: "Sign Up",
    readMore: "Continue reading",
    category: "Category",
    storyLocked: "This story is available only for {{plan}} members.",
    subscribeNow: "Subscribe now",
  },
};

// IMPORTANT: păstrează obiectul stories, hero, aboutPage, upcomingPage etc.
// (poți muta stories ulterior în fișiere separate dacă vrei)

export default en;
