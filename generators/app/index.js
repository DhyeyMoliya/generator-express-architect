'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  prompting() {
    // Have Yeoman greet the user.
    this.log(yosay(
      'Welcome to the ace ' + chalk.red('generator-express-architect') + ' generator!'
    ));

    const prompts = [{
      type: 'input',
      name: 'appName',
      message: 'What is your app name?',
      default: this.appname
    }];

    return this.prompt(prompts).then(props => {
      // To access props later use this.props.someAnswer;
      this.props = props;
      console.log(this.props.appName);
      this.destinationRoot(this.props.appName);
    });
  }

  writing() {


    this.fs.copy(
      this.templatePath('_express-server'),
      this.destinationPath('express-server')
    );
    this.fs.copy(
      this.templatePath('_plugins'),
      this.destinationPath('plugins')
    );
    this.fs.copy(
      this.templatePath('_config.js'),
      this.destinationPath('config.js')
    );
    this.fs.copyTpl(
      this.templatePath('_package.json'),
      this.destinationPath('package.json'), {
        name: this.props.appName
      }
    );
    this.fs.copy(
      this.templatePath('_server.js'),
      this.destinationPath('server.js')
    );

  }

  install() {
    this.installDependencies();
  }
};
