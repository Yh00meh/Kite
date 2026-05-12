"use client";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import { useState } from "react";
import { ResumeValues } from "@/lib/validation";


export default function ResumeEditor() {
  const searchParams = useSearchParams();

  const [resumeData, setResumeData] = useState<ResumeValues>({
    generalInfo: { title: "", description: "" },
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      location: "",
      jobtitle: "",
      photo: undefined,
    },
    workExperience: {
      workExperiences: [],
    },
    education: {
      educations: [],
    },
  });

  const currentStep = searchParams.get("step") || "general-info";

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", key);
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  }

  const FormComponent = steps.find(
    (step) => step.key === currentStep,
  )?.component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="overflow-y-auto text-2xl font-semibold tracking-tight">
          Create your resume
        </h1>
        <p className="text-muted-foreground text-sm">
          Answer a few questions and we will create a resume for you.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute top-0 bottom-0 flex w-full">
          <div className="w-full space-y-8 overflow-y-auto px-3 py-5 md:w-1/2">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="hidden md:block md:w-1/2">right</div>
          <pre>{JSON.stringify(resumeData, null, 2)} </pre>
        </div>
      </main>
      <Footer currentStep={currentStep} setCurrentStep={setStep} />
    </div>
  );
}
