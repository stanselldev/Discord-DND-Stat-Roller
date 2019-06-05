function formatAndSendMessage(check, stat, primary, roll, msg) {
  let checkMsg = check.toUpperCase()
  let nameMsg = stat.characterName.toUpperCase()
  let statMsg = stat.label.toUpperCase()

  message = `...\n\n**CHECK: ${checkMsg}**\`\`\`CHARACTER: ${nameMsg}\n\nROLL: ${roll}\n${statMsg}: ${stat.primary}\n\nTOTAL: ${roll+primary}\`\`\``

  msg.channel.send(message)
  msg.delete()
}

module.exports = {
    formatAndSendMessage
}
