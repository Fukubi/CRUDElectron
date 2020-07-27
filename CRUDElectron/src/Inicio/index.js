const { shell } = require('electron');

function abrirGit() {
    return (shell.openExternal('https://github.com'));
}