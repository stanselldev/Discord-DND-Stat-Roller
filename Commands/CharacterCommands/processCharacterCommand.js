const { getCharacterSheet } = require("./getCharacterSheet")

const { createCharacter } = require("./createCharacter")
const { deleteCharacter } = require("./deleteCharacter")
const { refreshCharacter } = require("./refreshCharacter")
const { loadCharacter } = require("./loadCharacter")
const { viewCharacter } = require("./viewCharacter")

function processCharacterCommand(msg, args, command) {
  if (args[0] == "create" || args[0] == "c") {
    createCharacter(args, msg)

  } else if (args[0] == "delete" || args[0] == "d") {
    deleteCharacter(args, msg)

  } else if (args[0] == "refresh" || args[0] == "r") {
    refreshCharacter(args, msg)

  } else if (args[0] == "load" || args[0] == "l") {
    loadCharacter(args, msg)

  } else if (args[0] == "view" || args[0] == "v" || args[0] == "") {
    viewCharacter(args, msg)
  }
}

module.exports = {
  processCharacterCommand
}
