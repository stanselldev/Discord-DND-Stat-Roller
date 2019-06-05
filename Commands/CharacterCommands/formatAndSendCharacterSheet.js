function formatAndSendCharacterSheet(msg, character) {
  let stats = ``
  let message
  let name = character[0].name

  for (let i = 0; i < 6; i++) {
    stats += `${character[0].stats[i].label}: ${character[0].stats[i].primary}/${character[0].stats[i].secondary}\n`
  }

  message = `...\n\n**CHARACTER**\`\`\`${name}\`\`\`\n**STATS**\`\`\`${stats}\`\`\``
  msg.channel.send(message)
}

module.exports = {
  formatAndSendCharacterSheet
}
