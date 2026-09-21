export type CourseCategory =
  | "quran"
  | "tajweed"
  | "classical-arabic"
  | "fiqh"
  | "history";

export type CourseAudience = "all" | "male" | "female";

export type CourseLevel = "Beginner" | "Intermediate" | "Advanced";

export interface CourseLesson {
  id: string;
  title: string;
  description?: string;
  duration?: string;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: CourseLesson[];
}

export interface CourseReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;

  category: CourseCategory;
  audience: CourseAudience;
  level: CourseLevel;

  instructor: string;

  duration: string;
  schedule: string;

  students: number;

  image?: string;

  language?: string;
  certificate?: boolean;

  modules?: CourseModule[];

  reviews?: CourseReview[];
}

export const courses: Course[] = [
  {
    id: "quran-foundations",
    title: "Quran Foundations",
    description:
      "Learn how to read the Quran correctly and build a strong foundation in Quranic recitation.",

    category: "quran",
    audience: "all",
    level: "Beginner",

    instructor: "Ustadh Ahmad",

    duration: "8 weeks",
    schedule: "Saturday & Tuesday",

    students: 24,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "quran-foundations-module-1",
        title: "Getting Started",
        lessons: [
          {
            id: "quran-foundations-lesson-1",
            title: "Introduction to Quranic Reading",
            description:
              "Understand the basics of Quranic reading and why correct pronunciation matters.",
            duration: "60 min",
          },
          {
            id: "quran-foundations-lesson-2",
            title: "Arabic Letters",
            description:
              "Learn the Arabic alphabet and recognize the letters used in the Quran.",
            duration: "60 min",
          },
        ],
      },
      {
        id: "quran-foundations-module-2",
        title: "Reading Practice",
        lessons: [
          {
            id: "quran-foundations-lesson-3",
            title: "Connecting the Letters",
            description: "Practice connecting Arabic letters to form words.",
            duration: "60 min",
          },
          {
            id: "quran-foundations-lesson-4",
            title: "Short Vowels",
            description:
              "Learn Fatha, Damma, and Kasra and apply them while reading.",
            duration: "60 min",
          },
        ],
      },
      {
        id: "quran-foundations-module-3",
        title: "Quranic Recitation",
        lessons: [
          {
            id: "quran-foundations-lesson-5",
            title: "Reading Short Surahs",
            duration: "60 min",
          },
          {
            id: "quran-foundations-lesson-6",
            title: "Guided Recitation",
            duration: "60 min",
          },
        ],
      },
      {
        id: "quran-foundations-module-4",
        title: "Building Consistency",
        lessons: [
          {
            id: "quran-foundations-lesson-7",
            title: "Daily Reading Routine",
            duration: "60 min",
          },
          {
            id: "quran-foundations-lesson-8",
            title: "Final Recitation Practice",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [
      {
        id: "review-1",
        name: "Ahmed",
        rating: 5,
        comment:
          "A very clear introduction to Quranic reading. The lessons are easy to follow.",
      },
      {
        id: "review-2",
        name: "Omar",
        rating: 5,
        comment: "The instructor explains everything patiently and clearly.",
      },
      {
        id: "review-3",
        name: "Yusuf",
        rating: 4,
        comment:
          "Very useful for anyone starting their Quran learning journey.",
      },
    ],
  },

  {
    id: "quran-memorization-brothers",
    title: "Quran Memorization",
    description:
      "A structured program for brothers who want to memorize and consistently review the Quran.",

    category: "quran",
    audience: "male",
    level: "Intermediate",

    instructor: "Ustadh Omar",

    duration: "12 weeks",
    schedule: "Monday & Thursday",

    students: 18,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "memorization-module-1",
        title: "Memorization Methodology",
        lessons: [
          {
            id: "memorization-1",
            title: "Building a Memorization Routine",
            duration: "60 min",
          },
          {
            id: "memorization-2",
            title: "Choosing Your Daily Portion",
            duration: "60 min",
          },
        ],
      },
      {
        id: "memorization-module-2",
        title: "Revision Techniques",
        lessons: [
          {
            id: "memorization-3",
            title: "Daily Revision",
            duration: "60 min",
          },
          {
            id: "memorization-4",
            title: "Weekly Revision",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [
      {
        id: "memorization-review-1",
        name: "Abdullah",
        rating: 5,
        comment: "The structured revision system helped me stay consistent.",
      },
    ],
  },

  {
    id: "tajweed-for-sisters",
    title: "Tajweed for Sisters",
    description:
      "Improve your Quranic recitation through practical Tajweed rules and guided practice.",

    category: "tajweed",
    audience: "female",
    level: "Beginner",

    instructor: "Ustadha Maryam",

    duration: "10 weeks",
    schedule: "Sunday & Wednesday",

    students: 20,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "tajweed-module-1",
        title: "Introduction to Tajweed",
        lessons: [
          {
            id: "tajweed-1",
            title: "What is Tajweed?",
            duration: "60 min",
          },
          {
            id: "tajweed-2",
            title: "Why Tajweed Matters",
            duration: "60 min",
          },
        ],
      },
      {
        id: "tajweed-module-2",
        title: "Makharij",
        lessons: [
          {
            id: "tajweed-3",
            title: "Articulation Points",
            duration: "60 min",
          },
          {
            id: "tajweed-4",
            title: "Common Pronunciation Errors",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [
      {
        id: "tajweed-review-1",
        name: "Aisha",
        rating: 5,
        comment:
          "The practical exercises made the Tajweed rules much easier to understand.",
      },
    ],
  },

  {
    id: "classical-arabic",
    title: "Classical Arabic Essentials",
    description:
      "Develop the Arabic vocabulary and grammar needed to better understand classical Islamic texts.",

    category: "classical-arabic",
    audience: "all",
    level: "Intermediate",

    instructor: "Ustadh Yusuf",

    duration: "12 weeks",
    schedule: "Saturday & Wednesday",

    students: 31,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "arabic-module-1",
        title: "Vocabulary Foundations",
        lessons: [
          {
            id: "arabic-1",
            title: "Essential Arabic Vocabulary",
            duration: "60 min",
          },
          {
            id: "arabic-2",
            title: "Vocabulary in Context",
            duration: "60 min",
          },
        ],
      },
      {
        id: "arabic-module-2",
        title: "Grammar Foundations",
        lessons: [
          {
            id: "arabic-3",
            title: "Nouns and Verbs",
            duration: "60 min",
          },
          {
            id: "arabic-4",
            title: "Sentence Structure",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [],
  },

  {
    id: "fiqh-brothers",
    title: "Introduction to Fiqh",
    description:
      "Study foundational principles of Islamic jurisprudence and their practical applications.",

    category: "fiqh",
    audience: "male",
    level: "Beginner",

    instructor: "Ustadh Abdullah",

    duration: "10 weeks",
    schedule: "Friday & Sunday",

    students: 16,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "fiqh-brothers-module-1",
        title: "Foundations of Fiqh",
        lessons: [
          {
            id: "fiqh-brothers-1",
            title: "Introduction to Fiqh",
            duration: "60 min",
          },
          {
            id: "fiqh-brothers-2",
            title: "Sources of Islamic Law",
            duration: "60 min",
          },
        ],
      },
      {
        id: "fiqh-brothers-module-2",
        title: "Purification",
        lessons: [
          {
            id: "fiqh-brothers-3",
            title: "Purification",
            duration: "60 min",
          },
          {
            id: "fiqh-brothers-4",
            title: "Practical Applications",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [],
  },

  {
    id: "fiqh-sisters",
    title: "Fiqh for Sisters",
    description:
      "Explore essential topics of Islamic jurisprudence in a dedicated sisters-only learning environment.",

    category: "fiqh",
    audience: "female",
    level: "Beginner",

    instructor: "Ustadha Aisha",

    duration: "10 weeks",
    schedule: "Tuesday & Thursday",

    students: 22,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "fiqh-sisters-module-1",
        title: "Foundations",
        lessons: [
          {
            id: "fiqh-sisters-1",
            title: "Introduction to Fiqh",
            duration: "60 min",
          },
          {
            id: "fiqh-sisters-2",
            title: "Essential Principles",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [],
  },

  {
    id: "islamic-history",
    title: "Islamic History",
    description:
      "Explore major events, personalities, and civilizations throughout Islamic history.",

    category: "history",
    audience: "all",
    level: "Intermediate",

    instructor: "Ustadh Hamza",

    duration: "8 weeks",
    schedule: "Saturday",

    students: 27,

    language: "English",
    certificate: true,

    modules: [
      {
        id: "history-module-1",
        title: "Early Islamic History",
        lessons: [
          {
            id: "history-1",
            title: "The Beginning of Islam",
            duration: "60 min",
          },
          {
            id: "history-2",
            title: "The Early Muslim Community",
            duration: "60 min",
          },
        ],
      },
      {
        id: "history-module-2",
        title: "Islamic Civilizations",
        lessons: [
          {
            id: "history-3",
            title: "Major Islamic Civilizations",
            duration: "60 min",
          },
          {
            id: "history-4",
            title: "The Islamic Golden Age",
            duration: "60 min",
          },
        ],
      },
    ],

    reviews: [],
  },
];
