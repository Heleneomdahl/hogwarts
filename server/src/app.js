import express from "express";
import errorhandler from "./errorhandling/errorhandler.js";

import teachersRoutes from "./routes/teachers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import housesRoutes from "./routes/houses.routes.js";
import coursesRoutes from "./routes/courses.routes.js";
import examsRoutes from "./routes/exams.routes.js";
import gradesRoutes from "./routes/grades.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000);

app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);
app.use("/houses", housesRoutes);
app.use("/courses", coursesRoutes);
app.use("/exams", examsRoutes);
app.use("/grades", gradesRoutes);

app.use(errorhandler);
