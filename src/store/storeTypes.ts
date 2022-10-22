type Theme = "detailKing" | "obukhov";

interface ResumeInputs {
  name: string;
  brand: string;
  avatar: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    website?: string;
  };
  about: string;
  skills: string[];
  experience: {
    brand: string;
    company: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];
  education: {
    school: string;
    startDate: string;
    endDate: string;
    description?: string;
  }[];
  languages: string[];
}

interface State {
  selectedTheme: Theme;
  setTheme(selectedTheme: Theme): void;
  resumeInputs: ResumeInputs;
  setResumeInputs(resumeInputs: ResumeInputs): void;
}

export type { State, Theme, ResumeInputs };
