"use client";

import { useState } from "react";

const handleCopy = async () => {
  try {
    await navigator.clipboard.writeText(exampleConfig);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
  }
};

export default function ShellPrompt({
  command = "resumay create resume --input resume.toml --template template.html",
}: {
  command?: string;
}) {
  const [copied, setCopied] = useState(false);
  return (
    <>
      <div className="overflow-hidden bg-zinc-100 py-10 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="max-w-2xl text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-6xl sm:text-balance">
            Create the PDF resume
          </p>
          <p className="text-xl mt-6 text-gray-700">
            In a single command, take your config file and combine it with any
            template downloaded from this site. Or, create your own!
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
