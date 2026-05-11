import { Component } from "lucide-react";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";

export const steps = [
  {
    key: "general-info",
    Component: GeneralInfoForm,
    label: "General Info",
  },
  {
    key: "personal-info",
    Component: PersonalInfoForm,
    label: "Personal Info",
  },
  {
    key: "experience",
    label: "Experience",
  },
  {
    key: "education",
    label: "Education",
  },
  {
    key: "skills",
    label: "Skills",
  },
];
