const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function investigationCheck(msg) {
  let check = "Investigation"
  let stat = await getStat(msg, "Intelligence")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    investigationCheck
}
