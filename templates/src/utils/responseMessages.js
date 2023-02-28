const invalidDetails = "Please provide valid";
const enterDetails = "Please enter";

const messages = {
  user: {
    success: {
      created: "User created Successfully",
      deleted: "User deleted Successfully",
      getAllUser: "All users found successfully",
      getOneUser: "Found user successfully",
    },
    validator: {
      emptyName: `${enterDetails} Full Name`,
      emptyContact: `${enterDetails} Contact Number`,
      invalidEmail: `${invalidDetails} email`,
      emptyEmail: `${enterDetails} email`,
      emptyAge: `${enterDetails} Age`,
    },
  },
  other: {
    interServerError: "Internal Server Error, Contact backend team members",
  },
};

export default messages;
