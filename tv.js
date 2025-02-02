class TVPlayer {
  constructor() {
    this.currentStream = null;
    this.videoElement = null;
    this.favorites = [];
    this.history = [];
    this.streams = [
      { 
        name: 'قناة المجد القرآنية', 
        url: 'https://example.com/stream1.m3u8', 
        country: 'السعودية', 
        genre: 'قرآن',
        logo: 'majd-tv.png'
      },
      // Add more streams
    ];
    this.initPlayer();
    this.renderPlaylist();
  }

  initPlayer() {
    const playerContainer = document.getElementById('tvPlayer');
    playerContainer.innerHTML = `
      <div class="tv-player container">
        <div class="row">
          <div class="col-md-8">
            <video id="tv-video" controls class="w-100">
              <source id="video-source" src="" type="video/mp4">
            </video>
            <div class="current-stream-info mt-2">
              <img id="tv-logo" src="" class="rounded-circle" style="width:50px;">
              <span id="tv-name"></span>
            </div>
          </div>
        </div>
      </div>
    `;

    this.videoElement = document.getElementById('tv-video');
  }

  play(stream) {
    this.currentStream = stream;
    this.videoElement.src = stream.url;
    document.getElementById('tv-logo').src = stream.logo;
    document.getElementById('tv-name').textContent = stream.name;
    this.videoElement.play();
    this.history.unshift(stream);
  }

  renderPlaylist() {
    const playlistContainer = document.getElementById('tvPlaylist');
    playlistContainer.innerHTML = `
      <div class="row">
        <div class="col-md-6">
          <h3>قائمة التلفزيون</h3>
          <div id="tv-streams" class="list-group">
            ${this.streams.map(stream => `
              <a href="#" class="list-group-item list-group-item-action stream-item" 
                 data-url="${stream.url}">
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
        const stream = this.streams.find(s => s.url === e.currentTarget.dataset.url);
        this.play(stream);
      });
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new TVPlayer();
});