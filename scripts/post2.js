const increment2 = firebase.firestore.FieldValue.increment(1);
const decrement2 = firebase.firestore.FieldValue.increment(-1);

// Document reference
const voteRef2 = db.collection('Forum').doc('Post 2');

// Update votes count
function upvote() {
    document.getElementById("upvote2").addEventListener('click', function () {
        voteRef2.update({ Votes: increment2 
        });
    });
}
upvote();

function downvote() {
    document.getElementById("downvote2").addEventListener('click', function () {
        voteRef2.update({ Votes: decrement2 
        });
    });
}
downvote();

function readAuthor2() {
  db.collection("users").doc("nHUwKdoEGwdod89TheOiOaRkmQe2")
      .onSnapshot(function (snap) {
          console.log(snap.data()); //print the document fields of "01"
          console.log(snap.data().name); //spelled EXACTLY as the firestore
          document.getElementById("author2").innerText = snap.data().name;
      })
}
readAuthor2();

function toggleComment() {
  var x = document.getElementById("commentarea");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function readVote1() {
    db.collection("Forum").doc("Post 2")
        .onSnapshot(function (snap) {
            console.log(snap.data()); //print the document fields of "01"
            console.log(snap.data().Votes); //spelled EXACTLY as the firestore
            document.getElementById("votecount2").innerText = snap.data().Votes;
        })
}
readVote1();

function userPost() {
  document.getElementById("submitpostbtn").addEventListener('click', function () {
    firebase.auth().onAuthStateChanged(function (user) {
      var comments = $("#comments2").val();
      var votes = 0;
      var name = user.displayName;
      console.log(comments);
      console.log(votes);
      console.log(name);

      //adds comment to database
      db.collection('Forum').doc('Post 2').collection('Comments')
        .add({
          "comments": comments,
          "votes": votes,
          "name": name
        })
      
      //clears textfield after submission
      $('textarea[type="text"]').val('');
      
    });
  })
}
userPost();


function getComment() {
    db.collection('Forum').doc('Post 2').collection('Comments')
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data());
                var comment = doc.data().comments;
                var vote = doc.data().votes;
                var name = doc.data().name;
                var d1 = $("#comment-here").append(
                    "<div id='comment'>"
                    +   "<div class='card text-center'>"
                    +       "<div class='card-header' id='posthead'>"
                    +           "<h5 id='postheader'>" + name + "</h5>"
                    +           "<div id='buttonvote-div'>"
                    +               "<button type='button' class='btn btn-danger' id='downvote'><i class='far fa-thumbs-down'></i></button>"
                    +               "<p id='votecount'>" + vote + "</p>"
                    +               "<button type='button' class='btn btn-success' id='upvote'><i class='far fa-thumbs-up'></i></button>"
                    +           "</div>"
                    +       "</div>"
                    +       "<div class='card-body'>"
                    +           "<p id='comments2'>" + comment + "</p>"
                    +       "</div>"
                    +   "</div>"
                    +"</div>"
                );
      })
  })
}
getComment();

