const { db } = require('../../Database/database.js')

function createAccount(msg) {
    let newAccount = true
    let userId = msg.author.id
    let username = msg.author.username

    db.collection("accounts").get().then((snapshot) => {
        snapshot.forEach((doc) => {
            if (doc.data().userId == userId) {
                msg.channel.send(`\`\`\` Account already exists. \`\`\``)
                newAccount = false
            }
        });

        if (newAccount) {
            db.collection("accounts").doc(userId).set({
                userId,
                username: username,
                loadedCharacter: null
            })
            msg.channel.send(`\`\`\`Account successfully created. Try creating a new character with '!character create'\`\`\``)
        }
    }).catch((err) => {
        console.log('Error getting documents: ', err);
    });
}

module.exports = {
    createAccount
}
