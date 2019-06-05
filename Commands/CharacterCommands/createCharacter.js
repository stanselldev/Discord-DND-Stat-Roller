const { db } = require("../../Database/database.js")
const { getCharacterSheet } = require("./getCharacterSheet")
const { loadCharacter } = require("./loadCharacter")
const { sendErrorMessage } = require("../sendErrorMessage")

async function createCharacter(args, msg) {

  // DD1
  if (!args[1]) {
    let error = `Cannot create character.`
    let reason = `No URL was given.`
    let assist = `Please get the URL from your character sheety on DnD beyond and place it in the URL position in the command: !char create URL \n\nExample: !char c https://www.dndbeyond.com/profile/stansellcp/characters/9270933`
    sendErrorMessage(msg, error, reason, assist)
    return
  }

  // DD2
  let newCharacter = true
  let userId = msg.author.id
  let url = args[1]
  let characters = []
  let characterSheet = await getCharacterSheet(msg, url)
    .catch(err => console.log(err))

  if (characterSheet != null) {
    db.collection("accounts").get()
    .catch(err => console.log(err))
    .then((snapshot) => {
      snapshot.forEach((doc) => {
        if (doc.data().userId == userId) {
          if (doc.data().characters != null) {
            characters = doc.data().characters
            for (let i = 0; i < characters.length; i++) {
              if (characters[i].name == characterSheet.name) {
                newCharacter = false
              }
            }
          }
        }
      })

      // DD3
      if (!newCharacter) {
        let message = `\`\`\`Command Received: ${msg.content} \n\nError: Could not create character. \n\nReason: A character by this name already exists on your account.\`\`\``
        msg.channel.send(message)
        return
      }

      // DD4
      if (newCharacter) {
        characters.push(characterSheet)
        db.collection("accounts").doc(userId).update({
          characters
        })
        .catch(err => console.log(err))

        // DD5
        msg.channel.send(`\`\`\`Character successfully created. Did you want to load this character? Enter [y] or [n]\`\`\``)
        .then(() => {
          msg.channel.awaitMessages(m => m.author.id === msg.author.id, {
            max: 1,
            time: 10000
          }).then(collected => {
            collected = collected.first().content

            if (collected == "y" || collected == "yes") {
              args[1] = characterSheet.name
              loadCharacter(args, msg).catch(err => console.log(err))

            } else if (collected == "n" || collected == "no") {
              msg.delete()
            }
          })
        })
      }
    })
  }
}

module.exports = {
  createCharacter
}
