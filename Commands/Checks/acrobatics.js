const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function acrobaticsCheck(msg) {
  let check = "Acrobatics"
  let stat = await getStat(msg, "Dexterity")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20) // + character.stats.dex

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    acrobaticsCheck
}
