const invalidDetails = "Please provide valid";
const enterDetails = "Please enter";

/*
This function will contain all the response messages from the server
*/

const messages = {
  user: {
    success: {
      created: "User created Successfully",
      deleted: "User deleted Successfully",
      updated: "User updated Successfully",
      getAllUser: "All users found successfully",
      getOneUser: "Found user successfully",
    },
    failed: {
      notFound: "User not found",
      notDeleted: "User deletion failed",
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
