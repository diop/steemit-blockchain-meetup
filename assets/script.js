console.log('Javascript Sanity Check!!!')
function postArticle() {
  steem.broadcast.comment(
    document.getElementById('postingKey'.value, // posting wif
    '', // author, leave blank for new post
    'steemtest', // first tag
    document.getElementById('username').value, // username
    'name-of-test-post', // permalink
    document.getElementById('title').value, // title
    document.getElementById('article').value, // Body of Posting
    // Json metadata (additional tags, app name )
    { tag: ['secondtag'], app: 'steemtest'},
    function (err, result) {
      err ? alert('Failure', + err) : alert('Success!')
    }
    )
  )
}
