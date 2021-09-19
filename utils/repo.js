import { exec } from 'promisify-child-process';
import ora from 'ora';
import path from 'path';
import chalk from 'chalk';
import replace from './replacer.js';

export default async (answers) => {
    if (!answers['pluginSlug']) {
        return;
    }

    const repo = 'https://github.com/roelmagdaleno/wp-plugin-boilerplate';
    const command = `git clone ${ repo } "${ answers['pluginSlug'] }"`;
    const pluginPath = `${ path.join(process.cwd()) }/${ answers['pluginSlug'] }`;

    const spinner = ora('Cloning WordPress plugin...');
    spinner.start();

    // Clone repository
    await exec(command, { timeout: 45000 });
    await exec(`rm -rf ${ path.join(pluginPath, '.git') }`);
    await replace(pluginPath, answers);

    spinner.stop();
    console.log(chalk.green('WordPress plugin cloned successfully.'));
};
