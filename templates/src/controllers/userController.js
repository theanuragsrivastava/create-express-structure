import * as userModel from "../models/userModel.js";
import catchAsyncError from "../utils/catchAsyncErrors.js";
import { sendResponse } from "../utils/commonFunctions.js";
import messages from "../utils/responseMessages.js";

export const createUser = catchAsyncError(async (req, res) => {
  const { fullName, contactNumber, userEmail, age } = req.body;
  let newUser = {};

  newUser = {
    fullName,
    contactNumber,
    userEmail,
    age,
  };

  newUser = await userModel.createUser(newUser);

  if (newUser)
    return sendResponse(res, 201, {
      data: newUser,
      message: messages.user.success.created,
    });
  return sendResponse(res, 500, {
    message: messages.other.interServerError,
  });
});

export const getAllUser = catchAsyncError(async (req, res) => {
  const allUser = await userModel.findUser();

  return sendResponse(res, 200, {
    data: allUser,
    message: messages.user.success.getAllUser,
  });
});

export const getOneUser = catchAsyncError(async (req, res) => {
  const { email } = req.params;
  let user = {};

  user = await userModel.findUserByParam(email);

  if (user) {
    return sendResponse(res, 200, {
      data: user,
      message: messages.user.success.getOneUser,
    });
  }
  return sendResponse(res, 500, {
    message: messages.other.interServerError,
  });
});

export const deleteUser = catchAsyncError(async (req, res) => {
  const { email } = req.params;
  let user = {};

  user = await userModel.deleteUser(email);

  if (user) {
    return sendResponse(res, 202, {
      message: messages.user.success.deleteUser,
    });
  }
  return sendResponse(res, 500, {
    message: messages.other.interServerError,
  });
});
