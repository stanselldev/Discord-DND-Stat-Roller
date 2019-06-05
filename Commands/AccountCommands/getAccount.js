const { db } = require('../../Database/database.js')

async function getAccount(msg) {
  let userId = msg.author.id

  let account = await db.collection("accounts").doc(userId).get()
  .catch(err => console.log(err))
  .then((doc) => {
    return doc.data()
  })

  return account
}

module.exports = {
  getAccount
}
