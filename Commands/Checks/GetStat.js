const { getAccount } = require("../AccountCommands/getAccount")

async function getStat(msg, label) {
  let account = await getAccount(msg).catch(err => console.log(err))
  let characters = account.characters
  let loadedCharacter = account.loadedCharacter
  let stat

  character = characters.filter(char => char.name.toLowerCase() == loadedCharacter.toLowerCase())
  stat = character[0].stats.filter(stat => stat.label == label)
  stat[0].characterName = loadedCharacter
  return stat = stat[0]
}

module.exports = {
  getStat
}
