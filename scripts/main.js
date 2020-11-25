function toggleComment() {
    var x = document.getElementById("commentarea");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  function userPost(){
    document.getElementById("submitpostbtn").addEventListener('click', function () {
        var comments = $("#comments1").val();
        console.log(comments);
        $("#comments2").html(comments);

        //
        db.collection("comments")
        .add({
            "comments": comments
        })

    });
}
userPost();