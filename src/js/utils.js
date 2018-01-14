export function hideAllSocialBoxes () {
    let socialBoxes = document.getElementsByClassName('social-box');
    socialBoxes = socialBoxes.length ? socialBoxes : [socialBoxes];
    for (let index = 0; index < socialBoxes.length; index++) {
        socialBoxes[index].style.display = 'none';
    }
}