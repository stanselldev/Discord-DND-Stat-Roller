const { helpCommand } = require("./helpCommand")
const { roll } = require("./roll")
const { processCheckCommand } = require("./processCheckCommand")
const { processAccountCommand } = require("./AccountCommands/processAccountCommand")
const { processCharacterCommand } = require("./CharacterCommands/processCharacterCommand")

function processCommand(msg) {
    let fullCommand = msg.content.substr(1)
    let splitCommand = fullCommand.split(" ")
    let command = splitCommand[0]
    let args = splitCommand.slice(1)

    if (command == "help") {
        helpCommand(args, msg)

    } else if (command == "roll" || command == "r") {
        roll(args, msg)

    } else if (command == "check" || command == "c") {
        processCheckCommand(args, msg)

    } else if (command == "account" || command == "acc") {
        processAccountCommand(msg, args, command)

    } else if (command == "character" || command == "char") {
        processCharacterCommand(msg, args, command)
    }
}

module.exports = {
  processCommand
}
