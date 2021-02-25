function onButtonClick(that) {
    console.log(that);
    let video = document.querySelector('video');
    video.hidden = false;
    video.muted = false;
    video.volume = 0.2;
    video.play();
    that.hidden = true;
}

function onVideoEnd() {
    let video = document.querySelector('video');
    video.src = './res/RR.mp4';
    video.muted = false;
    video.volume = 0.2;
    video.play();
}