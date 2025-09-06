import express from "express";
import {
  createEnquiry,
  deleteEnquiryById,
  getEnquiry,
  getEnquiryById,
  updateEnquiry,
} from "../controllers/enquiry.controller.js";
import { validateFields } from "../middleware/validateFields.js";

const router = express.Router();

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
