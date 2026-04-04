'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { registerSchema, RegisterSchemaType } from '@/lib/validations/auth.schema';
import { Button } from '@/components/ui/button';
import { FormInput } from '../common/Input';
import { FormRadio } from '../common/Radio';

export default function RegisterPage() {
  const form = useForm<RegisterSchemaType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      gender: undefined,
      mobile: '',
      password: '',
    },
  });

  const onSubmit = (data: RegisterSchemaType) => {
    console.log('Form Data:', data);
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      className="space-y-4 max-w-md mx-auto m-10 p-6 rounded-lg shadow-md bg-card text-card-foreground"
    >
      {/* Name */}
      <FormInput
        name="name"
        control={form.control}
        label="Name"
        placeholder="Enter your name"
        mandatory
      />

      {/* Email */}
      <FormInput
        name="email"
        control={form.control}
        label="Email"
        placeholder="Enter your email"
        type="email"
        mandatory
      />

      {/* Mobile Number */}
      <FormInput
        name="mobile"
        control={form.control}
        label="Mobile Number"
        placeholder="Enter your mobile number"
        type="text"
        mandatory
        maxLength={10}
      />

      {/* Gender Radio */}
      <FormRadio
        name="gender"
        label="Gender"
        control={form.control}
        mandatory
        options={[
          { label: 'Male', value: 'male' },
          { label: 'Female', value: 'female' },
          { label: 'Other', value: 'other' },
        ]}
      />

      {/* Password */}
      <FormInput
        name="password"
        control={form.control}
        label="Password"
        placeholder="Enter your password"
        type="password"
        mandatory
      />

      {/* Submit */}
      <Button type="submit" className="w-full">
        Register
      </Button>
    </form>
  );
}
