const { db } = require('../../Database/database.js')

async function getCharacters(msg) {
  let userId = msg.author.id

  let characters = await db.collection("accounts").doc(userId).get()
  .catch(err => console.log(err))
  .then((doc) => {
    return doc.data().characters
  })

  return characters
}

module.exports = {
  getCharacters
}
