import { hideAllSocialBoxes } from "./utils";

class Pinterest {
    constructor(){}

    showPinterestBox(){
        hideAllSocialBoxes();
        document.getElementById('pinterest').style.display = 'block';
    }
}

export default Pinterest;