
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import React from "react";
import { EditorFormProps } from "@/lib/types";

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
    component: PersonalInfoForm,
    key: "personal-info",
  }
];
