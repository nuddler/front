const fs = require('fs');
const path = require('path');
const CodeGen = require('swagger-typescript-codegen').CodeGen;

const swagger = JSON.parse(fs.readFileSync(path.resolve(__dirname, 'api-docs.json'), 'UTF-8'));
const tsSourceCode = CodeGen.getTypescriptCode({
    className: 'ApiSdk',
    swagger: swagger,
    template: {
        method: fs.readFileSync(path.resolve(__dirname, 'templates/method.mustache'), 'utf8'),
        class: fs.readFileSync(path.resolve(__dirname, 'templates/class.mustache'), 'utf8'),
        type: fs.readFileSync(path.resolve(__dirname, 'templates/type.mustache'), 'utf8')
    },
});
fs.writeFileSync(path.resolve(__dirname, '../src/api/api-sdk.ts'), tsSourceCode, 'utf8');

console.log('Api SDK generated');