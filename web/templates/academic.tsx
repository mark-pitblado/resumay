import React from 'react';
import { sampleResumeData } from '../data/sampledata';
import { AcademicTemplateProps } from './types';

export default function AcademicTemplate({ data }: AcademicTemplateProps) {
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

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-1">
          Education
        </h2>
        {data.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-gray-900">{edu.institution}</h3>
                <p className="text-gray-700">{edu.degree}</p>
              </div>
              <span className="text-gray-600 text-sm">{edu.year}</span>
            </div>
            {edu.gpa && <p className="text-gray-600">GPA: {edu.gpa}</p>}
          </div>
        ))}
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
            <p className="text-gray-700">{exp.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
    






export function AcademicTemplateSample() {
  return (
    <AcademicTemplate data={sampleResumeData} />
  );
}   