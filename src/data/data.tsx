import {
  AcademicCapIcon,
  // ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage12 from '../images/portfolio/portfolio-12.jpg';
import porfolioImage13 from '../images/portfolio/portfolio-13.jpg';
import porfolioImage14 from '../images/portfolio/portfolio-14.jpg';
import porfolioImage15 from '../images/portfolio/portfolio-15.jpg';
import porfolioImage16 from '../images/portfolio/portfolio-16.jpg';
import porfolioImage17 from '../images/portfolio/portfolio-17.jpg';
import porfolioImage18 from '../images/portfolio/portfolio-18.jpg';
import porfolioImage19 from '../images/portfolio/portfolio-19.jpg';
import porfolioImage20 from '../images/portfolio/portfolio-20.jpg';
import porfolioImage21 from '../images/portfolio/portfolio-21.jpg';
import porfolioImage22 from '../images/portfolio/portfolio-22.jpg';
import porfolioImage23 from '../images/portfolio/portfolio-23.jpg';
import porfolioImage24 from '../images/portfolio/portfolio-24.jpg';
import porfolioImage25 from '../images/portfolio/portfolio-25.jpg';
import porfolioImage26 from '../images/portfolio/portfolio-26.jpg';
import porfolioImage27 from '../images/portfolio/portfolio-27.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'LM - Asesores Publicitarios',
  description: 'Asesores publicitarios',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'Nosotros',
  Contact: 'contacto',
  Portfolio: 'clientes',
  Resume: 'Servicios',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `LM`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Cientos de agencias de turismo, hoteles, restaurantes como otros rubros han elegido nuestra calidad y servicio.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100"> Desde hace más de 15 años asesoramos</strong> a empresas de diferentes
        sectores, especializándonos principalmente en el área turística nacional e internacional.
      </p>
    </>
  ),
  actions: [
    {
      href: `#${SectionId.About}`,
      text: 'Nosotros',
      primary: true,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contacto',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: "Hoy en día, la mayoría de las empresas del sector turístico no tienen llegada o encuentran dificultad para comenzar a publicar en medios masivos de comunicación, un importante canal promociona para difundir sus productos o servicios.\n" +
  "Nuestro equipo de trabajo especializado les ofrece un servicio personalizado de asesoría publicitaria y las herramientas para tener presencia en los principales medios de comunicación.",
    aboutItems: [
    {label: 'Location', text: 'Victoria, BC', Icon: MapIcon},
    {label: 'Age', text: '29', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon},
    {label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Instant Domains, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'French',
        level: 4,
      },
      {
        name: 'Spanish',
        level: 3,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'GraphQL',
        level: 6,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 4,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Wyndham',
    description: '',
    url: 'https://hotelwyndhamnordelta.com/',
    image: porfolioImage1,
  },
  {
    title: 'Palladium',
    description: '',
    url: 'https://www.palladiumhotelgroup.com/es',
    image: porfolioImage2,
  },
  {
    title: 'BusPlus',
    description: '',
    url: 'https://busplus.com.ar/',
    image: porfolioImage3,
  },
  {
    title: 'Opus Viajes',
    description: '',
    url: 'https://www.opusviajes.tur.ar/',
    image: porfolioImage4,
  },
  {
    title: 'Go~Up',
    description: '',
    url: '',
    image: porfolioImage5,
  },
  {
    title: 'Latitud Buzios',
    description: '',
    url: 'https://www.latitudhoteles.com/es/hoteles/latitud-buzios/',
    image: porfolioImage6,
  },
  {
    title: 'Catedral Patagonia',
    description: '',
    url: '',
    image: porfolioImage7,
  },
  {
    title: 'Via Bariloche',
    description: '',
    url: 'https://viabariloche.com.ar/',
    image: porfolioImage8,
  },
  {
    title: 'Las Leñas',
    description: '',
    url: '',
    image: porfolioImage9,
  },
  {
    title: 'Drazzler',
    description: '',
    url: 'https://www.wyndhamhotels.com/es-xl/dazzler',
    image: porfolioImage10,
  },
  {
    title: 'Rochester',
    description: '',
    url: 'https://www.rochester-hotel.com/',
    image: porfolioImage11,
  },
  {
    title: 'Ker',
    description: '',
    url: 'https://www.kerhoteles.com.ar/',
    image: porfolioImage12,
  },
  {
    title: 'Sturla',
    description: '',
    url: 'https://www.sturlaviajes.com.ar/',
    image: porfolioImage13,
  },
  {
    title: 'Dot',
    description: '',
    url: 'https://dot-hotels.com/portal/es-es/p19/DOTHotels',
    image: porfolioImage14,
  },
  {
    title: 'Shopping Viajes',
    description: '',
    url: 'https://www.shoppingviajes.com/',
    image: porfolioImage15,
  },
  {
    title: 'Senderos del Tao',
    description: '',
    url: 'http://senderosdeltao.com.ar/',
    image: porfolioImage16,
  },
  {
    title: 'New Point Miami',
    description: '',
    url: 'https://newpointmiami.com/en/',
    image: porfolioImage17,
  },
  {
    title: 'Gool',
    description: '',
    url: 'https://www.voegol.com.br/',
    image: porfolioImage18,
  },
  {
    title: 'Universal Assistance',
    description: '',
    url: 'https://www.universal-assistance.com/ar-es/home.html',
    image: porfolioImage19,
  },
  {
    title: 'Pedraza',
    description: '',
    url: 'https://pedraza.com.ar/',
    image: porfolioImage20,
  },
  {
    title: 'Travel Ace',
    description: '',
    url: 'https://www.travel-ace.com/ar-es/home.html',
    image: porfolioImage21,
  },
  {
    title: 'Universal Orlando',
    description: '',
    url: 'https://www.universalorlando.com/web/en/us',
    image: porfolioImage22,
  },
  {
    title: 'Disney',
    description: '',
    url: 'https://disneyworld.disney.go.com/es-ar/',
    image: porfolioImage23,
  },
  {
    title: 'All Seasons',
    description: '',
    url: 'https://www.allseasons.com.ar/',
    image: porfolioImage24,
  },
  {
    title: 'Gyra',
    description: '',
    url: 'https://www.gyra.com/',
    image: porfolioImage25,
  },
  {
    title: 'Visit Florida',
    description: '',
    url: 'https://www.visitflorida.org/',
    image: porfolioImage26,
  },
  {
    title: 'Resort La Torrel',
    description: '',
    url: 'https://www.resortlatorre.com.br/',
    image: porfolioImage27,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'April 2007',
    location: 'Clown college',
    title: 'Masters in Beer tasting',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'March 2003',
    location: 'School of Business',
    title: 'What did you study 101',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2010 - Present',
    location: 'Awesome Development Company',
    title: 'Senior UX Engineer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
  {
    date: 'March 2007 - February 2010',
    location: 'Garage Startup Studio',
    title: 'Junior bug fixer',
    content: (
      <p>
        Describe work, special projects, notable achievements, what technologies you have been working with, and
        anything else that would be useful for an employer to know.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Contactanos',
  description: '',
  items: [
    {
      type: ContactType.Email,
      text: 'info@asesoreslm.com.ar',
      href: 'mailto:info@asesoreslm.com.ar',
    },
    {
      type: ContactType.Location,
      text: 'Buenos Aires, Argentina',
    },
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
