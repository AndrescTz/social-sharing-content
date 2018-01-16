import { hideAllSocialBoxes } from "./utils";

class Twitter {
    constructor(){}

    showTwitterBox(){
        hideAllSocialBoxes();
        document.getElementById('twitter').style.display = 'block';
    }

    share_using_url(event){
        var twitterWindow = window.open('https://twitter.com/share?url=' +
                                        'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2018/01/15/5a5cc16b2f7ef.jpeg', 'twitter-popup', 'height=350,width=600');
        if(twitterWindow.focus) { twitterWindow.focus(); }
            return false;
    }
}

export default Twitter;