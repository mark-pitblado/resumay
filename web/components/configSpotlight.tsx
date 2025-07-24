"use client";

import { useState } from "react";
import ProgressBar from "@/components/progress";

export default function configHighlight() {
  const [copied, setCopied] = useState(false);
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
      status: "current" as const,
    },
    {
      id: "03",
      name: "Pick your template",
      href: "#",
      status: "upcoming" as const,
    },
    {
      id: "04",
      name: "Create the PDF resume",
      href: "#",
      status: "upcoming" as const,
    },
  ];

  const exampleConfig = `
name = "John Doe"
email = "example@example.com"
phone = "123-456-7891"
location = "New York, NY"
summary = """
A hard working individual with a lot of experience doing many things.
I am looking for a job in any field in which I have skills.
"""
github_username= "example"
linkedin_username = "john-doe"
website = "https://example.com"

[[education]]
institution = "University of Toronto"
location = "Toronto, ON"
program = "Bachelor of Science - Biochemistry"
timespan = "Sept 2007 - Apr 2011"
gpa = "4.0"
description = """
Studied the properties of matter and learned how to do experiments in a lab.
"""
points = ["Conducted experiments", "Learned about how human cells work"]

[[experience]]
institution = "Blue Jays Baseball"
location = "Toronto, ON"
position = "General Manager"
timespan = "Sept 2007 - Apr 2017"
description = """
Managed the Blue Jays baseball program.
My leadership resulted in a consistent 0.500 record across 4 seasons.
"""
points = ["Managed players", "Won games"]
`;

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
          Step 2
        </p>
        <p className="text-xl mt-6 text-gray-700">
          A simple text file is at the heart of everything you can do with
          resumay. Write it up once, edit it easily, and leave the design to the
          templates. We recommend naming the file resume.toml to start.
        </p>
        <ProgressBar steps={steps} />
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
