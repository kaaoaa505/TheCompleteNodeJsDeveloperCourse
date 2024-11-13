console.log(`
_________________________________________________________
----App started:
${new Date()}
---------------------------------------------------------
`);

const chalk = require('chalk');
const notes = require('./notes');

var argv = require('yargs/yargs')(process.argv.slice(2)).argv;

const commands = argv._ ?? 'no-command-provided';
const title = argv.title ?? 'no-title-provided';
const content = argv.content ?? 'no-content-provided';

console.log('----title provided is: ', title);
console.log('----content provided is: ', content);

if (commands.includes("add")) {
    console.log('Adding new note!');
    notes.addNote(title, content);
}

if (commands.includes("remove")) {
    console.log('Removing a note!');
    notes.removeNote(title);
}

if (commands.includes("list")) {
    console.log(chalk.yellow('Listing all notes!'));
    const notesList = notes.getNotes();
    console.log('notes.getNotes() is: ', notesList);

    notesList.forEach(note => {
        console.log(chalk.inverse(note.title));
        console.log(chalk.bold(note.content));
    });

    console.log(chalk.yellow.inverse('Listing all notes!'));
}

if (commands.includes("read")) {
    console.log('Read a note!');
    const note = notes.readNote(title);
    console.log(chalk.inverse(note.title));
        console.log(chalk.bold(note.content));
}


console.log(`
---------------------------------------------------------
----App End:
${new Date()}
_________________________________________________________
`);