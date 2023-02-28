import fs from "fs";
import path from "path";

const createFiles = (directory, filename, content) => {
  try {
    fs.writeFileSync(filename, fs.readFileSync(path.join(directory, content)));
  } catch (error) {
    console.log(error);
  }
};

export default createFiles;
