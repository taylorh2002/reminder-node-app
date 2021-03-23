
/* if (process.argv[2] == "taylor") 
{
    console.log ("hey that's my name")
}
else 
{
    console.log("That's not my name")
} */

const yargs = require("yargs")

const {addNotes} = require("../utils/notes");

console.log(process.argv)
console.log(yargs.argv)

const command = process.argv[2];

if (command == "add") 
{
    console.log("adding a note")
    addNotes(yargs.argv.note)
}

else if (command == "remove")
{
    console.log("Removing a note")
}

else if (command == "list")
{
    console.log("listing the notes")
}

else 
{
    console.log("Command not recognised")
}