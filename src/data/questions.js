// 100-Question Bank for HUMAN CAPTCHA
// 50 Questions: Indian & Malayali culture, daily life, tea stalls, bus travel, food, family & humor.
// 50 Questions: Universal human moments, kindness, empathy, phone habits & awkward situations.
// Written in clean, easy-to-medium English. Exactly 100 questions.

export const QUESTION_BANK = [
  // ==========================================
  // 50 INDIAN & MALAYALI EXPERIENCES (1 to 50)
  // ==========================================
  {
    id: 1,
    category: "Chai & Snacks",
    text: "You dip a biscuit (like Marie or Parle-G) into hot tea, but you hold it for one second too long and it breaks into the cup. What do you do?",
    options: [
      { text: "Try to rescue the sinking biscuit with a spoon like an emergency operation.", score: 8, trait: "Biscuit Doctor" },
      { text: "Drink the tea quickly at the end to eat the sweet biscuit mush at the bottom.", score: 9, trait: "Sweet Finisher" },
      { text: "Drop another biscuit in by accident while trying to save the first one.", score: 10, trait: "Double Trouble" },
      { text: "Sigh quietly and accept that the cup of tea has claimed its sacrifice.", score: 5, trait: "Calm Realist" }
    ]
  },
  {
    id: 2,
    category: "Family & Relatives",
    text: "At a family wedding or function, an uncle or aunty asks you: 'So, what are you doing now? Any marriage plans?' How do you escape?",
    options: [
      { text: "Smile politely, say 'Looking for good opportunities!', and quickly walk to the food counter.", score: 9, trait: "Smooth Escaper" },
      { text: "Pretend my phone is vibrating in my pocket and walk away saying 'Important call!'", score: 9, trait: "Fake Call Expert" },
      { text: "Freeze, give an awkward laugh, and look around for my mother to rescue me.", score: 8, trait: "Mother's Shield" },
      { text: "Turn the question back on them: 'Uncle, how is your blood pressure these days?'", score: 5, trait: "Clever Counter" }
    ]
  },
  {
    id: 3,
    category: "Bus Travel",
    text: "A crowded bus pulls up at the bus stand. What is your strategy to secure a seat?",
    options: [
      { text: "Throw a handkerchief or umbrella through the open window onto an empty seat.", score: 6, trait: "Window Kerchief Master" },
      { text: "Stand near someone who looks like they will get off at the next two stops.", score: 8, trait: "Bus Detective" },
      { text: "Stand near the footboard enjoying the breeze and holding the bar tightly.", score: 7, trait: "Breeze Lover" },
      { text: "Wait for the next bus, hoping it will be less crowded (it never is).", score: 10, trait: "Optimistic Waiter" }
    ]
  },
  {
    id: 4,
    category: "Auto Rickshaw Life",
    text: "You ask an auto-rickshaw driver to take you to a place nearby in light rain. The driver says: 'Meter plus 30 rupees'. What do you do?",
    options: [
      { text: "Try to bargain: 'Chetta, meter plus 10 rupees please, it's just straight road!'", score: 9, trait: "Bargain Artist" },
      { text: "Agree and get in immediately because I don't want to get wet in the rain.", score: 8, trait: "Rain Surrenderer" },
      { text: "Walk away with pride, open my umbrella, and regret my decision 2 minutes later.", score: 9, trait: "Stubborn Walker" },
      { text: "Book an Uber or Rapido on my phone while the auto driver watches me.", score: 7, trait: "App Reliant" }
    ]
  },
  {
    id: 5,
    category: "Food Battles",
    text: "You finish eating lunch with a friend or elder at a restaurant. The bill arrives. What happens at the cash counter?",
    options: [
      { text: "A physical wrestling match to grab the bill shouting: 'No, no, I will pay today!'", score: 7, trait: "Bill Wrestler" },
      { text: "Slowly search my pockets pretending I can't find my wallet until they pay.", score: 6, trait: "Slow Wallet Searcher" },
      { text: "Take out my phone quickly to scan the QR code before their hand reaches their pocket.", score: 8, trait: "GPay Ninja" },
      { text: "Calmly say 'Let's split 50-50' like a sensible human.", score: 10, trait: "Splitter" }
    ]
  },
  {
    id: 6,
    category: "Home Secrets",
    text: "You open a round Butter Cookies tin or sweet box in your kitchen cupboard. What is actually inside?",
    options: [
      { text: "Needles, colorful sewing threads, buttons, and safety pins.", score: 10, trait: "Classic Desi Home" },
      { text: "Old passport photos, rubber bands, and expired receipts from 2018.", score: 8, trait: "Memory Box" },
      { text: "Actual cookies! (A true miracle that happens once in 100 years).", score: 5, trait: "Lucky Dreamer" },
      { text: "Medicines and Tiger Balm.", score: 7, trait: "First Aid Kit" }
    ]
  },
  {
    id: 7,
    category: "Visiting Relatives",
    text: "You visit a relative's house. They offer you banana chips, mixture, and tea. What is your polite response?",
    options: [
      { text: "Say 'Ayyoo vendey vendey' , but eat all of it 5 minutes later.", score: 10, trait: "Polite Snacker" },
      { text: "Accept immediately with a big smile: 'Mmm, are these homemade chips?'", score: 7, trait: "Honest Foodie" },
      { text: "Eat only one chip at first to look disciplined, then finish the whole bowl.", score: 9, trait: "Gradual Finisher" },
      { text: "Ask if they have black tea or sulaimani instead of milk tea.", score: 7, trait: "Sulaimani Fan" }
    ]
  },
  {
    id: 8,
    category: "Biryani Truths",
    text: "You are enjoying a delicious hot biryani, and suddenly your tooth bites directly into a whole cardamom (elachi). What happens?",
    options: [
      { text: "My entire mouth freezes in shock as the perfume taste explodes on my tongue.", score: 9, trait: "Elachi Victim" },
      { text: "Quietly spit it into my napkin and continue eating like nothing happened.", score: 8, trait: "Tough Survivor" },
      { text: "Carefully inspect every spoonful from now on like a bomb disposal expert.", score: 10, trait: "Biryani Inspector" },
      { text: "I actually don't mind the taste of cardamom. (Wait, are you human?)", score: 4, trait: "Alien Tongue" }
    ]
  },
  {
    id: 9,
    category: "Kerala Monsoon",
    text: "Three drops of rain fall from the sky outside. What happens to your home electricity?",
    options: [
      { text: "The power goes off instantly. 'Current poyi!' echo through every room.", score: 10, trait: "Classic Power Cut" },
      { text: "I immediately rush to put my phone and power bank on charging before it dies.", score: 8, trait: "Prepared Civilian" },
      { text: "I light an emergency candle or flashlight and sit on the porch listening to rain.", score: 8, trait: "Rain Romantic" },
      { text: "I call the electricity office, but the phone line is busy forever.", score: 9, trait: "Hopeful Caller" }
    ]
  },
  {
    id: 10,
    category: "Mothers & Kitchen",
    text: "What does your mother use empty Horlicks, Bournvita, or Boost glass jars for?",
    options: [
      { text: "Storing mustard seeds (kaduku), chili powder, turmeric, and dried spices.", score: 9, trait: "Zero Waste Mother" },
      { text: "Storing homemade mango pickle with a piece of cloth tied around the lid.", score: 10, trait: "Pickle Vault" },
      { text: "Keeping coins and small keys.", score: 7, trait: "Coin Bank" },
      { text: "Throwing it away. (Impossible, Indian mothers never throw glass jars away!)", score: 3, trait: "Impossible Scenario" }
    ]
  },
  {
    id: 11,
    category: "Market Skills",
    text: "You buy 1 kilo of tomatoes and onions at the local vegetable shop. What is your final request to the seller?",
    options: [
      { text: "“Chetta, a little bit of curry leaves (kariveppila) and green chili please!”", score: 10, trait: "Curry Leaf Legend" },
      { text: "Ask them to round down the bill: 'Make it 90 instead of 94 rupees, brother!'", score: 8, trait: "Round Figure Master" },
      { text: "Pay the exact amount without asking for anything extra.", score: 6, trait: "Quiet Customer" },
      { text: "Take an extra free plastic carry bag 'just in case'.", score: 7, trait: "Bag Collector" }
    ]
  },
  {
    id: 12,
    category: "Onam & Sadhya",
    text: "At an Onam or wedding sadhya, you are completely stuffed, but the server comes with hot semiya or ada pradhaman (payasam). What do you do?",
    options: [
      { text: "Say 'Just a little bit!' and then hold out my banana leaf wide open.", score: 10, trait: "Payasam Lover" },
      { text: "Mix the payasam with a crushed crispy pappadam to get that sweet-salty magic.", score: 9, trait: "Sadhya Connoisseur" },
      { text: "Say 'No more, my stomach will explode!' and then regret it later.", score: 7, trait: "Regretful Denier" },
      { text: "Ask for a paper cup to drink it directly.", score: 9, trait: "Smart Drinker" }
    ]
  },
  {
    id: 13,
    category: "Household Habits",
    text: "Why is the TV remote control inside your living room wrapped in clear plastic wrap?",
    options: [
      { text: "To keep it looking brand new for the next 15 years, obviously.", score: 8, trait: "Remote Preserver" },
      { text: "So tea spills and oily snack fingers don't ruin the rubber buttons.", score: 8, trait: "Snack Defense" },
      { text: "The battery cover broke in 2016, and the tape is holding the batteries together.", score: 10, trait: "Tape Engineer" },
      { text: "My remote has no plastic wrap on it.", score: 6, trait: "Bare Remote Rebel" }
    ]
  },
  {
    id: 14,
    category: "Cinema & Mollywood",
    text: "A classic Mohanlal or Mammootty comedy movie from the 90s is playing on Asianet or Surya TV on Sunday. What do you do?",
    options: [
      { text: "Sit on the sofa and watch the whole movie for the 50th time, quoting every famous dialogue.", score: 10, trait: "True Cinephile" },
      { text: "Watch for 10 minutes while standing, and end up staying for 2 hours.", score: 9, trait: "Accidental Viewer" },
      { text: "Tell everyone in the room: 'Movies back then had real soul, not like today!'", score: 8, trait: "Nostalgic Critic" },
      { text: "Change the channel to a sports match.", score: 5, trait: "Channel Changer" }
    ]
  },
  {
    id: 15,
    category: "WhatsApp Family",
    text: "At 5:45 AM every single day, what happens in your extended family WhatsApp group?",
    options: [
      { text: "Four uncles send animated pictures of blooming roses with glittering 'GOOD MORNING' text.", score: 9, trait: "Family WhatsApp Native" },
      { text: "Someone forwards an unverified medical tip about drinking hot water with lemon to cure everything.", score: 9, trait: "Health Forwarder" },
      { text: "I have had that group muted for 8 years and never open it.", score: 10, trait: "Silent Survivor" },
      { text: "Send a polite 'Good Morning' sticker to avoid family drama.", score: 7, trait: "Peacekeeper" }
    ]
  },
  {
    id: 16,
    category: "New Purchases",
    text: "Someone in your family buys a brand new scooter or car. When do the transparent plastic seat covers come off?",
    options: [
      { text: "Never. They stay until the plastic naturally tears off 2 years later.", score: 10, trait: "Plastic Guardian" },
      { text: "After the first official temple or church vehicle pooja and blessing.", score: 7, trait: "Blessed Rider" },
      { text: "I peel it off on day one because sticking to hot plastic in summer is painful.", score: 6, trait: "Comfort First" },
      { text: "When relatives visit, so they can see the car is brand new.", score: 8, trait: "Showcase Pride" }
    ]
  },
  {
    id: 17,
    category: "Two-Wheeler Logic",
    text: "You are riding your motorcycle or scooter and see a red traffic light 100 meters ahead. What do you do?",
    options: [
      { text: "Turn off the engine completely and coast forward in silence to save 2 drops of petrol.", score: 8, trait: "Fuel Economist" },
      { text: "Look around to see if the traffic police is hiding behind the tree.", score: 8, trait: "Police Radar" },
      { text: "Stop calmly and wait for the light to turn green.", score: 10, trait: "Rule Follower" },
      { text: "Rev the engine at 3 seconds before green so I can take off first.", score: 9, trait: "Traffic Racer" }
    ]
  },
  {
    id: 18,
    category: "Food Rituals",
    text: "How do you eat hot Kerala rice with sambar or parippu curry and crispy pappadam?",
    options: [
      { text: "Crush the pappadam completely with my fist over the rice and mix everything with my fingers.", score: 9, trait: "Hand Mixing Pro" },
      { text: "Eat a piece of crunchy pappadam after every two mouthfuls of rice.", score: 9, trait: "Crisp Balancer" },
      { text: "Use a fork and spoon like I am in a 5-star hotel banquet.", score: 4, trait: "Spoon Offender" },
      { text: "Make neat little rice balls (urula) in my palm before putting them in my mouth.", score: 7, trait: "Urula Master" }
    ]
  },
  {
    id: 19,
    category: "Small Change",
    text: "You buy groceries and the shopkeeper has to give you 2 rupees change. Instead, they hand you two Mango Bite or Eclairs candies. How do you feel?",
    options: [
      { text: "Accept the candies happily and eat one immediately on the walk home.", score: 9, trait: "Sweet Tooth" },
      { text: "Wonder if I can pay my electricity bill one day with 500 candies.", score: 6, trait: "Candy Currency" },
      { text: "Put them in my pocket and find them melted 3 weeks later.", score: 7, trait: "Pocket Melter" },
      { text: "Insist on actual coins: 'Chetta, UPI payment please!'", score: 8, trait: "Digital Purist" }
    ]
  },
  {
    id: 20,
    category: "Monsoon Struggles",
    text: "You are walking outside in heavy Kerala rain with a big black umbrella, and a sudden strong gust of wind hits. What happens?",
    options: [
      { text: "The umbrella turns completely inside-out like a bowl, and I stand soaked looking foolish.", score: 9, trait: "Umbrella Flip Victim" },
      { text: "Angle the umbrella forward like a battle shield against the storm.", score: 9, trait: "Rain Warrior" },
      { text: "Run under the nearest shop roof and wait with 5 other wet strangers.", score: 10, trait: "Shopfront Refuge" },
      { text: "Walk normally. Rain is just liquid sunshine in Kerala.", score: 7, trait: "True Malayali" }
    ]
  },
  {
    id: 21,
    category: "Gulf Uncle Visits",
    text: "A Gulf uncle returns from Dubai or Qatar for a month-long vacation. What is the most exciting moment?",
    options: [
      { text: "Opening the heavy VIP suitcase filled with foreign chocolates, Tang, and perfumes.", score: 10, trait: "Dubai Box Fan" },
      { text: "Hearing stories about how hot Dubai is compared to Kerala.", score: 7, trait: "Story Listener" },
      { text: "Getting a new watch or Casio calculator from abroad.", score: 8, trait: "Gift Collector" },
      { text: "Asking: 'When is your return flight?' 3 days after he arrives.", score: 9, trait: "Cheeky Questioner" }
    ]
  },
  {
    id: 22,
    category: "Thattukada Culture",
    text: "You stand at a roadside tea stall (thattukada) and watch the tea master pour tea from 3 feet high to make thick foam. What do you do?",
    options: [
      { text: "Watch in pure hypnotic wonder without blinking until the glass is in my hand.", score: 8, trait: "Chai Hypnotized" },
      { text: "Order one hot 'parippuvada' or 'pazham pori' to go with the frothy tea.", score: 9, trait: "Snack & Tea Combo" },
      { text: "Blow on the hot glass tea carefully and take the first heavenly sip.", score: 10, trait: "Patience Sip" },
      { text: "Record a slow-motion video of the tea pouring for Instagram stories.", score: 7, trait: "Reel Creator" }
    ]
  },
  {
    id: 23,
    category: "Queue Culture",
    text: "You have been standing in a long queue at the railway ticket counter for 20 minutes, and someone casually tries to slip in front of you. What do you do?",
    options: [
      { text: "Make loud throat-clearing sounds and say: 'Chetta, the queue starts from behind!'", score: 9, trait: "Queue Defender" },
      { text: "Step closer to the person in front to leave zero physical space for intruders.", score: 10, trait: "Bumper-to-Bumper" },
      { text: "Glare at them with furious laser eyes in complete silence.", score: 7, trait: "Silent Glare" },
      { text: "Feel annoyed inside, but say nothing because I hate confrontation.", score: 6, trait: "Quiet Sufferer" }
    ]
  },
  {
    id: 24,
    category: "Parent Logic",
    text: "On a lazy Sunday morning, your mother knocks loudly on your bedroom door and shouts: 'Wake up, it's 9:30 AM already!' What time is it really?",
    options: [
      { text: "It is exactly 7:15 AM. Mother time runs 2 hours ahead of universal clock time.", score: 10, trait: "Mother Time Survivor" },
      { text: "I check my phone, groan, pull the blanket over my head, and sleep for another hour.", score: 9, trait: "Blanket Defender" },
      { text: "Wake up immediately because if she comes back with tea, trouble is coming.", score: 7, trait: "Quick Responder" },
      { text: "Actually 9:30 AM. My mother never lies.", score: 5, trait: "Trusting Soul" }
    ]
  },
  {
    id: 25,
    category: "Festive Attire",
    text: "You wear a brand new silk shirt, white kasavu mundu, or bright saree on a festival day. How do you eat your festive meal?",
    options: [
      { text: "Sit with extreme caution, tucking napkins everywhere so not a single drop of sambar touches the cloth.", score: 9, trait: "Curry Defense Unit" },
      { text: "Inevitably drop one yellow turmeric spot on the front within the first 4 minutes.", score: 10, trait: "Turmeric Magnet" },
      { text: "Change into old home clothes first, eat peacefully, then wear festival clothes.", score: 7, trait: "Practical Genius" },
      { text: "Eat normally without worry. Clothes can be washed!", score: 7, trait: "Carefree Soul" }
    ]
  },
  {
    id: 26,
    category: "Chappal Problems",
    text: "You take off your footwear outside a temple, prayer hall, or friend's house. You come back out to leave. What happened to your slippers?",
    options: [
      { text: "Someone with the exact same blue Hawaii chappals wore mine by mistake, leaving old ones behind.", score: 8, trait: "Hawaii Chappal Exchange" },
      { text: "One slipper is here, and the other slipper has migrated 15 feet to the left.", score: 10, trait: "Wandering Footwear" },
      { text: "I specifically parked my slippers behind a pillar so nobody would steal or touch them.", score: 10, trait: "Strategic Parker" },
      { text: "Found them right where I left them. A peaceful victory.", score: 8, trait: "Blessed Day" }
    ]
  },
  {
    id: 27,
    category: "Giving Directions",
    text: "A lost motorcycle rider stops next to you on the road and asks for directions to a place you only vaguely know. What do you do?",
    options: [
      { text: "Point with great confidence: 'Go straight, take the second right after the big banyan tree, then ask someone!'", score: 9, trait: "Confident Guide" },
      { text: "Call out to the nearest shopkeeper: 'Chetta, where is the road to the post office?'", score: 8, trait: "Local Networker" },
      { text: "Honestly admit: 'Sorry brother, I am new to this area myself.'", score: 8, trait: "Honest Stranger" },
      { text: "Tell them to check Google Maps.", score: 6, trait: "Digital Redirect" }
    ]
  },
  {
    id: 28,
    category: "Spicy Food Pride",
    text: "You are eating very spicy Kerala beef fry, fish curry, or chicken roast. Sweat is forming on your forehead and your nose is running. What do you say?",
    options: [
      { text: "Wipe my nose with a handkerchief and say proudly: 'Super taste! It's not even that spicy!'", score: 9, trait: "Spice Warrior" },
      { text: "Ask for an extra glass of cold water or butter milk (moru) while tearing up.", score: 8, trait: "Moru Rescuer" },
      { text: "Mix more plain rice to dilute the volcanic heat in my mouth.", score: 8, trait: "Rice Diluter" },
      { text: "Complain loudly that the cook used half a kilo of black pepper.", score: 6, trait: "Pepper Critic" }
    ]
  },
  {
    id: 29,
    category: "Malayali Radar",
    text: "You are in an airport or train station far outside Kerala (like Delhi, Dubai, or Mumbai) and you hear someone speak Malayalam. What happens?",
    options: [
      { text: "My ears perk up instantly, I smile, and I exchange that unspoken nod of Malayali brotherhood.", score: 9, trait: "Global Mallu Radar" },
      { text: "Listen secretly to their conversation to see which district of Kerala they are from.", score: 7, trait: "District Detective" },
      { text: "Walk up and say: 'Naattil evideya?' (Where in Kerala are you from?)", score: 10, trait: "Friendly Connector" },
      { text: "Just feel a cozy sense of home from hearing my mother tongue.", score: 9, trait: "Homebound Soul" }
    ]
  },
  {
    id: 30,
    category: "Newspaper Rituals",
    text: "Your father or grandfather is reading the morning Malayala Manorama or Mathrubhumi newspaper with morning tea. Can you touch the paper?",
    options: [
      { text: "Absolutely not. Touching the paper before he finishes sports and political news is a high crime.", score: 9, trait: "Newspaper Law" },
      { text: "Sneak the second supplementary page quietly from the bottom of the stack.", score: 10, trait: "Page Smuggler" },
      { text: "Wait patiently until he folds it neatly and places it on the tea table.", score: 6, trait: "Patient Heir" },
      { text: "Read the news on my phone instead.", score: 5, trait: "Digital Switch" }
    ]
  },
  {
    id: 31,
    category: "Bag Hoarding",
    text: "You buy clothes at a textile shop like Kalyan Silks or Lulu Mall. What happens to the nice cloth/plastic carry bag afterwards?",
    options: [
      { text: "Folded carefully and stored in the 'bag of all bags' behind the kitchen door forever.", score: 10, trait: "Bag Collection Master" },
      { text: "Used to pack lunch boxes and water bottles to office or college.", score: 9, trait: "Lunch Carrier" },
      { text: "Used to store important school certificates from 10 years ago.", score: 7, trait: "Archive Bag" },
      { text: "Thrown in the trash. (Nobody does this!)", score: 3, trait: "Foreign Habit" }
    ]
  },
  {
    id: 32,
    category: "Movie Hall Madness",
    text: "The main hero makes his entry on the cinema screen with slow-motion music. What is your reaction inside the theatre?",
    options: [
      { text: "Stand on the chair, whistle through my fingers, and clap until my palms turn red.", score: 10, trait: "FDFS Whistle King" },
      { text: "Clap enthusiastically and laugh along with the crowd's energy.", score: 10, trait: "Energy Absorber" },
      { text: "Cover my ears for 30 seconds because the sound decibels are shaking the building.", score: 6, trait: "Ear Protector" },
      { text: "Silently enjoy the cinematography and background score.", score: 6, trait: "Calm Observer" }
    ]
  },
  {
    id: 33,
    category: "Mundu Mastery",
    text: "You wear a traditional white mundu (dhoti) to a temple or wedding. How confident are you about the knot staying tied?",
    options: [
      { text: "I retie the knot every 12 minutes just to be 100% safe from social disaster.", score: 10, trait: "Frequent Retier" },
      { text: "Fold it up in half and walk with the confidence of an action hero.", score: 10, trait: "Kothikuthu King" },
      { text: "Wear a belt secretly underneath the fold so it never slips.", score: 9, trait: "Belt Cheat Code" },
      { text: "Walk very stiffly like a robot so the fabric doesn't move.", score: 7, trait: "Stiff Walker" }
    ]
  },
  {
    id: 34,
    category: "Leftovers in Disguise",
    text: "You open the freezer looking for chocolate ice cream, and find a Kwality Walls tub. What is inside?",
    options: [
      { text: "Frozen fish curry or chopped grated coconut from last Thursday.", score: 10, trait: "Frozen Fish Surprise" },
      { text: "Homemade ginger-garlic paste frozen into cubes.", score: 9, trait: "Spice Cube Vault" },
      { text: "Actual chocolate ice cream! (A miracle worthy of a festival celebration).", score: 8, trait: "Miracle Finder" },
      { text: "Frozen green peas from 6 months ago.", score: 8, trait: "Pea Preserver" }
    ]
  },
  {
    id: 35,
    category: "Tender Coconut",
    text: "You drink a fresh tender coconut (karikku) on the roadside. What is the most important part of the experience?",
    options: [
      { text: "Asking the vendor to split it open so you can scrape and eat the soft sweet flesh (vazha).", score: 10, trait: "Vazha Lover" },
      { text: "Using the sharp piece of coconut shell as a spoon to eat the flesh.", score: 8, trait: "Natural Spoon Expert" },
      { text: "Drinking the coconut water in one continuous refreshing gulp.", score: 7, trait: "Thirsty Consumer" },
      { text: "Throwing it away without eating the inside flesh. (An unforgivable waste!)", score: 3, trait: "Coconut Sinner" }
    ]
  },
  {
    id: 36,
    category: "The Kitchen Rag",
    text: "You walk into the kitchen and see the cloth your mother is using to wipe the kitchen counter. What was that cloth originally?",
    options: [
      { text: "My favorite cartoon or rock band t-shirt that I bought 4 years ago.", score: 10, trait: "T-Shirt Reincarnation" },
      { text: "An old soft cotton banyan (undershirt) from my father.", score: 7, trait: "Banyan Wiper" },
      { text: "An old faded towel that has lost all its threads.", score: 8, trait: "Towel Veteran" },
      { text: "A store-bought modern microfiber cloth.", score: 5, trait: "Boring Rag" }
    ]
  },
  {
    id: 37,
    category: "Salon Lies",
    text: "The barber finishes your haircut, holds a mirror behind your head, and asks: 'Is the length okay, brother?' You dislike it. What do you say?",
    options: [
      { text: "Smile nervously and say 'Yes chetta, super, exactly what I wanted!'", score: 10, trait: "Classic Barber Lie" },
      { text: "Pay the bill, walk outside, and immediately run my hand through my hair in sorrow.", score: 9, trait: "Post-Haircut Mourner" },
      { text: "Wear a cap or helmet for the next 2 weeks until it grows back.", score: 7, trait: "Cap Camouflage" },
      { text: "Actually tell him to fix the sideburns.", score: 8, trait: "Brave Customer" }
    ]
  },
  {
    id: 38,
    category: "Gully Cricket Rules",
    text: "During a street or ground cricket match, your ball hits the neighbor's wall and someone catches it with one hand. What rule applies?",
    options: [
      { text: "'One tip, one hand out!' followed by a 15-minute shouting argument.", score: 10, trait: "One Tip Rule Lawyer" },
      { text: "'Whoever hit the ball into aunty's garden has to go ring the bell and fetch it.'", score: 9, trait: "Ball Fetcher Rule" },
      { text: "'Last over, baby over: only 4 balls!'", score: 8, trait: "Gully Rule Master" },
      { text: "Declare that the match was just a practice ball.", score: 9, trait: "Practice Ball Liar" }
    ]
  },
  {
    id: 39,
    category: "Hotel Ordering",
    text: "You sit down at a Kerala hotel and ask the waiter : 'Chetta, what is special today?' How does he reply?",
    options: [
      { text: "He rattles off 18 dishes in 4 seconds: 'Porotta-beef-chicken-biryani-appam-fish-curry!' without taking a breath.", score: 8, trait: "Fast Waiter Magic" },
      { text: "I listen to the whole list and order Chicken biriyani anyway.", score: 10, trait: "Loyal Biriyani Lover" },
      { text: "I ask him to repeat the last three items because he spoke at 200 km/h.", score: 8, trait: "Slow Processor" },
      { text: "I read the printed menu card silently.", score: 6, trait: "Silent Reader" }
    ]
  },
  {
    id: 40,
    category: "Evening Chai Routine",
    text: "It is 4:30 PM on a rainy day in Kerala. What is your soul crying out for?",
    options: [
      { text: "Hot black tea (chaya) and freshly fried hot banana fritters (pazham pori).", score: 9, trait: "Pure Kerala Vibe" },
      { text: "Crispy crunchy parippuvada with sweet milk tea.", score: 9, trait: "Parippuvada Devotee" },
      { text: "A nap with the ceiling fan on speed 3 and rain sounds outside.", score: 10, trait: "Monsoon Sleeper" },
      { text: "An ice-cold energy drink.", score: 6, trait: "Uncultured Thirst" }
    ]
  },
  {
    id: 41,
    category: "Sulaimani Magic",
    text: "You just finished eating a heavy, rich Thalassery or Malabar Dum Biryani. What is the only thing that can bring balance to your body?",
    options: [
      { text: "A piping hot glass of sulaimani (black tea with lemon and mint) to digest everything.", score: 9, trait: "Sulaimani Healer" },
      { text: "A 2-hour deep sleep on the cool tiled floor.", score: 10, trait: "Floor Sleeper" },
      { text: "Chewing Jeerakam.", score: 7, trait: "Saunf Chewer" },
      { text: "Ordering a second biryani. (Dangerous bravery!)", score: 5, trait: "Limitless Stomach" }
    ]
  },
  {
    id: 42,
    category: "Cardboard Box Attachment",
    text: "You receive an Amazon delivery. You take out the product. What happens to the brown cardboard box?",
    options: [
      { text: "We keep it in the store room because 'It is a very good strong box, we might need it one day.'", score: 6, trait: "Box Hoarder" },
      { text: "My cat immediately jumps inside and claims it as its new palace.", score: 8, trait: "Cat Kingdom" },
      { text: "I use it to store old wires, chargers, and empty phone boxes.", score: 8, trait: "Cable Vault" },
      { text: "Flatten it and throw it in recycling immediately.", score: 9, trait: "Minimalist Outlier" }
    ]
  },
  {
    id: 43,
    category: "Wedding Feast Reviewers",
    text: "At a wedding, you sit down with 3 uncles to eat. What is their conversation throughout the meal?",
    options: [
      { text: "Reviewing the food like Gordon Ramsay: 'The payasam has a bit too much jaggery, last year's wedding was better.'", score: 10, trait: "Sadhya Food Critic" },
      { text: "Praising the catering team and eating 3 extra pappadams.", score: 7, trait: "Joyful Feaster" },
      { text: "Discussing politics, land prices, and gold rates between mouthfuls of rice.", score: 9, trait: "Gold & Land Uncle" },
      { text: "Eating in total, focused silence without looking up from the leaf.", score: 8, trait: "Leaf Focus" }
    ]
  },
  {
    id: 44,
    category: "Pickle Travel Protocol",
    text: "You are traveling away from Kerala for work or studies. How does your mother pack homemade mango or lime pickle in your bag?",
    options: [
      { text: "In a plastic jar, wrapped in 8 plastic bags, taped 14 times with brown tape, inside another bag.", score: 10, trait: "Pickle Armor" },
      { text: "I smell like mango pickle for the entire 12-hour train journey anyway.", score:8, trait: "Pickle Perfume" },
      { text: "I share it with my hostel roommates and the jar is empty in 2 days.", score: 9, trait: "Hostel Hero" },
      { text: "I don't take pickle when I travel.", score: 4, trait: "Pickle-Free Life" }
    ]
  },
  {
    id: 45,
    category: "Arrival Timings",
    text: "Your friends are waiting for you at the junction. You are still in your room wearing shorts. What do you text them?",
    options: [
      { text: "“Starting now da, reaching in 5 minutes!” (I haven't even found my keys yet).", score: 10, trait: "Standard Indian Time" },
      { text: "Send a live location that shows I haven't moved an inch.", score: 5, trait: "Accidental Honesty" },
      { text: "“Stuck in heavy traffic near the signal!” (Sitting on my bed).", score: 9, trait: "Traffic Excuse" },
      { text: "I arrive 10 minutes early like a punctual time traveler.", score: 5, trait: "Rare Punctual" }
    ]
  },
  {
    id: 46,
    category: "Midnight Hostel Food",
    text: "It is 1:30 AM in a college hostel or flat with 3 friends. What culinary masterpiece do you create?",
    options: [
      { text: "One giant bowl of Maggi noodles with whatever leftover vegetables or eggs we find.", score: 10, trait: "Midnight Maggi Chef" },
      { text: "Cold leftover porotta heated over an electric kettle or iron box.", score: 9, trait: "Hostel Innovator" },
      { text: "Order biryani on Swiggy or Zomato and split the delivery fee 4 ways.", score: 7, trait: "Delivery Night" },
      { text: "Drink water and go to sleep dreaming of breakfast.", score: 7, trait: "Water Diet" }
    ]
  },
  {
    id: 47,
    category: "Festival Blessings",
    text: "During Vishu festival morning, an elder gives you a crisp 500-rupee note as 'Kaineettam'. What happens?",
    options: [
      { text: "Touch their feet with deep respect, put the money safely in my pocket, and plan my purchases.", score: 8, trait: "Vishu King" },
      { text: "My mother takes the 500 rupee note: 'Give it here, I will keep it safe for your savings account.'", score: 10, trait: "Savings Vanished" },
      { text: "Compare with my cousins to see who collected the most kaineettam money.", score: 9, trait: "Kaineettam Counter" },
      { text: "Spend it on festival fireworks and treats that same evening.", score: 7, trait: "Quick Spender" }
    ]
  },
  {
    id: 48,
    category: "Morning Coffee Aroma",
    text: "The smell of freshly brewed South Indian filter coffee or crushed cardamom tea drifts into your bedroom at 6:30 AM. What does your body do?",
    options: [
      { text: "Float out of bed following the aroma like a cartoon character smelling pie.", score: 9, trait: "Coffee Dreamer" },
      { text: "Smile warmly under the blanket knowing a hot cup is waiting for me.", score: 10, trait: "Warm Awakening" },
      { text: "Drink it from the steel tumbler and dabarah pouring it back and forth to cool down.", score: 7, trait: "Tumbler Master" },
      { text: "I prefer drinking cold energy drinks in the morning.", score: 4, trait: "Morning Chaos" }
    ]
  },
  {
    id: 49,
    category: "Temple / Church Festivals",
    text: "A grand festival is happening nearby with loud chenda melam (drums) and colorful lights. What is your favorite part?",
    options: [
      { text: "Standing close to the percussion drums feeling the vibrations shake my chest.", score: 8, trait: "Chenda Melam Trance" },
      { text: "Eating festival snacks: cotton candy, roasted peanuts, and ice fruit on a stick.", score: 8, trait: "Festival Foodie" },
      { text: "Watching the fireworks display at midnight lighting up the sky.", score: 9, trait: "Fireworks Fan" },
      { text: "Staying home because crowds make me tired.", score: 6, trait: "Peaceful Introvert" }
    ]
  },
  {
    id: 50,
    category: "Street Football & Cricket",
    text: "During World Cup season, how serious does the rivalry between Argentina and Brazil fans get?",
    options: [
      { text: "Huge 60-foot cutouts of Messi and Neymar on bridges, painted walls, and friendly shouting.", score: 10, trait: "Sevens Football Soul" },
      { text: "Debating for 3 hours at the tea stall about which team has better defense.", score: 9, trait: "Tea Stall Pundit" },
      { text: "Wearing the team jersey for 2 weeks straight without washing it for good luck.", score: 8, trait: "Lucky Jersey" },
      { text: "Watching the final match on a giant projector screen in the middle of town.", score: 10, trait: "Town Screening" }
    ]
  },

  // ==========================================
  // 50 BEST UNIVERSAL HUMAN EXPERIENCES (51 to 100)
  // ==========================================
  {
    id: 51,
    category: "Awkward Moments",
    text: "Someone waves at you from across the street. You wave back with a big smile, but then realize they were waving at someone behind you. What do you do?",
    options: [
      { text: "Pretend I was just stretching and scratch the back of my head.", score: 9, trait: "Quick Cover-Up" },
      { text: "Keep smiling and wave at a tree or bird like I meant to do it.", score: 7, trait: "Playful Chaos" },
      { text: "Look down at the floor, walk faster, and feel embarrassed for the day.", score: 8, trait: "Overthinker" },
      { text: "Pull out my phone quickly and pretend I got an important message.", score: 6, trait: "Phone Shield" }
    ]
  },
  {
    id: 52,
    category: "Kindness & Empathy",
    text: "You see a stranger sitting on a bench quietly crying. What goes through your mind?",
    options: [
      { text: "I feel sad for them and secretly hope things get better for them.", score: 10, trait: "Quiet Heart" },
      { text: "I gently walk over and offer them a clean tissue or napkin without asking questions.", score: 9, trait: "Pure Kindness" },
      { text: "I look away so they have privacy to cry without feeling watched.", score: 8, trait: "Respectful" },
      { text: "I wonder what happened, but feel too shy to intervene.", score: 7, trait: "Hesitant Empath" }
    ]
  },
  {
    id: 53,
    category: "Daily Life",
    text: "You hold the door open for someone, but they are still far away. What happens next?",
    options: [
      { text: "I keep holding it with an awkward smile while they start doing the awkward jog.", score: 9, trait: "Patient Helper" },
      { text: "I slowly let go of the door and pretend I didn't see them.", score: 6, trait: "Practical Escape" },
      { text: "I say 'Take your time!', but that makes them run even faster.", score:9, trait: "Accidental Stressor" },
      { text: "I feel awkward, but I can't let go now because it's too late.", score: 8, trait: "Trapped by Politeness" }
    ]
  },
  {
    id: 54,
    category: "Food & Sharing",
    text: "There is one slice of pizza left in the box. Everyone is quiet. You are still hungry. What do you do?",
    options: [
      { text: "I cut it in half with a knife so someone else can also have some.", score: 9, trait: "Fair Sharer" },
      { text: "I ask: 'Does anyone want this?' while my hand is already touching it.", score: 8, trait: "Hungry & Honest" },
      { text: "I wait silently hoping someone offers it to me, but someone else eats it.", score: 7, trait: "Silent Hope" },
      { text: "I just eat it. If you want pizza, you have to be fast.", score: 5, trait: "Bold Eater" }
    ]
  },
  {
    id: 55,
    category: "Phone Habits",
    text: "You step into an elevator with one stranger. It takes 15 seconds to reach your floor. What do you do?",
    options: [
      { text: "Immediately take out my phone and scroll with no real purpose.", score: 6, trait: "Screen Defender" },
      { text: "Stare at the floor numbers on the wall like it is the most interesting thing ever.", score: 9, trait: "Floor Watcher" },
      { text: "Give a small polite smile or say 'Hello'.", score: 9, trait: "Friendly Soul" },
      { text: "Check my phone screen, lock it, unlock it, and check it again.", score: 7, trait: "Restless Fingers" }
    ]
  },
  {
    id: 56,
    category: "Embarrassing Memories",
    text: "You are making tea alone at home, and suddenly remember an embarrassing thing you said 5 years ago. What is your reaction?",
    options: [
      { text: "I make a funny quiet noise or gasp out loud to stop the memory.", score: 7, trait: "Classic Cringe" },
      { text: "I shake my head hard to throw the thought out of my brain.", score: 6, trait: "Brain Reset" },
      { text: "I tell myself nobody else remembers it except me.", score: 9, trait: "Self-Soothing" },
      { text: "I argue with my past self out loud in the empty kitchen.", score: 8, trait: "Kitchen Fighter" }
    ]
  },
  {
    id: 57,
    category: "Politeness",
    text: "A restaurant waiter brings you the wrong meal. You didn't order it, but it looks fine to eat. What do you do?",
    options: [
      { text: "I eat it anyway because I don't want to cause trouble for the waiter.", score: 8, trait: "Too Polite" },
      { text: "I politely tell them about the mistake and say sorry for bothering them.", score: 9, trait: "Gentle Truth" },
      { text: "I eat it and then tip extra because I feel bad that there was a mistake.", score: 7, trait: "Super Empath" },
      { text: "I calmly ask for the meal I actually ordered.", score: 9, trait: "Direct & Clear" }
    ]
  },
  {
    id: 58,
    category: "Friendship & Honesty",
    text: "A friend asks you to go out tonight. You have no plans, but you are already wearing pajamas and lying on the bed. What do you say?",
    options: [
      { text: "I tell the truth: 'I am not busy, but I am too comfortable to move.'", score: 9, trait: "Genuinely Honest" },
      { text: "I wait 40 minutes and text: 'Sorry, I just saw this! I am totally exhausted tonight.'", score: 8, trait: "Polite White Lie" },
      { text: "I force myself to get up and go, and end up having a fun time.", score: 9, trait: "Good Friend" },
      { text: "I ignore the message until tomorrow morning and say I fell asleep.", score: 6, trait: "Avoidant" }
    ]
  },
  {
    id: 59,
    category: "Small Problems",
    text: "Your computer starts making a strange little clicking noise. What is your first reaction?",
    options: [
      { text: "I turn up the music so I can't hear the noise anymore.", score: 7, trait: "Optimistic Denial" },
      { text: "I search on Google until I convince myself it is broken forever.", score: 7, trait: "Googler of Panic" },
      { text: "I gently tap the side of it with my hand and hope it fixes itself.", score: 10, trait: "Tapping Engineer" },
      { text: "I restart it immediately and pray.", score: 9, trait: "Hopeful Believer" }
    ]
  },
  {
    id: 60,
    category: "Animals & Nature",
    text: "A small bug or moth is trapped inside your room and keeps bumping into the window glass. What do you do?",
    options: [
      { text: "I use a cup and a piece of paper to catch it and release it outside safely.", score: 8, trait: "Gentle Protector" },
      { text: "I open the window wide and point at it shouting: 'Go! You are free!'", score: 9, trait: "Funny Coach" },
      { text: "I leave the room and decide that the room belongs to the bug today.", score: 8, trait: "Peaceful Surrender" },
      { text: "I grab a rolled-up newspaper and solve the problem quickly.", score: 6, trait: "Action First" }
    ]
  },
  {
    id: 61,
    category: "Awkward Moments",
    text: "You are walking down a long hallway towards a coworker from 20 meters away. What do you do?",
    options: [
      { text: "I look at my shoes or phone until we get close, then say 'Hey!'", score: 8, trait: "Hallway Survivor" },
      { text: "I keep smiling the entire 20 meters until my face hurts.", score: 7, trait: "Endless Smile" },
      { text: "I give a quick head nod from far away and then look forward normally.", score: 9, trait: "Simple & Clean" },
      { text: "I pretend to be very interested in a poster on the wall.", score: 6, trait: "Poster Inspector" }
    ]
  },
  {
    id: 62,
    category: "Speech Glitches",
    text: "The movie ticket seller or waiter says: 'Enjoy your movie!' What do you say back without thinking?",
    options: [
      { text: "I say 'You too!' and immediately feel silly inside.", score: 10, trait: "Human Auto-Reply" },
      { text: "I say 'Thanks!' and feel proud of myself for answering correctly.", score: 8, trait: "Focused Mind" },
      { text: "I say 'You too!', realize it, and quickly laugh together with them.", score: 10, trait: "Self-Aware Humour" },
      { text: "I just nod and walk away before my brain makes a mistake.", score: 7, trait: "Safe Silence" }
    ]
  },
  {
    id: 63,
    category: "Empathy",
    text: "Someone tells a joke in a group, but nobody laughs. There is an awkward silence. What do you do?",
    options: [
      { text: "I give a small laugh or smile so they don't feel bad.", score: 10, trait: "Social Savior" },
      { text: "I look at them with a kind smile to show support.", score: 7, trait: "Silent Supporter" },
      { text: "I look away and wait for someone else to change the topic.", score: 7, trait: "Neutral Bystander" },
      { text: "I change the subject immediately so everyone forgets the awkwardness.", score: 9, trait: "Conversation Rescuer" }
    ]
  },
  {
    id: 64,
    category: "Daily Life",
    text: "You walk into a shop, find nothing you need, and want to walk out. How do you feel walking past the cashier?",
    options: [
      { text: "I keep my hands visible and try hard not to look suspicious.", score: 10, trait: "Innocent & Nervous" },
      { text: "I buy a pack of mints or gum just so I leave with something.", score: 7, trait: "Guilt Buyer" },
      { text: "I smile, say 'Thank you!', and walk out normally.", score: 9, trait: "Confident Citizen" },
      { text: "I check my phone to look busy as I exit the door.", score: 6, trait: "Busy Walker" }
    ]
  },
  {
    id: 65,
    category: "Emotions",
    text: "When was the last time a movie, cartoon, or song made your eyes wet with tears?",
    options: [
      { text: "Very recently. Even an emotional pet commercial can make me tear up.", score: 10, trait: "Deep Feeler" },
      { text: "Only during very sad movie endings or deep personal stories.", score: 9, trait: "Honest Emotion" },
      { text: "Rarely, but beautiful nostalgic music can make me emotional.", score: 7, trait: "Nostalgic Heart" },
      { text: "Almost never. I don't cry easily at fiction.", score: 5, trait: "Dry Eyes" }
    ]
  },
  {
    id: 66,
    category: "Honesty",
    text: "You find money on the ground in an empty parking lot with nobody around. What do you do?",
    options: [
      { text: "I keep it, but use it to treat a friend to coffee or food to share good karma.", score: 9, trait: "Good Karma" },
      { text: "I look around for a minute, pick it up, and consider it my lucky day.", score: 8, trait: "Happy Finder" },
      { text: "I leave it on the ground because I feel bad taking it.", score: 8, trait: "Pure Conscience" },
      { text: "I drop it into the nearest charity donation box.", score: 9, trait: "Generous Soul" }
    ]
  },
  {
    id: 67,
    category: "Social Life",
    text: "Someone tells you their name. Three seconds later, you completely forgot what their name was. What do you do?",
    options: [
      { text: "I call them 'my friend' or 'brother' for the rest of the conversation.", score: 10, trait: "Friendly Camouflage" },
      { text: "I confess honestly: 'I am so sorry, my brain dropped your name. Could you tell me again?'", score: 10, trait: "Brave & Honest" },
      { text: "I introduce them to someone else so they have to say their name again.", score: 7, trait: "Clever Trick" },
      { text: "I wait until someone else says their name out loud.", score: 7, trait: "Patient Detective" }
    ]
  },
  {
    id: 68,
    category: "Phone Habits",
    text: "You unlock your phone to check the time. What actually happens next?",
    options: [
      { text: "I open Instagram or reels, scroll for 10 minutes, lock it, and forget what time it was.", score: 9, trait: "Modern Human" },
      { text: "I check the time, lock it, and immediately wonder: 'Wait, what time was it?'", score: 10, trait: "Short Memory" },
      { text: "I check the time, close the phone, and carry on with my day.", score: 6, trait: "Rare Focus" },
      { text: "I reply to one notification and get sucked into a group chat.", score: 8, trait: "Social Distraction" }
    ]
  },
  {
    id: 69,
    category: "Awkward Moments",
    text: "You are walking behind a stranger on the sidewalk, and you both walk at the exact same speed. What do you do?",
    options: [
      { text: "I walk super fast to pass them, and then get tired once I am in front.", score: 10, trait: "Proud Speedster" },
      { text: "I slow down my steps or pretend to look at a shop window.", score: 8, trait: "Tactical Pause" },
      { text: "I cross the street so there is no awkward pressure between us.", score: 7, trait: "Space Seeker" },
      { text: "I just keep walking at the same pace.", score: 8, trait: "Carefree Walker" }
    ]
  },
  {
    id: 70,
    category: "Friendship",
    text: "Your friend is telling you about a frustrating day. What is your reaction?",
    options: [
      { text: "I agree with them completely: 'That really is unfair, you have every right to be mad!'", score: 9, trait: "Best Supporter" },
      { text: "I ask: 'Do you want to just vent, or do you want advice on how to fix it?'", score: 10, trait: "Thoughtful Listener" },
      { text: "I make tea or bring snacks and listen patiently.", score: 9, trait: "Comfort Giver" },
      { text: "I immediately tell them 5 logical steps to solve it.", score: 6, trait: "Problem Solver" }
    ]
  },
  {
    id: 71,
    category: "Daily Life",
    text: "You hit your toe against the bed or table leg. What is your immediate reaction?",
    options: [
      { text: "I look at the table with genuine anger like it moved on purpose to hurt me.", score: 9, trait: "Furniture Blamer" },
      { text: "I say 'Ouch! Sorry!' to the furniture before realizing it's wood.", score: 9, trait: "Apologetic Reflex" },
      { text: "I squeeze my teeth and jump on one foot in silence.", score: 9, trait: "Silent Fighter" },
      { text: "I shout a word at the ceiling.", score: 7, trait: "Loud Vent" }
    ]
  },
  {
    id: 72,
    category: "Self-Awareness",
    text: "You just sent a nervous or important message. What do you do right after pressing Send?",
    options: [
      { text: "I re-read my own sent message 3 times to make sure there are no silly typos.", score: 10, trait: "Post-Send Checker" },
      { text: "I throw my phone face down on the bed and walk away to avoid looking at it.", score: 9, trait: "Message Runner" },
      { text: "I stare at the chat waiting for the 'typing...' bubble to appear.", score: 8, trait: "Bubble Watcher" },
      { text: "I close the app and forget about it until a reply comes.", score: 5, trait: "Calm Mind" }
    ]
  },
  {
    id: 73,
    category: "Kindness",
    text: "You notice someone has a piece of food stuck in their teeth while talking to you. What do you do?",
    options: [
      { text: "I quietly point at my own tooth and whisper to let them know nicely.", score: 10, trait: "True Friend" },
      { text: "I want to tell them, but feel too shy and hope someone else does.", score: 7, trait: "Shy Witness" },
      { text: "I start checking my own teeth with my tongue secretly.", score: 7, trait: "Sympathy Checker" },
      { text: "I offer them a drink or napkin casually.", score: 9, trait: "Subtle Helper" }
    ]
  },
  {
    id: 74,
    category: "Phone Tabs",
    text: "How many tabs or apps do you currently have open on your phone or browser?",
    options: [
      { text: "More than 30. I tell myself I will read them later, but I never do.", score: 9, trait: "Tab Collector" },
      { text: "Around 10. Enough to keep my favorite things close.", score: 8, trait: "Balanced User" },
      { text: "Very few. I close every tab as soon as I finish reading it.", score: 5, trait: "Super Organized" },
      { text: "So many tabs that the browser shows an infinity symbol instead of a number.", score: 9, trait: "Chaos Master" }
    ]
  },
  {
    id: 75,
    category: "Animals",
    text: "A friendly dog or cat looks right into your eyes while walking past. What do you do?",
    options: [
      { text: "I smile, wave, and make happy gentle voices at it.", score: 10, trait: "Animal Lover" },
      { text: "I give it a gentle nod of mutual respect.", score: 9, trait: "Cool Friend" },
      { text: "I ask the owner politely if I can pet it.", score: 10, trait: "Polite Pet-Lover" },
      { text: "I smile from a distance and keep walking.", score: 7, trait: "Quiet Admirer" }
    ]
  },
  {
    id: 76,
    category: "Awkward Moments",
    text: "You say goodbye to a friend, but then realize you both walk in the exact same direction. What happens?",
    options: [
      { text: "I laugh and say: 'Well, looks like we are still together!'", score: 10, trait: "Easy-Going" },
      { text: "I pretend I need to look inside a random shop to let them walk ahead.", score: 7, trait: "Fake Shopper" },
      { text: "I pretend I forgot something and turn around.", score: 7, trait: "U-Turn Escapist" },
      { text: "We walk in slightly awkward silence together.", score: 7, trait: "Quiet Companion" }
    ]
  },
  {
    id: 77,
    category: "Honesty & Politeness",
    text: "A friend shows you a meme on their phone that you have already seen. How do you react?",
    options: [
      { text: "I smile and laugh anyway because they wanted to share happiness with me.", score: 10, trait: "Generous Heart" },
      { text: "I do a small nose-laugh and say 'Haha, nice'.", score: 8, trait: "Gentle Reaction" },
      { text: "I say 'Oh yeah, I saw this yesterday!'", score: 6, trait: "Honest Realist" },
      { text: "I ask them to send it to me even though I have it.", score: 9, trait: "Supportive Buddy" }
    ]
  },
  {
    id: 78,
    category: "Night Thoughts",
    text: "You are in bed trying to sleep. What does your brain decide to do?",
    options: [
      { text: "Think about deep life questions, the universe, and the future.", score: 10, trait: "Midnight Thinker" },
      { text: "Practice imaginary arguments that will probably never happen in real life.", score: 9, trait: "Imaginary Debater" },
      { text: "Remember a random song melody from 8 years ago.", score: 7, trait: "Music Memory" },
      { text: "Close eyes and fall asleep in 5 minutes.", score: 5, trait: "Fast Sleeper" }
    ]
  },
  {
    id: 79,
    category: "Sharing Space",
    text: "In a busy coffee shop, a stranger asks if they can sit at the empty chair at your table. What do you do?",
    options: [
      { text: "I smile and say: 'Of course, please sit!' and move my bag out of the way.", score: 10, trait: "Welcoming Host" },
      { text: "I say 'Sure', but quietly put on my headphones to keep my personal space.", score: 8, trait: "Polite Introvert" },
      { text: "I feel a little uncomfortable, but I say yes anyway.", score: 7, trait: "Kind Accommodator" },
      { text: "I say 'Sorry, someone is coming' even if nobody is.", score: 4, trait: "Protective Bubble" }
    ]
  },
  {
    id: 80,
    category: "Groceries & Pride",
    text: "You have 8 grocery bags in your car or hands. Do you take two trips, or try to carry all 8 bags at once?",
    options: [
      { text: "All 8 bags on my fingers at once. Two trips is not an option.", score: 10, trait: "One-Trip Hero" },
      { text: "I calmly take two trips like a sensible person.", score: 8, trait: "Sensible Citizen" },
      { text: "I try all 8, drop one item on the steps, and laugh at myself.", score: 9, trait: "Cheerful Struggler" },
      { text: "I call someone from inside the house to come help me.", score: 8, trait: "Smart Teamwork" }
    ]
  },
  {
    id: 81,
    category: "Friendship & Success",
    text: "A close friend achieves a goal that you also wanted to achieve for yourself. How do you feel?",
    options: [
      { text: "I feel a tiny moment of jealousy, followed by pure happiness and love for them.", score: 10, trait: "Truly Human" },
      { text: "I feel 100% happy for them right away. Their victory feels like our victory.", score: 9, trait: "Pure Cheerleader" },
      { text: "I congratulate them loudly, but feel motivated to work harder myself.", score: 8, trait: "Healthy Competitor" },
      { text: "I feel a little sad for myself, but keep it private.", score: 7, trait: "Quiet Feeler" }
    ]
  },
  {
    id: 82,
    category: "Phone Dependence",
    text: "You go to the bathroom and realize you forgot to bring your phone. What do you do?",
    options: [
      { text: "I read the text and ingredients on the shampoo bottle like it's a novel.", score: 8, trait: "Classic Reader" },
      { text: "I sit in peace and think about my life goals.", score: 10, trait: "Peaceful Meditator" },
      { text: "I quickly get up to grab my phone because I need something to look at.", score: 5, trait: "Phone Tethered" },
      { text: "I count the tiles on the wall or floor.", score: 8, trait: "Boredom Counter" }
    ]
  },
  {
    id: 83,
    category: "Helping Others",
    text: "An elderly person is struggling to reach an item on a high supermarket shelf. What do you do?",
    options: [
      { text: "I step up with a warm smile and say: 'Can I help you get that down?'", score: 10, trait: "Helpful Neighbor" },
      { text: "I reach it down, hand it to them gently, and say 'Have a nice day!'", score: 10, trait: "Friendly Action" },
      { text: "I wait a second to make sure they want help, then step in.", score: 8, trait: "Careful Helper" },
      { text: "I look around for a store worker to help them.", score: 5, trait: "Delegator" }
    ]
  },
  {
    id: 84,
    category: "Awkward Moments",
    text: "You take a drink of water in a quiet room, and it goes down the wrong pipe. What do you do?",
    options: [
      { text: "I try desperately not to cough, my face turns red, and tears come out.", score: 9, trait: "Quiet Sufferer" },
      { text: "I cough, apologize quickly, and laugh: 'Forgot how to drink water for a second!'", score: 10, trait: "Self-Deprecating Charm" },
      { text: "I quickly run out of the room to cough in the hallway.", score: 8, trait: "Emergency Exit" },
      { text: "I sip more water and make it twice as worse.", score: 5, trait: "Panic Drinker" }
    ]
  },
  {
    id: 85,
    category: "Mirror Moments",
    text: "When you look in the mirror while brushing your teeth, what usually happens?",
    options: [
      { text: "I look into my own eyes and wonder who I am becoming.", score: 10, trait: "Mirror Philosopher" },
      { text: "I make a funny face or wink at myself to feel good.", score: 9, trait: "Silly Spirit" },
      { text: "I notice my bad posture, stand straight for 3 seconds, and then relax again.", score: 8, trait: "Temporary Posture" },
      { text: "I just brush my teeth and think about what to do next.", score: 7, trait: "Focused Routine" }
    ]
  },
  {
    id: 86,
    category: "Pets & Regret",
    text: "You accidentally step on your dog or cat's paw. What is your reaction?",
    options: [
      { text: "I fall on my knees, apologize 50 times, give them treats, and feel heartbroken.", score: 8, trait: "Loving Pet Parent" },
      { text: "I pet them gently and stay by their side until they wag their tail or purr.", score: 10, trait: "Caring Healer" },
      { text: "I feel very guilty for the next two hours.", score: 8, trait: "Guilt Carrier" },
      { text: "I check if they are okay, see they are fine, and calm down.", score: 10, trait: "Rational Thinker" }
    ]
  },
  {
    id: 87,
    category: "Helping Others",
    text: "A stranger drops a bag of papers or items on the floor in a busy train station. What do you do?",
    options: [
      { text: "I immediately bend down to help pick them up.", score: 10, trait: "Action Helper" },
      { text: "I pick up the closest two items, hand them over, and smile.", score: 8, trait: "Quick Assistant" },
      { text: "I look around to see if others are helping first.", score: 5, trait: "Social Watcher" },
      { text: "I feel bad, but I am running late so I keep walking.", score: 6, trait: "Busy Commuter" }
    ]
  },
  {
    id: 88,
    category: "Phone Habits",
    text: "You get a phone call from an unknown phone number. How do you respond?",
    options: [
      { text: "I watch it ring in silence until it stops, then search the number on Truecaller.", score: 9, trait: "Modern Phone Shyness" },
      { text: "I pick up and say 'Hello?' with zero fear.", score: 7, trait: "Brave Caller" },
      { text: "I immediately press decline and turn the phone over.", score: 7, trait: "Decisive Boundary" },
      { text: "I let it ring and wait to see if they leave a message.", score: 8, trait: "Patient Filter" }
    ]
  },
  {
    id: 89,
    category: "Greetings",
    text: "You go in for a handshake, but the other person goes in for a fist bump. What happens?",
    options: [
      { text: "I end up grabbing their fist with my open hand in complete confusion.", score: 9, trait: "Classic Turkey Grip" },
      { text: "I laugh out loud and say: 'Let's try that greeting again!'", score: 9, trait: "Smooth Fixer" },
      { text: "I panic and quickly change to whatever they are doing.", score: 10, trait: "Rapid Adapter" },
      { text: "I give a funny little bow instead.", score: 7, trait: "Playful Reset" }
    ]
  },
  {
    id: 90,
    category: "Home Comfort",
    text: "What do you wear when you know you will stay home alone all day?",
    options: [
      { text: "The softest, most comfortable shorts and an oversized old t-shirt.", score: 10, trait: "Comfort Champion" },
      { text: "Actual normal clothes so I feel like a productive human being.", score: 6, trait: "Self-Motivator" },
      { text: "Whatever I wore to sleep until the late afternoon.", score: 9, trait: "Cozy Sloth" },
      { text: "Nice clothes on top for video calls, pajamas on the bottom.", score: 8, trait: "Smart Hybrid" }
    ]
  },
  {
    id: 91,
    category: "Kitchen Habits",
    text: "You are heating food in the microwave and there are 3 seconds left. What do you do?",
    options: [
      { text: "I open the door at 0:01 so the loud beep doesn't wake the house.", score: 10, trait: "Microwave Ninja" },
      { text: "I let all beeps ring out loudly without caring.", score: 7, trait: "Carefree Cook" },
      { text: "I forget the food is in the microwave and remember it 30 minutes later.", score: 8, trait: "Forgetful Gourmet" },
      { text: "I clear the timer so nobody sees '0:02' on the screen.", score: 9, trait: "Thoughtful Roommate" }
    ]
  },
  {
    id: 92,
    category: "Cancelled Plans",
    text: "A plan you were secretly feeling tired about gets cancelled by the other person. How do you feel?",
    options: [
      { text: "I text 'Oh no, hope everything is okay!' while doing a happy victory dance inside.", score: 10, trait: "Honest Introvert" },
      { text: "I feel a deep wave of pure relaxation wash over my body.", score: 9, trait: "Peace Lover" },
      { text: "I feel a little disappointed at first, then happy to have free time.", score: 8, trait: "Mixed Emotions" },
      { text: "I immediately try to find something else to do outside.", score: 5, trait: "Active Extrovert" }
    ]
  },
  {
    id: 93,
    category: "Focus & Reading",
    text: "You read the same sentence in a book 3 times because your mind kept daydreaming. What do you do?",
    options: [
      { text: "I read it out loud in a funny whisper so my brain actually listens.", score: 10, trait: "Playful Learner" },
      { text: "I close the book and accept that my brain wants to rest right now.", score: 8, trait: "Self-Aware" },
      { text: "I point my finger at each word to force my eyes to follow.", score: 10, trait: "Determined Reader" },
      { text: "I just skip the page and hope it wasn't important.", score: 6, trait: "Page Skipper" }
    ]
  },
  {
    id: 94,
    category: "Gratitude",
    text: "Someone holds the elevator or door for you. How do you thank them?",
    options: [
      { text: "A genuine smile, eye contact, and a warm 'Thank you so much!'", score: 10, trait: "Warm Gratitude" },
      { text: "A quick polite 'Thanks!' with a friendly nod.", score: 8, trait: "Polite Citizen" },
      { text: "I say 'Thanks!' when entering, and say 'Thank you!' again when exiting.", score: 7, trait: "Double Thanker" },
      { text: "A silent friendly smile and head nod.", score: 7, trait: "Quiet Smile" }
    ]
  },
  {
    id: 95,
    category: "Self-Awareness",
    text: "You hear your own voice played back on an audio recording. What is your reaction?",
    options: [
      { text: "'Is that really how I sound to other people?! That is so weird!'", score: 8, trait: "Universal Reaction" },
      { text: "I feel slightly uncomfortable, but have gotten used to it over time.", score: 8, trait: "Calm Realist" },
      { text: "I actually kind of like the way my voice sounds.", score: 7, trait: "Confident Soul" },
      { text: "I turn it off immediately because I can't listen to it.", score: 7, trait: "Voice Shy" }
    ]
  },
  {
    id: 96,
    category: "Late Night Scrolling",
    text: "You accidentally like a photo from 3 years ago on someone's profile while scrolling late at night. What is your reaction?",
    options: [
      { text: "I quickly unlike it, drop my phone, and consider hiding under my bed forever.", score: 10, trait: "Nightmare Scroller" },
      { text: "I leave the like. What is done is done; I own my curiosity.", score: 5, trait: "Brave Scroller" },
      { text: "I quickly like 2 recent photos so it looks like a normal visit.", score: 9, trait: "Tactical Recovery" },
      { text: "I hope they have notifications turned off.", score: 8, trait: "Hopeful Wish" }
    ]
  },
  {
    id: 97,
    category: "Lost Objects",
    text: "You are looking for your glasses or phone, only to realize you are already holding it in your hand. What do you do?",
    options: [
      { text: "I laugh out loud at my brain's temporary shutdown.", score: 10, trait: "Humble Humour" },
      { text: "I look around in disbelief hoping nobody saw my intense search.", score: 9, trait: "Search Survivor" },
      { text: "I shake my head and decide I need more sleep.", score: 7, trait: "Sleep Seeker" },
      { text: "I tell someone nearby because it's too funny to keep to myself.", score: 8, trait: "Shared Laughter" }
    ]
  },
  {
    id: 98,
    category: "Empathy & Weather",
    text: "It starts raining hard outside, and you are sitting cozy inside wrapped in a warm blanket with tea. What do you think?",
    options: [
      { text: "I feel cozy, but also hope people and street animals outside are safe.", score: 10, trait: "Gentle Empath" },
      { text: "I feel pure, peaceful gratitude for being inside right now.", score: 7, trait: "Cozy Soul" },
      { text: "I love the sound of rain against the window.", score: 9, trait: "Rain Lover" },
      { text: "I worry if my clothes drying outside got wet.", score: 8, trait: "Laundry Worrier" }
    ]
  },
  {
    id: 99,
    category: "Music & Soul",
    text: "You hear a song that you loved when you were a teenager. How does it make you feel?",
    options: [
      { text: "I feel like a time traveler, remembering my old dreams and friends.", score: 10, trait: "Nostalgic Traveler" },
      { text: "I sing every single lyric by heart without missing a beat.", score: 7, trait: "Lyrical Memory" },
      { text: "I smile at how much life has changed since then.", score: 10, trait: "Reflective Mind" },
      { text: "It's just an okay song to me now.", score: 5, trait: "Moved On" }
    ]
  },
  {
    id: 100,
    category: "The Ultimate Humanity Probe",
    text: "If you could tell an artificial intelligence what it really means to be human in one sentence, what would you say?",
    options: [
      { text: "“Being human means making silly mistakes, laughing until our stomach hurts, and loving deeply.”", score: 10, trait: "Pure Human Heart" },
      { text: "“We hold doors for strangers, cry at sad movies, and find happiness in hot tea and rain.”", score: 9, trait: "Poetic Witness" },
      { text: "“We are clumsy creatures who love dogs, family feasts, and second chances.”", score: 6, trait: "Relatable Soul" },
      { text: "“To be human is to care about things that logic cannot always explain.”", score: 8, trait: "Wisdom Bearer" }
    ]
  }
];

// Helper to pick 10 random unique questions across sessions

let usedQuestionIds = new Set();

export function getRandomSessionQuestions(count = 10) {
  let availableQuestions = QUESTION_BANK.filter(
    q => !usedQuestionIds.has(q.id)
  );

  // Reset when not enough unused questions remain
  if (availableQuestions.length < count) {
    usedQuestionIds.clear();
    availableQuestions = [...QUESTION_BANK];
  }

  const shuffled = [...availableQuestions].sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, count);

  selected.forEach(q => usedQuestionIds.add(q.id));

  return selected;
}