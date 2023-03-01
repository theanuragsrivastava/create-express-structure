#!/usr/bin/env node
"use strict";

import fs from "fs";
import path from "path";
import chalk from "chalk";
import boxen from "boxen";
import { fileURLToPath } from "url";
import { exec, execSync } from "child_process";
import ora from "ora";

import * as requiredFiles from "./utils/requiredFiles.js";
import createFiles from "./utils/commonFunctions.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spinnerDetails = {
  spinner: "aesthetic",
  color: "green",
};

const spinner = ora({
  ...spinnerDetails,
});

const initializeProjectandDeps = () => {
  spinner.start("Initializing project and dependencies...");
  fs.writeFileSync(
    "package.json",
    fs.readFileSync(path.join(__dirname, "templates/package.json"))
  );

  spinner.start(
    "installing dependencies... express mongoose dotenv nodemon express-validator"
  );
  try {
    execSync("npm install express mongoose dotenv nodemon express-validator");
    spinner.succeed("dependencies installed !!");
  } catch (err) {
    console.log(err.message);
    spinner.fail("dependencies failed to install!!");
    return;
  }
};

const creatingFolders = () => {
  spinner.start("creating folders");
  fs.mkdirSync("src");
  fs.mkdirSync("src/controllers");
  fs.mkdirSync("src/models");
  fs.mkdirSync("src/router");
  fs.mkdirSync("src/schemas");
  fs.mkdirSync("src/utils");
  fs.mkdirSync("src/middlewares");
  fs.mkdirSync("config");
  fs.mkdirSync("public");
  spinner.succeed("folders created!!");
};

const creatingFiles = () => {
  spinner.start("creating files");
  fs.writeFileSync(
    "app.js",
    fs.readFileSync(path.join(__dirname, "/templates/app.js"))
  );
  fs.writeFileSync(
    "server.js",
    fs.readFileSync(path.join(__dirname, "/templates/server.js"))
  );

  fs.writeFileSync(
    ".env",
    `
  PORT=8000

  DB_USER_NAME=""
  DB_PASSWORD=""
  DB_NAME=""
  `
  );

  fs.writeFileSync(
    ".gitignore",
    `
    # Add all the files that should not be included in git
    # environment file and node_modules are already added

    node_modules
    .env`
  );

  requiredFiles.controllerFiles.forEach((file) => {
    createFiles(
      __dirname,
      `src/controllers/${file}`,
      `/templates/src/controllers/${file}`
    );
  });

  requiredFiles.modelsFiles.forEach((file) => {
    createFiles(
      __dirname,
      `src/models/${file}`,
      `/templates/src/models/${file}`
    );
  });

  requiredFiles.routesFiles.forEach((file) => {
    createFiles(
      __dirname,
      `src/router/${file}`,
      `/templates/src/router/${file}`
    );
  });

  requiredFiles.schemaFiles.forEach((file) => {
    createFiles(
      __dirname,
      `src/schemas/${file}`,
      `/templates/src/schemas/${file}`
    );
  });

  requiredFiles.utilsFiles.forEach((file) => {
    createFiles(__dirname, `src/utils/${file}`, `/templates/src/utils/${file}`);
  });

  requiredFiles.middlewaresFiles.forEach((file) => {
    createFiles(
      __dirname,
      `src/middlewares/${file}`,
      `/templates/src/middlewares/${file}`
    );
  });

  requiredFiles.configFiles.forEach((file) => {
    createFiles(__dirname, `config/${file}`, `/templates/config/${file}`);
  });
};

const creatingStructure = () => {
  spinner.start("building project structure");
  initializeProjectandDeps();
  creatingFolders();
  creatingFiles();
  spinner.succeed(
    "Start the development server with npm start, and checkout the Readme file for the understanding"
  );
};

creatingStructure();
