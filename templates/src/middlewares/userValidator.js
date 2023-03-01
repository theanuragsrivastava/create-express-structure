// import body and param from express-validator
import { body, validationResult, param } from "express-validator";

// import validation message
import messages from "../utils/responseMessages";

/*
Handling the validation of the CRUD parameters
This file will centralize the validation.
*/

// function to send response in case of error
const sendResponse = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status().json({ message: errors.errors.map((el) => el.msg[0]) });
  }
  next();
};

// validation for new user
export const createUserValidator = [
  body("fullName")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyName)
    .trim(),
  body("contactNumber")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyContact)
    .trim(),
  body("userEmail")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyEmail)
    .trim()
    .isEmail()
    .withMessage(messages.user.validator.invalidEmail),
  body("age")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyAge)
    .trim(),
  (req, res, next) => {
    sendResponse(req, res, next);
  },
];

// validation for single user
export const singleUserValidator = [
  param("email")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyEmail)
    .isEmail()
    .withMessage(messages.user.validator.invalidEmail)
    .trim(),
  (req, res, next) => {
    sendResponse(req, res, next);
  },
];

// validation for delete user
export const deleteUserValidator = [
  param("email")
    .not()
    .isEmpty()
    .withMessage(messages.user.validator.emptyEmail)
    .isEmail()
    .withMessage(messages.user.validator.invalidEmail)
    .trim(),
  (req, res, next) => {
    sendResponse(req, res, next);
  },
];
