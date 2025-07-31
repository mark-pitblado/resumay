"use client";
import Badge from "@/components/badge";
import { useState } from "react";
import React from "react";
import { MinimalistTemplateSample } from "@/templates/minimalist";
import { CompactTechTemplateSample } from "@/templates/compact-tech";
import { EntrepreneurRoyalBlueTemplateSample } from "@/templates/entrepreneur-royal-blue";


interface TemplateBadge {
  text: string;
  color: string;
}

interface Template {
  name: string;
  imageUrl: string;
  bio: string;
  badges: TemplateBadge[];
  component?: React.ComponentType<any>;
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
    component: MinimalistTemplateSample,
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
    component: CompactTechTemplateSample,
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
    component: EntrepreneurRoyalBlueTemplateSample,
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
  const [previewTemplate, setPreviewTemplate] = useState<Template | null>(null);
  
  const handleDownload = (template: Template) => {
    // TODO: Implement download functionality
    console.log("Downloading template:", template.name);
  };

  const openPreview = (template: Template) => {
    setPreviewTemplate(template);
  };
  const closePreview = () => {
    setPreviewTemplate(null);
  };

  return (
    <div className="relative">
      <ul
        role="list"
        className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:max-w-4xl lg:gap-x-8 xl:max-w-none"
      >
        {templates.map((template) => (
          <li key={template.name} className="flex flex-col gap-6 xl:flex-row">
            <div
              className="relative"
              
            >
              {/* Template thumbnail */}
              {template.component ? (
                <div className="w-70 h-90 overflow-hidden rounded-lg border bg-white">
                  <div className="scale-[0.5] origin-top-left w-[200%] h-[200%]">
                    <template.component />
                  </div>
                </div>
              ) : (
                <img
                  alt={`${template.name} template preview`}
                  src={template.imageUrl}
                  className="aspect-4/5 w-90 object-cover rounded-lg border"
                />
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
              
              <div className="mt-6 flex gap-3">
                <button 
                    onClick={() => openPreview(template)}
                    className="rounded-md bg-gray-100 px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
                >
                    Preview Template
                </button>
                <button
                  onClick={() => handleDownload(template)}
                  className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Download Template
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      {/* Preview Modal */}
      {previewTemplate && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/50"
          onClick={closePreview}
        >
          <div 
            className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-gray-900">
                {previewTemplate.name} Template Preview
              </h3>
              <button
                onClick={closePreview}
                className="text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6">
              {previewTemplate.component ? (
                <previewTemplate.component />
              ) : (
                <img
                  alt={`${previewTemplate.name} template preview`}
                  src={previewTemplate.imageUrl}
                  className="w-full h-auto"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}