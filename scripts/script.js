new Vue({
  el: "#app",
  data() {
    return {
      currentTrack: {
        name: "Listen on Spotify",
        artist: "Nameless Listener",
        cover: "./img/artist.jpeg",
        url: "https://open.spotify.com/artist/2kLN8zqbgDTZdkQPZEumI3",
        favorited: false
      },
      currentTrackIndex: 0,
      isTimerPlaying: false,
      barWidth: "0%",
      duration: "--:--",
      currentTime: "00:00"
    };
  },
  methods: {
    play() {
      window.open(this.currentTrack.url, '_blank');
    },
    favorite() {
      this.currentTrack.favorited = !this.currentTrack.favorited;
    },
    prevTrack() {
      this.currentTrackIndex = 0;
    },
    nextTrack() {
      this.currentTrackIndex = 0;
    }
  },
  created() {
    // Artist info loaded - playback via Spotify
  }
});
