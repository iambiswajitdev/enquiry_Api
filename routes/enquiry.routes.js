import express from "express";
import {
  createEnquiry,
  deleteEnquiryById,
  getEnquiry,
  getEnquiryById,
  updateEnquiry,
} from "../controllers/enquiry.controller.js";
import { validateFields } from "../middleware/validateFields.js";
import path from "path";
import { fileURLToPath } from "url";

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post(
  "/create-enquiry",
  validateFields(["name", "email", "phone", "message"]),
  createEnquiry
);

router.get("/get-enquiry", getEnquiry);
router.get("/get-enquiry/:id", getEnquiryById);
router.put("/update-enquiry/:id", updateEnquiry);
router.delete("/delete-enquiry/:id", deleteEnquiryById);
export default router;
