const admin = require("firebase-admin");
const { serviceAccount } = require("../serviceAccount")

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://discorddndbot.firebaseio.com"
});

const db = admin.firestore()

module.exports = {
    db
}
