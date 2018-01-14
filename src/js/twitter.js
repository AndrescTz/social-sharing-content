import { hideAllSocialBoxes } from "./utils";

class Twitter {
    constructor(){}

    showTwitterBox(){
        hideAllSocialBoxes();
        document.getElementById('twitter').style.display = 'block';
    }
}

export default Twitter;