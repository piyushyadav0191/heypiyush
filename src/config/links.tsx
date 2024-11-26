import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMedium,
  IconFlame,
  IconMessageCircle,
  IconPencil,
  IconUserCircle,
  IconAddressBook,
  IconTargetArrow
} from "@tabler/icons-react";

/**
 * The basic type of a link.
 */
export type Link = {
  /**
   * The URL of the link.
   */
  href: string;
  /**
   * The title of the link.
   */
  title: string;
};

/**
 * The links displayed in the hero section.
 */
type HeroLinks = Array<{
  /**
   * The unique ID of the link.
   */
  id: string;
  /**
   * The label of the link.
   */
  label: string;
  /**
   * The icon of the link.
   */
  icon: React.ReactNode;
  /**
   * The URL of the link.
   */
  href: string;
}>;

/**
 * The links displayed in the header.
 */
type HeaderLinks = Array<{
  /**
   * The icon of the link.
   */
  icon: React.ReactNode;
  /**
   * The URL of the link.
   */
  href: string;
  /**
   * The text of the link.
   */
  text: string;
}>;

/**
 * The links displayed in the footer.
 */
type FooterLinks = Array<{
  /**
   * The unique ID of the link.
   */
  id: number;
  /**
   * The links of the link group.
   */
  links: Link[];
}>;

export const HEADER_LINKS: HeaderLinks = [
  {
    icon: <IconUserCircle size={14} />,
    href: "/about",
    text: "About",
  },
  {
    icon: <IconFlame size={14} />,
    href: "/projects",
    text: "Projects",
  },
  {
    icon: <IconPencil size={14} />,
    href: "/blog",
    text: "Blog",
  },  
  {
    icon: <IconMessageCircle size={14} />,
    href: "/guestbook",
    text: "Guestbook",
  },

];

export const FOOTER_LINKS: FooterLinks = [
  {
    id: 1,
    links: [
      {
        href: "/",
        title: "Home",
      },
      {
        href: "/about",
        title: "About",
      },
      {
        href: "/blog",
        title: "Blog",
      },
      {
        href: "/contact",
        title: "Contact",
      },
    ],
  },
  {
    id: 2,
    links: [
      {
        href: "/guestbook",
        title: "Guestbook",
      },
      {
        href: "/goals",
        title: "Goals",
      },
      {
        href: "/projects",
        title: "Projects",
      },
      {
        href: "/experience",
        title: "Experience",
      },
    ],
  },
  {
    id: 3,
    links: [
      {
        href: "https://www.linkedin.com/in/piyushyadav0191",
        title: "LinkedIn",
      },
      {
        href: "https://www.instagram.com/blackstone.nim/",
        title: "Instagram",
      },
      {
        href: "https://github.com/piyushyadav0191",
        title: "GitHub",
      },
      {
        href: "https://medium.com/@piyushyadav0191",
        title: "Medium",
      },
    ],
  },
];

export const HERO_LINKS: HeroLinks = [
  {
    id: "github",
    label: "GitHub",
    icon: <IconBrandGithub size={28} />,
    href: "https://github.com/piyushyadav0191",
  },
  {
    id: "instagram",
    label: "Instagram",
    icon: <IconBrandInstagram size={28} />,
    href: "https://www.instagram.com/blackstone.nim/",
  },
  {
    id: "linkedin",
    label: "Linked In",
    icon: <IconBrandLinkedin size={28} />,
    href: "https://www.linkedin.com/in/piyushyadav0191",
  },
  {
    id: "medium",
    label: "Medium",
    icon: <IconBrandMedium size={28} />,
    href: "https://www.medium.com/@piyushyadav0191",
  },
];
