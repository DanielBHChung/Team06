function getUser() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user is signed in");
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().name;
                    console.log(n);
                    $("#username").text(n);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getUser();

function getEmail() {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log("user is signed in");
            db.collection("users")
                .doc(user.uid)
                .get()
                .then(function (doc) {
                    var n = doc.data().email;
                    console.log(n);
                    $("#email").text(n);
                })
        } else {
            console.log("no user is signed in");
        }
    })
}
getEmail();

function readAuthor() {
    db.collection("users").doc("nHUwKdoEGwdod89TheOiOaRkmQe2")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().name); //spelled EXACTLY as the firestore
            document.getElementById("author").innerText = snap.data().name;
        })
}
readAuthor();

const increment = firebase.firestore.FieldValue.increment(1);
const decrement = firebase.firestore.FieldValue.increment(-1);

// Document reference
const voteRef = db.collection('Forum').doc('Post');

// Update votes count
function upvote() {
    document.getElementById("upvote").addEventListener('click', function () {
        voteRef.update({ votes: increment 
        });
    });
}
upvote();

function downvote() {
    document.getElementById("downvote").addEventListener('click', function () {
        voteRef.update({ votes: decrement 
        });
    });
}
downvote();

function readVote() {
    db.collection("Forum").doc("Post")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().votes); //spelled EXACTLY as the firestore
            document.getElementById("votecount").innerText = snap.data().votes;
        })
}
readVote();