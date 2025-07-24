"use client";

import { useState } from "react";

export default function configHighlight() {
  const [copied, setCopied] = useState(false);

  const exampleConfig = `name = "John Doe"
email = "john.doe@email.com"
phone = "+1 (555) 123-4567"
location = "San Francisco, CA"

summary = """
Experienced software engineer with 5+ years of experience
in full-stack development and cloud technologies.

[[experience]]
company = "Tech Corp"
position = "Senior Software Engineer"
duration = "2021 - Present"
description = """
Led development of microservices architecture
serving 1M+ users daily.

[[skills]]
category = "Programming Languages"
items = ["JavaScript", "Python", "Go", "TypeScript"]

[[skills]]
category = "Frameworks"
items = ["React", "Node.js", "Django", "Express"]

[[education]]
degree = "Bachelor of Science in Computer Science"
institution = "University of California"
year = 2019`;

  const lines = exampleConfig.split("\n");

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(exampleConfig);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className="overflow-hidden bg-zinc-100 py-10 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
          One easy to use text file
        </p>
        <p className="text-xl mt-6 text-gray-700">
          We call this the resume config file, and it is the heart of everything
          you can do with resumay. Write it up once, edit it easily, and leave
          the design to the templates.
        </p>
        <div className="relative mt-9">
          <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] shadow-xs ring-1 ring-black/5" />
          <div className="relative bg-white rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-md border border-gray-300 transition-colors"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
            <div className="flex text-sm font-mono leading-relaxed">
              <div className="flex-shrink-0 bg-gray-50 px-4 py-6 text-gray-500 border-r border-gray-200 select-none">
                {lines.map((_, index) => (
                  <div key={index} className="text-right">
                    {index + 1}
                  </div>
                ))}
              </div>
              <pre className="flex-1 p-6 text-gray-800 overflow-x-auto whitespace-pre-wrap select-all">
                {exampleConfig}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
