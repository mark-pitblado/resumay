"use client";

import {
  DocumentTextIcon,
  CommandLineIcon,
  CloudArrowUpIcon,
  LockClosedIcon,
  ServerIcon,
  ClipboardIcon,
  CheckIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";

import { useState } from "react";

function CopyableCode({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="inline-flex items-center gap-1 bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-mono">
      {text}
      <button
        onClick={handleCopy}
        className="ml-1 p-0.5 hover:bg-gray-200 rounded transition-colors"
        title={copied ? "Copied!" : "Copy to clipboard"}
      >
        {copied ? (
          <CheckIcon className="h-3 w-3 text-green-600" />
        ) : (
          <ClipboardIcon className="h-3 w-3 text-gray-600" />
        )}
      </button>
    </span>
  );
}

const features = [
  {
    name: "Download resumay",
    description: (
      <>
        Resumay is a python command line utility. Download it with{" "}
        <CopyableCode text="pip install resumay" />
      </>
    ),
    icon: CommandLineIcon,
  },
  {
    name: "Create your resume config",
    description:
      "Write your resume information once, in an easy to edit format.",
  },
  {
    name: "Pick a template.",
    description: "Copy and paste a template file from this site.",
  },
  {
    name: "Create the PDF resume",
    description: "Your resume config + template = PDF",
  },
];

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-32 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                4 easy steps
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Build a resume from a text file
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
                From a single text file, generate PDF resumes from hundreds of
                templates. Local, private, easy.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className="absolute top-0 left-1 font-bold text-indigo-600">
                        {index + 1}
                      </span>
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="relative mt-9">
            <div className="absolute -inset-2 rounded-[calc(var(--radius-xl)+calc(var(--spacing)*2))] shadow-xs ring-1 ring-black/5" />
            <div className="relative w-full bg-white rounded-xl shadow-2xl ring-1 ring-black/10 overflow-hidden">
              <Image
                alt="Product screenshot"
                src="https://resumay.b-cdn.net/minimalist-template.png"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
