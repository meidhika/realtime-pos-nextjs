import z, { custom } from "zod";

export const orderFormSchema = z.object({
  customer_name: z.string().min(1, "Customer Name is required"),
  table_id: z.string().min(1, "Select a table"),
  status: z.string().min(1, "Select a status"),
});

export type OrderForm = z.infer<typeof orderFormSchema>;
