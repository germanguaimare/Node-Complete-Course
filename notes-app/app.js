import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import * as noteHandler from "./noteHandler.js"

const yarg = yargs(hideBin(process.argv))
yarg.version("17.3.1")

//Add command
yarg.command({
    command: "add",
    describe: "Adds a new note",
    builder: {
        title: {
            describe: "Note title",
            demandOption: true,
            type: "string"
        },
        body: {
            describe: "Note body",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        noteHandler.addNote (yarg.argv.title, yarg.argv.body)
    }
})

//Delete command
yarg.command({
    command: "delete",
    describe: "Deletes your selected note",
    builder: {
        title: {
            describe: "Title of the note you want to delete",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        noteHandler.deleteNote(yarg.argv.title)
    }
})

//List command
yarg.command({
    command: "list",
    describe: "Lists all your notes",
    handler() {
        noteHandler.listNotes()
    }
})

//Read command
yarg.command({
    command: "read",
    describe: "Reads your note",
    builder: {
        title: {
            describe: "Title of the note you want to read",
            demandOption: true,
            type: "string"
        }
    },
    handler() {
        noteHandler.readNote(yarg.argv.title)
    }
})

yarg.parse()