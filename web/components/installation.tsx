"use client";

import { useState } from "react";

import ProgressBar from "@/components/progress";

export default function Installation({
  command = "pip install resumay",
}: {
  command?: string;
}) {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };
  const [copied, setCopied] = useState(false);
  const steps = [
    {
      id: "01",
      name: "Download resumay",
      href: "#",
      status: "current" as const,
    },
    {
      id: "02",
      name: "Create your resume config",
      href: "#",
      status: "upcoming" as const,
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

  return (
    <>
      <div className="overflow-hidden bg-white py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Step 1
          </p>
          <p className="text-xl mt-6 text-gray-700">
            Resumay operates entirely on your device, and offline. All that is
            required is to install the command from pypi.
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
                <div className="flex-shrink-0 bg-gray-50 px-4 py-6 text-gray-500 border-r border-gray-200 select-none"></div>
                <pre className="flex-1 p-6 text-black overflow-x-auto whitespace-pre-wrap select-all">
                  {command}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
