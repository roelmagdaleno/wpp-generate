import meow from 'meow';
const helpText = `
    Usage
        $ wpp-generate
`;

export default meow(helpText, { importMeta: import.meta });
