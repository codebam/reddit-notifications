var inbox = [];
window.setInterval(function() {
    var reddit = $.ajax({
    url: "ajax.json",
    context: document.body,
    success: function(){
      $(this).addClass("done");
    }
});
    console.log(inbox)
}, 5000);
