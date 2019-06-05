const { createAccount } = require("./createAccount")
const { viewAccount } = require("./viewAccount")
const { deleteAccount } = require("./deleteAccount")

function processAccountCommand(msg, args, command) {
    if (!args[0]) {
        viewAccount(msg)
    } else if (args[0] == "create" || args[0] == "c") {
        createAccount(msg)
    } else if (args[0] == "delete" || args[0] == "d") {
        deleteAccount(msg)
    }
}

module.exports = {
    processAccountCommand
}
