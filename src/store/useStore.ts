import create from "zustand/react";

import { ResumeInputs, State } from "./storeTypes";

const initialInputsState: ResumeInputs = {
  name: "",
  brand: "",
  avatar: "",
  contact: {
    email: "",
    phone: "",
    location: "",
    website: "",
  },
  about: "",
  skills: [],
  experience: [],
  education: [],
  languages: [],
};

export const useStore = create<State>((set) => ({
  resumeInputs: initialInputsState,
  setResumeInputs(resumeInputs) {
    set({ resumeInputs });
  },
  selectedTheme: "detailKing",
  setTheme: (selectedTheme) => set({ selectedTheme }),
}));
