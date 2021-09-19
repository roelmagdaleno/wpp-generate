export default [
    {
        type: 'input',
        name: 'pluginName',
        message: 'Plugin Name',
        validate: (input) => input.trim() !== ''
    },
    {
        type: 'input',
        name: 'pluginSlug',
        message: 'Plugin Slug',
        default: 'plugin-slug',
        validate: (input) => {
            if (input.trim() === '') {
                return false;
            }

            const lowerInput = input.toLowerCase();
            return input === lowerInput && lowerInput.includes('-');
        }
    },
    {
        type: 'input',
        name: 'pluginURI',
        message: 'Plugin URI'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Description',
        default: 'Plugin generated from a boilerplate.'
    },
    {
        type: 'input',
        name: 'version',
        message: 'Version',
        default: '0.1.0'
    },
    {
        type: 'input',
        name: 'author',
        message: 'Author'
    },
    {
        type: 'input',
        name: 'authorURI',
        message: 'Author URI'
    }
];
