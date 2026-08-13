import instructor1 from "@/assets/instructor-1.jpg";
import instructor2 from "@/assets/instructor-2.jpg";
import instructor3 from "@/assets/instructor-3.jpg";
import instructor4 from "@/assets/instructor-4.jpg";

export interface ClassItem {
  slug: string;
  name: string;
  image: string;
  video?: string;
  short: string;
  long: string;
  duration: string;
  level: string;
  bookingUrl?: string;
}

export const classes: readonly ClassItem[] = [
  {
    slug: "digital-reformer-classes",
    name: "Digital Reformer Pilates",
    image: "/2.png",
    video: "/videos/2-wa.mp4",
    short:
      "Australia’s premier self-guided Reformer experience. Access 800+ on-demand masterclasses on personal touchscreens, progressing at your own tempo.",
    long: "Enjoy Pilates at your own pace with our Digital Reformers. Use the built-in screens to choose from over 800 workouts for all fitness levels—from beginner basics to high-intensity training. Follow clear video instructions with zero class pressure, and train whenever you want between 5:00 AM and 10:00 PM.",
    duration: "45 min",
    level: "800+ Workouts · All Levels",
  },
  {
    slug: "hiit-hybrid-series",
    name: "HIIT Hybrid Series",
    image: "/1.png",
    video: "/videos/6.mp4",
    short:
      "A high-intensity fusion of dynamic reformer sequences and cardiovascular intervals designed to maximize calorie burn and build explosive strength.",
    long: "Elevate your heart rate and redefine your fitness with our HIIT Hybrid Series. This energetic class blends the precision and resistance of reformer Pilates with high-intensity interval training (HIIT). Expect fast-paced sequences, explosive movements, and full-body conditioning designed to challenge your endurance, sculpt lean muscle, and leave you feeling powerful and invigorated.",
    duration: "50 min",
    level: "All Levels",
  },
  {
    slug: "clinical-pilates",
    name: "Clinical & Rehab Pilates",
    image: "/3.png",
    video: "/Glute Bridging.mp4",
    short:
      "Anatomically focused movement programs tailored for injury rehabilitation, chronic back pain relief, spinal alignment, and joint longevity.",
    long: "Whether you are recovering from an injury, managing back pain, or seeking safe prenatal and postnatal movement, our Clinical Pilates programs offer targeted, therapeutic strengthening. Built around low-impact spinal articulation and controlled resistance, every session promotes safe recovery and long-term joint resilience.",
    duration: "50 min",
    level: "Rehab & Recovery",
  },
  {
    slug: "stretch-strength",
    name: "Stretch + Strength",
    image: "/4.png",
    video: "/videos/5.mp4",
    short:
      "A harmonious fusion of deep myofascial release, dynamic mobility flow, and functional resistance to lengthen and strengthen your entire body.",
    long: "Release chronic tension while building resilient muscle. Stretch + Strength sessions focus on opening tight hip flexors, hamstrings, and thoracic spines while reinforcing core control and postural balance. Leave every session feeling lighter, taller, and effortlessly revitalized.",
    duration: "45 min",
    level: "All Levels",
  },
  {
    slug: "yoga",
    name: "Yoga & Mindfulness",
    image: "/5.png",
    video: "/videos/8.mp4",
    short:
      "Restore inner balance through breathwork, mindful vinyasa flow, and restorative flexibility practices in our serene Applecross studio.",
    long: "Cultivate physical balance and mental serenity. Our Yoga sessions guide you through intentional breathwork and fluid postures designed to quiet the nervous system, release bodily stiffness, and restore vitality from the inside out.",
    duration: "60 min",
    level: "All Levels",
  },
  {
    slug: "infrared-sauna",
    name: "Private Infrared Sauna",
    image: "/n242.png",
    video: "https://res.cloudinary.com/lxz3wn2z/video/upload/v1785915313/3-wa_y3uqmc.mp4",
    short:
      "Deep-tissue infrared heat therapy designed to melt muscle soreness, accelerate cellular recovery, detoxify your body, and promote deep relaxation.",
    long: "The ultimate complement to Reformer Pilates. Our private infrared saunas use penetrating wavelengths to warm muscle tissue directly—increasing circulation, relieving joint stiffness, supporting cardiovascular health, and promoting profound stress relief after class.",
    duration: "30 / 45 min",
    level: "Restorative Recovery",
    bookingUrl: "https://n24pilatesstudio.gymmasteronline.com/portal/book/service",
  },
];

export const pillars = [
  {
    title: "Stronger",
    desc: "Build functional core strength, spinal stability, and lean muscle tone without high-impact strain.",
  },
  {
    title: "Balanced",
    desc: "Enhance flexibility, joint mobility, and postural awareness to move gracefully through everyday life.",
  },
  {
    title: "Rejuvenated",
    desc: "Melt away muscle tension and accelerate recovery through restorative infrared heat therapy.",
  },
  {
    title: "Mindful",
    desc: "Enjoy self-guided autonomy, zero class intimidation, and a calm sanctuary tailored to your schedule.",
  },
] as const;

export const instructors = [
  { name: "Tayla", role: "Founder & Master Instructor", image: instructor1 },
  { name: "Lauren", role: "Lead Pilates Instructor", image: instructor2 },
  { name: "Maddison", role: "Pilates & Mobility Specialist", image: instructor3 },
  { name: "Chloe", role: "Yoga & Mindfulness Instructor", image: instructor4 },
] as const;

export interface PricingPlan {
  name: string;
  price: string;
  unit: string;
  saveBadge?: string;
  originalPrice?: string;
  discountedPrice?: string;
  dailyEquivalent?: string;
  iframeUrl?: string;
  comingSoon?: boolean;
  description: string;
  features: readonly string[];
  buttonText?: string;
}

export const specialOffers = [
  {
    name: "New Client Intro Offer",
    price: "$40",
    unit: "4 Classes",
    saveBadge: "New Client Special",
    originalPrice: "$84 value",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/9470d85507491296a31c643e990c513d",
    description:
      "Experience Australia's premier self-guided Digital Reformer Pilates sanctuary in Applecross over 15 days.",
    features: [
      "2x Digital reformer classes & 2x Infrared sauna (30 mins)",
      "Valid for 15 days from purchase — zero membership commitment",
      "Special discount available when you sign up for membership during the intro offer",
    ],
    buttonText: "Claim Intro Offer",
  },
  {
    name: "Casual Reformer Pass",
    price: "$28",
    unit: "",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/aed5ee27360968bdaae83ecc6ca49ec6",
    description:
      "Experience the freedom of a single self-guided Reformer session — valid for 30 days from purchase.",
    features: [
      "Studio access from 5:00 AM – 10:00 PM daily at your convenience",
      "First On-boarding session must be booked during the staff hours",
      "Access to 800+ on-demand Digital Reformer & Mat masterclasses",
      "Zero membership commitment or contracts required",
    ],
    buttonText: "Book Casual Class",
  },
  {
    name: "Digital Gift Vouchers",
    price: "",
    unit: "",
    iframeUrl: "https://n24pilatesstudio.gymmasteronline.com/portal/shop",
    comingSoon: false,
    description:
      "Share the gift of strength, balance, and vitality. Our digital gift vouchers offer loved ones a sanctuary of physical rejuvenation and restorative infrared recovery in Applecross—a thoughtful experience that nourishes from the inside out.",
    features: [],
    buttonText: "Buy Gift Voucher",
  },
] as const;

export const weeklyMemberships = [
  {
    name: "Seamless Weekly Membership",
    price: "$47.25",
    unit: "/week",
    dailyEquivalent: "6.75",
    saveBadge: "Save 10%",
    originalPrice: "$52.25",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/58fe897921eb2718a0a7de2a56c68e1e",
    description:
      "Experience total flexibility with week-to-week access to our premium digital studio and recovery facilities.",
    features: [
      "Daily full access to Digital Reformer, Yoga, and Mat Pilates",
      "Daily Private Infrared Sauna sessions included",
      "Studio access 7 days a week, 5:00 AM – 10:00 PM",
      "No lock-in contracts with seamless auto-renewal",
      "Exclusive N24 Welcome Pack & 1-on-1 PT session",
    ],
    buttonText: "Start Weekly Plan",
  },
  {
    name: "6 Month Value Commitment",
    price: "$45.50",
    unit: "/week",
    saveBadge: "",
    originalPrice: "",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/d0c08c72e55663e6493d8a42372e771f",
    description:
      "Commit to half a year of wellness and receive a discounted weekly rate for your dedication to physical transformation.",
    features: [
      "Full access to our 800+ on-demand class library",
      "Complimentary Private Infrared Sauna Therapy",
      "Bonus: 2 Weeks Free Membership added to your term",
      "Extended daily studio hours from 5:00 AM – 10:00 PM",
      "6-month commitment for sustained, measurable results",
      "Welcome Pack and a 1-on-1 personal training session",
    ],
    buttonText: "Commit to 6 Months",
  },
  {
    name: "12 Month Value Commitment",
    price: "$42.50",
    unit: "/week",
    saveBadge: "",
    originalPrice: "",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/27011bdffcc5575799dc89fc8a390a3e",
    description:
      "Secure our lowest weekly rate by dedicating a full year to your holistic health, enduring wellness, and vitality.",
    features: [
      "Daily full access to Reformer Pilates, Stretch & Strength sessions",
      "Unrestricted access to luxury Infrared Sauna Suites",
      "Bonus: 5 Weeks Free Membership added to your term",
      "Everyday studio access from 5:00 AM – 10:00 PM",
      "12-month journey to peak fitness and rejuvenation",
      "Includes N24 Welcome Pack & 1-on-1 PT onboarding",
    ],
    buttonText: "Start Year of Wellness",
  },
] as const;

export const pilatesSessionPacks = [
  {
    name: "5 Pack Digital Reformer Pilates",
    price: "$120",
    unit: "",
    saveBadge: "Save 14%",
    originalPrice: "$28 / session",
    discountedPrice: "$24.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/e628daba40a06bf6b3a7c7afb58a0623",
    description:
      "Enjoy 5 self-guided Digital Reformer, Mat, Yoga, or Stretch sessions with total booking freedom:",
    features: [
      "Full studio access from 5:00 AM – 10:00 PM daily",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 2 full months from purchase date",
      "Access to 800+ on-demand classes across all fitness levels",
    ],
    buttonText: "Purchase 5 Pack",
  },
  {
    name: "10 Pack Digital Reformer Pilates",
    price: "$210",
    unit: "",
    saveBadge: "Save 25%",
    originalPrice: "$28 / session",
    discountedPrice: "$21.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/6df24c5d5d9889b30959a0a711ca5b6c",
    description:
      "Our most popular session pack—10 self-guided Digital Reformer or Mat classes with extended validity:",
    features: [
      "Full studio access from 5:00 AM – 10:00 PM daily",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 3 full months from purchase date",
      "Access to 800+ on-demand classes across all fitness levels",
    ],
    buttonText: "Purchase 10 Pack",
  },
  {
    name: "20 Pack Digital Reformer Pilates",
    price: "$360",
    unit: "",
    saveBadge: "Save 36%",
    originalPrice: "$28 / session",
    discountedPrice: "$18.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/9b6ba170db57a445f1f098333493b8ac",
    description:
      "Our best per-session value—20 self-guided Digital Reformer or Mat classes for dedicated practitioners:",
    features: [
      "Full studio access from 5:00 AM – 10:00 PM daily",
      "First On-boarding session must be booked during the staff hours",
      "Valid for 6 full months from purchase date",
      "Access to 800+ on-demand classes across all fitness levels",
    ],
    buttonText: "Purchase 20 Pack",
  },
] as const;

export const infraredSaunaPacks = [
  {
    name: "Infrared Sauna Casual (30 Mins)",
    price: "$25",
    unit: "",
    saveBadge: "",
    originalPrice: "",
    discountedPrice: "",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/921e4e44a8765f64d28966b697f4466a",
    description:
      "Private 30-minute infrared sauna heat therapy session for muscle recovery and detoxification:",
    features: [
      "Private luxury sauna suite",
      "Valid for 1 month from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Book Sauna Session",
  },
  {
    name: "Infrared Sauna Casual (45 Mins)",
    price: "$30",
    unit: "",
    saveBadge: "",
    originalPrice: "",
    discountedPrice: "",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/bda2ebcab382163ef7e2b7af1d384d03",
    description:
      "Private 45-minute infrared sauna heat therapy session for muscle recovery and detoxification:",
    features: [
      "Private luxury sauna suite",
      "Valid for 1 month from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Book Sauna Session",
  },
  {
    name: "Infrared Sauna Casual for Two (45 Mins)",
    price: "$45",
    unit: "",
    saveBadge: "Save 20%",
    originalPrice: "$25 / session",
    discountedPrice: "$20.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/12a2ffe9bf9da73eb99dec908042a0b3",
    description:
      "Share a private 45-minute infrared sauna recovery session with a partner or friend:",
    features: [
      "Private luxury sauna suite (applies for 2 people)",
      "Valid for 1 month from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Book Sauna for Two",
  },
  {
    name: "5 Pack Infrared Sauna (45 Mins)",
    price: "$110",
    unit: "",
    saveBadge: "Save 12%",
    originalPrice: "$25 / session",
    discountedPrice: "$22.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/599d7ac72e7809746dad8a449fa11580",
    description:
      "5 private 45-minute infrared sauna sessions to accelerate muscle recovery and relieve tension:",
    features: [
      "Private luxury sauna suite",
      "Valid for 2 months from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Purchase 5 Pack",
  },
  {
    name: "10 Pack Infrared Sauna (45 Mins)",
    price: "$210",
    unit: "",
    saveBadge: "Save 16%",
    originalPrice: "$25 / session",
    discountedPrice: "$21.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/ee192da9025575f6986aaebfadb17a1e",
    description:
      "10 private 45-minute infrared sauna sessions for regular detoxification and stress relief:",
    features: [
      "Private luxury sauna suite",
      "Valid for 3 months from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Purchase 10 Pack",
  },
  {
    name: "20 Pack Infrared Sauna (45 Mins)",
    price: "$360",
    unit: "",
    saveBadge: "Save 28%",
    originalPrice: "$25 / session",
    discountedPrice: "$18.00 / session",
    iframeUrl:
      "https://n24pilatesstudio.gymmasteronline.com/portal/signup/details/6bbd0b6580ffa674092bd71d8db02b36",
    description:
      "20 private 45-minute infrared sauna sessions for dedicated athletes and wellness seekers:",
    features: [
      "Private luxury sauna suite",
      "Valid for 6 months from purchase date",
      "Complimentary shower facilities & wellness amenities",
    ],
    buttonText: "Purchase 20 Pack",
  },
] as const;

export const schedule = [
  {
    day: "Monday",
    sessions: [
      ["6:00", "Reformer Pilates", "Tayla"],
      ["9:30", "Mat Pilates", "Lauren"],
      ["17:30", "Reformer Pilates", "Maddison"],
    ],
  },
  {
    day: "Tuesday",
    sessions: [
      ["6:30", "Yoga Flow", "Chloe"],
      ["10:00", "Reformer Pilates", "Tayla"],
      ["18:00", "Meditation & Breathwork", "Chloe"],
    ],
  },
  {
    day: "Wednesday",
    sessions: [
      ["6:00", "Reformer Pilates", "Maddison"],
      ["9:30", "Mat Pilates", "Tayla"],
      ["17:30", "Reformer Pilates", "Lauren"],
    ],
  },
  {
    day: "Thursday",
    sessions: [
      ["6:30", "Yoga Flow", "Chloe"],
      ["10:00", "Reformer Pilates", "Lauren"],
      ["18:00", "Reformer Pilates", "Maddison"],
    ],
  },
  {
    day: "Friday",
    sessions: [
      ["6:00", "Reformer Pilates", "Tayla"],
      ["9:30", "Restorative Yoga", "Chloe"],
      ["17:00", "Mat Pilates", "Maddison"],
    ],
  },
  {
    day: "Saturday",
    sessions: [
      ["7:30", "Reformer Pilates", "Lauren"],
      ["9:00", "Yoga Flow", "Chloe"],
      ["10:30", "Reformer Pilates", "Tayla"],
    ],
  },
] as const;
