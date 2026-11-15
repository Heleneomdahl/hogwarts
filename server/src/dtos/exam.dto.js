import * as z from "zod";

const Dto = z.object({
  course_id: z.int().min(1),
  student_id: z.int().min(1),
  grade: z.enum(["O", "E", "A", "P", "D", "T"]),
});

export default Dto;
