'use client'
import React from 'react'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Field, FieldDescription, FieldError, FieldLabel } from '@/components/ui/field';
import { cn } from '@/lib/utils';

export interface SelectFieldProps extends Omit<React.ComponentProps<typeof Select>, 'onValueChange'> {
    onChange: (value: string) => void;
    options: Array<{
        label: React.ReactNode | string;
        value: string
    }>;
    label?: string;
    placeholder?: string;
    description?: string;
    errorMessage?: string;
    emptyMessage?: string

    containerClass?: string;
    triggerClass?: string;
    itemClass?: string;
}


const SelectField: React.FC<SelectFieldProps> = ({ 
    label, 
    onChange, 
    placeholder, 
    options,
    description,
    errorMessage,
    emptyMessage,

    containerClass, 
    triggerClass, 
    itemClass,
    ...selectProps 
}) => {
    const isEmpty = !options || options.length === 0

    return (
        <Field className={cn(containerClass)}>
            {label && <FieldLabel>{label}</FieldLabel>}
            <Select onValueChange={onChange} {...selectProps}>
                <SelectTrigger type="button" className={cn("w-full h-9", triggerClass)}>
                    <SelectValue placeholder={placeholder}  />
                </SelectTrigger>
                <SelectContent position='popper'>
                    {isEmpty ? (
                        <SelectItem value='empty' className={cn('cursor-pointer flex justify-center items-center', itemClass)} disabled>
                            {emptyMessage || `No ${label || ''} available`}
                        </SelectItem>
                    ) : (
                        options.map((opt, index) => (
                            <SelectItem 
                                key={`${opt.label}-${index}`} 
                                value={opt.value}
                                className={cn('cursor-pointer data-[state=checked]:bg-primary/10', itemClass)}
                            >
                                {opt.label}
                            </SelectItem>
                        ))
                    )}
                </SelectContent>
            </Select>
            {description && <FieldDescription>{description}</FieldDescription>}
            {errorMessage &&  <FieldError>{errorMessage}</FieldError>}
        </Field>
    )
}

export default SelectField