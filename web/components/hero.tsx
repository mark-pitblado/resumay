"use client";

import { DocumentTextIcon, CommandLineIcon, CloudArrowUpIcon, LockClosedIcon, ServerIcon, ClipboardIcon, CheckIcon} from '@heroicons/react/24/solid'

import { useState } from 'react'

function CopyableCode({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

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
  )
}

const features = [
  {
    name: 'Download resumay',
    description: (
      <>
        Resumay is a python command line utility. Download it with{' '}
        <CopyableCode text="pip install resumay" />
      </>
    ),
    icon: CommandLineIcon,
  },
  {
    name: 'Pick a template.',
    description: 'Copy and paste a template file from this site.',
  },
  {
    name: 'Create your resume config',
    description: 'Write your resume information once, in an easy to edit format.',
  },
  {
    name: 'Create the PDF resume',
    description: 'Your resume config + template = PDF',
  },
]

export default function Hero() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">3 easy steps</h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Build a resume from a text file 
              </p>
              <p className="mt-6 text-lg/8 text-gray-700">
	      From a single text file, generate PDF resumes from hundreds of templates. Local, private, easy.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature, index) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <span className="absolute top-0 left-1 font-bold text-indigo-600">
                        {index + 1}
                      </span>
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <img
            alt="Product screenshot"
            src="https://tailwindcss.com/plus-assets/img/component-images/project-app-screenshot.png"
            width={2432}
            height={1442}
            className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  )
}

