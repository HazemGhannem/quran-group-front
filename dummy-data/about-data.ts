import {
  BookOpen,
  Clock,
  GraduationCap,
  Globe,
  Heart,
  Users,
  Award,
  PenLine,
  Share2,
  Code,
  Palette,
  LucideIcon,
} from "lucide-react";

export type TeamRole =
  | "founder"
  | "content-writer"
  | "social-manager"
  | "developer"
  | "designer";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleType: TeamRole;
  initials: string;
  email: string;
  bio: string;
  longBio: string;
  expertise: string[];
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
  image?: string;
  joinedDate: string;
  achievements: string[];
  quote?: string;
}

export const STATS = [
  {
    icon: GraduationCap,
    label: "Students Worldwide",
    value: "500+",
  },
  {
    icon: Clock,
    label: "Classes Per Week",
    value: "20+",
  },
  {
    icon: Users,
    label: "Qualified Teachers",
    value: "10+",
  },
  {
    icon: Globe,
    label: "Countries Reached",
    value: "30+",
  },
];

export const OFFERINGS = [
  {
    icon: BookOpen,
    title: "No Prerequisites",
    desc: 'You do not need prior knowledge or to feel "ready". We start from wherever you are.',
  },
  {
    icon: Clock,
    title: "Learn at Your Own Pace",
    desc: "Self-paced courses let you study around your work, family, and life commitments.",
  },
  {
    icon: GraduationCap,
    title: "Qualified Teachers",
    desc: "All our teachers are huffaz with real teaching experience who understand your challenges.",
  },
  {
    icon: Users,
    title: "Community Support",
    desc: "Ask questions directly to your teacher through our built-in Q&A on every lesson.",
  },
  {
    icon: Globe,
    title: "Open to Everyone",
    desc: "Students from across the globe, every background, every age. All are welcome.",
  },
  {
    icon: Heart,
    title: "Always Free",
    desc: "No hidden fees, no subscriptions. Free Quran education is our promise.",
  },
];

export const TESTIMONIALS = [
  {
    name: "Abdelquodr Olawale",
    country: "Nigeria",
    stars: 5,
    quote:
      "The teachers were very patient ensuring that I recite each letter the right way since Arabic is not my first language. Alhamdulillah I'm getting better at it.",
  },
  {
    name: "Muhammad",
    country: "India",
    stars: 5,
    quote:
      "They teach hifdh the classical way and make it easy and accessible to memorise the Quran for anyone who is interested. The only external requirement is your persistence.",
  },
  {
    name: "Ibrahim Khan",
    country: "United Kingdom",
    stars: 5,
    quote:
      "The brothers who teach in these groups are very good in terms of their memorisation, making it easier for the correct recitation to be mastered.",
  },
  {
    name: "Aziz Mesaoudi",
    country: "Belgium",
    stars: 5,
    quote:
      "Masha Allah great initiative that helps me daily with my new journey into hifz. May Allah swt reward the teachers and organisers.",
  },
];

export const TEAM: TeamMember[] = [
  {
    id: "hazem-ghannem",
    name: "Hazem Ghannem",
    role: "Founder & CEO",
    roleType: "founder",
    initials: "HG",
    email: "hazem@qurangroup.com",
    bio: "Visionary leader building sacred knowledge platforms.",
    longBio: `Hazem is a passionate software engineer and Islamic scholar dedicated to making Quranic education accessible to everyone worldwide. With expertise in full-stack development and a deep commitment to Islamic values, he founded The Quran Group to create a bridge between modern technology and sacred knowledge.

His vision is to democratize Islamic education through innovative digital platforms that respect cultural values while leveraging cutting-edge technology. Hazem believes that technology should serve humanity and strengthen our connection to our faith.

Outside of work, Hazem enjoys mentoring young developers, contributing to open-source projects, and spending time in Quranic study.`,
    expertise: [
      "Full-Stack Development",
      "Platform Architecture",
      "Islamic Education",
      "Team Leadership",
      "Product Strategy",
      "Community Building",
    ],
    social: {
      twitter: "https://twitter.com/hazemghannem",
      linkedin: "https://linkedin.com/in/hazemghannem",
      github: "https://github.com/HazemGhannem",
    },
    joinedDate: "2024-01-01",
    achievements: [
      "Founded The Quran Group with vision to democratize Islamic education",
      "Built scalable platform serving 10,000+ students",
      "Established partnerships with 50+ Islamic scholars",
      "Developed innovative video streaming infrastructure",
    ],
    quote:
      "Technology should serve humanity and strengthen our connection to our faith.",
  },
  {
    id: "fatima-khalil",
    name: "Fatima Khalil",
    role: "Content Writer",
    roleType: "content-writer",
    initials: "FK",
    email: "fatima@qurangroup.com",
    bio: "Creating meaningful content that resonates with learners.",
    longBio: `Fatima is a skilled content writer with a passion for Islamic knowledge and education. With over 5 years of experience in educational content creation, she specializes in making complex Islamic concepts accessible and engaging for diverse audiences.

Her approach combines scholarly accuracy with contemporary language, ensuring that both traditional learners and modern readers find value in every piece. Fatima works closely with Islamic scholars to ensure all content meets the highest standards of authenticity and understanding.

She is particularly passionate about bridging generational gaps in Islamic education and making classical Islamic wisdom relevant to today's challenges.`,
    expertise: [
      "Content Strategy",
      "Educational Writing",
      "Islamic Studies",
      "Research",
      "Curriculum Development",
      "Audience Engagement",
    ],
    social: {
      linkedin: "https://linkedin.com/in/fatima-khalil",
    },
    joinedDate: "2024-02-15",
    achievements: [
      "Created 200+ articles on Quranic studies and Islamic sciences",
      "Developed curriculum for 15+ courses",
      "Mentored 20+ aspiring Islamic scholars",
      "Published research on digital Islamic education",
    ],
    quote:
      "Education is the bridge between tradition and modernity. We must build it with care.",
  },
  {
    id: "ahmed-hassan",
    name: "Ahmed Hassan",
    role: "Social Media Manager",
    roleType: "social-manager",
    initials: "AH",
    email: "ahmed@qurangroup.com",
    bio: "Building connections and growing our community online.",
    longBio: `Ahmed is a dynamic social media strategist with a talent for building engaged communities around shared values. With expertise in digital marketing and community management, he has grown The Quran Group's online presence to reach over 100,000 followers across platforms.

His strategy focuses on authentic engagement, meaningful conversations, and creating content that inspires action. Ahmed believes in the power of social media to connect believers across the globe and strengthen the bonds of our global Islamic community.

He is constantly exploring new ways to leverage digital platforms for education and connection without compromising on Islamic values.`,
    expertise: [
      "Social Media Strategy",
      "Community Management",
      "Content Creation",
      "Digital Marketing",
      "Analytics",
      "Brand Building",
    ],
    social: {
      twitter: "https://twitter.com/ahmed-hassan",
      linkedin: "https://linkedin.com/in/ahmed-hassan",
    },
    joinedDate: "2024-03-10",
    achievements: [
      "Grew social media following from 0 to 100K+",
      "Created viral campaigns reaching 1M+ impressions",
      "Built community of 50K+ engaged members",
      "Coordinated 30+ successful campaigns",
    ],
    quote:
      "Community is built on authentic connections and shared values. Everything else follows from that.",
  },
  {
    id: "surah-ali",
    name: "Surah Ali",
    role: "Lead Developer",
    roleType: "developer",
    initials: "SA",
    email: "surah@qurangroup.com",
    bio: "Building the technical foundation for Islamic education.",
    longBio: `Surah is an experienced full-stack developer with a passion for creating technology that serves communities. With expertise in modern web technologies, real-time systems, and scalable architecture, she has built the technical backbone of The Quran Group's platform.

Her focus is on creating robust, accessible, and performant systems that can serve diverse users across the globe. Surah believes that good technology should be invisible—it should simply enable people to connect with knowledge and each other.

She is an advocate for open-source software and regularly contributes to projects that advance the field of digital education.`,
    expertise: [
      "Full-Stack Development",
      "System Architecture",
      "Real-Time Systems",
      "Performance Optimization",
      "Database Design",
      "DevOps",
    ],
    social: {
      github: "https://github.com/surah-ali",
      linkedin: "https://linkedin.com/in/surah-ali",
    },
    joinedDate: "2024-02-01",
    achievements: [
      "Architected platform supporting 50K+ concurrent users",
      "Implemented real-time video streaming with 99.9% uptime",
      "Reduced page load time by 70%",
      "Led team of 5 developers",
    ],
    quote:
      "Technology is at its best when it disappears and lets knowledge flow freely.",
  },
  {
    id: "layla-mansour",
    name: "Layla Mansour",
    role: "UI/UX Designer",
    roleType: "designer",
    initials: "LM",
    email: "layla@qurangroup.com",
    bio: "Designing experiences that inspire and educate.",
    longBio: `Layla is a thoughtful designer who believes that beautiful design should serve purpose, not just aesthetics. With background in interaction design and accessibility, she has crafted The Quran Group's interfaces to be both beautiful and inclusive.

Her design philosophy centers on Islamic aesthetics and principles—harmony, balance, purpose, and accessibility. She works closely with scholars, educators, and community members to ensure every pixel serves the mission of making Islamic education accessible and inspiring.

Layla is passionate about inclusive design and ensures that users of all abilities can access our platform with dignity and ease.`,
    expertise: [
      "UI/UX Design",
      "Accessibility Design",
      "User Research",
      "Islamic Aesthetics",
      "Design Systems",
      "Prototyping",
    ],
    social: {
      linkedin: "https://linkedin.com/in/layla-mansour",
    },
    joinedDate: "2024-02-20",
    achievements: [
      "Designed complete design system with 100+ components",
      "Improved user satisfaction score by 45%",
      "Achieved WCAG AAA compliance",
      "Led design workshops with 200+ educators",
    ],
    quote:
      "Design should be a bridge between intention and understanding. Every detail matters.",
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM.find((member) => member.id === id);
};

export const roleIcons: Record<TeamRole, LucideIcon> = {
  founder: Award,
  "content-writer": PenLine,
  "social-manager": Share2,
  developer: Code,
  designer: Palette,
};
