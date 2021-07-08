class Ad {
    constructor(title, url, urlImage) {
        this.title = title;
        this.url = url;
        this.urlImage = urlImage;
    }
}

const iPhone = new Ad("iPhone","https://www.apple.com/co/iphone/", "https://d500.epimg.net/cincodias/imagenes/2020/09/28/smartphones/1601280785_078185_1601281104_sumario_normal_recorte1.jpg" );
const Huawei = new Ad("Huawei", "https://consumer.huawei.com/co/", "https://consumer-img.huawei.com/content/dam/huawei-cbg-site/common/mkt/pdp/pc/matebook-13-v2/img/design1/Huawei-matebook-13.jpg");
const Facebook = new Ad("Facebook", "https://es-la.facebook.com/", "https://image.flaticon.com/icons/png/512/20/20673.png");

const adList = [iPhone, Huawei, Facebook];

class AdController {
    constructor(ads) {
        this.ads = [...ads];
    }

    adReinitialiser = () => {
        this.ads = [...adList]; 
    }
    
    sendAd = () => {
        if(this.ads.length === 0){
            this.adReinitialiser();
        }
        let ad = this.ads[0];
        this.ads.shift();
        return ad;
    }

    renderAd = (idContainer, video) => {
        video.pause();
        let adContainer = document.getElementById(idContainer);
        let actualAd = this.sendAd();
        adContainer.innerHTML = `<h1 style=
        "position: relative;
        background-color: black;
        color: white;
        top: 0%;
        font-size: 10%
        width: 100%;
        height: 10%;
        ">${actualAd.title}</h1>
        <img id="imgAd" src="${actualAd.urlImage}" style=
        "position: absolute;
        width: 100%;
        top: 10%;
        height: 85%;
        z-index: 3;
        "/>`;
        let imgAd = document.getElementById('imgAd');
        imgAd.onclick = () => window.open(actualAd.url); 
       
        setTimeout(()=>{
            adContainer.innerHTML = "";
            video.play();
        },5000)
    }
}

const instanceAd = new AdController(adList);
export default instanceAd;