import React from 'react';
import { sampleResumeData } from '../data/sampledata';
import { EntrepreneurRoyalBlueTemplateProps } from './types';


export default function EntrepreneurRoyalBlueTemplate({ data }: EntrepreneurRoyalBlueTemplateProps) {
  return (
    <div className="max-w-2xl mx-auto p-8 bg-white font-serif">
      {/* Header */}
      <header className="text-center border-b border-gray-200 pb-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {data.contactInfo.name}
        </h1>
        <div className="text-gray-600 space-y-1">
          <p>{data.contactInfo.email}</p>
          {data.contactInfo.phone && <p>{data.contactInfo.phone}</p>}
          {data.contactInfo.location && <p>{data.contactInfo.location}</p>}
        </div>
      </header>

      {/* Projects */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-1">
          Projects
        </h2>
        {data.projects.map((project, index) => (
          <div key={index} className="mb-4">
            <h3 className="font-medium text-gray-900">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </section>

      {/* Testimonials */}
      <section>
        <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-1">
          Testimonials
        </h2>
        {data.testimonials.map((testimonial, index) => (
          <blockquote key={index} className="mb-6">
            <p className="text-gray-700 italic">"{testimonial.quote}"</p>
            <footer className="mt-2 text-sm text-gray-600">— {testimonial.author}</footer>
          </blockquote>
        ))}
      </section>
    </div>
  );
}

export function EntrepreneurRoyalBlueTemplateSample() {
  return (
    <EntrepreneurRoyalBlueTemplate data={sampleResumeData} />
  );
}
