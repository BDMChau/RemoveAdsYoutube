(() => {
  setInterval(() => {
    try {
      const adEl = [...document.querySelectorAll(".ad-showing")][0];
      if (adEl) {
        const video = document.querySelector("video");
        if (video) {
          video.volume = 0;
          video.currentTime = (video.duration % 60) * 1000 || 0;
          video.playbackRate = 10;
        }

        const skipBtn = document.querySelector(
          ".videoAdUiSkipButton,.ytp-ad-skip-button"
        );
        skipBtn?.click();
      }

      const sidAd = document.querySelector("ytd-action-companion-ad-renderer");
      const displayAd = document.querySelector(
        "div#root.style-scope.ytd-display-ad-renderer.yt-simple-endpoint"
      );
      const sparklesContainer = document.querySelector(
        "div#sparkles-container.style-scope.ytd-promoted-sparkles-web-renderer"
      );
      const mainContainer = document.querySelector(
        "div#main-container.style-scope.ytd-promoted-video-renderer"
      );
      const feedAd = document.querySelector("ytd-in-feed-ad-layout-renderer");
      const mastheadAd = document.querySelector(
        ".ytd-video-masthead-ad-v3-renderer"
      );
      const sponsors = document.querySelectorAll(
        "div#player-ads.style-scope.ytd-watch-flexy, div#panels.style-scope.ytd-watch-flexy"
      );
      const nonVid = document.querySelector(".ytp-ad-skip-button-modern");

      sidAd?.remove();
      displayAd?.remove();
      sparklesContainer?.remove();
      mainContainer?.remove();
      feedAd?.remove();
      mastheadAd?.remove();
      (sponsors || []).forEach((el) => el.remove());
      nonVid?.click();
    } catch (error) {
      console.log("adBlock-yt-error: ", error);
    }
  }, 50);
})();
