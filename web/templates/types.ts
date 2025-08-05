export interface ResumeData {
  testimonials: Array<{
    quote: string;
    author: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
  }>;
  technologies: string[];
  contactInfo: {
    name: string;
    email: string;
    phone?: string;
    location?: string;
    website?: string;
    linkedin?: string;
  };
  education: Array<{
    institution: string;
    degree: string;
    year: string;
    gpa?: string;
  }>;
  experience: Array<{
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    description: string[];
  }>;
}

export interface MinimalistTemplateProps {
  data: ResumeData;
}

export interface EntrepreneurRoyalBlueTemplateProps {
  data: ResumeData;
}
export interface CompactTechTemplateProps {
  data: ResumeData;
}
export interface AcademicTemplateProps {
  data: ResumeData;
}