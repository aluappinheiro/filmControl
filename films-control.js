Films = new Mongo.Collection("films");
 
if (Meteor.isClient) {
  Template.body.helpers({
    films: function () {
      return Films.find({});
    }
  });
 
  Template.body.events({
    "submit .new-film": function (event) {
      console.log("Pã!");

      event.preventDefault();

      var title = event.target.title.value;
      var synopsis = event.target.synopsis.value;
      var image_path = Session.get("image_path");
      var url_trailer = event.target.url_trailer.value;
      var genre = event.target.genre.value;
      var year = event.target.year.value;
      var length = event.target.length.value;
      var country = event.target.country.value;
      var distributor = event.target.distributor.value;
      var director = event.target.director.value;
      var writer = event.target.writer.value;
      var soundtrack = event.target.soundtrack.value;
      var editor = event.target.editor.value;

      Films.insert({
        title: title,
        synopsis: synopsis,
        posterpath: image_path,
        url_trailer: url_trailer;
        genre: genre;
        year: year;
        length: length;
        country: country;
        distributor: distributor;
        director: director;
        writer: writer;
        soundtrack: soundtrack;
        editor: editor;
        createdAt: new Date()
      });
 
      event.target.reset();
    }
  });
 
  Template.film.events({
    "click .toggle-checked": function () {
      Films.update(this._id, {
        $set: {checked: ! this.checked}
      });
    },
    "click .delete": function () {
      Films.remove(this._id);
    }
  });
}
