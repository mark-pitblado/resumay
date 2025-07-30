"use client";
import Badge from "@/components/badge";
import { useState } from "react";
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
    const [hoveredTemplate, setHoveredTemplate] = useState<string | null>(null);

    {/*Handle download function*/}
    const handleDownload = (template:Template) => {

    }





  return (
    <div className="relative">
    <ul
      role="list"
      className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
    >
      {templates.map((template) => (
        <li key={template.name} className="flex flex-col gap-6 xl:flex-row"
        
        >
        <div className="relative"
        onMouseEnter={() => setHoveredTemplate(template.name)}
        onMouseLeave={() => setHoveredTemplate(null)}
        >
          <img
            alt=""
            src={template.imageUrl}
            className="aspect-4/5 w-52 flex-auto rounded-2xl object-cover outline-1 -outline-offset-1 outline-black/5"
          />
          {/* Hover preview */}
          {hoveredTemplate === template.name && (
            
                <div className="absolute -top-4 -left-4 z-10 bg-white rounded-lg shadow-2xl border border-gray-200 p-4 max-w-auto max-h-96 overflow-x-hidden overflow-y-auto">
                <div className='text-xs text-gray-500 mb-2'>Preview</div>
                <div className='scale-50 origin-top-left w-[200%] h-[200%] overflow-hidden'>
                    {/* <template.component /> */}
                    <img
                      alt=""
                      src={template.imageUrl}
                      className="w-full h-full object-cover"
                    />

                </div>
            </div>
          )}
        </div>
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
            {/* Download button */}
            <div className="mt-6">
                <button 
                onClick={() => handleDownload(template)}
                className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm fount-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                    Download Template
                </button>
          </div>
        </div>
        </li>
      ))}
    </ul>
    </div>
  );
}