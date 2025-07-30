import { MinimalistTemplateSample } from '../../templates/minimalist';

export default function PreviewPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-center mb-8">Template Preview</h1>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <MinimalistTemplateSample />
        </div>
      </div>
    </div>
  );
} 