import fs from "fs";
import chalk from "chalk";

//Utilities

export const getNotes = () => {
    try {
        const buffer = fs.readFileSync("notes.json");
        const dataString = buffer.toString()
        const notes = JSON.parse(dataString)
        return notes
    }
    catch (e) {
        return []
    }

}

export const saveNotes = (notes) => {
    const JSONnotes = JSON.stringify(notes);
    fs.writeFileSync("notes.json", JSONnotes)
}

// Command Functions

export const addNote = (title, body) => {

    const notes = getNotes()

    const duplicate = notes.filter(note => note.title === title)

    if (duplicate.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.bgGreen("New note saved"))
    } else {
        console.log(chalk.bgRed("Note title already exists"))
    }

}

export const deleteNote = (title) => {
    const notes = getNotes()
    const newArray = notes.filter(note => title !== note.title)
    if (notes.length !== newArray.length) {
        saveNotes(newArray)
        console.log(chalk.bgGreen("Your note has been deleted"))
    }
    else {
        console.log(chalk.bgRed("No note found"))
    }
}


