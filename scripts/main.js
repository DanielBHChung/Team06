function toggleComment() {
  var x = document.getElementById("commentarea");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function userPost() {
  document.getElementById("submitpostbtn").addEventListener('click', function () {
    firebase.auth().onAuthStateChanged(function (user) {
      var comments = $("#comments1").val();
      var votes = 0;
      console.log(comments);

      //adds comment to database
      db.collection("comments")
        .add({
          "comments": comments
        })
      
      //clears textfield after submission
      $('textarea[type="text"]').val('');
      
    });
  })
}
userPost();


function getComment() {
    db.collection("comments")
        .get()
        .then(function(snap) {
            snap.forEach(function(doc) {
                console.log(doc.data());
                var comment = doc.data().comments;
                var vote = doc.data().votes;
                var d1 = $("#comment-here").append(
                    "<div id='comment'>"
                    +   "<div class='card text-center'>"
                    +       "<div class='card-header' id='posthead'>"
                    +           "<h5 id='postheader'>UserName</h5>"
                    +           "<div id='buttonvote-div'>"
                    +               "<button type='button' class='btn btn-success' id='upvote'><i class='far fa-thumbs-up'></i></button>"
                    +               "<p id='votecount'>" + vote + "</p>"
                    +               "<button type='button' class='btn btn-danger' id='downvote'><i class='far fa-thumbs-down'></i></button>"
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

