import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "David Garcia",
    position: "Typesetting industry",
    imageSrc: "/home/testimonial-01.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
  {
    id: 2,
    name: "Joseph Martinez",
    position: "Streamer",
    imageSrc: "/home/testimonial-02.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
  {
    id: 3,
    name: "Robert Johnson",
    position: "Streamer",
    imageSrc: "/home/testimonial-03.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
  {
    id: 4,
    name: "Sarah Williams",
    position: "Streamer",
    imageSrc: "/home/testimonial-04.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
  {
    id: 5,
    name: "Michael Jones",
    position: "Streamer",
    imageSrc: "/home/testimonial-05.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
  {
    id: 6,
    name: "Richard Thompson",
    position: "Streamer",
    imageSrc: "/home/testimonial-01.png",
    description:
      "Legit platform! I’ve tried a few others, but Bagsakan has the best games and promos.",
  },
];

const StreamersTestimonial = () => {
  return (
    <div className="gradient-bg py-12 md:py-16 px-4 sm:px-6 lg:px-8 height lg:min-h-[500px]">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-yellow-400 mb-3  [font-family:MuseoModerno,sans-serif]">
          Streamers Testimonials
        </h2>
        <p className="text-neutral-400 max-w-2xl mx-auto text-sm md:text-base">
          Bagsakan brings the excitement of the casino straight to your screen.
          Safe, secure, and always ready when you are.
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/60 p-6 rounded-lg shadow-lg flex flex-col"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonial.imageSrc || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  sizes="56px"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col">
                <h3 className="text-lg font-semibold text-yellow-400">
                  {testimonial.name}
                </h3>
                <p className="text-sm text-neutral-400">
                  {testimonial.position}
                </p>
              </div>
            </div>

            <div>
              <p className="text-neutral-300 text-sm leading-relaxed">
                {testimonial.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamersTestimonial;
