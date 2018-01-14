import { hideAllSocialBoxes } from "./utils";
import Facebook from './facebook';
import Pinterest from './pinterest';
import Twitter from './twitter';

export function initApp() {
    initElements();
}

function initElements() {
    const fb = new Facebook();
    const ptst = new Pinterest();
    const twt = new Twitter();

    hideAllSocialBoxes();
    document.getElementById("btnFacebook").addEventListener("click", fb.showFacebookBox, false);
    document.getElementById("btnPinterest").addEventListener("click", ptst.showPinterestBox, false);
    document.getElementById("btnTwitter").addEventListener("click", twt.showTwitterBox, false);

    document.getElementById("share_fb").addEventListener("click", fb.share, false);
}
