import z from "zod";

export const tableFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.string().min(1, "Price is required"),
  discount: z.string().min(1, "Discount is required"),
  category: z.string().min(1, "Category is required"),
  image_url: z.union([
    z.string().min(1, "Image URL is required"),
    z.instanceof(File),
  ]),
  is_available: z.string().min(1, "Availability is required"),
});

export const tableSchema = z.object({
  name: z.string(),
  description: z.string(),
  capacity: z.number(),
  status: z.string(),
});

export type Table = z.infer<typeof tableSchema> & { id: string };

export type TableForm = z.infer<typeof tableFormSchema>;
