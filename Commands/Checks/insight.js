const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function insightCheck(msg) {
  let check = "Insight"
  let stat = await getStat(msg, "Wisdom")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    insightCheck
}
