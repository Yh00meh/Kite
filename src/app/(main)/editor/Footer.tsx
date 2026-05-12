import { Button } from "@/components/ui/button";
import Link from "next/link";
import { steps } from "./steps";

interface FooterProps {
  currentStep: string;
  setCurrentStep: (step: string) => void;
}

export default function Footer({ currentStep, setCurrentStep }: FooterProps) {
  const previousStep = steps.findLast(
    (_, index: number) => steps[index + 1]?.key === currentStep,
  );
  const nextStep =
    steps.find((step) => step.key === currentStep)?.key === currentStep
      ? steps.find((_, index: number) => steps[index - 1]?.key === currentStep)
      : undefined;

  return (
    <footer className="w-full border-t px-3 py-5">
      <div className="mx-auto flex max-w-7xl items-center justify-end gap-3">
        <div className="flex items-center gap-3">
          <Button variant="secondary" onClick={previousStep ? () => setCurrentStep(previousStep.key) : undefined} disabled={!previousStep}>
            Previous
          </Button>
          <Button variant="default" onClick={nextStep ? () => setCurrentStep(nextStep.key) : undefined} disabled={!nextStep}>
            Next
          </Button>
        </div>
        <div className="item-center flex gap-3">
          <Button variant="secondary">
            <Link href="/resumes">Close</Link>
          </Button>
          <p className="text-muted-foreground text-sm">Saving...</p>
        </div>
      </div>
    </footer>
  );
}
