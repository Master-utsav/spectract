import { Calendar, Home, Gift, Phone, Zap, Music, MicVocal, Gamepad2, Palette, Shirt } from 'lucide-react';

export const eventCategories = [
    { 
      name: "Tech Spardha", 
      date: "7th April", 
      slug: "tech-spardha",
      icon: Zap,
      events: [
        { name: "Code Forge", time: "10:30 AM", slug: "code-forge" },
        { name: "Code Clash", time: "12:50 PM", slug: "code-clash" },
        { name: "Bug Bash", time: "01:40 PM", slug: "bug-bash" },
        { name: "Code Mirage", time: "02:30 PM", slug: "code-mirage" },
        { name: "Illustratex", time: "02:30 PM", slug: "illustratex" },
        { name: "Robo Race", time: "01:00 PM", slug: "robo-race" },
      ]
    },
    { 
      name: "Fashionista Ada", 
      date: "7th April", 
      slug: "fashionista-ada",
      icon: Shirt,
      events: [
        { name: "Fashionista Ada", time: "04:30 PM", slug: "fashionista-ada" },
      ]
    },
    { 
      name: "Kalaa Utsav", 
      date: "8th April", 
      slug: "kalaa-utsav",
      icon: MicVocal,
      events: [
        { name: "Drama Performance", time: "11:30 AM", slug: "drama-performance" },
        { name: "Poetry Slam", time: "11:30 AM", slug: "poetry-slam" },
        { name: "Dance Competition", time: "11:30 AM", slug: "dance-competition" },
        { name: "Music And Performing Arts", time: "11:30 AM", slug: "music-and-performing-arts" },
        { name: "Stand Up Comedy Competition", time: "11:30 AM", slug: "stand-up-comedy-competition" },
      ]
    },
    { 
      name: "Rang Riwaaz", 
      date: "8th April", 
      slug: "rang-riwaaz",
      icon: Palette,
      events: [
        { name: "Poster Making", time: "10:00 AM", slug: "poster-making" },
        { name: "Rangoli", time: "12:00 PM", slug: "rangoli" },
        { name: "Tattoo Making", time: "02:00 PM", slug: "tattoo-making" },
        { name: "Face Painting", time: "02:30 PM", slug: "face-painting" },
      ]
    },
    { 
      name: "E-Sports", 
      date: "9th April", 
      slug: "e-sports",
      icon: Gamepad2,
      events: [
        { name: "Free Fire", time: "12:00 AM", slug: "free-fire" },
        { name: "BGMI", time: "02:00 PM", slug: "bgmi" }
      ]
    },
    { 
      name: "Thrill Arena", 
      date: "9th April", 
      slug: "thrill-arena",
      icon: Zap,
      events: [
        { name: "Treasure Hunt", time: "10:00 AM", slug: "treasure-hunt" },
        { name: "Rodies", time: "09:00 AM", slug: "roadies" }
      ]
    },
    { 
      name: "DJ Night", 
      date: "9th April", 
      slug: "dj-night",
      icon: Music,
      events: []  // No dropdown for DJ Night
    }
  ];

export const contactInfo = [
  {
    name: "Tech Spardha",
    slug : "tech-spardha",
    coordinators: [
      {name: "Utsav Jaiswal" , contact : "78038717124"},
      {name: "Kalash Maurya" , contact : "9926666022"}
    ]
  },
  {
    name: "Fashionista Ada",
    slug : "fashionista-ada",
    coordinators: [
      {name: "Ms. Priya Chauhan" , contact : "9479878412"},
      {name: "Rujhan Bajpai" , contact : "8643033396"}
    ]
  },
  {
    name: "Kalaa Utsav",
    slug : "kalaa-utsav",
    coordinators: [
      {name: "Ms. Nikita Gavhade" , contact : "9171125237"},
      {name: "Rajveer Gaud" , contact : "9926510065"}
    ]
  },
  {
    name: "Rang Riwaaz",
    slug : "rang-riwaaz",
    coordinators: [
      {name: "Ms. Rajashree Sahu" , contact : "7008439345"},
      {name: "Ms. Sayali Kulkarni" , contact : "8889723672"}
    ]
  },
  {
    name: "E-Sports",
    slug : "e-sports",
    coordinators: [
      {name: "Tilak Gehlot" , contact : "7000061482"},
      {name: "Vishal Patidar" , contact : "8889004296"}
    ]
  },
  {
    name: "Thrill Arena",
    slug : "thrill-arena",
    coordinators: [
      {name: "Jatin Kushwah" , contact : "7489085871"},
      {name: "Mr. Dilip Sir" , contact : "9406834767"}
    ]
  }
]

export const navItems = [
    { text: "Home", href: "/", icon: Home },
    { 
      text: "Events", 
      href: "#", 
      icon: Calendar,
      hasDropdown: true 
    },
    { text: "Sponsors", href: "#", icon: Gift },
    { text: "Contact", href: "#", hasDropdown : true, icon: Phone }
  ];


  export const embers = [
    { cx: 1200, cy: 1300, r: 8, className: "animate-ember1" },
    { cx: 1150, cy: 1200, r: 6, className: "animate-ember2" },
    { cx: 1050, cy: 1100, r: 5, className: "animate-ember3" },
    { cx: 1800, cy: 1300, r: 8, className: "animate-ember1" },
    { cx: 2150, cy: 3200, r: 6, className: "animate-ember2" },
    { cx: 1050, cy: 4100, r: 5, className: "animate-ember3" },
    { cx: 3150, cy: 2200, r: 6, className: "animate-ember2" },
    { cx: 2200, cy: 2100, r: 5, className: "animate-ember3" },
    { cx: 1900, cy: 4300, r: 8, className: "animate-ember1" },
    { cx: 1450, cy: 1200, r: 6, className: "animate-ember2" },
    { cx: 3150, cy: 3100, r: 5, className: "animate-ember3" },
    { cx: 1200, cy: 3300, r: 8, className: "animate-ember1" },
    { cx: 2800, cy: 2500, r: 6, className: "animate-ember2" },
    { cx: 1600, cy: 3000, r: 5, className: "animate-ember3" },
    { cx: 1700, cy: 3500, r: 8, className: "animate-ember1" },
    { cx: 2250, cy: 2700, r: 6, className: "animate-ember2" },
    { cx: 900, cy: 1300, r: 5, className: "animate-ember3" },
    { cx: 3100, cy: 2200, r: 8, className: "animate-ember1" },
    { cx: 2900, cy: 2000, r: 6, className: "animate-ember2" },
    { cx: 2400, cy: 1800, r: 5, className: "animate-ember3" },
    { cx: 2000, cy: 1500, r: 8, className: "animate-ember1" },
    { cx: 3200, cy: 2500, r: 6, className: "animate-ember2" },
    { cx: 3500, cy: 2800, r: 5, className: "animate-ember3" },
    { cx: 3800, cy: 3000, r: 8, className: "animate-ember1" },
    { cx: 4000, cy: 3300, r: 6, className: "animate-ember2" },
    { cx: 4200, cy: 3600, r: 5, className: "animate-ember3" },
    { cx: 2500, cy: 1400, r: 8, className: "animate-ember1" },
    { cx: 2700, cy: 1700, r: 6, className: "animate-ember2" },
    { cx: 3000, cy: 1900, r: 5, className: "animate-ember3" },
    { cx: 3300, cy: 2200, r: 8, className: "animate-ember1" },
    { cx: 3600, cy: 2500, r: 6, className: "animate-ember2" },
    { cx: 3900, cy: 2800, r: 5, className: "animate-ember3" },
    { cx: 4200, cy: 3100, r: 8, className: "animate-ember1" },
    { cx: 4500, cy: 3400, r: 6, className: "animate-ember2" },
    { cx: 4800, cy: 3700, r: 5, className: "animate-ember3" },
    { cx: 5000, cy: 4000, r: 8, className: "animate-ember1" },
    { cx: 5200, cy: 4300, r: 6, className: "animate-ember2" },
    { cx: 5400, cy: 4600, r: 5, className: "animate-ember3" },
  ];