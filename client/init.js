Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, body) {
    Session.set("poster_url", fileInfo.url);
  }
})