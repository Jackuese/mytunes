// SongQueueView.js - Defines a backbone view class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Views = window.MyTunes.Views || {};

MyTunes.Views.SongQueueView = Backbone.View.extend({

  tagName: "table",


  initialize: function(){
    this.render();
    this.on('add', this.render, this);
    this.on('dequeue', this.render, this);
  },



  render: function(song) {
    this.$el.children().detach();
    console.log(this.el);
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song){
        return new MyTunes.Views.SongQueueEntryView({model: song}).render();
      })
    );
  }
});
