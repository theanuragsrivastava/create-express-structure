// importing dependencies and schemas
import user from "../schemas/userSchema.js";

export const createUser = (userDocument) => {
  return user.create(userDocument);
};

export const findUser = () => {
  return user.find({ isActive: 0 });
};

export const findUserByParam = (email) => {
  return user.findOne({ email: email });
};

export const deleteUser = (email) => {
  return user.findOneAndUpdate(
    { email: email },
    { isActive: 1 },
    { new: true }
  );
};
