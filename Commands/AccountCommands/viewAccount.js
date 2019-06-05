const { db } = require('../../Database/database.js')

function viewAccount(msg) {
    let exists = false

    db.collection("accounts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.data().userId == msg.author.id) {
                exists = true
                let message = `\`\`\`Username: ${doc.data().username}\`\`\``
                msg.channel.send(message)
            } 
        })

        if (!exists) {
            let message = `\`\`\`Couldn't find an account. Please create one with '!account create' \`\`\``
            msg.channel.send(message)
        }

    }).catch((err) => {
        console.log('Error getting documents: ', err);
    });
}

module.exports = {
    viewAccount
}