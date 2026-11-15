import * as z from "zod";

const Dto = z.object({
  name: z.string(),
  teacher_id: z.int().min(1),
  type: z.enum(["core", "elective", "extra-curricular"]),
  level: z.enum(["OWL", "NEWT"]),
  school_year: z.int().min(1).max(7),
});

export default Dto;
