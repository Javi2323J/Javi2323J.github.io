export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    title: 'Javier Romera',
    subtitle: 'My Portfolio',
    description: 'Personal portfolio',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Projects',
            href: '/projects'
        },
        {
            text: 'Github',
            href: 'https://github.com/Javi2323J'
        },
    ],
    footerNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Linkedin',
            href: 'https://www.linkedin.com/in/javi2323j'
        },
        {
            text: 'GitHub',
            href: 'https://github.com/Javi2323J'
        },
    ],
    hero: {
        title: 'Hi There & Welcome to My Corner of the Web!',
        text: "Hi, I'm **Javier Romera**, a passionate Web Developer with expertise in the MERN stack (MongoDB, Express.js, React, Node.js). I recently completed an intensive coding bootcamp, where I honed my skills in creating dynamic and user-friendly web applications. Now, I'm eager to bring my knowledge and creativity to a professional team as I pursue new opportunities in the tech industry. Feel free to take a look at my GitHub or contact me!",
        image: {
            src: '/hero.jpeg',
            alt: 'Javier Romera'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Subscribe to Dante Newsletter',
        text: 'One update per week. All the latest posts directly in your inbox.',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
