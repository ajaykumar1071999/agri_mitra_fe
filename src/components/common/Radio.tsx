'use client';

import { Control, Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { cn } from '@/lib/utils';

type Option = {
  label: string;
  value: string;
};

type FormRadioProps<T extends FieldValues> = {
  name: Path<T>;
  label: string;
  options: Option[];
  mandatory?: boolean;
  disabled?: boolean;
  control?: Control<T>; // optional: can pass manually
};

export function FormRadio<T extends FieldValues>({
  name,
  label,
  options,
  mandatory = false,
  disabled = false,
  control: propControl,
}: FormRadioProps<T>) {
  // Always call hook at top-level
  const context = useFormContext<T>();

  const control = propControl ?? context?.control;
  if (!control) {
    throw new Error(
      `FormRadio: Missing control for field "${name}". Wrap your form with FormProvider or pass a control prop.`,
    );
  }

  return (
    <div className="space-y-2">
      <Label className="text-foreground">
        {label} {mandatory && <span className="text-destructive">*</span>}
      </Label>

      <Controller
        name={name}
        control={control}
        rules={{ required: mandatory ? 'This field is required' : false }}
        render={({ field, fieldState }) => (
          <>
            <RadioGroup
              onValueChange={field.onChange}
              value={field.value}
              className="flex flex-row space-x-4"
            >
              {options.map((opt) => (
                <label
                  htmlFor={`radio-${name}-${opt.value}`}
                  key={opt.value}
                  className={cn(
                    'flex items-center space-x-2 cursor-pointer px-3 py-2 rounded-lg transition',
                    'hover:bg-accent hover:text-accent-foreground',
                    disabled && 'opacity-50 cursor-not-allowed',
                  )}
                >
                  <RadioGroupItem
                    id={`radio-${name}-${opt.value}`}
                    value={opt.value}
                    disabled={disabled}
                    className="w-4 h-4 rounded-full border border-input checked:bg-primary checked:border-primary transition"
                  />
                  <span className="text-foreground select-none">{opt.label}</span>
                </label>
              ))}
            </RadioGroup>

            {fieldState.error && (
              <p className="text-sm text-destructive">{fieldState.error.message}</p>
            )}
          </>
        )}
      />
    </div>
  );
}
