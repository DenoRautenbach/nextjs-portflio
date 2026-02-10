
export interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

export const testimonialsData: Testimonial[] = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CTO",
        company: "Nexus Dynamics",
        content: "The attention to detail in the 3D implementations is mind-bending. It's not just a website; it's an immersive experience that redefined our brand's digital presence.",
        rating: 5
    },
    {
        id: 2,
        name: "Marcus Thorne",
        role: "Creative Director",
        company: "Aether Studios",
        content: "Working with Deno was a revelation. He speaks the language of design fluently and translates it into code that performs flawlessly. Pure digital alchemy.",
        rating: 5
    },
    {
        id: 3,
        name: "Elena Rodriguez",
        role: "Product Lead",
        company: "Quantum Leap",
        content: "We needed something that didn't exist yet. Deno didn't just build it; he improved upon our wildest concepts. The WebGL performance is buttery smooth.",
        rating: 5
    }
];
