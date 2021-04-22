"use strict";
const Generator = require("yeoman-generator");
const chalk = require("chalk");
const yosay = require("yosay");
const { install } = require("husky/lib/installer");

module.exports = class extends Generator {
  initializing() {
    // Have Yeoman greet the user.
    this.log(
      yosay(
        'Welcome to Dylan\'s ' + chalk.blueBright('Angular, Flask + MongoDB') + ' generator!'
      )
    );
  }

  async prompting() {
    this.answers = await this.prompt([
      {
        name: "projectName",
        message: "What is your project name?",
        default: "project"
      },
      {
        name: "databaseName",
        message: "What is the name of your database?",
        default: "database_1"
      },

      {
        type: "list",
        name: "user_model",
        message: "Will we provide a user model?",
        choices: ["Yes", "No"]
      }
    ]);
  }

  writing() {

    /**
     * Creating generator for backend
     */
    this.fs.copy(
      this.templatePath("backend/app.py"),
      this.destinationPath(this.answers.projectName + "/backend/app.py")
    );

    this.fs.copyTpl(
      this.templatePath("backend/config.py"),
      this.destinationPath(this.answers.projectName + "/backend/config.py"),
      { databaseName: this.answers.databaseName }
    );

    this.fs.copy(
      this.templatePath("backend/requirements.txt"),
      this.destinationPath(
        this.answers.projectName + "/backend/requirements.txt"
      )
    );

    this.fs.copy(
      this.templatePath("backend/application/__init__.py"),
      this.destinationPath(
        this.answers.projectName + "/backend/app/__init__.py"
      )
    );

    this.fs.copy(
      this.templatePath("backend/application/routes.py"),
      this.destinationPath(
        this.answers.projectName + "/backend/application/routes.py"
      )
    );

    this.fs.copy(
      this.templatePath("backend/application/models/__init__.py"),
      this.destinationPath(
        this.answers.projectName + "/backend/application/models/__init__.py"
      )
    );

    if (this.answers.user_model === "Yes") {
      this.fs.copy(
        this.templatePath("backend/application/user_model.py"),
        this.destinationPath(this.answers.projectName + "/backend/app.py")
      );

      if (this.answers.user_model === "Yes") {
        this.fs.copy(
          this.templatePath("backend/application/routes.py"),
          this.destinationPath(this.answers.projectName + "/backend/routes.py")
        );
      }
    }

    /**
     * Creating generator for frontend
     */

    this.fs.copy(
        this.templatePath("frontend/angular.json"),
        this.destinationPath(this.answers.projectName + "/frontend/angular.json")
    );

    this.fs.copy(
        this.templatePath("frontend/package.json"),
        this.destinationPath(this.answers.projectName + "/frontend/package.json")
    );

    this.fs.copy(
        this.templatePath("frontend/karma.conf.js"),
        this.destinationPath(this.answers.projectName + "/frontend/karma.conf.js")
    );


    install() {}
  }

};
