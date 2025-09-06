import AppError from "../utils/appError.js";

export const validateFields = (requiredFields = []) => {
  console.log("requiredFields", requiredFields);

  return (req, res, next) => {
    const missing = requiredFields.filter((field) => !req.body[field]);

    if (missing.length) {
      return next(new AppError(`${missing.join(", ")} is required`, 400));
    }

    next();
  };
};
