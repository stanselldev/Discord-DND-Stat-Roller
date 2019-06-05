const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function intimidationCheck(msg) {
  let check = "Intimidation"
  let stat = await getStat(msg, "Charisma")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    intimidationCheck
}
