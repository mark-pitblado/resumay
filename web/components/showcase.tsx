import { Button } from "@/components/button";
import Badge from "@/components/badge";
import ProgressBar from "@/components/progress";

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

const template: Template[] = [
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

export default function Showcase() {
  const steps = [
    {
      id: "01",
      name: "Download resumay",
      href: "#",
      status: "complete" as const,
    },
    {
      id: "02",
      name: "Create your resume config",
      href: "#",
      status: "complete" as const,
    },
    {
      id: "03",
      name: "Pick a template",
      href: "#",
      status: "current" as const,
    },
    {
      id: "04",
      name: "Create the PDF resume",
      href: "#",
      status: "upcoming" as const,
    },
  ];
  return (
    <div className="overflow-hidden bg-white py-10 sm:py-32">
      <div className="mx-auto grid max-w-7xl">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Step 3
          </p>
          <p className="text-xl mt-6 text-gray-700">
            Using a template is as simple as downloading an html file. All of
            the templates will work with your resume config. You can browse the
            full collection of templates here.
          </p>
          <ProgressBar steps={steps} />
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
        >
          {template.map((template) => (
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
      </div>
    </div>
  );
}
