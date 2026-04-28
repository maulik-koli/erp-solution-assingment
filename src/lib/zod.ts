import { ZodError, ZodType } from "zod"
import { Log } from "./utils"

export const flatZodError = (schema: ZodType<any>, formData: any): { message: string; field?: string } | null => {
    try {
        schema.parse(formData);
        return null;
    } 
    catch (error) {
        if (error instanceof ZodError) {
            const issue = error.issues[0];

            return {
                message: issue.message,
                field: issue.path?.[0] as string,
            };
        }

        return { message: "Invalid input data" };
    }
};