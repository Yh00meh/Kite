import {
    educationSchema,
    EducationValues,
} from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormField,
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { EditorFormProps } from "@/lib/types";
import { Trash2 } from "lucide-react";

export default function EducationForm({
  resumeData,
  setResumeData,
}: EditorFormProps) {
  const form = useForm<EducationValues>({
    resolver: zodResolver(educationSchema),
    defaultValues: {
      educations: resumeData.education?.educations || [],
    },
  });

  useEffect(() => {
    const { unsubscribe } = form.watch(async (values) => {
      const isValid = await form.trigger();
      if (!isValid) return;
      setResumeData({
        ...resumeData,
        education: {
          educations:
            values.educations?.filter((edu) => edu !== undefined) || [],
        },
      });
    });
    return unsubscribe;
  }, [form, resumeData, setResumeData]);

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "educations",
  });

    
    return (
    <div className="mx-auto max-w-xl space-y-6">
      <div className="space-y-1.5 text-center">
        <h2 className="text-2xl font-semibold">Education</h2>
        <p className="text-muted-foreground text-sm">
          List your educational background.
        </p>
      </div>
      <Form {...form}>
        <form className="space-y-3">
          {fields.map((field, index) => (
            <EducationItem
              key={field.id}
              index={index}
              remove={remove}
            />
          ))}
          <div className="flex justify-center pt-4">
            <button
              type="button"
              onClick={() =>
                append({
                  institution: "",
                  degree: "",
                  fieldOfStudy: "",
                  startDate: "",
                  endDate: "",
                })
              }
              className="rounded bg-blue-500 px-4 py-2 text-white"
            >
              Add Education
            </button>
          </div>
        </form>
      </Form>
    </div>
  );
}

interface EducationItemProps {
  index: number;
  remove: (index: number) => void;
}

function EducationItem({ index, remove }: EducationItemProps) {
  return (
    <div className="space-y-3 border rounded-md bg-background p-3">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-medium">Education {index + 1}</h3>
        <button
          type="button"
          onClick={() => remove(index)}
          className="text-red-500 hover:text-red-700"
        >
          <Trash2 className="size-5" />
        </button>
      </div>

      <FormField
        name={`educations.${index}.institution`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Institution</FormLabel>
            <FormControl>
              <Input placeholder="School or university name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name={`educations.${index}.degree`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Degree</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Bachelor of Science" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        name={`educations.${index}.fieldOfStudy`}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Field of Study</FormLabel>
            <FormControl>
              <Input placeholder="e.g., Computer Science" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="grid grid-cols-2 gap-3">
        <FormField
          name={`educations.${index}.startDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Start Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name={`educations.${index}.endDate`}
          render={({ field }) => (
            <FormItem>
              <FormLabel>End Date</FormLabel>
              <FormControl>
                <Input type="date" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}