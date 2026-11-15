import * as z from "zod";

const Dto = z.object({
  name: z.string(),
  house_id: z.int().min(1),
  birthday: z.iso.date(),
  school_year: z.int().min(1).max(7),
});

export default Dto;
