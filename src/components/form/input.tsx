import * as React from "react"
import { cn } from "@/lib/utils"
import { Field, FieldDescription, FieldLabel } from "@ui/field"
import Icon, { IconType } from "@/components/icons";

interface InputProps extends React.ComponentProps<"input"> {
  label?: string;
  htmlFor?: string
  errorMessage?: string
  leftIcon?: IconType
  rightIcon?: IconType
}


const Input: React.FC<InputProps> = ({ 
  className, type, label, htmlFor , errorMessage, leftIcon, rightIcon, ...props
}) => {
  return (
    <Field>
      {label && <FieldLabel htmlFor={htmlFor}>{label}</FieldLabel>}
      <div className='flex items-center relative'>
        {leftIcon && (
          <div className='absolute left-3 text-muted-foreground'>
            <Icon name={leftIcon} className="w-4 h-4" />
          </div>
        )}
        <input
          type={type}
          data-slot="input"
          className={cn(
            "h-8 w-full min-w-0 rounded-lg border border-input bg-transparent px-2.5 py-1 text-base transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
            leftIcon && "pl-10", 
            rightIcon && "pr-10",
            (leftIcon && rightIcon) && "px-10",
            className
          )}
          {...props}
        />
        {rightIcon && (
          <div className='absolute right-3 text-muted-foreground cursor-pointer'>
            <Icon name={rightIcon} className="w-4 h-4" />
          </div>
        )}
      </div>
      {errorMessage &&  <FieldDescription className="text-destructive">{errorMessage}</FieldDescription>}
    </Field>
  )
} 

export { Input }