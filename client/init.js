Meteor.startup(function() {
  Uploader.finished = function(index, fileInfo, body) {
    Session.set("image_path", fileInfo.path);
  }
})