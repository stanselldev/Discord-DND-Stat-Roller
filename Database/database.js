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

// showing how to add data to database
// db.collection("accounts").doc("1").update({
//     'characters.Qurong.health': '200'
// })

// sample code showing how to get data from
// accounts collection
// db.collection("accounts").get().then((snapshot) => {
//     snapshot.forEach((doc) => {
//       if (doc.data().userId == 'test') {
//           console.log(doc.data())
//       }
//     });
// }).catch((err) => {
//     console.log('Error getting documents', err);
// });
