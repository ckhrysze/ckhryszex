// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, "ckhryszex" is now active!');

	let insertPipe = vscode.commands.registerCommand('ckhryszex.insertPipe', function () {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			editor.edit(builder => {
				builder.insert(editor.selection.active, '|> ');
			})
		}
	});

	let newLineAndPipe = vscode.commands.registerCommand('ckhryszex.newLineAndPipe', function () {
		if (vscode.window.activeTextEditor) {
			vscode.commands.executeCommand('editor.action.insertLineAfter').then(() => {
				vscode.commands.executeCommand('ckhryszex.insertPipe')
			})
		}
	});

	context.subscriptions.push(insertPipe);
	context.subscriptions.push(newLineAndPipe);
}

// this method is called when your extension is deactivated
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
