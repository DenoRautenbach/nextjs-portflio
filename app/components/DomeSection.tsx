
import { Quote, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
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

const Testimonials = () => {
  return (
    <section
      className="py-24 relative overflow-hidden w-screen h-screen"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div className="relative z-10 container mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4">
            CLIENT <span className="text-[#00f0ff]">INTEL</span>
          </h2>
          <div className="h-1 w-24 bg-[#00f0ff] mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="group relative p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#00f0ff]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 text-[#00f0ff]">
                  <Quote size={40} className="opacity-50" />
                </div>

                <p className="text-white/80 text-lg leading-relaxed mb-8 flex-grow font-light">
                  "{testimonial.content}"
                </p>

                <div className="border-t border-white/10 pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-white font-bold text-lg">{testimonial.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} size={14} className="fill-[#00f0ff] text-[#00f0ff]" />
                      ))}
                    </div>
                  </div>
                  <div className="text-sm font-mono text-[#00f0ff]/80">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
