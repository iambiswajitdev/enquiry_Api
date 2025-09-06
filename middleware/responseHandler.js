export const responseHandler = (req, res, next) => {
  res.success = (data = {}, message = "Success", statusCode = 200) => {
    return res.status(statusCode).json({
      success: true,
      status: "success",
      message,
      data,
    });
  };

  res.fail = (message = "Something went wrong", statusCode = 400) => {
    return res.status(statusCode).json({
      success: false,
      status: "fail",
      message,
    });
  };

  next();
};
