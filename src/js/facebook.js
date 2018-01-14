import { hideAllSocialBoxes } from "./utils";

class Facebook {
    constructor(){}

    showFacebookBox(){
        hideAllSocialBoxes();        
        document.getElementById('facebook').style.display = 'block';
    }

    share(event){
        event.preventDefault();
        var facebookWindow = window.open('https://www.facebook.com/sharer/sharer.php?u=' + document.URL, 'facebook-popup', 'height=350,width=600');
        if(facebookWindow.focus) { facebookWindow.focus(); }
        return false;
    }
}

export default Facebook;