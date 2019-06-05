const { db } = require("../../Database/database.js")
const { getCharacterSheet } = require("./getCharacterSheet")
const { sendErrorMessage } = require("../sendErrorMessage")
const { getAccount } = require("../AccountCommands/getAccount")
const { viewCharacter } = require("./viewCharacter")

async function refreshCharacter(args, msg) {
  let account = await getAccount(msg).catch(err => console.log(err))
  let userId = msg.author.id
  let characters = account.characters
  let character

  if (!args[1]) {
    character = account.loadedCharacter
  } else if (args[1]) {
    character = args[1]
  }

  characterToUpdate = characters.filter(char => char.name.toLowerCase() == character.toLowerCase())
  characters = characters.filter(char => char.name.toLowerCase() != character.toLowerCase())

  if (characterToUpdate.length == 0) {
    let error = `Cannot load character.`
    let reason = `No character with the name of ${characterToUpdate} could be found.`
    let assist = `You can try adding a new character with the following command using your DnD Beyond character sheet URL: !char create URL \n\nEx. !char create https://www.dndbeyond.com/profile/stansellcp/characters/9270933`
    sendErrorMessage(msg, error, reason, assist)
    return
  }

  if (characterToUpdate.length == 1) {
    let characterSheet = await getCharacterSheet(msg, characterToUpdate[0].url)
      .catch(err => console.log(err))

    characters.push(characterSheet)
    db.collection("accounts").doc(userId).update({
      characters
    })
    .catch(err => console.log(err))

    msg.channel.send(`\`\`\`${character} successfully updated. Do you want to view this character now? Enter [y] or [n]\`\`\``)
    .then(() => {
      msg.channel.awaitMessages(m => m.author.id === msg.author.id, {
        max: 1,
        time: 10000
      }).then(collected => {
        collected = collected.first().content

        if (collected == "y" || collected == "yes") {
          args[1] = characterSheet.name
          viewCharacter(args, msg).catch(err => console.log(err))
          
        } else if (collected == "n" || collected == "no") {
          msg.delete()
        }
      })
    })
  }
}

module.exports = {
  refreshCharacter
}
