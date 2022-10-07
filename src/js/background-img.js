   // change background image to match current weather conditions
   export function backgroundImageChange(id) {
    if (id >= 200 && id <= 232) {
        document.body.style.backgroundImage = "url('../public/img/thunderstorm.jpg')";
    } else if (id >= 300 && id <= 321 || id >= 520 && id <= 531) {
        document.body.style.backgroundImage = "url('../public/img/shower-rain.jpg')";
    } else if (id >= 500 && id <= 504) {
        document.body.style.backgroundImage = "url('../public/img/rain.jpg')";
    } else if (id >= 600 && id <= 622 || id == 511) {
        document.body.style.backgroundImage = "url('../public/img/snow.jpg')";
    } else if (id >= 701 && id <= 781) {
        document.body.style.backgroundImage = "url('../public/img/fog.jpg')";
    } else if (id == 800) {
        document.body.style.backgroundImage = "url('../public/img/clear-sky.jpg')";
    } else if (id == 801) {
        document.body.style.backgroundImage = "url('../public/img/few-clouds.jpg')";
    } else if (id == 802) {
        document.body.style.backgroundImage = "url('../public/img/scattered-clouds.jpg')";
    } else {
        document.body.style.backgroundImage = "url('../public/img/broken-clouds.jpg')";
    }
}