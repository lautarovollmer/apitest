import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import "./db.js";
import indexRoutes from "./routes/routes.js";

const app = express();
dotenv.config();
app.use(cors());
app.use(express.json());

app.use("/api", indexRoutes);

app.listen(process.env.PORT || 8300, () => {
  console.log(`Server is running on port ${process.env.PORT || 8300}`);
});
