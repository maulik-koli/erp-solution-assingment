'use client'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Field, FieldLabel } from '@/components/ui/field';
import { cn } from '@/lib/utils';

interface SelectFieldProps extends Omit<React.ComponentProps<typeof Select>, 'onValueChange'> {
    onChange: (value: string) => void;
    options: Array<{
        label: React.ReactNode | string;
        value: string
    }>;
    label?: string;
    containerClass?: string;
    selectTriggerClass?: string;
    placeholder?: string;
}


const SelectField: React.FC<SelectFieldProps> = ({ 
    label, 
    containerClass, 
    selectTriggerClass, 
    onChange, 
    placeholder, 
    options,
    ...selectProps 
}) => {
    return (
        <Field className={cn(containerClass)}>
            {label && <FieldLabel>{label}</FieldLabel>}
            <Select onValueChange={onChange} {...selectProps}>
                <SelectTrigger type="button" className={cn("w-full h-9", selectTriggerClass)}>
                    <SelectValue placeholder={placeholder}  />
                </SelectTrigger>
                <SelectContent position='popper'>
                    {options.map((opt, index) => (
                        <SelectItem 
                            key={`${opt.label}-${index}`} 
                            value={opt.value}
                            className='cursor-pointer data-[state=checked]:bg-primary/10'
                        >
                            {opt.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </Field>
    )
}

export default SelectField