import * as Shared from './js/shared';
import Facebook from './js/facebook';
import Pinterest from './js/pinterest';
import Twitter from './js/twitter';

Shared.hideAllSocialBoxes(document.getElementsByClassName('social-box'));

/* this will come from shared
initFacebook();
initTwitter();
initPinterest();
*/

function callFacebook(){
    Shared.hideAllSocialBoxes(document.getElementsByClassName('social-box'));
    const fbkClass = new Facebook;
    fbkClass.showFacebookBox();
};
document.getElementById ("btnFacebook").addEventListener("click", callFacebook, false);

function callPinterest(){
    Shared.hideAllSocialBoxes(document.getElementsByClassName('social-box'));
    const pstClass = new Pinterest;
    pstClass.showPinterestBox();
};
document.getElementById ("btnPinterest").addEventListener("click", callPinterest, false);

function callTwitter(){
    Shared.hideAllSocialBoxes(document.getElementsByClassName('social-box'));
    const twtClass = new Twitter;
    twtClass.showTwitterBox();
};
document.getElementById ("btnTwitter").addEventListener("click", callTwitter, false);

