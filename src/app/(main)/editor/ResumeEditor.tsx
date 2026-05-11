"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import GeneralInfoForm from "./forms/GeneralInfoForm";
import PersonalInfoForm from "./forms/PersonalInfoForm";
import { useSearchParams } from "next/navigation";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";


export default function ResumeEditor() {

  const searchParams = useSearchParams();

  const currentStep = searchParams.get("step") || "general-info";

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", key);
    const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;
    window.history.pushState({}, "", newUrl);
  }

  const FormComponent = steps.find((step) => step.key === currentStep)?.Component;

  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-semibold tracking-tight overflow-y-auto">
          Create your resume
        </h1>
        <p className="text-muted-foreground text-sm">
          Answer a few questions and we will create a resume for you.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className="space-y-8 w-full overflow-y-auto px-3 py-5 md:w-1/2">
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent ? <FormComponent /> : <div>Not implemented</div>}
          </div>
          <div className="hidden md:block md:w-1/2">right</div>
        </div>
      </main>
      <footer className="w-full border-t px-3 py-5">
        <div className="mx-auto flex max-w-7xl items-center justify-end gap-3">
          <div className="flex items-center gap-3">
            <Button variant="secondary">Previous</Button>
            <Button variant="default">Next</Button>
          </div>
          <div className="item-center flex gap-3">
            <Button variant="secondary">
              <Link href="/resumes">Close</Link>
            </Button>
            <p className="text-muted-foreground text-sm">Saving...</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
