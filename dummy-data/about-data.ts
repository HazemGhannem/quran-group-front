import {
  BookOpen,
  Clock,
  GraduationCap,
  Globe,
  Heart,
  Users,
  Award,
  Cpu,
  Code,
  ClipboardList,
  LucideIcon,
} from "lucide-react";

export type TeamRole = "founder" | "cto" | "developer" | "operations" | "admin";

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  roleType: TeamRole;
  initials: string;
  /** Short line shown on the team card. */
  bio: string;
  /** Full intro; blank lines split paragraphs. */
  longBio: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    portfolio?: string;
  };
  /** Photo in public/team, e.g. "/team/isa-khan.jpg". Falls back to initials if the file is missing. */
  image?: string;
  email?: string;
  expertise?: string[];
  achievements?: string[];
  joinedDate?: string;
  quote?: string;
}

export const OFFERINGS = [
  {
    icon: Heart,
    title: "Always Free",
    desc: "No hidden fees, no subscriptions. Free Quran education is our promise.",
  },
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
    id: "isa-khan",
    name: "Isa Khan",
    role: "Founder & Director",
    roleType: "founder",
    initials: "IK",
    bio: "Founder of The Quran Group, teaching free hifdh classes for Sadaqah Jariyah.",
    longBio: `I'm Isa, the founder of The Quran Group. After the memorisation of the Quran, I started teaching a few free hifdh classes for Sadaqah Jariyah, inspired by my teacher who also taught me for free. That grew into what The Quran Group is today: free daily classes for Quran, Arabic and the Islamic sciences, taught by volunteer scholars to students across six continents.

I built the first rough platform myself, but alhamdulillah our team is responsible for the current platform. I am studying Business Economics at the University of Liverpool, and completing my ijazah and my Alim class at Al Balagh Academy.`,
    social: {
      linkedin: "https://www.linkedin.com/in/isa-khan-9b9a07204/",
    },
    image: "/team/isa-khan.png",
  },
  {
    id: "wissam-ayadi",
    name: "Wissam Ayadi",
    role: "CTO",
    roleType: "cto",
    initials: "WA",
    bio: "Driving our mission forward in the digital space, with over 16 years in software and IT leadership.",
    longBio: `Wissam has joined The Quran Group as CTO to drive our mission forward in the digital space.

Wissam brings over 16 years of experience in Software and IT leadership.`,
    social: {
      linkedin: "https://www.linkedin.com/in/wissamayadi/",
    },
    image: "/team/wissam-ayadi.jpg",
  },
  {
    id: "hazem-ghannem",
    name: "Hazem Ghannem",
    role: "Software Engineer",
    roleType: "developer",
    initials: "HG",
    bio: "I write the code that keeps The Quran Group's classes one click away.",
    longBio: `I'm Hazem, a full-stack software engineer and the one who builds and looks after The Quran Group's platform, from the pages you're reading right now to everything running behind them.

What drives me is simple: nobody should miss out on learning the Quran because of where they live or what's on their calendar. If the right code can put a free class one click away for someone on the other side of the world, that's code worth writing.`,
    social: {
      linkedin: "https://www.linkedin.com/in/hazem-ghannem-6058b71a6",
      github: "https://github.com/HazemGhannem",
      portfolio: "https://ghannemhazem.com",
    },
    image: "/team/hazem-ghannem.png",
  },
  {
    id: "annie-situmbeko",
    name: "Annie Situmbeko",
    role: "Head of Operations",
    roleType: "operations",
    initials: "AS",
    bio: "Supporting the team with administration, coordination and better internal processes.",
    longBio: `I'm Annie, with an interest in organisation, operations, and making things work better behind the scenes. I enjoy coordinating people, organising processes, solving problems, and creating systems that make day-to-day work easier.

At The Quran Group, I work in Operations, supporting the team with administration, coordination, task management, and improving our internal processes. I enjoy working with different people across the organisation and finding practical solutions when something isn't working as it should.

Outside of The Quran Group, I'm developing my career in operations and executive support while exploring technology, automation, and entrepreneurship.`,
    social: {
      linkedin: "https://www.linkedin.com/in/annie-situmbeko-015532356",
    },
    image: "/team/annie-situmbeko.jpg",
  },
  {
    id: "ali-hachim-prati",
    name: "Ali Hachim Prati",
    role: "Head of Men's Administration",
    roleType: "admin",
    initials: "AP",
    bio: "Coordinating and organising the men's classes and supporting the team day to day.",
    longBio: `I'm Ali, and I'm currently working in finance in Luxembourg. I've been involved in community activities for several years, and I'm now serving as Head of Men's Administration, where I help coordinate and organise the men's classes and support the team in its day-to-day needs.`,
    social: {
      linkedin: "https://www.linkedin.com/in/ali-hachim-prati-206a21236",
    },
    image: "/team/ali-hachim-prati.png",
  },
  {
    id: "muneera-jama",
    name: "Muneera Jama",
    role: "Operations Designer & Women's Admin",
    roleType: "operations",
    initials: "MJ",
    bio: "Designing and building operations that run smoothly, and supporting the women's admin team.",
    longBio: `I'm Muneera, and when I'm not working my day job in retail, I'm designing and building operations to make them run smoothly.

In my role, I built the organisation's Airtable-based attendance tracker and supported the women's admin team with day-to-day tasks.`,
    social: {
      linkedin: "https://www.linkedin.com/in/muneerajama",
    },
    image: "/team/muneera-jama.jpg",
  },
];

export const getTeamMemberById = (id: string): TeamMember | undefined => {
  return TEAM.find((member) => member.id === id);
};

export const roleIcons: Record<TeamRole, LucideIcon> = {
  founder: Award,
  cto: Cpu,
  developer: Code,
  operations: ClipboardList,
  admin: Users,
};
