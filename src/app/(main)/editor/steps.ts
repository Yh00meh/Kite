
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import React from "react";
import { EditorFormProps } from "@/lib/types";
import WorkExperience from "./forms/WorkExperience";
import EducationForm from "./forms/EducationForm";

export const steps : {

  label: string;
  component: React.ComponentType<EditorFormProps>;
  key: string;
}[] = [
  {
    label: "General Info",
    component: GeneralInfoForm,
    key: "general-info",
  },
  {
    label: "Personal Info",
    component: PersonalInfoForm as React.ComponentType<EditorFormProps>,
    key: "personal-info",
  },
  {
    label: "Work Experience",
    component: WorkExperience,
    key: "work-experience",
  },
  {
    label: "Education",
    component: EducationForm,
    key: "education",
  }
];
