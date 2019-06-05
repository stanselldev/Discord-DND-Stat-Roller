const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function arcanaCheck(msg) {
  let check = "Arcana"
  let stat = await getStat(msg, "Intelligence")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    arcanaCheck
}
