import { hideAllSocialBoxes } from "./utils";

class Pinterest {
    constructor(){}

    showPinterestBox(){
        hideAllSocialBoxes();
        document.getElementById('pinterest').style.display = 'block';
    }

    share_using_url(event){
        var pinterestWindow = window.open('http://pinterest.com/pin/create/button/?url=' + 
                                        'https://img.elcomercio.pe/files/ec_article_multimedia_gallery/uploads/2018/01/15/5a5cc16b2f7ef.jpeg', 'pinterest-popup', 'height=550,width=600');
        if(pinterestWindow.focus) { pinterestWindow.focus(); }
            return false;
    }
}

export default Pinterest;