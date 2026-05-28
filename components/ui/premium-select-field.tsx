"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

type PremiumSelectOption = {
  value: string;
  label: string;
};

type PremiumSelectFieldProps = {
  id: string;
  name: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  placeholder: string;
  options: PremiumSelectOption[];
};

export default function PremiumSelectField({
  id,
  name,
  label,
  value,
  onValueChange,
  placeholder,
  options
}: PremiumSelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-xs uppercase tracking-[0.16em] text-white/54">{label}</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger id={id} aria-label={label}>
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value}>{option.label}</SelectItem>
          ))}
        </SelectContent>
      </Select>
      <input type="hidden" name={name} value={value} />
    </div>
  );
}