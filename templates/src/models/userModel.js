// importing dependencies and schemas
import user from "../schemas/userSchema.js";

/*
In this file, we will be creating functions that will interact with the database directly.
And use these function in the controllers to interact with the do the process started from frontend (CRUD).
*/

export const createUser = (userDocument) => {
  return user.create(userDocument);
};

export const findUser = () => {
  return user.find({ isActive: 0 });
};

export const findUserByParam = (userID) => {
  return user.findById(userID);
};

export const updateUser = (userID, data) => {
  return user.findByIdAndUpdate(userID, data, { new: true });
};

export const deleteUser = (userID) => {
  return user.findByIdAndUpdate(userID, { isActive: 1 }, { new: true });
};

export const isUserActive = (userID) => {
  return user.findOne({ _id: userID, isActive: 0 });
};
