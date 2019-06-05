const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function sleightOfHandCheck(msg) {
  let check = "Sleight of Hand"
  let stat = await getStat(msg, "Dexterity")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    sleightOfHandCheck
}
