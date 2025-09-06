import express from "express";
import dotenv from "dotenv";

import enquiryRoutes from "./routes/enquiry.routes.js";
import AppError from "./utils/appError.js";
import errorHandler from "./middleware/errorHandler.js";
import { responseHandler } from "./middleware/responseHandler.js";
import { swaggerDocs } from "./swagger.js";
dotenv.config();
const app = express();

app.use(express.json());

// ✅ attach response methods
app.use(responseHandler);
app.use("/", enquiryRoutes);
app.use("/api/enquiry", enquiryRoutes);

// ✅ Swagger docs (must be added here)
swaggerDocs(app, process.env.PORT || 5000);
// Handle unhandled routes
app.use((req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl}`, 404));
});

// Global error handler
app.use(errorHandler);
export default app;
