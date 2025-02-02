class YouTubePlayer {
  constructor() {
    this.currentStream = null;
    this.favorites = [];
    this.history = [];
    this.streams = [
      { 
        name: 'قناة إسلامية', 
        channelId: 'UCexampleChannel', 
        country: 'السعودية', 
        genre: 'دعوة',
        logo: 'islamic-channel.png'
      },
      // Add more streams
    ];
    this.initPlayer();
    this.renderPlaylist();
  }

  initPlayer() {
    const playerContainer = document.getElementById('youtubePlayer');
    playerContainer.innerHTML = `
      <div class="youtube-player container">
        <div class="row">
          <div class="col-md-8">
            <div id="youtube-video-container">
              <!-- YouTube iframe will be loaded here -->
            </div>
            <div class="current-stream-info mt-2">
              <img id="youtube-logo" src="" class="rounded-circle" style="width:50px;">
              <span id="youtube-name"></span>
            </div>
          </div>
        </div>
      </div>
    `;

    // Load YouTube iframe API
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  onYouTubeIframeAPIReady() {
    this.player = new YT.Player('youtube-video-container', {
      height: '390',
      width: '640',
      videoId: '',
      events: {
        'onReady': this.onPlayerReady.bind(this),
        'onStateChange': this.onPlayerStateChange.bind(this)
      }
    });
  }

  play(stream) {
    this.currentStream = stream;
    this.player.loadVideoById(stream.channelId);
    document.getElementById('youtube-logo').src = stream.logo;
    document.getElementById('youtube-name').textContent = stream.name;
    this.history.unshift(stream);
  }

  onPlayerReady(event) {
    event.target.playVideo();
  }

  onPlayerStateChange(event) {
    // Handle player state changes
  }

  renderPlaylist() {
    const playlistContainer = document.getElementById('youtubePlaylist');
    playlistContainer.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <h3>قائمة يوتيوب</h3>
          <div id="youtube-streams" class="list-group">
            ${this.streams.map(stream => `
              <a href="#" class="list-group-item list-group-item-action stream-item" 
                 data-channel-id="${stream.channelId}">
                <img src="${stream.logo}" class="rounded-circle" style="width:50px;">
                ${stream.name} (${stream.country} - ${stream.genre})
              </a>
            `).join('')}
          </div>
        </div>
        <div class="col-md-6">
          <h3>المفضلة</h3>
          <div id="favorite-streams" class="list-group"></div>
        </div>
      </div>
    `;

    document.querySelectorAll('.stream-item').forEach(item => {
      item.addEventListener('click', (e) => {
        const stream = this.streams.find(s => s.channelId === e.currentTarget.dataset.channelId);
        this.play(stream);
      });
    });
  }

  // Bind YouTube API callback
  static init() {
    window.onYouTubeIframeAPIReady = () => {
      const player = new YouTubePlayer();
      player.onYouTubeIframeAPIReady();
    };
  }
}

document.addEventListener('DOMContentLoaded', () => {
  YouTubePlayer.init();
});