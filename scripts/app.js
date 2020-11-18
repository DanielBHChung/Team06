function readForum() {
    db.collection("forum").doc("01")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().post); //spelled EXACTLY as the firestore
            document.getElementById("abc").innerText = snap.data().post;
        })
}
readForum();
<<<<<<< HEAD
=======

>>>>>>> 124412c3ca5205076761497d2eb23070e3ed644c
