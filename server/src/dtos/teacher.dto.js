import * as z from "zod";

const Dto = z.object({
  name: z.string(),
  house_id: z.int().min(1),
  employment_start: z.iso.date(),
  currently_active: z.boolean(),
  deceased: z.boolean(),
});

export default Dto;
