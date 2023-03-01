// importing necessary modules and functions
import * as userModel from "../models/userModel.js";
import messages from "../utils/responseMessages.js";
import catchAsyncError from "../utils/catchAsyncErrors.js";
import { sendResponse } from "../utils/commonFunctions.js";

/*
  In this file, we will be handling all the business logic.
  We will be importing the functions from Model to interact with the database.
  Also use the catchAsyncError function to handle any errors and sendResponse to handle the response to the client.
*/

// Controller to handle creation of a user
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

// Controller to handle getting all users
export const getAllUser = catchAsyncError(async (req, res) => {
  const allUser = await userModel.findUser();

  return sendResponse(res, 200, {
    data: allUser,
    message: messages.user.success.getAllUser,
  });
});

// Controller to handle getting user One by id
export const getOneUser = catchAsyncError(async (req, res) => {
  const { userID } = req.params;
  let user = {};

  user = await userModel.findUserByParam(userID);

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

// Controller to handle updating of a user
export const updateUser = catchAsyncError(async (req, res) => {
  const { fullName, contactNumber, email, age } = req.body;
  const { userID } = req.params;
  let user = {};
  let needToBeUpdated = {};

  user = await userModel.isUserActive(userID);
  if (!user)
    return sendResponse(res, 404, { message: messages.user.failed.notFound });

  needToBeUpdated = {
    fullName,
    contactNumber,
    email,
    age,
  };

  user = await userModel.updateUser(userID, needToBeUpdated);

  if (user) {
    return sendResponse(res, 200, {
      message: messages.user.success.updateUser,
      data: user,
    });
  }
  return sendResponse(res, 500, {
    message: messages.user.failed.notDeleted,
  });
});

// Controller to handle deletion of a user
export const deleteUser = catchAsyncError(async (req, res) => {
  const { userID } = req.params;
  let user = {};

  user = await userModel.isUserActive(userID);

  if (!user)
    return sendResponse(res, 404, { message: messages.user.failed.notFound });

  user = await userModel.deleteUser(userID);

  if (user) {
    return sendResponse(res, 202, {
      message: messages.user.success.deleteUser,
    });
  }
  return sendResponse(res, 500, {
    message: messages.user.failed.notDeleted,
  });
});
