import { cn } from "@/lib/utils";
import { FormInputProps } from "./FormInput.types";
import { Controller, FieldValues } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export default function FormInput<T extends FieldValues>({className,name,label,control,error,placeholder,type,readOnly}:FormInputProps<T>) {
  return (
    <div className={cn("space-y-2",className)}>
     <Label htmlFor={name} className={cn(error&&"text-destructive font-semibold")}>

      {label}
     </Label>
    <Controller     
    name={name}
    control={control}
    render={({field})=>(
      <Input
      {...field}
      id={name}
      type={type}
      value={field.value??""}
      placeholder={placeholder}
      readOnly={readOnly}
     className={cn(
              "bg-muted/40 border-none focus-visible:ring-primary transition-all",
              readOnly && "bg-muted cursor-not-allowed opacity-70 focus-visible:ring-0", // ستايل خاص للقراءة فقط
              error && "ring-2 ring-destructive focus-visible:ring-destructive"
            )}
      />
    )}
    />

    {error?.message&&(

      <p className="text-xs font-medium text-destructive animate-in fade-in slide-in-from-top-1">
          {error.message}
        </p>
    )}
    </div>
  )
}

