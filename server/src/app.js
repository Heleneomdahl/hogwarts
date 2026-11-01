import express from "express";
import teachersRoutes from "./routes/teachers.routes.js";
import studentsRoutes from "./routes/students.routes.js";
import housesRoutes from "./routes/houses.routes.js";
import coursesRoutes from "./routes/courses.routes.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.listen(3000);

app.use("/teachers", teachersRoutes);
app.use("/students", studentsRoutes);
app.use("/houses", housesRoutes);
app.use("/courses", coursesRoutes);
