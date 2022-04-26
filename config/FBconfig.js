const admin = require("firebase-admin");

const serviceAccount = require("./admin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://webapp-57c8c-default-rtdb.europe-west1.firebasedatabase.app"
});

const auth = admin.auth()
const db = admin.database()

module.exports = {auth, db}