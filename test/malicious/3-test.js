const firebase = require("firebase");

firebase.database().ref("/").set({
    name: "Os Corp"
});
