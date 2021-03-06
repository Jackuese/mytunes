// SongQueue.js - Defines a backbone model class for the song queue.
window.MyTunes = window.MyTunes || {};
window.MyTunes.Collections = window.MyTunes.Collections || {};

MyTunes.Collections.SongQueue = MyTunes.Collections.Songs.extend({

  initialize: function(){
    this.on('add', this.enqueue, this);
    this.on('dequeue', this.dequeue, this);
    this.on('ended', this.playNext, this);
  },

  enqueue: function(){
    if (this.length === 1){
      this.playFirst();
    }
  },

  dequeue: function(song){
    this.remove(song);

  },
  playFirst: function(){
    this.at(0).play();
  },

  playNext: function(){
   this.shift();
   if (this.length > 0){
      this.playFirst();
    }
  }
});
