const { acrobaticsCheck } = require("./Checks/acrobatics")
const { animalHandlingCheck } = require("./Checks/animalHandling")
const { arcanaCheck } = require("./Checks/arcana")
const { athleticsCheck } = require("./Checks/athletics")
const { deceptionCheck } = require("./Checks/deception")
const { historyCheck } = require("./Checks/history")
const { insightCheck } = require("./Checks/insight")
const { intimidationCheck } = require("./Checks/intimidation")
const { investigationCheck } = require("./Checks/investigation")
const { medicineCheck } = require("./Checks/medicine")
const { natureCheck } = require("./Checks/nature")
const { perceptionCheck } = require("./Checks/perception")
const { performanceCheck } = require("./Checks/performance")
const { persuasionCheck } = require("./Checks/persuasion")
const { religionCheck } = require("./Checks/religion")
const { sleightOfHandCheck } = require("./Checks/sleightOfHand")
const { stealthCheck } = require("./Checks/stealth")
const { survivalCheck } = require("./Checks/survival")

function processCheckCommand(args, msg) {
    if (args.length != 1) {
        msg.channel.send(`You sent '${msg}'. Please make sure there is only 1 single argument entered after the command.  Example: '!check stealth' or '!check wisdom'`)
        return
    }

    if (args[0] == "acrobatics" || args[0] == "acr") {
      acrobaticsCheck(msg)
    } else if (args[0] == "animal handling" || args[0] == "ah" || args[0] == "ani") {
      animalHandlingCheck(msg)
    } else if (args[0] == "arcana" || args[0] == "arc") {
      arcanaCheck(msg)
    } else if (args[0] == "athletics" || args[0] == "ath") {
      athleticsCheck(msg)
    } else if (args[0] == "deception" || args[0] == "dec") {
      deceptionCheck(msg)
    } else if (args[0] == "history" || args[0] == "his") {
      historyCheck(msg)
    } else if (args[0] == "insight" || args[0] == "ins") {
      insightCheck(msg)
    } else if (args[0] == "intimidation" || args[0] == "int") {
      intimidationCheck(msg)
    } else if (args[0] == "investigation" || args[0] == "inv") {
      investigationCheck(msg)
    } else if (args[0] == "medicine" || args[0] == "med") {
      medicineCheck(msg)
    } else if (args[0] == "nature" || args[0] == "nat") {
      natureCheck(msg)
    } else if (args[0] == "perception" || args[0] == "perc") {
      perceptionCheck(msg)
    } else if (args[0] == "performance" || args[0] == "perf") {
      performanceCheck(msg)
    } else if (args[0] == "persuasion" || args[0] == "pers") {
      persuasionCheck(msg)
    } else if (args[0] == "religion" || args[0] == "rel") {
      religionCheck(msg)
    } else if (args[0] == "sleight of hand" || args[0] == "soh" || args[0] == "sle") {
      sleightOfHandCheck(msg)
    } else if (args[0] == "stealth" || args[0] == "ste") {
      stealthCheck(msg)
    } else if (args[0] == "survival" || args[0] == "sur") {
      survivalCheck(msg)
    }
}

module.exports = {
    processCheckCommand
}
