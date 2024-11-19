import { z } from "zod";

export const projectSchema = z.object({
  name: z.string({
    required_error: "name is required",
  }),
});
