function onButtonClick(that) {
    console.log(that);
    let video = document.querySelector('video');
    document.querySelector('img').style.display = "none";
    video.hidden = false;
    video.muted = false;
    video.volume = 0.2;
    video.play();
    that.style.display = "none";
}

function onVideoEnd() {
    let video = document.querySelector('video');
    video.src = './res/RR.mp4';
    video.muted = false;
    video.volume = 0.2;
    video.play();
}
