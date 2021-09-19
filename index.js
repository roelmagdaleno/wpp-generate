#!/usr/bin/env node

import cli from './utils/cli.js';
import welcome from 'cli-welcome';
import inquirer from 'inquirer';
import questions from './utils/questions.js';
import clone from './utils/repo.js';

(async () => {
    welcome({
        title: 'wpp-generate',
        tagLine: 'by Roel Magdaleno',
        description: cli.pkg.description,
        version: cli.pkg.version
    });

    console.log('Fill the options to create the WordPress plugin.');
    console.log();

    inquirer.prompt(questions).then(answers => clone(answers));
})();
