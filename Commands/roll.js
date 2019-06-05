function roll(args, msg) {

  console.log(Number.isInteger(parseInt(args[0][0])))

  if (args[0] == "" || args[0] == null || Number.isInteger(parseInt(args[0][0])) == false) {
    msg.channel.send(`\`\`\`You done goofed. Try again idiot in this format: !roll 2d20 or !roll 2d20+5\`\`\``)
    return
  }

  let roll = args[0]
  console.log(roll)

  if (args[0] == "help") {
    sendRollHelp(msg)
    return
  }

  let r = {
    die: parseInt(roll.split("d")[1].split("+")[0]),
    rolls: parseInt(roll.split("d")[0]),
    modifier: parseInt(roll.split("d")[1].split("+")[1])
  }

  console.log(r)

  let resultLines = []
  let total = 0

  if (r.die > 0 && r.rolls > 0) {
    for (let i = 1; i <= r.rolls; i++) {
      let result = Math.ceil(Math.random() * r.die)
      let modifiedResult = result + r.modifier
      total += r.modifier ? modifiedResult : result
      let resultLine = r.modifier ?
      `${i}) ${result} + ${r.modifier} = ${modifiedResult}` :
      `${i}) ${result}`

      resultLines.push(resultLine)
    }
    formatAndSendMessage(msg, resultLines, total, r)
  }
}

function formatAndSendMessage(msg, resultLines, total, r) {
  let header = r.modifier ?
  `${msg.author.username}: D${r.die}x${r.rolls}+${r.modifier}\n\n` :
  `${msg.author.username}: D${r.die}x${r.rolls}\n\n`

  let message = `${header}`

  for (let i = 0; i < resultLines.length; i++) {
    message += resultLines[i] + "\n"
  }

  message += `\nTotal = ${total}`
  message = `\`\`\`${message}\`\`\``

  msg.channel.send(message)
  msg.delete()
}

function sendRollHelp(msg) {
  msg.channel.send(`
    \`\`\`
    Format : !r [sides] [rolls] [modifier]*
    Example: !r 20 2 5
    Result : Roll a [D20] [twice] and add [5] to each roll

    The modifier is not required.
    If you want a special roll, please use !sr [roll type]\`\`\`
    `)
    msg.delete()
  }

  module.exports = {
    roll
  }
