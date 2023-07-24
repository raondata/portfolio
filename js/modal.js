function openPopup(url) {
    var overlay = document.getElementById("overlay");
    var videoPopup = document.getElementById("video-popup");
    var videoIframe = document.getElementById("video-iframe");
    videoIframe.src = url
    overlay.style.display = "block";
    videoPopup.style.display = "block";
  }
  
  function closePopup() {
    var overlay = document.getElementById("overlay");
    var videoPopup = document.getElementById("video-popup");
    var videoIframe = document.getElementById("video-iframe");
    videoIframe.src = "";
    overlay.style.display = "none";
    videoPopup.style.display = "none";
  }
  
  // if press esc key -> close popup window
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closePopup();
    }
  });
  
  // [Intervention] Ignored attempt to cancel a touchstart event with cancelable=false, for example because scrolling is in progress and cannot be interrupted.
  if (window.innerWidth < 768) {
    document.addEventListener("touchstart", function (event) {
      if (event.target.id === "overlay") {
        closePopup();
      }
    });
  }
  