function postComment() {
  let commenter = document.getElementById('commenterName').value;
  let comment = document.getElementById('commentText').value;
 
 
   let commentTemplate = document.getElementById('comment-template').innerHTML;
 
 
  let commentsDiv = document.getElementById('comments');
  
  let templateHTML = templateFn({ comment: comment, commenter: commenter });
 
  
  commentsDiv.innerHTML += templateHTML;
}
  
  
  
    function createPost(){

    let title = document.getElementById('title').value;
  let post = document.getElementById('post').value;
      let author = document.getElementById('author').value;
  }
  
  