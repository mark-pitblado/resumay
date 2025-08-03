import { renderToString } from 'react-dom/server';
import React from 'react';

export const generateHTMLFile = (
  TemplateComponent: React.ComponentType<any>,
  templateName: string,
  resumeData?: any
): string => {
    try {
  // Render the React component to HTML string
  const componentHTML = renderToString(React.createElement(TemplateComponent, resumeData || {}));
  
  // Create a complete HTML document
    const fullHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${templateName} Resume</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @media print {
            body { 
                margin: 0; 
                padding: 20px; 
                background: white !important;
            }
            .no-print { 
                display: none !important; 
            }
        }
        @page {
            margin: 0.5in;
            size: A4;
        }
        body {
            font-family: system-ui, -apple-system, sans-serif;
            line-height: 1.6;
            color: #333;
        }
    </style>
</head>
<body class="bg-white">
    ${componentHTML}
</body>
</html>`;

    return fullHTML;
  } catch (error) {
    console.error('Error rendering component to HTML:', error);
    throw new Error('Failed to generate HTML content');
  }
};

export const downloadHTMLFile = (htmlContent: string, fileName: string): void => {
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = `${fileName}.html`;
  document.body.appendChild(link);
  link.click();
  
  // Cleanup
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};