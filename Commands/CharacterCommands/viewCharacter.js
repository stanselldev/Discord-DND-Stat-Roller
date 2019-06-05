const { db } = require("../../Database/database.js")
const { getAccount } = require("../AccountCommands/getAccount")
const { sendErrorMessage } = require("../sendErrorMessage")
const { formatAndSendCharacterSheet } = require("./formatAndSendCharacterSheet")

async function viewCharacter(args, msg) {
  let account = await getAccount(msg).catch(err => console.log(err))
  let characters = account.characters
  let character

  // DD1
  if (!args[1]) {
    character = account.loadedCharacter
  } else if (args[1]) {
    character = args[1]
  }

  // DD2
  character = characters.filter(char => char.name.toLowerCase() == character.toLowerCase())

  // DD3
  if (character.length == 0) {
    let error = `Cannot load character.`
    let reason = `No character with the name of ${character} could be found.`
    let assist = `You can try adding a new character with the following command using your DnD Beyond character sheet URL: !char create URL \n\nEx. !char create https://www.dndbeyond.com/profile/stansellcp/characters/9270933`
    sendErrorMessage(msg, error, reason, assist)
    return
  }

  // DD4
  if (character.length == 1) {
    formatAndSendCharacterSheet(msg, character)
  }
}

module.exports = {
  viewCharacter
}
