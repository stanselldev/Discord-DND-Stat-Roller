const { db } = require('../../Database/database.js')

function deleteAccount(msg) {
    let exists = false

    db.collection("accounts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.data().userId == msg.author.id) {
                exists = true
                db.collection('accounts').doc(msg.author.id).delete();
                let message = `\`\`\`Account deleted. You create a new one with '!account create'\`\`\``
                msg.channel.send(message)
            } 
        })

        if (!exists) {
            let message = `\`\`\`Couldn't find an account to delete.\`\`\``
            msg.channel.send(message)
        }

    }).catch((err) => {
        console.log('Error getting documents: ', err);
    });
}

module.exports = {
    deleteAccount
}