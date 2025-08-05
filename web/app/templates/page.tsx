import TemplateGrid from "@/components/template-grid";

export default function TemplatesPage() {
  return (
    <div className="bg-white py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Resume Templates
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose from our collection of professionally designed resume templates
          </p>
        </div>
        <div className="mt-20">
          <TemplateGrid />
        </div>
      </div>
    </div>
  );
}