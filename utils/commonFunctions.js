import fs from "fs";
import path from "path";

/**
 *
 * @param {String} directory root directory path
 * @param {String} filename path of the content of the file to be created
 * @param {String} content path of the file from which conntent to be created
 */

const createFiles = (directory, filename, content) => {
  try {
    fs.writeFileSync(filename, fs.readFileSync(path.join(directory, content)));
  } catch (error) {
    console.log(error);
  }
};

export default createFiles;
