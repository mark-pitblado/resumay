import Badge from "@/components/badge";

interface TemplateBadge {
  text: string;
  color: string;
}

interface Template {
  name: string;
  imageUrl: string;
  bio: string;
  badges: TemplateBadge[];
}

const templates: Template[] = [
  {
    name: "Minimalist",
    imageUrl: "https://placehold.co/300x500",
    bio: "Simple and clean. This template gives your content lots of whitespace and room to breathe.",
    badges: [
      { text: "Contact Info", color: "fill-blue-400" },
      { text: "Education", color: "fill-green-400" },
      { text: "Experience", color: "fill-purple-400" },
    ],
  },
  {
    name: "Compact tech",
    imageUrl: "https://placehold.co/300x500",
    bio: "Emphasizes the technologies that you have worked with, and the cloud platforms that you are familiar with.",
    badges: [
      { text: "Contact Info", color: "fill-blue-400" },
      { text: "Education", color: "fill-green-400" },
      { text: "Experience", color: "fill-purple-400" },
      { text: "Technologies", color: "fill-red-400" },
    ],
  },
  {
    name: "Entrepreneur Royal Blue",
    imageUrl: "https://placehold.co/300x500",
    bio: "A large focus on projects.",
    badges: [
      { text: "Contact Info", color: "fill-blue-400" },
      { text: "Projects", color: "fill-pink-400" },
      { text: "Testimonials", color: "fill-cyan-400" },
    ],
  },
  {
    name: "Academic",
    imageUrl: "https://placehold.co/300x500",
    bio: "A resume that focuses on academic experience and publications.",
    badges: [
      { text: "Contact Info", color: "fill-blue-400" },
      { text: "Projects", color: "fill-pink-400" },
      { text: "Testimonials", color: "fill-cyan-400" },
    ],
  },
];

export default function TemplateGrid() {
  return (
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
    >
      {templates.map((template) => (
        <li key={template.name} className="flex flex-col gap-6 xl:flex-row">
          <img
            alt=""
            src={template.imageUrl}
            className="aspect-4/5 w-52 flex-none rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          <div className="max-w-xl flex-auto">
            <h3 className="text-lg/8 font-semibold tracking-tight text-gray-900">
              {template.name}
            </h3>
            <p className="mt-6 text-base/7 text-gray-600">{template.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {template.badges.map((badge, index) => (
                <Badge key={index} text={badge.text} color={badge.color} />
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}