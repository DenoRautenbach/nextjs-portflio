
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    content: string;
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "John-Bruce Noad",
        role: "Developer",
        content: "When it comes to his work, he is not afraid in the slightest to put his hard-working nature, and his amazing intellect on full display. I have enjoyed working alongside Deno, and can say with absolute confidence that he will be a great asset to any company that affords him the opportunity to present his value.",
    },
    {
        id: 2,
        name: "Luntu Sogeyana",
        role: "Developer",
        content: "Deno is a reliable person who is not turn down a fellow coder's cry for help when they need it. His determination to never turn down a challenge, work ethic, and intellect makes him a great asset to have in a team and said team is bound to be successful in whichever task if he is involved in it.",
    },
    {
        id: 3,
        name: "Joel Mukanya",
        role: "Lecturer",
        content: "Deno is a very creative, go-getter, and well-behaved student. He does enjoy working with his classmates and works well on his project. He has gained knowledge of web development, including Bootstrap 5. I will be very delighted to see him get hired as a developer.",
    },
];
