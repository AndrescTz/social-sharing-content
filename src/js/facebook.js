import { hideAllSocialBoxes } from "./utils";

class Facebook {
    constructor(){}

    showFacebookBox(){
        hideAllSocialBoxes();        
        document.getElementById('facebook').style.display = 'block';
    }

    share_using_url(event){
        event.preventDefault();
        var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + 
                                         'https://elcomercio.pe', 
                                         'facebook-popup', 
                                         'height=350,width=600');
        if(facebookWindow.focus) { facebookWindow.focus(); }
        return false;
    }
}

export default Facebook;