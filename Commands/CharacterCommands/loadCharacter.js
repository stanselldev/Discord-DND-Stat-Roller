const { db } = require('../../Database/database.js')
const { sendErrorMessage } = require("../sendErrorMessage")
const { getCharacters } = require("./getCharacters")

async function loadCharacter(args, msg) {
  // DD1
  if (!args[1]) {
    let error = `Cannot load character.`
    let reason = `No character name was given.`
    let assist = `Please place the name of the character that you want to load in the name position in the command: !char load name \n\nEx. !char load Qurong`
    sendErrorMessage(msg, error, reason, assist)
    return
  }

  // DD2
  msg.delete()
  let userId = msg.author.id
  let name = args[1]
  let loadedCharacter
  let characterExists = false
  let characters = await getCharacters(msg).catch(err => console.log(err))

  for (let i = 0; i < characters.length; i++) {
    if (characters[i].name.toLowerCase() == name.toLowerCase()) {
      characterExists = true
      loadedCharacter = name
    }
  }

  // DD3
  if (!characterExists) {
    let error = `Cannot load character.`
    let reason = `No character with the name of ${name} could be found.`
    let assist = `You can try adding a new character with the following command using your DnD Beyond character sheet URL: !char create URL \n\nEx. !char create https://www.dndbeyond.com/profile/stansellcp/characters/9270933`
    sendErrorMessage(msg, error, reason, assist)
    return
  }

  // DD4
  if (characterExists) {
    db.collection("accounts").doc(userId).update({
      loadedCharacter
    })
    .catch(err => console.log(err))
  }
  msg.channel.send(`\`\`\`Loaded ${name}.\`\`\``)
}

module.exports = {
  loadCharacter
}
