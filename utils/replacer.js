import fs from 'fs';
import replace from 'replace-in-file';
import path from 'path';
import { constantCase } from 'constant-case';

export default async (pluginPath, answers) => {
    const replaceVariables = {
        files: [
            path.join(pluginPath, 'plugin-name.php'),
            path.join(pluginPath, 'includes', '*.php')
        ],
        from: [
            /{{plugin_name}}/g,
            /{{plugin_slug}}/g,
            /{{plugin_uri}}/g,
            /{{description}}/g,
            /{{version}}/g,
            /{{author}}/g,
            /{{author_uri}}/g,
            /Plugin_Name/g
        ],
        to: [
            answers['pluginName'],
            answers['pluginSlug'],
            answers['pluginURI'],
            answers['description'],
            answers['version'],
            answers['author'],
            answers['authorURI'],
            constantCase(answers['pluginSlug'])
        ]
    };

    const renameFiles = [
        {
            oldPath: path.join(pluginPath, 'plugin-name.php'),
            newPath: path.join(pluginPath, `${ answers['pluginSlug'] }.php`)
        },
        {
            oldPath: path.join(pluginPath, 'includes', 'class-plugin-name.php'),
            newPath: path.join(pluginPath, 'includes', `class-${ answers['pluginSlug'] }.php`)
        }
    ];

    // Replace variables
    await replace(replaceVariables);

    // Replace file names.
    for (let i = 0; i < renameFiles.length; i++) {
        fs.rename(renameFiles[i].oldPath, renameFiles[i].newPath, () => {});
    }
}
