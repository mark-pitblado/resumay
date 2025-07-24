import { Button } from "@/components/button";
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
    name: "Entrepreneur",
    imageUrl: "https://placehold.co/300x500",
    bio: "A large focus on projects.",
    badges: [
      { text: "Contact Info", color: "fill-blue-400" },
      { text: "Projects", color: "fill-pink-400" },
      { text: "Testimonials", color: "fill-cyan-400" },
    ],
  },
];

export default function Showcase() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-20 px-6 lg:px-8 xl:grid-cols-5">
        <div className="max-w-2xl xl:col-span-2">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            Choose a template
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            With resumay, swapping out the look of your resume is as simple as
            copying and pasting. Each template supports different resume config
            elements.
          </p>
          <Button className="mt-3">See all templates</Button>
        </div>
        <ul role="list" className="divide-y divide-gray-200 xl:col-span-3">
          {template.map((template) => (
            <li
              key={template.name}
              className="flex flex-col gap-10 py-12 first:pt-0 last:pb-0 sm:flex-row"
            >
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
