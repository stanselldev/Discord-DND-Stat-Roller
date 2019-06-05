const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function animalHandlingCheck(msg) {
  let check = "Animal Handling"
  let stat = await getStat(msg, "Wisdom")
  let primary = parseInt(stat.primary)
  let roll = Math.ceil(Math.random() * 20)

  formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    animalHandlingCheck
}
