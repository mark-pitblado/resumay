import React from 'react';
import { sampleResumeData } from '../data/sampledata';
import { CompactTechTemplateProps } from './types';

export default function CompactTechTemplate({ data }: CompactTechTemplateProps) {
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

      {/* Technologies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-1">
            Technologies
          </h2>
          <ul className="list-disc list-inside">
            {data.technologies.map((tech: string, index: number) => (
              <li key={index} className="text-gray-700">
                {tech}
              </li>
            ))}
          </ul>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-1">
            Experience
          </h2>
          {data.experience.map((exp, index) => (
            <div key={index} className="mb-6">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-medium text-gray-900">{exp.position}</h3>
                  <p className="text-gray-700">{exp.company}</p>
                </div>
                <span className="text-gray-600 text-sm">
                  {exp.startDate} - {exp.endDate}
                </span>
              </div>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-sm leading-relaxed">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>
    </div>
  );
}

export function CompactTechTemplateSample() {
    return <CompactTechTemplate data={sampleResumeData} />;
}
