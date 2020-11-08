function readForum(){
    db.collection("forum").doc("01")
    .onSnapshot(function(snap){
        console.log(snap.data());   //print the document fields of "01"
        console.log(snap.data().post);     //spelled EXACTLY as the firestore
        document.getElementById("abc").innerText = snap.data().post;
    })
}
readForum();

function readForum(){
    db.collection("forum").doc("01")
    .onSnapshot(function(snap){
        console.log(snap.data());   //print the document fields of "01"
        console.log(snap.data().post2);     //spelled EXACTLY as the firestore
        document.getElementById("def").innerText = snap.data().post2;
    })
}
readForum();
