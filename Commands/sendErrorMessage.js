function sendErrorMessage(msg, error, reason, assist) {
  let message = `\`\`\`${msg.content}\`\`\`\n***Error:***\`\`\`${error}\`\`\`\n***Reason:***\`\`\`${reason}\`\`\`\n***Assistance:***\`\`\`${assist}\`\`\``
  msg.channel.send(message)
}

module.exports = {
  sendErrorMessage
}
