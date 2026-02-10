
export interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    image: string; // Placeholder for now, as ProjectsLayout didn't have specific images per project in the data structure
}

export const projectsData: Project[] = [
    {
        id: 1,
        title: "Ecommerce",
        description: "A decentralized ecommerce platform with advanced product management and secure checkout.",
        link: "https://github.com/Simp4Hitagi/Capstone-Mangako",
        image: ""
    },
    {
        id: 2,
        title: "Python Projects",
        description: "Collection of Python utilities and automation scripts for data processing and workflows.",
        link: "https://github.com/Simp4Hitagi/Python-Projects",
        image: ""
    },
    {
        id: 3,
        title: "TripTronik",
        description: "WordPress-powered travel agency website with booking integration and custom themes.",
        link: "https://dev-triptronik.pantheonsite.io/",
        image: ""
    }
];
