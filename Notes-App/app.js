const note = require("./notes.js");
const chalk = require("chalk");
const yargs = require('yargs');
//const { string } = require("yargs");


//yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add Notes',
    builder: {
        title: {
            describe: 'Write the title of Note',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Write the content of your note',
            demandOption: true,
            type: 'string'
        } 
    },
    handler(argv) {
        note.addNotes(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove Note',
    builder: {
        title: {
            describe: 'Remove the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.rmvnotes(argv.title)
    }
})
yargs.command({
    command: 'read',
    describe: 'Read the Note',
    builder: {
        title: {
            describe: 'Read the Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readnotes(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'Listing the Notes',
    handler() {
        note.listnotes();
    }
})

yargs.parse()
// const fs = require('fs');

// fs.appendFileSync("notes.txt", "\n I am Akshat Khanna")
