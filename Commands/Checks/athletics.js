const { formatAndSendMessage } = require("./formatAndSendMessage")
const { getStat } = require("./getStat")

async function athleticsCheck(msg) {
    let check = "Athletics"
    let stat = await getStat(msg, "Strength")
    let primary = parseInt(stat.primary)
    let roll = Math.ceil(Math.random() * 20)

    formatAndSendMessage(check, stat, primary, roll, msg)
}

module.exports = {
    athleticsCheck
}
