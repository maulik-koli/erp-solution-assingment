import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const NEXT_ENV = process.env.NEXT_ENV

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const Log = (text: string, data: any): void => {
  if (NEXT_ENV === "production") return
  const style = `
    font-size: 16px;
    padding: 4px;
    background-color: blue;
    color: white;
    font-weight: bold;
  `

  console.log(`%c${text}`, style, data)
}

export const formatDate = (value: string | null | undefined): string => {
  if (!value) return ''
  const date = new Date(value)
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}