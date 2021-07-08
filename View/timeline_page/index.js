import { MediaPlayer } from "../modules/MediaPlayer.js";
import instanceAd from '../ads/ads.js'

const logOut = document.getElementById('out');
const play1 = document.getElementById('play1');
const mute1 = document.getElementById('mute1');
const play2 = document.getElementById('play2');
const mute2 = document.getElementById('mute2');
const play3 = document.getElementById('play3');
const mute3 = document.getElementById('mute3');
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');

//Notifies the 'renderAd' function when and what video will contain the ad.
const eventListenerHandler = (video, idContainer) => {
    let currentTime = Math.floor(video.currentTime);
    if(currentTime%30===0 && currentTime !== 0){
        instanceAd.renderAd(idContainer, video);
        video.currentTime++;
    }
}

const player1 = new MediaPlayer(video1);
video1.onclick = () => {
    player1.togglePlay();
}
play1.onclick = () => {
    player1.togglePlay();
}
mute1.onclick = () => {
    player1.mute();
}
player1.viewer();
player1.intersector(0.5);

const player2 = new MediaPlayer(video2);
video2.onclick = () => {
    player2.togglePlay();
}
play2.onclick = () => {
    player2.togglePlay();
}
mute2.onclick = () => {
    player2.mute();
}
player2.viewer();
player2.intersector(0.5);

const player3 = new MediaPlayer(video3);
video3.onclick = () => {
    player3.togglePlay();
}
play3.onclick = () => {
    player3.togglePlay();
}
mute3.onclick = () => {
    player3.mute();
}
player3.viewer();
player3.intersector(0.5);

logOut.onclick = () => {
    location.assign('../main/index.html');
}

video1.addEventListener('timeupdate', () => {
    eventListenerHandler(video1, "1");
});


video2.addEventListener('timeupdate', () => {
    eventListenerHandler(video2, "2");
});


video3.addEventListener('timeupdate', () => {
    eventListenerHandler(video3, "3");
});


