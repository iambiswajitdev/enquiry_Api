import mongoose from "mongoose";
import Enquiry from "../model/enquriy.model.js";
// ?*** CREATE ENQ
export const createEnquiry = async (req, res, next) => {
  try {
    const { name, email, phone, message } = req.body;
    const newEnquiry = await Enquiry.create({
      name,
      email,
      phone,
      message,
    });
    return res.success(newEnquiry, "Enquiry created successfully", 200);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};

//****/ GET ALL Enquiry
export const getEnquiry = async (req, res, next) => {
  try {
    const enquiries = await Enquiry.find();
    return res.success(enquiries, "All enquiries fetched successfully", 200);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};

//****/ GET Enquiry BY ID
export const getEnquiryById = async (req, res, next) => {
  const { id } = req.params;

  // Step 1: Check if ID is valid
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.fail("Invalid ID format", 400);
  }
  try {
    const enquiry = await Enquiry.findById(id);
    if (!enquiry) {
      return res.fail("Enquiry not found", 404);
    }
    return res.success(enquiry, "Enquiries fetched successfully", 200);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};

// ?*** Update Enquiry by id
export const updateEnquiry = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, email, phone, message } = req.body;
    await Enquiry.updateOne(
      { _id: id },
      { $set: { name, email, phone, message } }
    );

    return res.success("Enquiry updated successfully", 200);
  } catch (err) {
    next(err); // Pass error to middleware
  }
};
// ?** DELETE ENQ BY ID
export const deleteEnquiryById = async (req, res, next) => {
  try {
    const { id } = req.params;
    await Enquiry.deleteOne({ _id: id });
    return res.success("Enquiry Deleted successfully", 200);
  } catch (err) {
    next(err);
  }
};
