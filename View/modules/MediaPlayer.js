export class MediaPlayer {
    pausedState = 0;
    constructor(player) {
        this.player = player;

    }
    togglePlay() {
        if (this.player.paused) {
            this.player.play();
            this.pausedState = 1;
        } else {
            this.player.pause();
            this.pausedState = 0;
        }
    }
    mute() {
        if (this.player.muted) {
            this.player.muted = false;
            this.pausedState = 1;

        } else {
            this.player.muted = true;
            this.pausedState = 1;
        }
    }
    viewer() {
        const visibilityHandler = () => {
            if(document.visibilityState != 'visible'){
                this.player.pause();
            }
        }
        document.addEventListener('visibilitychange', visibilityHandler);
    }    
    intersector(threshold) {
        const callbackObserver = (entries) => {
            if(entries[0].intersectionRatio < threshold){
                this.player.pause();
                this.pausedState = 0;
            }
        }
        const observer = new IntersectionObserver(callbackObserver, {threshold: threshold});
        observer.observe(this.player);
    }

}


