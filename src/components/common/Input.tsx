'use client';

import { useState } from 'react';
import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormInputProps<T extends FieldValues> = {
  name: Path<T>;
  control: Control<T>;
  label: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  maxLength?: number;
  mandatory?: boolean;
};

export function FormInput<T extends FieldValues>({
  name,
  control,
  label,
  placeholder,
  type = 'text',
  disabled = false,
  maxLength,
  mandatory = false, // default false
}: FormInputProps<T>) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';

  return (
    <div className="space-y-2">
      <Label className="text-foreground">
        {label} {mandatory && <span className="text-destructive">*</span>}
      </Label>

      <Controller
        control={control}
        name={name}
        render={({ field, fieldState }) => {
          const hasError = !!fieldState.error;

          return (
            <>
              <div className="relative">
                <Input
                  {...field}
                  disabled={disabled}
                  type={isPassword && showPassword ? 'text' : type}
                  placeholder={placeholder}
                  maxLength={maxLength}
                  className={cn(
                    'pr-10', // space for password toggle
                    hasError && 'border-destructive focus-visible:ring-destructive',
                  )}
                />

                {isPassword && (
                  <button
                    type="button"
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                )}
              </div>

              {hasError && <p className="text-sm text-destructive">{fieldState.error?.message}</p>}
            </>
          );
        }}
      />
    </div>
  );
}
