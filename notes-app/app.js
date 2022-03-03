import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import myNotes from "./notes.js"

const yarg = yargs(hideBin(process.argv))
yarg.version("17.3.1")

//Add command
yarg.command({
    command: "add",
    describe: "Adds a new note",
    handler: () => {
        console.log("Adding your note")
    }
})

//Delete command
yarg.command({
    command: "delete",
    describe: "Deletes your selected note",
    handler: () => {
        console.log("Deleting your note")
    }
})

//List command
yarg.command({
    command: "list",
    describe: "Lists all your notes",
    handler: () => {
        console.log("Showing all tasks")
    }
})

//Read command
yarg.command({
    command: "read",
    describe: "Reads your note",
    handler: () => {
        console.log("Reading your note")
    }
})


console.log(yarg.argv)