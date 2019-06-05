const { db } = require('../../Database/database.js')
const _ = require('lodash')

function deleteCharacter(args, msg) {
  let characterName = args[1].toLowerCase()
  let userId = msg.author.id
  let characters

  if (characterName == null || characterName == "") {
    msg.channel.send(`\`\`\`Whoops! Looks like you didn't enter a character to delete.  Please enter the name of the character that you want to delete after the command. Ex. '!char delete [character name]'\`\`\``)
    return
  }

  db.collection("accounts").get().then((snapshot) => {
      snapshot.forEach((doc) => {
          if (doc.data().userId == userId) {
            if (doc.data().characters.length == 0) {
              msg.channel.send(`\`\`\`You do not have any characters.\`\`\``)
              return
            }

            characters = doc.data().characters
            for (let i = 0; i < characters.length; i++) {
              if (characters[i].name.toLowerCase() == characterName) {
                characters = characters.filter(character => character.name.toLowerCase() != characterName)
                db.collection("accounts").doc(userId).update({
                    characters
                })
                return
              }
            }
            msg.channel.send(`\`\`\`Could not locate character to delete.\`\`\``)
          }
      });

      // msg.channel.send(`\`\`\`Character successfully created. Did you want to load this character? Enter [y] or [n]\`\`\``)
      // .then(() => {
      //   msg.channel.awaitMessages(m => m.author.id === msg.author.id, {
      //       max: 1,
      //       time: 10000
      //     }).then(collected => {
      //       collected = collected.first().content
      //       if (collected == "y" || collected == "yes") {
      //         loadCharacter(msg)
      //       } else if (collected == "n" || collected == "no") {
      //         // TODO
      //       }
      //     })
      // })
  })
}

module.exports = {
  deleteCharacter
}
