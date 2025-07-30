export interface ResumeData {
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