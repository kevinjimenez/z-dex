import { FormikErrors } from 'formik';
import z from 'zod';

export const createFormValifator = <T extends z.ZodType>(schema: T) => {
  return (values: z.infer<T>): FormikErrors<z.infer<T>> => {
    const r = schema.safeParse(values);

    if (r.success) return {};

    const fieldErrors = r.error.flatten().fieldErrors;
    const errors: Record<string, string> = {};

    for (const key in fieldErrors) {
      const message = fieldErrors[key as keyof typeof fieldErrors]?.[0];
      if (message) errors[key] = message;
    }

    return errors as FormikErrors<z.infer<T>>;
  };
};
